<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const datavizList = await $content('data-visualization')
      .only(['name', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { datavizList };
  },
  head: {
    title: 'Data visualization collection',
  },
};
</script>

<template>
  <collection
    heading="Data visualization"
    content="Data visualizations pull insights from data sets into a narrative and allow users to explore data themselves to discover their own insights."
    :items="datavizList"
  />
</template>
