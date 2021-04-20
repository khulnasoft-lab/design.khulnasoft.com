const getDefaultFrontmatter = () => ({
  attributes: {},
  body: '',
  lastUpdatedAt: '',
});

export const state = () => ({
  frontmatter: getDefaultFrontmatter(),
  sidebarOpen: false,
});

export const mutations = {
  resetFrontmatter(currentState) {
    currentState.frontmatter = getDefaultFrontmatter();
  },
  setFrontmatter(currentState, frontmatter) {
    currentState.frontmatter = frontmatter;
  },
  toggleSidebar(currentState) {
    currentState.sidebarOpen = !currentState.sidebarOpen;
  },
  closeSidebar(currentState) {
    currentState.sidebarOpen = false;
  },
};
