/* eslint-disable react/react-in-jsx-scope */

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

// workaround for https://github.com/bootstrap-vue/bootstrap-vue/issues/1201
let originalVueComponent = Vue.component
Vue.component = function(name, definition) {
  if (name === 'bFormCheckboxGroup' || name === 'bCheckboxGroup' ||
      name === 'bCheckGroup' || name === 'bFormRadioGroup') {
    definition.components = {bFormCheckbox: definition.components[0]}
  }
  originalVueComponent.apply(this, [name, definition])
}
Vue.use(BootstrapVue)
Vue.component = originalVueComponent

// import '../node_modules/css-framework/src/base/base-variables.scss';
// import '../node_modules/css-framework/src/button/button-variables.scss';
import '../variables.scss';
// import '../node_modules/bootstrap/scss/bootstrap.scss';

import './welcome';
import './gl_button';

import { storiesOf } from '@storybook/vue';
import markdownStory from './markdown.md';

storiesOf('Some', module)
  .add('markdown', () => ({
    mounted() {
      const codeBlocks = this.$el.querySelectorAll('pre > code');
      codeBlocks.forEach(block => {
        const el = document.createElement('div');
        block.parentNode.parentNode.append(el);
        const vueComponent = new Vue({
          el,
          template: `
            <div>${block.innerText}</div>
          `,
        });
      });
    },
    template: `<div>${markdownStory}</div>`,
  }));

/* eslint-enable react/react-in-jsx-scope */
