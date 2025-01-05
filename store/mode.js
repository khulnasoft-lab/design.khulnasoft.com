export const state = () => ({
  colorMode: 'gl-light',
});

export const mutations = {
  // eslint-disable-next-line no-shadow
  SET_COLOR_MODE(state, colorMode) {
    state.colorMode = colorMode;
  },
};

const updateClassList = (colorMode) => {
  const rootClasses = document.documentElement.classList;

  if (colorMode === 'gl-auto') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      rootClasses.add('gl-dark');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      rootClasses.toggle('gl-dark', e.matches);
    });
  } else {
    document.documentElement.classList = '';
    document.documentElement.classList.add(colorMode);
  }
};

export const actions = {
  loadColorMode({ commit }) {
    const colorMode = JSON.parse(localStorage.getItem('colorMode'));
    commit('SET_COLOR_MODE', colorMode || 'gl-light');
    updateClassList(colorMode);
  },
  // eslint-disable-next-line no-shadow
  updateColorMode({ commit }, payload) {
    const colorMode = payload;
    commit('SET_COLOR_MODE', colorMode);
    localStorage.setItem('colorMode', JSON.stringify(colorMode));
    updateClassList(colorMode);
  },
};
