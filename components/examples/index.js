import { camelCase, upperFirst } from 'lodash';

const context = require.context('.', true, /index\.js$/);
const examples = {};

context.keys().forEach(key => {
  if (key !== './index.js') {
    let componentName = key.replace(/(\.\/|\/index\.js)/g, '');
    componentName = `Gl${upperFirst(camelCase(componentName.replace(/.*\//g, '')))}`;
    examples[componentName] = context(key).default;
  }
});

export default examples;
