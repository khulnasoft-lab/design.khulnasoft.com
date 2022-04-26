<script>
import illustrations from '@gitlab/svgs/dist/illustrations.json';
import SvgCard from '../../../components/svg_explorer/svg_card.vue';
import { GlSearchBoxByType } from '../../../helpers/gitlab_ui';

/**
 * Load all illustration SVGs with webpack
 */
const illustrationSources = {};
const requireContext = require.context('@gitlab/svgs/dist/illustrations/', true, /\.svg$/);

requireContext.keys().forEach((key) => {
  const cacheKey = key.replace(/^(\.\/)?/, 'illustrations/');
  illustrationSources[cacheKey] = requireContext(key);
});

const DEFAULT_COLORING = 'default';

export default {
  components: {
    GlSearchBoxByType,
    SvgCard,
  },
  data() {
    return {
      illustrationsData: illustrations,
      searchString: this.$route.query.q || '',
      selectedColor: this.$route.query.color || DEFAULT_COLORING,
      copyStatus: 0,
    };
  },
  computed: {
    colors() {
      return [
        { value: DEFAULT_COLORING, name: 'Default' },
        { value: 'gray', name: 'Gray' },
        { value: 'inverse', name: 'Inverse' },
        { value: 'indigo', name: 'Indigo' },
        { value: 'red', name: 'Red' },
      ];
    },
  },
  watch: {
    searchString() {
      this.updateQueryParams();
    },
    selectedColor() {
      this.updateQueryParams();
    },
    $route(to) {
      const query = to.query || {};
      this.searchString = query.q || '';
      this.selectedColor = query.color || DEFAULT_COLORING;
    },
  },
  methods: {
    imagePath(path) {
      return illustrationSources[path];
    },
    setSearchString(value) {
      this.searchString = value;
    },
    resetSearch() {
      this.searchString = '';
    },
    setCopyStatus(newStatus) {
      this.copyStatus = newStatus;
      setTimeout(() => {
        this.copyStatus = 0;
      }, 5000);
    },
    updateQueryParams() {
      if (process.browser) {
        const url = new URL(window.location);
        url.searchParams.delete('q');
        url.searchParams.delete('color');
        if (this.searchString) {
          url.searchParams.set('q', this.searchString);
        }
        if (this.selectedColor !== DEFAULT_COLORING) {
          url.searchParams.set('color', this.selectedColor);
        }
        window.history.pushState({}, '', url);
      }
    },
  },
};
</script>

<template>
  <div class="icons-explorer">
    <section class="illustrations-list">
      <aside class="app-styles">
        <strong class="subtitle">{{ illustrationsData.illustrationCount }} Illustrations</strong>
        <small class="mb-2">
          <span v-if="copyStatus === 1">Copied to your clipboard!</span>
          <span v-else-if="copyStatus === -1">Copying didn't work :-(</span>
          <span v-else-if="copyStatus === 0">Click Illustration to copy their name</span>
        </small>
        <gl-search-box-by-type
          ref="input"
          v-model="searchString"
          aria-label="Search"
          autocomplete="off"
          spellcheck="false"
          :is-loading="false"
        />
        <label>
          <strong>Select a background color:</strong>
          <select v-model="selectedColor" class="form-control select-control chevron-down">
            <template v-for="color in colors">
              <option :key="color.value" :value="color.value">
                {{ color.name }}
              </option>
            </template>
          </select>
        </label>
      </aside>
      <svg-card
        v-for="illustration in illustrationsData.illustrations"
        v-show="illustration.name.includes(searchString)"
        :key="illustration.name"
        :image="illustration.name"
        :image-size="illustration.size"
        :class="selectedColor"
        source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/"
        @imageCopied="setCopyStatus"
        @permalinkSelected="setSearchString"
      >
        <img alt="" :src="imagePath(illustration.name)" />
      </svg-card>
    </section>
  </div>
</template>
<style>
.illustrations-list aside {
  display: block;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  margin-bottom: 1rem;
  padding: 1rem;
}

.illustrations-list .image-wrapper {
  margin-bottom: 1rem;
}
</style>
