import { GlLoadingIcon } from '@gitlab/ui';
import { mount } from '@vue/test-utils';
import { iframeResize } from 'iframe-resizer';
import StoryViewer from '../../components/story_viewer.vue';

jest.mock('iframe-resizer');

describe('story viewer component', () => {
  let wrapper;

  // Props
  const storyName = 'base-component--default';

  // Mocks
  const $gitlabUiUrl = 'http://gitlab-ui.test';

  // Helpers
  const findByTestId = (id) => wrapper.find(`[data-testid="${id}"]`);
  const findIframe = () => wrapper.find('iframe');
  const findLoadingIcon = () => wrapper.findComponent(GlLoadingIcon);
  const findStoryTitle = () => findByTestId('story-title');
  const findStoryLink = () => findByTestId('story-link');

  const createComponent = (props = {}) => {
    wrapper = mount(StoryViewer, {
      propsData: {
        storyName,
        ...props,
      },
      mocks: {
        $gitlabUiUrl,
      },
    });
  };

  afterEach(() => {
    wrapper.destroy();
  });

  describe.each(['story', 'docs'])('with view mode %s', (viewMode) => {
    beforeEach(() => {
      createComponent({
        viewMode,
      });
    });

    it('renders an iframe with the proper URL', () => {
      expect(findIframe().attributes('src')).toBe(
        `${$gitlabUiUrl}/iframe.html?id=${storyName}&viewMode=${viewMode}&isEmbeddedStory=1`,
      );
    });

    it('renders a link to Storybook', () => {
      expect(findStoryLink().attributes('href')).toBe(
        `${$gitlabUiUrl}/?path=%2F${viewMode}%2F${storyName}`,
      );
    });
  });

  it('calls the iframe resizer once the iframe has loaded', () => {
    createComponent();
    findIframe().trigger('load');

    expect(iframeResize).toHaveBeenCalled();
  });

  it('shows a loading icon until the iframe has finished loading', async () => {
    createComponent();

    expect(findLoadingIcon().exists()).toBe(true);

    findIframe().trigger('load');
    await wrapper.vm.$nextTick();

    expect(findLoadingIcon().exists()).toBe(false);
  });

  it("renders the story's ID as the default title", () => {
    createComponent();

    expect(findStoryTitle().text()).toBe(storyName);
  });

  it('renders the custom title if provided', () => {
    const title = 'Custom title';
    createComponent({
      title,
    });

    expect(findStoryTitle().text()).toBe(title);
  });
});
