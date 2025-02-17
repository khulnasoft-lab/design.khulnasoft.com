import { shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import mermaid from 'mermaid';
import MermaidDiagram from '../../components/mermaid_diagram.vue';

jest.mock('mermaid');

describe('mermaid-diagram component', () => {
  let wrapper;

  const createComponent = () => {
    wrapper = shallowMount(MermaidDiagram);

    // Wait for dynamic import to resolve
    return nextTick();
  };

  afterEach(() => {
    wrapper.destroy();
  });

  it('initializes mermaid on mount', async () => {
    await createComponent();

    expect(mermaid.initialize).toHaveBeenCalledWith({});
    expect(mermaid.run).toHaveBeenCalledWith({
      nodes: [wrapper.vm.$el],
      suppressErrors: true,
    });
  });

  it('removes the gl-opacity-0 class once the graph is rendered', async () => {
    await createComponent();

    expect(wrapper.classes('gl-opacity-0')).toBe(true);

    await nextTick();

    expect(wrapper.classes('gl-opacity-0')).toBe(false);
  });
});
