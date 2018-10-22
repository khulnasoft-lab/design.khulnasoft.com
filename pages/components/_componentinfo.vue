<template>
  <div class="content limited m-t-7 m-b-7">
    <div v-if="componentAttributes">
      <h1>{{ componentAttributes.name }}</h1>
      <b-tabs pills>
        <b-tab title="Design" active>
          <md-display :md="componentBody" />
        </b-tab>
        <b-tab title="Vue Component" >
          <h2>{{ vueComponentName }}</h2>
          <gl-docs-exampleexplorer :component-name="vueComponentName" />
          <md-display :md="vueComponentDocumentation" />
          <gl-docs-componentdocumentation :component-name="vueComponentName" />
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

import mdDisplay from '../../components/md_display';

export default {
  components: {
    mdDisplay,
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

          let snakeName = this.vueComponentName.replace(/([A-Z])/g, function($1) {
            return '_' + $1.toLowerCase();
          });
          if (snakeName.indexOf('_') === 0) snakeName = snakeName.substr(1);
          snakeName = snakeName.replace(/gl_/, '');

          this.$axios.$get(`/gl-ui-docs/${snakeName}.md`).then(contents => {
            this.vueComponentDocumentation = contents;
          });
        }
      });
  },
};
</script>
