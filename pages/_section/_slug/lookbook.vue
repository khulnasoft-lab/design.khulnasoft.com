<script>
const NAME_MAPPING = {
  alert: 'alert',
  // avatar: 'avatar',
  badge: 'badge',
  banner: 'banner',
  button: 'button',
  'broadcast-message': 'broadcast_banner',
  card: 'card',
  'progress-bar': 'progress',
  spinner: 'spinner',
};

export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  computed: {
    componentName() {
      return NAME_MAPPING[this.page.slug];
    },
    inspectUrl() {
      return `${this.$lookbookUrl}/inspect/pajamas/${this.componentName}`;
    },
    previewName() {
      const capitalizedComponentName = this.componentName
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      return `Pajamas::${capitalizedComponentName}ComponentPreview`;
    },
  },
  async mounted() {
    await this.$nextTick();
    window.Lookbook.initEmbeds();
  },
};
</script>

<template>
  <div class="app-styles gl-pb-4 gl-pt-0">
    <div v-if="componentName">
      <lookbook-embed :app="$lookbookUrl" :preview="previewName" panels="params,notes,*" />
      <p class="gl-pt-4">
        <b>
          Find <a :href="inspectUrl">more scenarios</a> of the {{ componentName }} component in our
          Lookbook.
        </b>
      </p>
    </div>
    <div v-else>
      <i>The {{ page.slug }} component is not available as ViewComponent.</i>
    </div>
  </div>
</template>
