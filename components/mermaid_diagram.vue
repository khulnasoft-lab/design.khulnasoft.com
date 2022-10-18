<script>
import mermaid from 'mermaid';

export default {
  data() {
    return {
      diagramInitialized: false,
    };
  },
  mounted() {
    mermaid.init(undefined, this.$el);
    this.diagramInitialized = true;
  },
};
</script>

<template>
  <div :class="{ 'gl-opacity-0': !diagramInitialized }">
    <slot></slot>
  </div>
</template>
