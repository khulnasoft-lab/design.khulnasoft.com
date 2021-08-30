<script>
import contentTree from '../../content_tree.json'; // eslint-disable-line import/no-unresolved

export default {
  data() {
    return {
      contentTree,
      componentAttributes: null,
    };
  },
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
        more and how you can use them for your design or development project.
      </p>
      <ul class="components-list mt-4">
        <li v-for="component in contentTree.components" :key="component.id">
          <a class="component-card" :href="`/components/${component.id}`">
            <h3 class="component-name">{{ component.name }}</h3>
            <p class="component-description mb-0 mt-2">{{ component.description }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
