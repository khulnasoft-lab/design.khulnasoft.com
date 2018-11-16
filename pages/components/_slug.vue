<template>
  <div class="content limited m-t-7 m-b-7">
    <div v-if="frontMatter">
      <component-info :frontmatter-info="frontMatter" />
    </div>
    <div v-else>
      Loading component…
    </div>
  </div>
</template>

<script>
import ComponentInfo from '../../components/componentinfo.vue';

export default {
  components: {
    ComponentInfo
  },
  asyncData ({ app, params, error }) {
    return app.$axios
      .$get(`/contents/components/${params.slug}.json`)
      .then(frontMatter => ({ frontMatter }))
      .catch(() => {
        error({ message: `Failed to load component ${params.slug}!` })
      })
  },
  data() {
    return {
      frontMatter: null,
    }
  }
}
</script>
