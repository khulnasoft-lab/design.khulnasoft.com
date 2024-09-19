<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const usabilityList = await $content('usability')
      .only(['name', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { usabilityList };
  },
  head: {
    title: 'Usability collection',
  },
};
</script>

<template>
  <collection
    heading="Usability and interaction"
    description="Guidelines that apply to the user experience of GitLab."
    :items="usabilityList"
  />
</template>
