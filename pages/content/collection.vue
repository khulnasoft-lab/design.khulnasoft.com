<script>
export default {
  async asyncData({ $content }) {
    const contentList = await $content('content')
      .only(['name', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { contentList };
  },
  head: {
    title: 'Content collection',
  },
};
</script>

<template>
  <div class="container gl-py-7">
    <div class="gl-mb-5">
      <h1 id="skipTarget" class="gl-heading-display gl-mt-0! gl-mb-4!" tabindex="-1">
        Product content
      </h1>
      <p class="gl-text-lg gl-leading-24">
        Guidelines for crafting clear, consistent, and universal content. It addresses key elements
        of language and localization in user interface design and content creation for GitLab.
      </p>
    </div>
    <ul class="gl-grid lg:gl-grid-cols-3 gl-gap-5 gl-list-none gl-m-0 gl-p-0!">
      <li v-for="content in contentList" :key="content.path" class="gl-flex">
        <nuxt-link
          class="!gl-no-underline !gl-text-default gl-rounded-base gl-bg-default gl-p-5 gl-w-full gl-border-1 gl-border-solid gl-border-default hover:gl-border-strong"
          :to="content.path"
        >
          <span class="gl-font-weight-bold">{{ content.name }}</span>
          <p class="gl-text-base gl-leading-20 gl-mb-0 gl-mt-2">
            {{ content.description }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
