<script>
import { GlLoadingIcon } from '@gitlab/ui';
import { iframeResize } from 'iframe-resizer';

export default {
  components: {
    GlLoadingIcon,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    iFrameStyles() {
      return {
        opacity: this.loaded ? 1 : 0,
      };
    },
  },
  methods: {
    iFrameLoaded({ target }) {
      iframeResize({}, target);
      this.loaded = true;
    },
  },
};
</script>

<template>
  <div class="gl-relative">
    <div
      v-if="!loaded"
      class="gl-display-flex gl-flex-direction-column gl-align-items-center gl-justify-content-center gl-absolute gl-top-0 gl-right-0 gl-bottom-0 gl-left-0"
    >
      <gl-loading-icon size="lg" class="gl-mb-3" />
      Loading story...
    </div>
    <iframe
      :style="iFrameStyles"
      :src="url"
      class="gl-border-none gl-min-w-full responsive-iframe"
      @load="iFrameLoaded"
    ></iframe>
  </div>
</template>
