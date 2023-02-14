import Vue from 'vue';
import FigureImg from '../components/figure_img.vue';
import StoryViewer from '../components/story_viewer.vue';
import Note from '../components/note.vue';
import Todo from '../components/todo.vue';
import ColorPalette from '../components/color_palette/color_palette.vue';
import MermaidDiagram from '../components/mermaid_diagram.vue';

Object.entries({
  FigureImg,
  StoryViewer,
  Note,
  Todo,
  ColorPalette,
  MermaidDiagram,
}).forEach(([componentName, component]) => Vue.component(componentName, component));
