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
  validate ({ params }) {
    return !params.slug.endsWith('.json')
  },
  asyncData ({ app, params, error }) {
    return app.$axios
      .$get(`/contents/components/${params.slug}.json`)
      .then((frontMatter) => {
        if (!frontMatter.attributes || !frontMatter.body) {
          throw new Error(`Unexpected response: ${frontMatter}`)
        }

        return { frontMatter }
      })
      .catch((e) => {
        error({ statusCode: 404, message: `Failed to load component ${params.slug}!` })
        console.error(e) // eslint-disable-line
      })
  },
  data() {
    return {
      frontMatter: null,
    }
  }
}
</script>
