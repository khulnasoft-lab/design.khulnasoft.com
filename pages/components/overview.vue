<script>
import contentTree from '../../content_tree.json'; // eslint-disable-line import/no-unresolved

export default {
  contentTree,
  head: {
    title: 'Components overview',
  },
};
</script>

<template>
  <div class="content limited m-t-7 m-b-7 app-styles">
    <div class="structure md">
      <h1>Pajamas components</h1>
      <p class="mt-4">
        Pajamas components are written in Vue and designed in Figma. Select a component to learn
        more about how to use them for your design or development project.
      </p>
      <ul class="components-list mt-4 gl-display-grid">
        <li v-for="component in $options.contentTree.components" :key="component.id">
          <nuxt-link class="component-card" :to="`/components/${component.id}`">
            <h3 class="component-name">{{ component.name }}</h3>
            <p class="component-description mb-0 mt-2">{{ component.description }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
