import Vue from 'vue';
import * as gitlabComponents from '@gitlab-org/gitlab-ui';
import * as gitlabDocComponents from '@gitlab-org/gitlab-ui/docs';

Object.keys(gitlabComponents).forEach(plugin => {
  if (plugin.indexOf('Directive') === -1) {
    Vue.component(plugin, gitlabComponents[plugin]);
  }
});

Object.keys(gitlabDocComponents).forEach(plugin => {
  Vue.component(`gl-docs-${plugin.toLowerCase()}`, gitlabDocComponents[plugin]);
});
