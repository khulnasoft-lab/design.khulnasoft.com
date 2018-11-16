<template>
  <div class="content limited m-t-7 m-b-7">
    <async-component-info />
  </div>
</template>

<script>
import ComponentInfo from '../../components/component-info.vue';
import ComponentLoading from '../../components/component-loading.vue';
import ComponentError from '../../components/component-error.vue';

const fetchComponentInfo = ($axios, componentSlug) => $axios.$get(`/contents/components/${componentSlug}.json`)

let loadComponentInfo

const AsyncComponentInfo = () => ({
  component: new Promise(resolve => {
    loadComponentInfo = resolve
  })
    .then(({ $axios, $route }) => fetchComponentInfo($axios, $route.params.slug))
    .then(frontmatterInfo => {
      if (!frontmatterInfo.attributes || !frontmatterInfo.body) {
        throw new Error(`Unexpected response: ${frontmatterInfo}`)
      }

      return {
        ...ComponentInfo,
        frontmatterInfo
      }
    }),
  loading: ComponentLoading,
  error: ComponentError,
  delay: 0,
  timeout: 3000
})

export default {
  components: {
    AsyncComponentInfo
  },
  mounted() {
    const { $axios, $route } = this
    loadComponentInfo({ $axios, $route })
  },
}
</script>
