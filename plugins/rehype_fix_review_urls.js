const visit = require('unist-util-visit');

function fixUrl(node, prop) {
  const newUrl = new URL(process.env.REVIEW_APP_ROOT);
  newUrl.pathname += node.properties[prop];
  // eslint-disable-next-line no-console
  console.log(`${node.properties[prop]} => ${newUrl.toString()}`);
  node.properties[prop] = newUrl.toString();
}

module.exports = function transform() {
  return function transformer(tree) {
    if (process.env.REVIEW_APP_ROOT) {
      const prop = 'src';
      visit(tree, { tagName: 'img' }, (node) => {
        const src = node?.properties?.[prop];
        if (src?.startsWith('/')) {
          fixUrl(node, prop);
        }
      });
    }
  };
};
