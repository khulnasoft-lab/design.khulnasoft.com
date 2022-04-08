import Vue from 'vue';
import ExampleDisplay from '../components/example_display.vue';
import StoryViewer from '../components/story_viewer.vue';
import Admonition from '../components/admonition.vue';
import Todo from '../components/todo.vue';

Object.entries({
  ExampleDisplay,
  StoryViewer,
  Admonition,
  Todo,
}).forEach(([componentName, component]) => Vue.component(componentName, component));
