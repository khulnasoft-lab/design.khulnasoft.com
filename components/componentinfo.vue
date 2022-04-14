<script>
import { GlNav, GlNavItem } from '../helpers/gitlab_ui';

export default {
  components: {
    GlNav,
    GlNavItem,
  },
  props: {
    page: {
      type: Object,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
  head() {
    return {
      title: this.page.name,
    };
  },
  computed: {
    baseLink() {
      return `/${this.$route.params.section}/${this.$route.params.slug}`;
    },
    contributeLink() {
      return `${this.baseLink}/contribute`;
    },
    codeLink() {
      return `${this.baseLink}/code`;
    },
    showTabs() {
      return Boolean(this.page?.stories?.length);
    },
    lastUpdatedAt() {
      const { lastGitUpdate } = this.page || {};
      if (!lastGitUpdate) {
        return null;
      }
      return new Date(lastGitUpdate).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
  },
  mounted() {
    if (this.$route.hash) {
      const targetAnchor = this.$el.querySelector(this.$route.hash);

      if (!targetAnchor) {
        return;
      }

      this.$nextTick(() => {
        window.scrollTo(0, targetAnchor.offsetTop);
      });
    }
  },
};
</script>

<template>
  <div>
    <div class="md typography gl-mb-6!">
      <h1 id="skipTarget" tabindex="-1">{{ page.name }}</h1>
      <div
        v-if="page.deprecated"
        role="alert"
        class="gl-bg-orange-50 gl-px-5 gl-py-3 gl-mb-3 gl-display-flex gl-align-items-center"
      >
        <span class="gl-text-orange-600 gl-mr-3">⚠️</span>
        Please refrain from using this component - it is about to be deprecated!
      </div>
      <p>{{ page.description }}</p>
    </div>
    <div v-if="showTabs" class="app-styles gl-mb-5">
      <gl-nav class="gl-tabs-nav">
        <gl-nav-item
          :href="baseLink"
          active
          active-class="gl-tab-nav-item-active"
          link-classes="gl-tab-nav-item"
          >Usage</gl-nav-item
        >
        <gl-nav-item :href="codeLink" link-classes="gl-tab-nav-item">Implementation</gl-nav-item>
        <gl-nav-item :href="contributeLink" link-classes="gl-tab-nav-item">Contribute</gl-nav-item>
      </gl-nav>
    </div>
    <slot></slot>
    <p v-if="lastUpdatedAt" class="row justify-content-center m-t-5">
      Last updated at:&nbsp;<time :datetime="lastUpdatedAt">{{ lastUpdatedAt }}</time>
    </p>
  </div>
</template>
