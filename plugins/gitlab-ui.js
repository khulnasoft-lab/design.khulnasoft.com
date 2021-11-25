import * as gitlabComponents from '@gitlab/ui';
import * as gitlabCharts from '@gitlab/ui/dist/charts';

import GlExampleDisplay from '@gitlab/ui/documentation/components/example_display.vue';
import GlExampleExplorer from '@gitlab/ui/documentation/components/example_explorer.vue';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import StoryViewer from '../components/story_viewer.vue';

Vue.use(BootstrapVue);
Vue.use(gitlabComponents.GlToast); // The toast plugin needs to be registered before being used

Object.entries({
  ...gitlabComponents,
  ...gitlabCharts,
  GlExampleExplorer,
  GlExampleDisplay,
  StoryViewer,
})
  .filter(([componentName]) => !componentName.includes('Directive'))
  .forEach(([componentName, component]) => Vue.component(componentName, component));

// eslint-disable-next-line import/no-default-export
export default (_ctx, inject) => {
  inject('gitlabUiUrl', process.env.GITLAB_UI_URL);
};
