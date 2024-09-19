<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const objectsList = await $content('objects')
      .only(['name', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { objectsList };
  },
  head: {
    title: 'Objects collection',
  },
};
</script>

<template>
  <collection
    heading="Objects"
    description="An object is a conceptual building block or concept that defines how we think about something independent of its visual representation or interaction model. For example, a job, merge request, or repository."
    :items="objectsList"
  />
</template>
