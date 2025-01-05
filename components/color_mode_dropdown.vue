<script>
import { mapState, mapActions } from 'vuex';
import { GlCollapsibleListbox } from '../helpers/gitlab_ui';

export default {
  name: 'ColorModeDropdown',
  components: {
    GlCollapsibleListbox,
  },
  computed: {
    ...mapState('mode', ['colorMode']),
    dropdownItems() {
      return [
        {
          text: 'Light mode',
          value: 'gl-light',
        },
        {
          text: 'Dark mode',
          value: 'gl-dark',
        },
        {
          text: 'Auto mode',
          value: 'gl-auto',
        },
      ];
    },
  },
  methods: {
    ...mapActions('mode', ['updateColorMode']),
    onSelect(value) {
      this.updateColorMode(value);
    },
  },
};
</script>

<template>
  <gl-collapsible-listbox
    toggle-text="Mode"
    text-sr-only
    icon="ellipsis_v"
    category="tertiary"
    no-caret
    placement="bottom-end"
    :items="dropdownItems"
    :selected="colorMode"
    @select="onSelect($event)"
  />
</template>
