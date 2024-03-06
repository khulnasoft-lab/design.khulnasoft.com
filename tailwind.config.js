const tailwindDefaults = require('@gitlab/ui/tailwind.defaults');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './contents/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  presets: [tailwindDefaults],
  corePlugins: [
    'appearance',
    'content',
    'float',
    'inset',
    'isolation',
    'mixBlendMode',
    'position',
    'tableLayout',
    'userSelect',
  ],
};
