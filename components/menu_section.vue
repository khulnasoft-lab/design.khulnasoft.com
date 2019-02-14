<template>
  <ul 
    :open="$route.fullPath.startsWith(`/${category}`)"
    class="nav-sidebar__section"
  >
    <span class="nav-sidebar__section-title">{{ categoryName || (category.charAt(0).toUpperCase() + category.slice(1)) }}</span>
    <slot></slot>
    <nuxt-link
      v-for="page in contentTree[category]"
      :key="page.id"
      :to="`/${category}/${page.id}`"
      class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
    >
      {{ page.name }}
    </nuxt-link>
  </ul>
</template>

<script>
export default {
  props: {
    contentTree: {
      type: Object,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
