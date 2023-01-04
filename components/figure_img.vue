<script>
export default {
  inheritAttrs: false,
  props: {
    alt: {
      type: String,
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    altText() {
      return this.alt || this.label;
    },
    style() {
      return this.width ? `max-width:${this.width}px` : '';
    },
  },
};
</script>

<template>
  <figure
    :aria-label="label"
    class="figure"
    role="figure"
  >
    <img
      v-bind="$attrs"
      class="figure-img"
      :src="src"
      :alt="altText"
      role="img"
      :style="style"
    />
    <figcaption class="figure-caption">{{ label }}</figcaption>
  </figure>
</template>
