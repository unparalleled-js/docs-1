const {resolve} = require('path');
const {repository} = require('../../package.json');

const IMAGES_ALIAS = '@img';
const IMAGES_DIR = resolve(__dirname, '../../assets/images');

module.exports = {
  title: 'Workato Docs',
  dest: resolve(__dirname, '../../dist'),
  base: '/',
  plugins: [
    ['check-md', {
      exitLevel: 'none'
    }],
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content :not(a) > img:not([data-no-zoom])'
    }],
    // By default `$page.headers` array contains only `h2` and `h3` headers.
    // This plugin allows to extract more header types to be able to list them in the custom `sidebarHeaders`
    // frontmatter property.
    // It doesn't affect default behavior for sidebar links component which still shows only `h2` and `h3` headers.
    [require('./plugins/extract-headers'), {
      headers: ['h1', 'h2', 'h3']
    }]
  ],
  extraWatchFiles: [
    require.resolve('./sidebar')
  ],
  themeConfig: {
    sidebar: require('./sidebar'),
    smoothScroll: true,
    searchPlaceholder: 'Type to search Workato docs',
    searchMaxSuggestions: 10,
    // Is used to generate URL for "Edit this page" link
    repo: repository,
  },
  head: [
    ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '/css/vendor.css'}]
  ],
  markdown: {
    // Searches for URLs in plain text and converts them to links
    linkify: true,
    extendMarkdown: md => {
      md.use(require('./plugins/markdown-it-image-size'), {
        imagesDir: IMAGES_DIR,
        imagesAlias: IMAGES_ALIAS
      })
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        [IMAGES_ALIAS]: IMAGES_DIR
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          transformAssetUrls: {
            // Processing `src` attribute of `DocImage` component through asset pipeline
            DocImage: 'src',
            // Default values: https://vue-loader.vuejs.org/options.html#transformasseturls
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: ['xlink:href', 'href'],
            use: ['xlink:href', 'href'],
          }
        };
      });
  }
};
