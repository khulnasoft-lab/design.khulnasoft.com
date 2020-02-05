<template>
  <div class="content limited m-t-7 m-b-8">
    <component-info :frontmatter-info="fmResult" />
  </div>
</template>

<script>
import ComponentInfo from '../../components/componentinfo.vue';

export default {
  components: {
    ComponentInfo,
  },
  editThisPage: {
    resolve: ({ route }) => `contents${route.path.replace(/\/+$/, '')}.md`,
  },
  asyncData({ route }) {
    const { path } = route;
    return import(`~/contents${path}.md`).then(({ default: fmResult }) => ({ fmResult }));
  },
};
</script>
