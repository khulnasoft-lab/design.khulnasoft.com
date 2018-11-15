import Vue from 'vue'
import * as gitlabComponents from '@gitlab-org/gitlab-ui/documentation' // eslint-disable-line
import { GlComponentDocumentation } from '@gitlab-org/gitlab-ui/documentation' // eslint-disable-line

Object.entries(gitlabComponents)
  .filter(([componentName]) => !componentName.includes('Directive'))
  .forEach(([componentName, component]) =>
    Vue.component(componentName, component)
  )

Vue.use(GlComponentDocumentation)
