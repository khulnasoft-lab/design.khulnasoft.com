<script>
import { GlIcon } from '../helpers/gitlab_ui';
import packageJson from '../package.json';

const {
  bugs: { url: issuesUrl },
} = packageJson;

export default {
  components: {
    GlIcon,
  },
  props: {
    issue: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    newIssueUrl() {
      const { $route } = this;
      const title = this.$scopedSlots.default()[0].text;
      return `${issuesUrl}/new?issue[title]=${title}%20for%20${$route.params.slug}&issue[description]=/label%20~%22component%3A${$route.params.slug}%22`;
    },
  },
};
</script>

<template>
  <span class="app-styles admonition admonition--todo gl-mb-5 gl-flex-wrap gl-rounded-base">
    <div class="gl-flex gl-items-center">
      <gl-icon name="document" :size="16" class="gl-mr-3 gl-text-gray-500" />
      <span class="admonition-type gl-mr-2">TODO: </span>
    </div>
    <span class="gl-mr-auto">
      <slot></slot>
    </span>
    <a v-if="issue" class="gl-link" :href="issue">View issue</a>
    <a v-else class="gl-link" :href="newIssueUrl">Create an issue</a>
  </span>
</template>
