import Vue from 'vue';
import { ComponentInfo } from '@gitlab-org/gitlab-ui';
import * as gitlabComponents from '@gitlab-org/gitlab-ui';
import * as gitlabDocComponents from '@gitlab-org/gitlab-ui/docs';
//console.log('COMP ', gitlabComponents);

console.log('GLOBAL REG : ', gitlabComponents, Vue.options.components);

// Vue.component('gl-componentinfo', gitlabComponents.ComponentInfo);

for (let plugin in gitlabComponents) {
  if (plugin.indexOf('Directive') === -1) {
    Vue.component(plugin, gitlabComponents[plugin]);
  }
}

for (let plugin in gitlabDocComponents) {
  Vue.component(`gl-docs-${plugin.toLowerCase()}`, gitlabDocComponents[plugin]);
}
