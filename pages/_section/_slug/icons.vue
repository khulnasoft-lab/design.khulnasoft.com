<script>
import iconData from '@gitlab/svgs/dist/icons.json';
import SvgCard from '../../../components/svg_explorer/svg_card.vue';
import SvgIcon from '../../../components/svg_explorer/svg_icon.vue';
import { GlSearchBoxByType } from '../../../helpers/gitlab_ui';
import {
  mapQueryFieldsToComputed,
  mapQueryFieldsToData,
} from '../../../helpers/sync_state_to_query_params';

const DEFAULT_ICON_SIZE = 'image-sm';
const DEFAULT_COLORING = 'default';

const queryFields = [
  { field: 'searchString', param: 'q', default: '' },
  { field: 'selectedClass', param: 'size', default: DEFAULT_ICON_SIZE },
  { field: 'selectedColor', param: 'color', default: DEFAULT_COLORING },
];

export default {
  components: {
    GlSearchBoxByType,
    SvgCard,
    SvgIcon,
  },
  data() {
    return {
      iconData,
      copyStatus: 0,
      ...mapQueryFieldsToData(queryFields),
    };
  },
  computed: {
    ...mapQueryFieldsToComputed(queryFields),
    filteredIcons() {
      if (this.searchString?.startsWith('~')) {
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
    copyStatusText() {
      switch (this.copyStatus) {
        case 1:
          return 'Copied to your clipboard!';
        case -1:
          return "Copying didn't work :-(";
        default:
          return 'Click Icons to copy their name';
      }
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
  },
};
</script>

<template>
  <div class="icons-explorer">
    <header class="app-styles gl-mb-4">
      <h5 class="subtitle">{{ iconData.iconCount }} Icons ({{ kbSize }}Kb)</h5>
      <div class="gl-mb-3">{{ copyStatusText }}</div>
      <client-only>
        <gl-search-box-by-type
          ref="input"
          v-model="searchString"
          aria-label="Search"
          autocomplete="off"
          spellcheck="false"
          :is-loading="false"
        />
      </client-only>
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
        <br />
        <strong> Select a color combination </strong>
        <div v-for="color in colors" :key="color.value">
          <input :id="color.value" v-model="selectedColor" type="radio" :value="color.value" />
          <label :for="color.value">
            {{ color.name }}
          </label>
        </div>
      </aside>
      <svg-card
        v-for="icon in iconData.icons"
        v-if="filteredIcons.includes(icon)"
        :key="icon"
        :image="icon"
        :class="selectedColor"
        source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/sprite_icons/"
        @imageCopied="setCopyStatus"
        @permalinkSelected="setSearchString"
      >
        <svg-icon :icon="icon" :class="selectedClass" />
      </svg-card>
      <a v-if="filteredIcons.length === 0" href="" @click.prevent="resetSearch">
        No icons found. Click here to reset your search!
      </a>
    </section>
  </div>
</template>
