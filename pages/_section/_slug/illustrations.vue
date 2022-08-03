<script>
import illustrations from '@gitlab/svgs/dist/illustrations.json';
import SvgAlbum from '../../../components/svg_explorer/svg_album.vue';

/**
 * Load all illustration SVGs with webpack
 */
const illustrationSources = {};
const requireContext = require.context('@gitlab/svgs/dist/illustrations/', true, /\.(png|svg)$/);

requireContext.keys().forEach((key) => {
  const cacheKey = key.replace(/^(\.\/)?/, 'illustrations/');
  illustrationSources[cacheKey] = requireContext(key);
});

export default {
  illustrations,
  components: {
    SvgAlbum,
  },
  data() {
    return {
      illustrationURL: null,
    };
  },
  async mounted() {
    try {
      const { artifactBaseURL } = JSON.parse(localStorage.getItem('svg-review'));

      // const {data} = await axios.get(iconMetadata);

      this.illustrationURL = artifactBaseURL;
      // console.log(iconMetadata, data);
      // console.log(rest)
    } catch {
      //
    }
  },
  methods: {
    imagePath(path) {
      return this.illustrationURL
        ? `${this.illustrationURL}/dist/${path}`
        : illustrationSources[path];
    },
  },
};
</script>

<template>
  <SvgAlbum
    :elements="Object.freeze($options.illustrations.illustrations)"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/"
    class="illustrations-explorer"
  >
    <template #header> {{ $options.illustrations.illustrationCount }} Illustrations</template>
    <template #figure="{ entry }">
      <img loading="lazy" alt="" :src="imagePath(entry.name)" />
    </template>
    <template #no-result> No illustrations found. Click here to reset your search! </template>
  </SvgAlbum>
</template>
