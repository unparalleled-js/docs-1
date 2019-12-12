const {join} = require('path');
const sizeOf = require('image-size');

module.exports = imageSizePlugin;

/**
 * This plugin processes all images and replaces them with `<DocImage/>` component.
 *
 * If image `src` starts with `imagesAlias` e.g. `~@img` then it determines image dimensions and passes
 * them to `width` and `height` properties of `DocImage` component.
 */
function imageSizePlugin(md, {imagesDir, imagesAlias}) {
  const imageSrcPrefix = `~${imagesAlias}/`;
  const defaultRenderer = md.renderer.rules.image;

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const srcAttr = token.attrIndex('src');
    const imageSrc = token.attrs[srcAttr][1];

    let dimensions;

    if (imageSrc.startsWith(imageSrcPrefix)) {
      const imageFilePath = join(imagesDir, imageSrc.slice(imageSrcPrefix.length));

      try {
        dimensions = sizeOf(imageFilePath)
      } catch (err) {
        // In this case we just don't provide `width` and `height` properties to `DocImage` component
      }

      if (dimensions) {
        token.attrs.push(['width', dimensions.width], ['height', dimensions.height]);
      }
    }

    token.tag = 'DocImage';

    return defaultRenderer(tokens, idx, options, env, self)
      // Vue expects self-closing tags
      .replace(/\/*>$/, '/>');
  }
}
