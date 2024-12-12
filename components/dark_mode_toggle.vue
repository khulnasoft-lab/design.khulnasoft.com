<script>
import { GlButton } from '../helpers/gitlab_ui';

export default {
  name: 'DarkModeToggle',
  components: {
    GlButton,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    const localStorageValue = localStorage.getItem('isDarkMode');
    this.isDarkMode = localStorageValue === 'true';
    this.updateRootClass();
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.updateRootClass();
      localStorage.setItem('isDarkMode', this.isDarkMode);
    },
    updateRootClass() {
      document.documentElement.classList.toggle('gl-dark', this.isDarkMode);
    },
  },
};
</script>

<template>
  <gl-button
    :aria-label="isDarkMode ? 'Dark Mode' : 'Light Mode'"
    :icon="isDarkMode ? 'feature-flag-disabled' : 'feature-flag'"
    category="tertiary"
    @click="toggleDarkMode"
  />
</template>
