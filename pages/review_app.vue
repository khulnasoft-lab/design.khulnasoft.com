<script>
import ErrorLayout from '../components/error/layout.vue';

/**
 * This component is a special 404 page just for nginx,
 * in development we fall back to the good old
 * layouts/error.vue
 */
export default {
  components: { ErrorLayout },
  layout: 'no_footer',
  computed: {
    mergeRequestID() {
      const match = globalThis.location?.toString().match(/review-mr-(\d+)/);
      if (match) {
        return match[1];
      }
      return null;
    },
    mergeRequestUrl() {
      if (this.mergeRequestID) {
        return `https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/${this.mergeRequestID}/pipelines`;
      }
      return null;
    },
  },
};
</script>
<template>
  <error-layout>
    <template #title>Missing review app</template>
    <template #text>
      <p>It looks like you are missing a review app. It might have been deleted.</p>
      <ol v-if="mergeRequestUrl" class="gl-leading-24">
        <li>
          Go back to <a :href="mergeRequestUrl">MR {{ mergeRequestID }}</a>
        </li>
        <li>
          Re-run the latest <code>pages</code> job (part of the <code>deploy</code>) stage, <br />
          or simply trigger a new pipeline
        </li>
      </ol>
      <p v-else>Unfortunately we don't know which review app you have been looking for...</p>
    </template>
  </error-layout>
</template>
