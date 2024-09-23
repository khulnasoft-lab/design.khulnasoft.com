<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const brandDesignList = await $content('brand-design')
      .only(['name', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { brandDesignList };
  },
  head: {
    title: 'Brand design collection',
  },
};
</script>

<template>
  <collection
    heading="Brand design"
    description="Create awareness, trust, and affinity for the GitLab brand."
    :items="brandDesignList"
  />
</template>
