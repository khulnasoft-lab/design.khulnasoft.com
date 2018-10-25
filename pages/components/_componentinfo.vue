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
          <md-display :md="componentBody" />
        </b-tab>
        <b-tab 
          title="Vue Component" 
          class="pt-3"
        >
          <h2 class="mb-3">Vue Component - {{ vueComponentName }}</h2>
          <gl-docs-exampleexplorer :component-name="vueComponentName" />
          <md-display 
            :md="vueComponentDocumentation" 
            class="mt-3"
          />
          <div class="component md mt-3">
            <h2>Component Properties</h2>
            <gl-docs-componentdocumentation 
              :component-name="vueComponentName" 
              class="mt-3"
            />
          </div>
        </b-tab>
      </b-tabs>
    </div>
    <div v-else>
      Loading ...
    </div>
  </div>
</template>

<script>
import fm from 'front-matter';

import * as Documentation from '@gitlab-org/gitlab-ui/docs';

import mdDisplay from '../../components/md_display.vue';

export default {
  components: {
    'md-display': mdDisplay,
  },
  data() {
    return {
      componentName: this.$route.params.componentinfo,
      componentAttributes: null,
      componentBody: null,
      vueComponentName: null,
      vueComponentDocumentation: null,
    };
  },
  created() {
    this.$axios
      .$get(`/contents/components/${this.$route.params.componentinfo}.md`)
      .then(contents => {
        const fmResult = fm(contents);
        if (fmResult) {
          this.componentAttributes = fmResult.attributes;

          this.vueComponentName = fmResult.attributes.vueComponent;

          this.componentBody = fmResult.body;

          let snakeName = this.vueComponentName.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`);
          if (snakeName.indexOf('_') === 0) snakeName = snakeName.substr(1);
          snakeName = snakeName.replace(/gl_/, '');

          Object.keys(Document).forEach(component => {
            if (component.indexOf(this.vueComponentName) > -1) {
              this.vueComponentDocumentation = Documentation[component].description;
            }
          });
        }
      })
      .catch(e => {
        // eslint-disable-next-line
        console.error('Error : ', e);
      });
  },
};
</script>
