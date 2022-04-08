import Vue from 'vue';
import ExampleDisplay from '../components/example_display.vue';
import StoryViewer from '../components/story_viewer.vue';
import Admonition from '../components/admonition.vue';

Object.entries({
  ExampleDisplay,
  StoryViewer,
  Admonition,
}).forEach(([componentName, component]) => Vue.component(componentName, component));
