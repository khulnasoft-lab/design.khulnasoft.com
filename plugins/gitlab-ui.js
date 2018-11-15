import Vue from 'vue'
import * as gitlabComponents from '@gitlab-org/gitlab-ui/documentation' // eslint-disable-line
import { GlComponentDocumentation } from '@gitlab-org/gitlab-ui/documentation' // eslint-disable-line

Object.keys(gitlabComponents).forEach(plugin => {
  console.log('Register : ' + plugin) // eslint-disable-line
  if (plugin.indexOf('Directive') === -1) {
    Vue.component(plugin, gitlabComponents[plugin])
  }
})

Vue.use(GlComponentDocumentation)
