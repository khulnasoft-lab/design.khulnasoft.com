<script>
export default {
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
  <div class="container gl-py-7">
    <div class="gl-mb-5">
      <h1 id="skipTarget" class="gl-heading-display gl-mt-0! gl-mb-4!" tabindex="-1">
        Foundations
      </h1>
      <p class="gl-text-lg gl-leading-24">
        Foundational items communicate the opinionated way in which basic visual design attributes,
        elements, and concepts come together to create a distinct GitLab personality that’s
        expressed in the UI. For example, color, typography, and iconography.
      </p>
    </div>
    <ul class="gl-grid lg:gl-grid-cols-3 gl-gap-5 gl-list-none gl-m-0 gl-p-0!">
      <li v-for="objects in objectsList" :key="objects.path" class="gl-flex">
        <nuxt-link
          class="!gl-no-underline !gl-text-default gl-rounded-base gl-bg-default gl-p-5 gl-w-full gl-border-1 gl-border-solid gl-border-default hover:gl-border-strong"
          :to="objects.path"
        >
          <span class="gl-font-weight-bold">{{ objects.name }}</span>
          <p class="gl-text-base gl-leading-20 gl-mb-0 gl-mt-2">
            {{ objects.description }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
