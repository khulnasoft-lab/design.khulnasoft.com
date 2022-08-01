<script>
import copyToClipboard from '../../helpers/copy_to_clipboard';
import SvgIcon from './svg_icon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    imageSize: {
      type: Number,
      required: false,
      default: 0,
    },
    sourcePath: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageName() {
      return this.image.replace(/_/g, '_\u200B');
    },
    imagePath() {
      return `dist/${this.image}`;
    },
    sourceLink() {
      const path = `${this.sourcePath}${this.image}`;
      return path.endsWith('.svg') ? path : `${path}.svg`;
    },
    kbSize() {
      return Math.round(this.imageSize / 1024);
    },
  },
  methods: {
    copyImage() {
      this.$emit('imageCopied', copyToClipboard(this.image) ? 1 : -1);
    },
    selectPermalink() {
      this.$emit('permalinkSelected', this.image);
    },
  },
};
</script>

<template>
  <div class="image-wrapper">
    <div class="image-base" @click="copyImage">
      <slot></slot>
      <div class="image-name">
        {{ imageName }}
        <span v-if="imageSize"> ({{ kbSize }}Kb) </span>
      </div>
    </div>
    <div class="image-actions">
      <a title="Copy to clipboard" @click="copyImage">
        <svg-icon icon="copy-to-clipboard" class="image-sm" />
      </a>
      <a title="Permalink" @click="selectPermalink">
        <svg-icon icon="link" class="image-sm" />
      </a>
      <a title="Open source" target="_blank" :href="sourceLink">
        <svg-icon icon="external-link" class="image-sm" />
      </a>
    </div>
  </div>
</template>
