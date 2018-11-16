<template>
  <div class="content limited m-t-7 m-b-7">
    <h1>{{ componentAttributes.name }}</h1>
    <b-tabs class="pt-3">
      <b-tab
        title="Design"
        active
        class="pt-3"
      >
        <md-display :md="componentBody" />
      </b-tab>
      <b-tab
        title="Vue Component"
        class="pt-3"
      >
        <template v-for="vueComponentName in vueComponents">
          <h2
            :key="`hl-${vueComponentName}`"
            class="mb-3"
          >Vue Component - {{ vueComponentName }}</h2>
          <gl-example-explorer
            :key="`examples-${vueComponentName}`"
            :component-name="vueComponentName"
          />
          <md-display
            :key="`description-${vueComponentName}`"
            :md="vueComponentDocumentations[vueComponentName]"
            class="mt-3"
          />
          <div
            :key="`props-${vueComponentName}`"
            class="component md mt-3"
          >
            <h2>Component Properties</h2>
            <gl-component-documentation
              :key="`docs-${vueComponentName}`"
              :component-name="vueComponentName"
              class="mt-3 component-documentation"
            />
          </div>
        </template>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import * as Documentation from '@gitlab-org/gitlab-ui'

import mdDisplay from './md_display.vue'

export default {
  frontmatterInfo: null,
  components: {
    'md-display': mdDisplay,
  },
  data() {
    const { frontmatterInfo } = this.$options
    const { attributes, body } = frontmatterInfo
    const { vueComponents } = attributes

    const vueComponentDocumentations = {}

    vueComponents.forEach(vueComponentName => {
      Object.keys(Documentation).forEach(component => {
        if (component.indexOf(vueComponentName) > -1) {
          vueComponentDocumentations[vueComponentName] = Documentation[component].description
        }
      })
    })

    return {
      componentName: this.$route.params.componentinfo,
      componentAttributes: attributes,
      componentBody: body,
      vueComponents,
      vueComponentDocumentations,
    }
  },
}
</script>
