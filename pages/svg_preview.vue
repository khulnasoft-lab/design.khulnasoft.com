<script>
import axios from 'axios';
import { GlLoadingIcon, GlAlert } from '../helpers/gitlab_ui';

export default {
  iconExplorerPath: '/product-foundations/iconography/icons',
  illustrationExplorerPath: '/product-foundations/illustration/illustrations',
  components: {
    GlAlert,
    GlLoadingIcon,
  },
  data() {
    return {
      loading: true,
      metadata: null,
      error: null,
      page: null,
    };
  },
  // eslint-disable-next-line consistent-return
  async mounted() {
    const { mrIID, path } = this.$route.query;

    if (!mrIID) {
      this.error = 'No MR IID defined';
      return null;
    }

    const project = encodeURIComponent('gitlab-org/gitlab-svgs');
    const mrRef = encodeURIComponent(`refs/merge-requests/${mrIID}/merge`);

    const url = `https://gitlab.com/api/v4/projects/${project}/jobs/artifacts/${mrRef}/raw/review/metadata.json?job=build-and-check`;

    try {
      const { data } = await axios.get(url);

      this.metadata = data;
      localStorage.setItem('svg-review', JSON.stringify(data));

      switch (path) {
        case '/icons':
          return this.$router.replace({ path: this.$options.iconExplorerPath });
        case '/illustrations':
          return this.$router.replace({ path: this.$options.illustrationExplorerPath });
        default:
        // We show a message per default, so that person reviewing can check the data themselves.
      }
    } catch (e) {
      this.error = `Could not load data for MR ${mrIID}`;
    }

    this.loading = false;
  },
};
</script>
<template>
  <div
    class="app-styles gl-m-4 gl-display-flex gl-flex-direction-column gl-align-items-center gl-justify-content-center"
  >
    <template v-if="loading">
      <gl-loading-icon size="lg" class="gl-mb-3" />
      Loading metadata for SVG Previewer...
    </template>
    <gl-alert v-else-if="error" :title="error" variant="danger" :dismissible="false">
      Feel free to navigate to the
      <NuxtLink :to="$options.iconExplorerPath">icon</NuxtLink>
      or
      <NuxtLink :to="$options.illustrationExplorerPath">illustration</NuxtLink>
      explorer to view the latest GitLab SVG version.
    </gl-alert>
    <gl-alert
      v-else-if="metadata"
      title="Successfully loaded metadata"
      variant="info"
      :dismissible="false"
    >
      Successfully loaded metadata for:<br />
      <a :href="metadata.mrURL">{{ metadata.mrTitle }}</a
      ><br />
      Please navigate to:
      <NuxtLink :to="$options.iconExplorerPath">icon</NuxtLink>
      or
      <NuxtLink :to="$options.illustrationExplorerPath">illustration</NuxtLink>
      explorer to view the changes.
    </gl-alert>
  </div>
</template>
