<script>
import { GlAlert } from '@gitlab/ui';

export default {
  components: {
    GlAlert,
  },
  methods: {
    accept() {
      return '';
    },
  },
};
</script>

<template>
  <div
    class="app-styles gl-fixed gl-left-0 gl-bottom-0 gl-w-full gl-border-1 gl-border-t-solid gl-border-gray-100 gl-z-index-9999"
  >
    <gl-alert>Can GitLab use cookies for analytics?</gl-alert>
  </div>
</template>
