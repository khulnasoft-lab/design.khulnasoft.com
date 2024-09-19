<script>
export default {
  props: {
    heading: {
      type: String,
      default: '',
      required: true,
    },
    content: {
      type: String,
      default: '',
      required: true,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<template>
  <div class="container gl-py-7">
    <div class="gl-mb-5">
      <h1 id="skipTarget" class="gl-heading-display gl-mt-0! gl-mb-4!" tabindex="-1">
        {{ heading }}
      </h1>
      <p class="gl-text-lg gl-leading-24">
        {{ content }}
      </p>
    </div>
    <ul class="gl-grid lg:gl-grid-cols-3 gl-gap-5 gl-list-none gl-m-0 gl-p-0!">
      <li v-for="item in items" :key="item.path" class="gl-flex">
        <nuxt-link
          class="!gl-no-underline !gl-text-default gl-rounded-base gl-bg-default gl-p-5 gl-w-full gl-border-1 gl-border-solid gl-border-default hover:gl-border-strong"
          :to="item.path"
        >
          <span class="gl-font-weight-bold">{{ item.name }}</span>
          <p class="gl-text-base gl-leading-20 gl-mb-0 gl-mt-2">
            {{ item.description }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
