const defaults = require('@gitlab/ui/tailwind.defaults');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...defaults,
  content: [
    './components/**/*.{js,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.{js}',
    './contents/**/*.md',
  ],
  plugins: [],
};
