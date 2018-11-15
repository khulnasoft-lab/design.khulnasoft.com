import Vue from 'vue'
import * as gitlabComponents from '@gitlab-org/gitlab-ui/documentation' // eslint-disable-line
import { GlComponentDocumentation } from '@gitlab-org/gitlab-ui/documentation' // eslint-disable-line

Object.keys(gitlabComponents).forEach(plugin => {
  if (!plugin.includes('Directive')) {
    Vue.component(plugin, gitlabComponents[plugin])
  }
})

Vue.use(GlComponentDocumentation)
