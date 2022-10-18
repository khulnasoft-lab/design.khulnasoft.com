import { shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import mermaid from 'mermaid';
import MermaidDiagram from '../../components/mermaid_diagram.vue';

jest.mock('mermaid');

describe('mermaid-diagram component', () => {
  let wrapper;

  const createComponent = () => {
    wrapper = shallowMount(MermaidDiagram);
  };

  afterEach(() => {
    wrapper.destroy();
  });

  it('calls mermaid.init() on mount', () => {
    createComponent();
    expect(mermaid.init).toHaveBeenCalledWith(undefined, wrapper.vm.$el);
  });

  it('removes the gl-opacity-0 class once the graph is rendered', async () => {
    createComponent();

    expect(wrapper.classes('gl-opacity-0')).toBe(true);

    await nextTick();

    expect(wrapper.classes('gl-opacity-0')).toBe(false);
  });
});
