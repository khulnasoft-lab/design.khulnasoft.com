<script>
import { mapState } from 'vuex';

export default {
  components: {
    ComponentInfo: () => (process.browser ? import('../../components/componentinfo.vue') : null),
  },
  editThisPage: {
    resolve: ({ route }) => `contents${route.path.replace(/\/+$/, '')}.md`,
  },
  async asyncData({ $content, route, error }) {
    const path = route.path.replace(/^\/+/, '').replace(/\/(code|contribute)$/, '');

    const page = await $content(path)
      .fetch()
      .catch((e) => {
        error({ statusCode: 404, path, message: `Could not load content`, stack: e.stack });
      });

    return { page };
  },
  computed: {
    ...mapState(['frontmatter']),
  },
};
</script>

<template>
  <div class="content limited m-t-7 m-b-8">
    <no-ssr>
      <component-info :frontmatter-info="frontmatter" :page="page" />
    </no-ssr>
  </div>
</template>
