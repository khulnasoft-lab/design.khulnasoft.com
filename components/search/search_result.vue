<script>
import { GlDropdownItem } from '@gitlab/ui';

export default {
  components: {
    GlDropdownItem,
  },
  props: {
    meta: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <gl-dropdown-item :to="meta.route" v-on="$listeners">
    {{ meta.title }}
  </gl-dropdown-item>
</template>
