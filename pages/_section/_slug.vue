<script>
import { mapState } from 'vuex';
import * as Accordion from  '../../accordion.mdx';

export default {
  components: {
    ComponentInfo: () => (process.browser ? import('../../components/componentinfo.vue') : null),
    Accordion: Accordion.default,
  },
  editThisPage: {
    resolve: ({ route }) => `contents${route.path.replace(/\/+$/, '')}.md`,
  },
  computed: {
    ...mapState(['frontmatter']),
  },
};
</script>

<template>
  <div class="content limited m-t-7 m-b-8">
    <no-ssr>
      <accordion class="component md typography" />
      <!-- <component-info :frontmatter-info="frontmatter" /> -->
    </no-ssr>
  </div>
</template>
