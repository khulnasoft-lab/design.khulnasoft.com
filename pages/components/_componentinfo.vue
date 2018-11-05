<template>
  <div class="content limited m-t-7 m-b-7">
    <div v-if="componentAttributes">
      <h1>{{ componentAttributes.name }}</h1>
      <b-tabs class="pt-3">
        <b-tab 
          title="Design" 
          active 
          class="pt-3"
        >
          <md-display
            v-if="componentBody"
            :md="componentBody"
          />
          <h3 v-else>Description will be added soon</h3>

          <div
            v-if="relatedComponents && relatedComponents.length"
            class="component md mt-3"
          >
            <h2>Related patterns</h2>
            <ul>
              <li 
                v-for="comp in relatedComponents"
                :key="comp"
              >
                <a 
                  :href="`#/components/${comp}`"
                >
                  {{ comp }}
                </a>
              </li>
            </ul>
          </div>
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
                class="mt-3"
              />
            </div>
          </template>
        </b-tab>
      </b-tabs>
    </div>
    <div v-else>
      Loading ...
    </div>
  </div>
</template>

<script>
import * as Documentation from '@gitlab-org/gitlab-ui'

import mdDisplay from '../../components/md_display.vue'

export default {
  components: {
    'md-display': mdDisplay,
  },
  data() {
    return {
      componentName: this.$route.params.componentinfo,
      componentAttributes: null,
      componentBody: null,
      vueComponents: null,
      vueComponentDocumentations: {},
    }
  },
  created() {
    this.$axios
      .$get(`/contents/components/${this.$route.params.componentinfo}.json`)
      .then(fmResult => {
        this.componentAttributes = fmResult.attributes

        this.vueComponents = fmResult.attributes.vueComponents
        this.relatedComponents = fmResult.attributes.related;

        this.componentBody = fmResult.body

        if (this.vueComponents) {
            this.vueComponents.forEach(vueComponentName => {
              let snakeName = vueComponentName.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`)
              if (snakeName.indexOf('_') === 0) snakeName = snakeName.substr(1)
              snakeName = snakeName.replace(/gl_/, '')
    
              Object.keys(Documentation).forEach(component => {
                if (component.indexOf(vueComponentName) > -1) {
                  this.vueComponentDocumentations[vueComponentName] =
                    Documentation[component].description
                }
              })
            })
        }
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e)
      })
  },
}
</script>
