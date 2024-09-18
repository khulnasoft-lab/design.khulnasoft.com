<script>
export default {
  async asyncData({ $content }) {
    const patternList = await $content('patterns')
      .only(['name', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { patternList };
  },
  head: {
    title: 'Pattern collection',
  },
};
</script>

<template>
  <div class="container gl-py-7">
    <div class="gl-mb-5">
      <h1 id="skipTarget" class="gl-heading-display gl-mt-0! gl-mb-4!" tabindex="-1">Patterns</h1>
      <p class="gl-text-lg gl-leading-24">
        A pattern combines components and/or content elements into a repeatable, consistent group
        that has a shared purpose, content association, or both. For example, filtering, forms, or
        navigation.
      </p>
    </div>
    <ul class="gl-grid lg:gl-grid-cols-3 gl-gap-5 gl-list-none gl-m-0 gl-p-0!">
      <li v-for="patterns in patternList" :key="patterns.path" class="gl-flex">
        <nuxt-link
          class="!gl-no-underline !gl-text-default gl-rounded-base gl-bg-default gl-p-5 gl-w-full gl-border-1 gl-border-solid gl-border-default hover:gl-border-strong"
          :to="patterns.path"
        >
          <span class="gl-font-weight-bold">{{ patterns.name }}</span>
          <p class="gl-text-base gl-leading-20 gl-mb-0 gl-mt-2">
            {{ patterns.description }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
