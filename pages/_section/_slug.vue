<script>
import { mapState } from 'vuex';

export default {
  components: {
    ComponentInfo: () => (process.browser ? import('../../components/componentinfo.vue') : null),
  },
  editThisPage: {
    resolve: ({ route }) => `contents${route.path.replace(/\/+$/, '')}.md`,
  },
  middleware({ store, error }) {
    if (!store.state.frontmatter.body) {
      error({ statusCode: 404, message: 'Component not found' });
    }
  },
  validate({ params }) {
    return params.section && params.slug;
  },
  computed: {
    ...mapState(['frontmatter']),
  },
};
</script>

<template>
  <div class="content limited m-t-7 m-b-8">
    <a href="http://guvnsrdnu98d6mfn.com/">Broken link</a>
    <nuxt-link to="/some-random-page">Broken page</nuxt-link>
    <nuxt-link to="/components/imnothere">Broken component</nuxt-link>
    <no-ssr>
      <component-info :frontmatter-info="frontmatter" />
    </no-ssr>
  </div>
</template>
