<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      return this.error?.statusCode === 404 ? 'Page not found' : 'An Error occurred';
    },
    stack() {
      return this.error?.stack || null;
    },
  },
};
</script>
<template>
  <div class="index typography">
    <h1 class="text-center">{{ title }}</h1>
    <NuxtLink to="/">Back to a safe haven!</NuxtLink>
    <pre v-if="stack" class="text-left">{{ stack }}</pre>
  </div>
</template>
