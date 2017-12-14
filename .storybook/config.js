import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'GitLab',
  url: 'javascript:void(0)',
  showDownPanel: false,
});

function loadStories() {
  require('../stories')
}

configure(loadStories, module)
