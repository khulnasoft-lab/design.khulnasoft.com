<script>
import StoryIframe from '../../../components/story_iframe.vue';

export const URL_MAPPING = {
  alert: 'alert',
  badge: 'badge',
  banner: 'banner',
  progress: 'spinner',
}; // TODO: complete mapping

export default {
  components: {
    StoryIframe,
  },
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  computed: {
    lookbookComponentName() {
      return URL_MAPPING[this.page.slug];
    },
    lookbookInspectUrl() {
      return `https://gitlab-40159195-main-5zzu3ebmza-ue.a.run.app/lookbook/inspect/pajamas/${this.lookbookComponentName}`;
    },
    lookbookPreviewUrl() {
      return `https://gitlab-40159195-main-5zzu3ebmza-ue.a.run.app/lookbook/preview/pajamas/${this.lookbookComponentName}/default?_display=`;
    },
  },
};
</script>

<template>
  <div class="app-styles gl-pt-0">
    <story-iframe :url="lookbookPreviewUrl" />
    Find more customizable previews and implementation details of the
    <a :href="lookbookInspectUrl">{{ lookbookComponentName }} component</a>
    in our Lookbook.
  </div>
</template>
