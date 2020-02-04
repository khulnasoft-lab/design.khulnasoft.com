import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as gitlabComponents from '@gitlab/ui';
import * as gitlabCharts from '@gitlab/ui/dist/charts';

import GlExampleExplorer from '@gitlab/ui/documentation/components/example_explorer.vue';
import GlExampleDisplay from '@gitlab/ui/documentation/components/example_display.vue';
import GlComponentDocumentation from '@gitlab/ui/documentation/components/component_documentation_generator.vue';
import ComponentDocumentations from '@gitlab/ui/documentation/components_documentation';

Vue.use(BootstrapVue);
Vue.use(gitlabComponents.GlToast); // The toast plugin needs to be registered before being used

Object.entries({ ...gitlabComponents, ...gitlabCharts, GlExampleExplorer, GlExampleDisplay, GlComponentDocumentation })
  .filter(([componentName]) => !componentName.includes('Directive'))
  .forEach(([componentName, component]) => Vue.component(componentName, component));

  global.ComponentDocumentations = ComponentDocumentations
