<script>
import Logo from './logo.vue';
import ToggleButton from './toggle_button.vue';

export default {
  components: {
    Logo,
    ToggleButton,
  },
};
</script>

<template>
  <header class="navbar gl-p-3">
    <logo />
    <toggle-button />
  </header>
</template>
