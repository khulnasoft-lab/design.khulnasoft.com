import path from 'path';
import fiber from 'fibers';
import glob from 'glob';
import { startCase } from 'lodash';
import { parse } from 'node-html-parser';
import sass from 'sass';
import webpack from 'webpack';
import { getContentList, writeContentTree } from './modules/content_preparer';

const routes = [
  ...getContentList('components').map((c) => `components/${c.id}`),
  ...glob.sync('**/*.md', { cwd: 'contents/' }).map((filePath) => filePath.replace(/\.md$/, '')),
];

const isProd = process.env.NODE_ENV === 'production';

const cspPolicies = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "object-src 'none'",
  "img-src 'self' https: data:",
  'child-src https://www.figma.com',
  "connect-src 'self' https://sentry.gitlab.net",
];

const headScripts = [];

const { CI_PROJECT_ID, CI_MERGE_REQUEST_IID, CI_PROJECT_PATH } = process.env;
console.log('visual review tool env vars', process.env);
if (CI_PROJECT_ID && CI_MERGE_REQUEST_IID && CI_PROJECT_PATH) {
  headScripts.push({
    'data-project-id': CI_PROJECT_ID,
    'data-merge-request-id': CI_MERGE_REQUEST_IID,
    'data-mr-url': 'https://gitlab.com',
    'data-project-path': CI_PROJECT_PATH,
    id: 'review-app-toolbar-script',
    src: 'https://gitlab.com/assets/webpack/visual_review_toolbar.js',
  });
}

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk ? `${titleChunk} | Pajamas Design System` : 'Pajamas Design System',
    meta: [
      { charset: 'utf-8' },
      {
        'http-equiv': 'Content-Security-Policy',
        content: cspPolicies.join(';'),
      },
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
    script: headScripts,
    bodyAttrs: {
      class: 'ui-indigo',
      tabindex: '-1',
    },
  },

  generate: {
    dir: 'public',
    routes,
  },

  router: {
    middleware: ['frontmatter', 'navigation'],
    extendRoutes(originalRoutes) {
      const sectionSlugRoute = originalRoutes.find((route) => route.name === 'section-slug');
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
    '@nuxtjs/lunr-module',
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
    extend(config) {
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

      // Silence webpack warnings about moment/pikaday not being able to resolve.
      // Pikaday is a dependency of gitlab-ui.
      config.plugins.push(new webpack.IgnorePlugin(/moment/, /pikaday/));
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
        const contentTree = writeContentTree(srcDir);

        Object.keys(contentTree).forEach((section) => {
          contentTree[section].forEach((page) => {
            const route = `/${section}/${page.id}`;
            const contentsFile = `./static/contents/${section}/${page.id}.json`;
            import(contentsFile)
              .then((data) => {
                const { body } = data;
                const html = parse(`<div>${body}</div>`);
                const text = html.textContent;
                const words = text.split(' ').filter((term) => term.match(/^[a-z]{2,}$/i));
                const cleanText = words.join(' ');
                return builder.nuxt.callHook('lunr:document', {
                  document: {
                    id: page.id,
                    title: page.name,
                    body: cleanText,
                  },
                  meta: {
                    title: `${startCase(section)} > ${page.name}`,
                    route,
                  },
                });
              })
              .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(`Could not load contents from ${contentsFile}`, error);
              });
          });
        });
      },
    },
  },
};
