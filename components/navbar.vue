<script>
import ColorModeDropdown from './color_mode_dropdown.vue';
import Logo from './logo.vue';
import MenuToggle from './menu_toggle.vue';

export default {
  components: {
    ColorModeDropdown,
    Logo,
    MenuToggle,
  },
};
</script>

<template>
  <header class="gl-flex gl-items-center gl-justify-between gl-gap-2 gl-p-3 md:gl-pr-2">
    <logo />
    <div class="app-styles gl-flex">
      <color-mode-dropdown />
      <menu-toggle class="md:!gl-hidden" />
    </div>
  </header>
</template>
