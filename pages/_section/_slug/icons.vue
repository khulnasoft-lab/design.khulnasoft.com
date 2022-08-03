<script>
import axios from 'axios';
import iconData from '@gitlab/svgs/dist/icons.json';
import SvgIcon from '../../../components/svg_explorer/svg_icon.vue';
import SvgAlbum from '../../../components/svg_explorer/svg_album.vue';
import { bytesToKiloBytes } from '../../../helpers/unit_utils';

const sizeOptions = [
  { value: 'image-xs', label: 'Extra Small (12px)' },
  { value: 'image-sm', label: 'Small (Default 16px)', default: true },
  { value: 'image-md', label: 'Medium (32px)' },
  { value: 'image-lg', label: 'Large (48px)' },
  { value: 'image-xl', label: 'Extra Large (72px)' },
  { value: 'image-hu', label: 'Huge (256px)' },
  { value: 'image-nav', label: 'Sidemenu' },
];

export default {
  sizeOptions,
  components: {
    SvgAlbum,
    SvgIcon,
  },
  data() {
    return {
      spriteSize: iconData.spriteSize,
      diffData: null,
      remoteSVG: [],
    };
  },
  computed: {
    icons() {
      const iconsAfter = this.diffData?.icons || [];

      const allIcons = new Set([...iconData.icons, ...iconsAfter]);

      return [...allIcons].sort().map((x) => {
        return {
          name: x,
        };
      });
    },
    kbSize() {
      return bytesToKiloBytes(this.spriteSize);
    },
  },
  beforeDestroy() {
    if (this.remoteSVG.length) {
      // eslint-disable-next-line no-restricted-syntax
      for (const x of this.remoteSVG) {
        x.remove();
      }
      this.remoteSVG = [];
    }
  },
  async mounted() {
    try {
      const { iconMetadata, iconURL } = JSON.parse(localStorage.getItem('svg-review'));

      await this.loadRemoteSVG(iconURL);

      const { data } = await axios.get(iconMetadata);

      this.diffData = data;
    } catch {
      //
    }
  },
  methods: {
    async loadRemoteSVG(iconURL) {
      const { data } = await axios.get(iconURL);

      const div = document.createElement('div');
      div.classList.add('hidden');

      div.innerHTML = data;
      div.querySelectorAll('[id]').forEach((node) => {
        node.setAttribute('id', `mr-diff-${node.getAttribute('id')}`);
      });
      document.body.append(div);
      this.remoteSVG.push(div);
    },
  },
};
</script>

<template>
  <SvgAlbum
    :elements="icons"
    :size-options="$options.sizeOptions"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/sprite_icons/"
    class="icons-explorer"
  >
    <template #header>{{ icons.length }} Icons ({{ kbSize }})</template>
    <template v-if="diffData" #figure="{ entry, className }">
      <svg-icon :icon="entry.name" :class="className" />
      <svg-icon v-if="diffData" :icon-src="''" :icon="'mr-diff-' + entry.name" :class="className" />
    </template>
    <template v-else #figure="{ entry, className }">
      <svg-icon :icon="entry.name" :class="className" />
    </template>
    <template #no-result>No icons found. Click here to reset your search!</template>
  </SvgAlbum>
</template>
