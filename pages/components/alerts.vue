<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md" v-html="md"></div>
  </div>
</template>

<script>
  import md from './alerts.md'

  export default {
    computed: {
      md() {
        return md
      }
    }
  }
</script>
