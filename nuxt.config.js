import glob from 'glob';
import path from 'path';
import sass from 'sass';
import fiber from 'fibers';
import { getContentList, writeContentTree } from './modules/content_preparer';

const routes = [
  ...getContentList('components').map(c => `components/${c.id}`),
  ...glob.sync('**/*.md', { cwd: 'contents/' }).map(filePath => filePath.replace(/\.md$/, '')),
];

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: titleChunk =>
      titleChunk ? `${titleChunk} | Pajamas Design System` : 'Pajamas Design System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'gitlab,pajamas,design,system,guidelines' },
      {
        hid: 'description',
        name: 'description',
        content: 'Resources, components, and design guidelines behind GitLab',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@gitlab' },
      { name: 'twitter:title', content: 'Pajamas Design System' },
      {
        name: 'twitter:description',
        content: 'Resources, components, and design guidelines behind GitLab',
      },
      { name: 'twitter:image', content: 'https://design.gitlab.com/img/social/link-preview.png' },
      { name: 'og:url', content: 'https://design.gitlab.com' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Pajamas Design System' },
      {
        name: 'og:description',
        content: 'Resources, components, and design guidelines behind GitLab',
      },
      { name: 'og:image', content: 'https://design.gitlab.com/img/social/link-preview.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
    bodyAttrs: {
      class: 'ui-indigo',
    },
  },

  generate: {
    dir: 'public',
    routes,
  },

  router: {
    extendRoutes(originalRoutes) {
      const sectionSlugRoute = originalRoutes.find(route => route.name === 'section-slug');
      sectionSlugRoute.path += '/:tab?';
    },
  },

  axios: {
    browserBaseURL: '/',
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: ['../assets/stylesheets/app.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/gitlab-ui.js', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@gitlab/nuxt-edit-this-page',
    '@nuxtjs/sentry',
  ],

  sentry: {
    dsn: 'https://77ebbeb22fb243c786286ecd01caa19f@sentry.gitlab.net/109', // Enter your project's DSN here
    disabled: !isProd,
  },

  /**
   * Edit this page module configuration
   * https://gitlab.com/gitlab-org/frontend/nuxt-edit-this-page
   */
  editThisPage: {
    repo: 'git@gitlab.com:gitlab-org/gitlab-services/design.gitlab.com.git',
  },

  /*
   ** Axios module configuration
   */
  serverMiddleware: [],

  watch: ['~/contents/'],

  /*
   ** Build configuration
   */
  build: {
    // Per default nuxt doesn't output to the console on CI, this turns this on
    quiet: false,

    // Enabling extractCSS in production ensures that we don't run into CSS ordering issues
    // See https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues/418
    extractCSS: isProd,

    watch: ['~/contents'],

    postcss: {
      order: ['postcss-preset-env'],
    },

    loaders: {
      scss: {
        implementation: sass,
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'node_modules')],
          fiber,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'; // Full Vue version for being able to use dynamic templates
      config.resolve.alias['bootstrap-vue/src/index'] = 'bootstrap-vue/src/index.scss';

      config.module.rules.splice(0, 1);

      config.module.rules.push({
        test: /\.md$/,
        include: /static/,
        loader: 'frontmatter-markdown-loader',
      });

      config.module.rules.push({
        test: /\.md$/,
        include: /contents/,
        loader: 'frontmatter-markdown-loader',
      });

      config.module.rules.push({
        test: /\.js$/,
        include: /node-modules/,
        loader: 'babel-loader',
      });

      config.module.rules.push({
        test: /\.md$/,
        exclude: /contents/,
        loader: 'raw-loader',
      });

      config.module.rules.push({
        test: /\.example\.vue$/,
        loader: 'raw-loader',
      });

      config.module.rules.push({
        test: /\.vue$/,
        exclude: /\.example\.vue$/,
        loader: 'vue-loader',
      });

      config.module.rules.push({
        test: /\.css$/,
        include: /node-modules/,
        loader: 'css-loader',
      });

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },

    transpile: [
      // GitLab UI needs to be transpiled as it uses some advanced syntax like the
      // optional chaining operator
      '@gitlab/ui',
    ],
  },

  // see https://nuxtjs.org/api/configuration-hooks
  hooks: {
    build: {
      before(builder) {
        const { srcDir } = builder.nuxt.options;
        writeContentTree(srcDir);
      },
    },
  },
};
