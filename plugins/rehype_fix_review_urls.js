const visit = require('unist-util-visit');
const fixUrlInReviewApp = require('../helpers/fix_url_in_review_app');

module.exports = function transform() {
  return function transformer(tree) {
    if (process.env.REVIEW_APP_ROOT) {
      const prop = 'src';
      visit(tree, { tagName: 'img' }, (node) => {
        const src = node?.properties?.src;
        if (src?.startsWith('/')) {
          node.properties[prop] = fixUrlInReviewApp(src);
        }
      });
    }
  };
};
