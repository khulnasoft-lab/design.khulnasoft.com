<script>
import NotFound from '../components/error/not_found.vue';
import Default from '../components/error/default.vue';
import ReviewAppNotFound from '../components/error/review_app_not_found.vue';

const reviewAppRegex = /review-mr-(\d+)/;

export default {
  components: {
    NotFound,
    Default,
    ReviewAppNotFound,
  },
  layout: 'no_footer',
  props: {
    error: {
      type: Object,
      required: false,
      default: null,
    },
  },
  computed: {
    reviewAppMRIid() {
      if (process.server) {
        return null;
      }
      const url = new URL(window.location);
      const path = url.searchParams.get('originalPath') ?? '';

      const match = path.match(reviewAppRegex) || url.toString().match(reviewAppRegex);
      if (match) {
        return match[1];
      }
      return null;
    },
    reviewAppMRUrl() {
      if (!this.reviewAppMRIid) {
        return null;
      }
      return `https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/${this.mergeRequestID}/pipelines`;
    },
    details() {
      return [this.error?.message, this.error?.stack].filter(Boolean).join('\n');
    },
  },
};
</script>
<template>
  <default v-if="error">
    <template v-if="details" #details>{{ details }}</template>
  </default>
  <review-app-not-found
    v-else-if="reviewAppMRIid"
    :merge-request-iid="reviewAppMRIid"
    :merge-request-url="reviewAppMRUrl"
  />
  <not-found v-else />
</template>
