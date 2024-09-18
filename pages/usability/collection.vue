<script>
export default {
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
  <div class="container gl-py-7">
    <div class="gl-mb-5">
      <h1 id="skipTarget" class="gl-heading-display gl-mt-0! gl-mb-4!" tabindex="-1">
        Usability and interaction
      </h1>
      <p class="gl-text-lg gl-leading-24">
        Guidelines that apply to the user experience of GitLab.
      </p>
    </div>
    <ul class="gl-grid lg:gl-grid-cols-3 gl-gap-5 gl-list-none gl-m-0 gl-p-0!">
      <li v-for="usability in usabilityList" :key="usability.path" class="gl-flex">
        <nuxt-link
          class="!gl-no-underline !gl-text-default gl-rounded-base gl-bg-default gl-p-5 gl-w-full gl-border-1 gl-border-solid gl-border-default hover:gl-border-strong"
          :to="usability.path"
        >
          <span class="gl-font-weight-bold">{{ usability.name }}</span>
          <p class="gl-text-base gl-leading-20 gl-mb-0 gl-mt-2">
            {{ usability.description }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
