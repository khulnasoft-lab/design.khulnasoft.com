<script>
import { GlCard, GlIcon, GlLink, GlLoadingIcon } from '@gitlab/ui';
import { iframeResize } from 'iframe-resizer';

export default {
  components: {
    GlCard,
    GlIcon,
    GlLink,
    GlLoadingIcon,
  },
  props: {
    storyName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    viewMode: {
      type: String,
      required: false,
      default: 'story',
      validator: (viewMode) => ['story', 'docs'].includes(viewMode),
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    cardTitle() {
      return this.title || this.storyName;
    },
    storyUrl() {
      const url = new URL(this.$gitlabUiUrl);
      url.searchParams.append('path', `/${this.viewMode}/${this.storyName}`);

      return url.href;
    },
    iFrameUrl() {
      const url = new URL('/iframe.html', this.$gitlabUiUrl);
      url.searchParams.append('id', this.storyName);
      url.searchParams.append('viewMode', this.viewMode);
      url.searchParams.append('isEmbeddedStory', 1);

      return url.href;
    },
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
  <div class="app-styles">
    <gl-card>
      <template #header>
        <div class="row">
          <div class="col">
            <strong>{{ cardTitle }}</strong>
          </div>
          <div class="text-right col">
            <gl-link :href="storyUrl" target="_blank">
              Open in Storybook
              <gl-icon name="external-link" />
            </gl-link>
          </div>
        </div>
      </template>
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
          :src="iFrameUrl"
          class="gl-border-none gl-min-w-full responsive-iframe"
          @load="iFrameLoaded"
        ></iframe>
      </div>
    </gl-card>
  </div>
</template>
