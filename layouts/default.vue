<template>
  <div>
    <header class="navbar navbar-gitlab qa-navbar navbar-expand-sm js-navbar">
      <a
        class="sr-only gl-accessibility"
        href="#content-body"
        tabindex="1"
      >Skip to content</a>
      <div class="container-fluid">
        <div class="header-content">
          <div class="title-container">
            <h1 class="title">
              <nuxt-link
                to="/"
              >
                <svg 
                  width="24" 
                  height="24" 
                  class="tanuki-logo" 
                  viewBox="0 0 36 36"
                >
                  <path
                    class="tanuki-shape tanuki-left-ear"
                    fill="#e24329"
                    d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"
                  />
                  <path
                    class="tanuki-shape tanuki-right-ear"
                    fill="#e24329"
                    d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"
                  />
                  <path
                    class="tanuki-shape tanuki-nose"
                    fill="#e24329"
                    d="M18,34.38 3,14 33,14 Z"
                  />
                  <path
                    class="tanuki-shape tanuki-left-eye"
                    fill="#fc6d26"
                    d="M18,34.38 11.38,14 2,14 6,25Z"
                  />
                  <path
                    class="tanuki-shape tanuki-right-eye"
                    fill="#fc6d26"
                    d="M18,34.38 24.62,14 34,14 30,25Z"
                  />
                  <path
                    class="tanuki-shape tanuki-left-cheek"
                    fill="#fca326"
                    d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"
                  />
                  <path
                    class="tanuki-shape tanuki-right-cheek"
                    fill="#fca326"
                    d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"
                  />
                </svg>
                <span class="logo-text text-white d-none d-sm-block">
                  <!--<svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 617 169"
                  >
                    <path d="M315.26 2.97h-21.8l.1 162.5h88.3v-20.1h-66.5l-.1-142.4M465.89 136.95c-5.5 5.7-14.6 11.4-27 11.4-16.6 0-23.3-8.2-23.3-18.9 0-16.1 11.2-23.8 35-23.8 4.5 0 11.7.5 15.4 1.2v30.1h-.1m-22.6-98.5c-17.6 0-33.8 6.2-46.4 16.7l7.7 13.4c8.9-5.2 19.8-10.4 35.5-10.4 17.9 0 25.8 9.2 25.8 24.6v7.9c-3.5-.7-10.7-1.2-15.1-1.2-38.2 0-57.6 13.4-57.6 41.4 0 25.1 15.4 37.7 38.7 37.7 15.7 0 30.8-7.2 36-18.9l4 15.9h15.4v-83.2c-.1-26.3-11.5-43.9-44-43.9M557.63 149.1c-8.2 0-15.4-1-20.8-3.5V70.5c7.4-6.2 16.6-10.7 28.3-10.7 21.1 0 29.2 14.9 29.2 39 0 34.2-13.1 50.3-36.7 50.3m9.2-110.6c-19.5 0-30 13.3-30 13.3v-21l-.1-27.8h-21.3l.1 158.5c10.7 4.5 25.3 6.9 41.2 6.9 40.7 0 60.3-26 60.3-70.9-.1-35.5-18.2-59-50.2-59M77.9 20.6c19.3 0 31.8 6.4 39.9 12.9l9.4-16.3C114.5 6 97.3 0 78.9 0 32.5 0 0 28.3 0 85.4c0 59.8 35.1 83.1 75.2 83.1 20.1 0 37.2-4.7 48.4-9.4l-.5-63.9V75.1H63.6v20.1h38l.5 48.5c-5 2.5-13.6 4.5-25.3 4.5-32.2 0-53.8-20.3-53.8-63-.1-43.5 22.2-64.6 54.9-64.6M231.43 2.95h-21.3l.1 27.3v94.3c0 26.3 11.4 43.9 43.9 43.9 4.5 0 8.9-.4 13.1-1.2v-19.1c-3.1.5-6.4.7-9.9.7-17.9 0-25.8-9.2-25.8-24.6v-65h35.7v-17.8h-35.7l-.1-38.5M155.96 165.47h21.3v-124h-21.3v124M155.96 24.37h21.3V3.07h-21.3v21.3" />
                  </svg>-->
                  GitLab Design System
                </span>
              </nuxt-link>
            </h1>
            <ul class="list-unstyled navbar-sub-nav">
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="layout-page page-with-contextual-sidebar">
      <nav class="nav-sidebar">
        <div class="nav-sidebar__body m-t-3 m-b-3">
          <template v-if="contentTree">
            <details 
              :open="$route.fullPath.startsWith('/getting-started')" 
              class="nav-sidebar__section"
            >
              <summary class="nav-sidebar__section-summary">Getting started</summary>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/getting-started/structure"
              >Structure</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/getting-started/personas"
              >Personas</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/getting-started/contributing"
              >Contributing</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/getting-started/status"
              >Status</nuxt-link>
            </details>

            <details 
              :open="$route.fullPath.startsWith('/foundations/')" 
              class="nav-sidebar__section"
            >
              <summary class="nav-sidebar__section-summary">Foundations</summary>
              <nuxt-link
                class="nav-sidebar__section-items-anchor"
                to="/foundations/colors"
              >Colors</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor"
                to="/foundations/iconography"
              >Iconography</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor"
                to="/foundations/motion"
              >Motion</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor"
                to="/foundations/illustration"
              >Illustration</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor"
                to="/foundations/typography"
              >Typography</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor"
                to="/foundations/interactions"
              >Interactions</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor"
                to="/foundations/saving-and-feedback"
              >Saving and feedback</nuxt-link>
            </details>

            <details 
              :open="$route.fullPath.startsWith('/layout/')" 
              class="nav-sidebar__section"
            >
              <summary class="nav-sidebar__section-summary">Layout</summary>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/layout/spacing"
              >Spacing</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/layout/grid"
              >Grid</nuxt-link>
            </details>

            <details 
              :open="$route.fullPath.startsWith('/components')" 
              class="nav-sidebar__section"
            >
              <summary class="nav-sidebar__section-summary">
                <nuxt-link 
                  to="/components"
                >
                  Components
                </nuxt-link>
              </summary>
              <nuxt-link 
                v-for="component in contentTree.components"
                :key="component.id"
                :to="`/components/${component.id}`"
                class="nav-sidebar__section-items-anchor"
              >
                {{ component.name }}
              </nuxt-link>
            </details>

            <details 
              :open="$route.fullPath.startsWith('/regions/')" 
              class="nav-sidebar__section"
            >
              <summary class="nav-sidebar__section-summary">Regions</summary>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/regions/empty-states"
              >Empty states</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/regions/navigation"
              >Navigation</nuxt-link>
            </details>

            <details 
              :open="$route.fullPath.startsWith('/content/')" 
              class="nav-sidebar__section"
            >
              <summary class="nav-sidebar__section-summary">Content</summary>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/content/voice-tone"
              >Voice &amp; tone</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/content/terminology"
              >Terminology</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/content/punctuation"
              >Punctuation</nuxt-link>
            </details>

            <details 
              :open="$route.fullPath.startsWith('/usability/')" 
              class="nav-sidebar__section"
            >
              <summary class="nav-sidebar__section-summary">Usability</summary>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/usability/a11y"
              >Accessibility</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/usability/i18n"
              >Internationalization</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/usability/helping-users"
              >Helping users</nuxt-link>
            </details>

            <details 
              :open="$route.fullPath.startsWith('/resources/')" 
              class="nav-sidebar__section"
            >
              <summary class="nav-sidebar__section-summary">Resources</summary>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor" 
                to="/resources/design-resources"
              >Design resources</nuxt-link>
            </details>
          </template>
          <template v-else>
            Loading ...
          </template>
        </div>
      </nav>
      <div class="content-wrapper">
        <div
          :class="contentWrapperClass"
          class="mt-3 mb-3"
        >
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentTree: null,
    }
  },
  computed: {
    contentWrapperClass() {
      return this.$route.fullPath === '/'
        ? ''
        : 'container-fluid container-limited limit-container-width'
    },
  },
  created() {
    this.$axios
      .$get(`/contents/contentTree.json`)
      .then(treeResult => {
        this.contentTree = treeResult
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e)
      })
  },
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

@import '../assets/stylesheets/app.scss';
</style>
