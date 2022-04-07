<script>
import { GlIcon } from '@gitlab/ui';
import packageJson from '../package.json';

const ADMONITION_TODO = 'todo';
const {
  bugs: { url: issuesUrl },
} = packageJson;

export default {
  components: {
    GlIcon,
  },
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ['note', 'tip', ADMONITION_TODO, 'warning'].includes(value),
    },
  },
  computed: {
    isTodo() {
      return this.type === ADMONITION_TODO;
    },
    typeCapitalized() {
      return this.type.charAt(0).toUpperCase() + this.type.substring(1);
    },
    newIssueUrl() {
      const { $route } = this;
      const title = this.$scopedSlots.default()[0].text
      return `${issuesUrl}/new?issue[title]=${title}%20for%20${$route.params.slug}&issue[description]=/label%20~%22component%3A${$route.params.slug}%22`;
    },
  },
};
</script>

<template>
  <span
    class="admonition gl-rounded-base app-styles gl-rounded-base gl-flex-wrap gl-mb-5"
    :class="`admonition--${type}`"
  >
    <template v-if="isTodo">
      <div class="gl-display-flex gl-align-items-center">
        <gl-icon  name="document" :size="16" class="gl-mr-3 gl-text-gray-500" />
        <span class="gl-mr-2 admonition-type">{{ typeCapitalized }}: </span>
      </div>
      <span class="gl-mr-auto">
        <slot></slot>
      </span>
      <a  class="gl-link" :href="newIssueUrl">Create an issue</a>
    </template>
    <template v-else>
        <span class="admonition-type">{{ typeCapitalized }}: </span>
        <slot></slot>
    </template>
  </span>
</template>
