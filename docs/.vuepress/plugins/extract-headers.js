const {extractHeaders} = require('@vuepress/shared-utils');

module.exports = (options, ctx) => {
  return {
    name: 'extract-headers-plugin',
    extendPageData($page) {
      if ($page._strippedContent) {
        $page.headers = extractHeaders(
          $page._strippedContent,
          options.headers,
          ctx.markdown
        );
      }
    }
  };
};
