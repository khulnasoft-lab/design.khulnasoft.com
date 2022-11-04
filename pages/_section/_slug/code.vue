<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="app-styles">
    <div v-for="story in page.stories" :key="story" class="container">
      <story-viewer :story-name="story" view-mode="docs" />
    </div>
  </div>
</template>
