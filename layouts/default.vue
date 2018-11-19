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
                <span class="logo-text text-white font-weight-light d-none d-sm-block">
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
        <div
          class="nav-sidebar-inner-scroll"
          style="overflow-y: scroll;"
        >
          <template v-if="contentTree">
            <ul class="sidebar-top-level-items">
              <li 
                :class="{
                  active: $route.fullPath.startsWith('/getting-started')
                }"
              >
                <nuxt-link 
                  to="/getting-started"
                  active-class="active"
                >
                  <span class="nav-item-name">Getting started</span>
                </nuxt-link>
                <ul class="sidebar-sub-level-items">
                  <nuxt-link 
                    tag="li"
                    to="/getting-started/structure"
                    active-class="active"
                  >
                    <a>Structure</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/getting-started/personas"
                    active-class="active"
                  >
                    <a>Personas</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/getting-started/contributing"
                    active-class="active"
                  >
                    <a>Contributing</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/getting-started/status"
                    active-class="active"
                  >
                    <a>Status</a>
                  </nuxt-link>
                </ul>
              </li>
              <li 
                :class="{
                  active: $route.fullPath.startsWith('/foundations')
                }"
              >
                <nuxt-link 
                  to="/foundations"
                  active-class="active"
                >
                  <span class="nav-item-name">Foundations</span>
                </nuxt-link>
                <ul class="sidebar-sub-level-items">
                  <nuxt-link 
                    tag="li"
                    to="/foundations/colors"
                    active-class="active"
                  >
                    <a>Colors</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/foundations/iconography"
                    active-class="active"
                  >
                    <a>Iconography</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/foundations/motion"
                    active-class="active"
                  >
                    <a>Motion</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/foundations/illustration"
                    active-class="active"
                  >
                    <a>Illustration</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/foundations/typography"
                    active-class="active"
                  >
                    <a>Typography</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/foundations/interactions"
                    active-class="active"
                  >
                    <a>Interactions</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/foundations/saving-and-feedback"
                    active-class="active"
                  >
                    <a>Saving and feedback</a>
                  </nuxt-link>
                </ul>
              </li>
              <li 
                :class="{
                  active: $route.fullPath.startsWith('/layout')
                }"
              >
                <nuxt-link 
                  to="/layout"
                  active-class="active"
                >
                  <span class="nav-item-name">Layout</span>
                </nuxt-link>
                <ul class="sidebar-sub-level-items">
                  <nuxt-link 
                    tag="li"
                    to="/layout/spacing"
                    active-class="active"
                  >
                    <a>Spacing</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/layout/grid"
                    active-class="active"
                  >
                    <a>Grid</a>
                  </nuxt-link>
                </ul>
              </li>
              <li 
                :class="{
                  active: $route.fullPath.startsWith('/components')
                }"
              >
                <nuxt-link 
                  to="/components"
                  active-class="active"
                >
                  <span class="nav-item-name">Components</span>
                </nuxt-link>
                <ul class="sidebar-sub-level-items">
                  <nuxt-link 
                    v-for="component in contentTree.components"
                    :key="component.id"
                    :to="`/components/${component.id}`"
                    tag="li"
                    active-class="active"
                  >
                    <a>{{ component.name }}</a>
                  </nuxt-link>
                </ul>
              </li>
              <li 
                :class="{
                  active: $route.fullPath.startsWith('/regions')
                }"
              >
                <nuxt-link 
                  to="/regions"
                  active-class="active"
                >
                  <span class="nav-item-name">Regions</span>
                </nuxt-link>
                <ul class="sidebar-sub-level-items">
                  <nuxt-link 
                    tag="li"
                    to="/regions/empty-states"
                    active-class="active"
                  >
                    <a>Empty states</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/regions/navigation"
                    active-class="active"
                  >
                    <a>Navigation</a>
                  </nuxt-link>
                </ul>
              </li>
              <li 
                :class="{
                  active: $route.fullPath.startsWith('/content')
                }"
              >
                <nuxt-link 
                  to="/content"
                  active-class="active"
                >
                  <span class="nav-item-name">Content</span>
                </nuxt-link>
                <ul class="sidebar-sub-level-items">
                  <nuxt-link 
                    tag="li"
                    to="/content/voice-tone"
                    active-class="active"
                  >
                    <a>Voice &amp; tone</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/content/terminology"
                    active-class="active"
                  >
                    <a>Terminology</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/content/punctuation"
                    active-class="active"
                  >
                    <a>Punctuation</a>
                  </nuxt-link>
                </ul>
              </li>
              <li 
                :class="{
                  active: $route.fullPath.startsWith('/usability')
                }"
              >
                <nuxt-link 
                  to="/usability"
                  active-class="active"
                >
                  <span class="nav-item-name">Usability</span>
                </nuxt-link>
                <ul class="sidebar-sub-level-items">
                  <nuxt-link 
                    tag="li"
                    to="/usability/a11y"
                    active-class="active"
                  >
                    <a>Accessibility</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/usability/i18n"
                    active-class="active"
                  >
                    <a>Internationalization</a>
                  </nuxt-link>
                  <nuxt-link 
                    tag="li"
                    to="/usability/helping-users"
                    active-class="active"
                  >
                    <a>Helping users</a>
                  </nuxt-link>
                </ul>
              </li>
              <li 
                :class="{
                  active: $route.fullPath.startsWith('/resources')
                }"
              >
                <nuxt-link 
                  to="/resources"
                  active-class="active"
                >
                  <span class="nav-item-name">Resources</span>
                </nuxt-link>
                <ul class="sidebar-sub-level-items">
                  <nuxt-link 
                    tag="li"
                    to="/resources/design-resources"
                    active-class="active"
                  >
                    <a>Design resources</a>
                  </nuxt-link>
                </ul>
              </li>
            </ul>
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
