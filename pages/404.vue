<script>
import NotFound from '../components/error/not_found.vue';
import ReviewAppNotFound from '../components/error/review_app_not_found.vue';

/**
 * This component is a special 404 page just for nginx
 * or gitlab-pages
 *
 * In development we fall back to the good old
 * layouts/error.vue
 */
export default {
  components: { NotFound, ReviewAppNotFound },
  layout: 'no_footer',
  computed: {
    reviewAppMRIid() {
      if (process.server) {
        return null;
      }
      const match = window.location.toString().match(/review-mr-(\d+)/);
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
  },
};
</script>
<template>
  <review-app-not-found
    v-if="reviewAppMRIid"
    :merge-request-iid="reviewAppMRIid"
    :merge-request-url="reviewAppMRUrl"
  />
  <not-found v-else />
</template>
