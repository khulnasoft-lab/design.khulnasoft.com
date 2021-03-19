<script>
export default {
  components: {
    LunrSearch: () => import('lunr-module/search'),
  },
};
</script>

<template>
  <lunr-search>
    <template #default="{ meta }">
      <nuxt-link :to="meta.route">
        {{ meta.title }}
      </nuxt-link>
    </template>
  </lunr-search>
</template>
