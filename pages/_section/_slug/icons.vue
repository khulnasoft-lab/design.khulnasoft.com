<script>
import iconData from '@gitlab/svgs/dist/icons.json';
import SvgCard from '../../../components/svg_explorer/svg_card.vue';
import SvgIcon from '../../../components/svg_explorer/svg_icon.vue';
import { GlSearchBoxByType } from '../../../helpers/gitlab_ui';

const DEFAULT_ICON_SIZE = 'image-sm';
const DEFAULT_COLORING = 'default';

export default {
  components: {
    GlSearchBoxByType,
    SvgCard,
    SvgIcon,
  },
  data() {
    const { q, size, color } = this.$route.query || {};
    console.log('DATA', q, size, color);
    return {
      iconData,
      searchString: q || '',
      selectedClass: size || DEFAULT_ICON_SIZE,
      selectedColor: color || DEFAULT_COLORING,
      copyStatus: 0,
    };
  },
  computed: {
    filteredIcons() {
      if (this.searchString && this.searchString.startsWith('~')) {
        return this.iconData.icons.filter((icon) => `~${icon}` === this.searchString);
      }
      return this.iconData.icons.filter((icon) => icon.includes(this.searchString));
    },
    kbSize() {
      return Math.round(this.iconData.spriteSize / 1024);
    },
    colors() {
      return [
        { value: DEFAULT_COLORING, name: 'Default' },
        { value: 'inverse', name: 'Inverse' },
        { value: 'indigo', name: 'Indigo' },
        { value: 'gray', name: 'Gray' },
        { value: 'red', name: 'Red' },
      ];
    },
  },
  watch: {
    searchString() {
      this.updateQueryParams();
    },
    selectedClass() {
      this.updateQueryParams();
    },
    selectedColor() {
      this.updateQueryParams();
    },
    // eslint-disable-next-line func-names
    '$route.query': function (query) {
      const { q, size, color } = query || {};
      console.log('watcher', q, size, color);
      this.searchString = q || '';
      this.selectedClass = size || DEFAULT_ICON_SIZE;
      this.selectedColor = color || DEFAULT_COLORING;
    },
  },
  methods: {
    setSearchString(value) {
      this.searchString = `~${value}`;
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
      const query = {};
      if (this.searchString) {
        query.q = this.searchString;
      }
      if (this.selectedClass !== DEFAULT_ICON_SIZE) {
        query.size = this.selectedClass;
      }
      if (this.selectedColor !== DEFAULT_COLORING) {
        query.color = this.selectedColor;
      }
      console.log('updateQueryParams', query);
      this.$router.push({ path: this.$route.path, query });
    },
  },
};
</script>

<template>
  <div class="icons-explorer">
    <header class="app-styles m-b-4">
      <h5 class="subtitle">{{ iconData.iconCount }} Icons ({{ kbSize }}Kb)</h5>
      <div class="mb-2">
        <div v-if="copyStatus === 1">Copied to your clipboard!</div>
        <div v-if="copyStatus === -1">Copying didn't work :-(</div>
        <div v-else-if="copyStatus === 0">Click Icons to copy their name</div>
      </div>
      <gl-search-box-by-type
        ref="input"
        v-model="searchString"
        aria-label="Search"
        autocomplete="off"
        spellcheck="false"
        :is-loading="false"
      />
    </header>
    <section class="icons-list" :class="selectedClass + '-list'">
      <aside>
        <label>
          <strong>Select a icon size:</strong>
          <select v-model="selectedClass">
            <option value="image-xs">Extra Small (12px)</option>
            <option value="image-sm" selected>Small (Default 16px)</option>
            <option value="image-md">Medium (32px)</option>
            <option value="image-lg">Large (48px)</option>
            <option value="image-xl">Extra Large (72px)</option>
            <option value="image-hu">Huge (256px)</option>
            <option value="image-nav">Sidemenu</option>
          </select>
        </label>
        <strong> Select a color combination </strong>
        <template v-for="color in colors">
          <br :key="color.value + 'br'" />
          <input
            :id="color.value"
            :key="color.value + 'input'"
            v-model="selectedColor"
            type="radio"
            :value="color.value"
          />
          <label :key="color.value + 'label'" :for="color.value">
            {{ color.name }}
          </label>
        </template>
      </aside>
      <svg-card
        v-for="icon in iconData.icons"
        v-show="filteredIcons.includes(icon)"
        :key="icon"
        :image="icon"
        :class="selectedColor"
        source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/sprite_icons/"
        @imageCopied="setCopyStatus"
        @permalinkSelected="setSearchString"
      >
        <svg-icon :icon="icon" :class="selectedClass" />
      </svg-card>
      <a v-show="filteredIcons.length === 0" href="" @click.prevent="resetSearch">
        No icons found. Click here to reset your search!
      </a>
    </section>
  </div>
</template>
