<script>
export default {
  props: {
    meta: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <gl-dropdown-item class="lunr-result" v-on="$listeners">
    <nuxt-link :to="meta.route" role="menuitem">
      {{ meta.title }}
    </nuxt-link>
  </gl-dropdown-item>
</template>
