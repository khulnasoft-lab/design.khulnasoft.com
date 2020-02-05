<template>
  <div class="content limited m-t-7 m-b-8">
    <ComponentInfo
      :frontmatter-info="fmResult"
    />
  </div>
</template>

<script>
import ComponentInfo from '../../components/componentinfo.vue';

export default {
  components: {
    ComponentInfo,
  },
  editThisPage: {
    resolve: ({ route }) => `contents/components/${route.params.slug}.md`,
  },
  async asyncData({ $axios, route }) {
    try {
      const fmResult = await $axios.$get(`/contents/components/${route.params.slug}.json`);

      return {
        fmResult,
      };
    } catch (error) {
      return {
        error,
      };
    }
  },
};
</script>
