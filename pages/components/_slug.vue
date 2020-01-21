<template>
  <div class="content limited m-t-7 m-b-8">
    <div v-if="fmResult">
      <component-info
        :frontmatter-info="fmResult"
      />
    </div>
    <div v-else>
      Loading component ...
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ComponentInfo: () => (process.browser ? import('../../components/componentinfo.vue') : null),
  },
  editThisPage: {
    resolve: ({ route }) => `contents/components/${route.params.slug}.md`,
  },
  async asyncData({ params }) {
    const { slug } = params;
    if (!slug) return { fmResult: '' };
    const fmResult = await import(`~/contents/components/${slug}.md`);
    
    return { fmResult }
  },
};
</script>
