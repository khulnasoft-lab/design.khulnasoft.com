<script>
import axios from 'axios';

export default {
  data() {
    return {
      icons: null,
    };
  },
  async mounted() {
    const { job } = this.$route.query;
    const url = `https://gitlab-org.gitlab.io/-/gitlab-svgs/-/jobs/${job}/artifacts/dist/icons.json`;

    const { data } = await axios.get(url);

    this.icons = data;
  },
};
</script>
<template>
  <div>
    Yay
    <pre>{{ JSON.stringify(icons, null, 2) }}</pre>
  </div>
</template>
