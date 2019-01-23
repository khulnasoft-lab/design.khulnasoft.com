<template>
  <div class="page">
    <nav class="nav-sidebar">
      <div class="nav-sidebar__header">
        <nuxt-link
          to="/"
          class="nav-sidebar__header-anchor p-a-5"
        >
          <svg height="36" viewBox="0 0 1231 342" xmlns="http://www.w3.org/2000/svg" class="tanuki-logo">
            <g fill="none" fill-rule="evenodd">
              <g fill="#8C929D" class="wordmark">
                <path d="M764.367 94.13h-20.803l.066 154.74h84.155v-19.136h-63.352l-.066-135.603zM907.917 221.7c-5.2 5.434-13.946 10.87-25.766 10.87-15.838 0-22.22-7.797-22.22-17.957 0-15.354 10.637-22.678 33.332-22.678 4.255 0 11.11.472 14.655 1.18v28.586zm-21.51-93.787c-16.8 0-32.208 5.952-44.23 15.858l7.352 12.73c8.51-4.962 18.91-9.924 33.802-9.924 17.02 0 24.585 8.742 24.585 23.39v7.56c-3.31-.71-10.164-1.184-14.42-1.184-36.404 0-54.842 12.757-54.842 39.454 0 23.86 14.656 35.908 36.876 35.908 14.97 0 29.314-6.852 34.278-17.954l3.782 15.118h14.657v-79.14c0-25.04-10.874-41.815-41.84-41.815zM995.368 233.277c-7.802 0-14.657-.945-19.858-3.308v-71.58c7.093-5.908 15.84-10.16 26.95-10.16 20.092 0 27.893 14.174 27.893 37.09 0 32.6-12.53 47.957-34.985 47.957m8.742-105.364c-18.592 0-28.6 12.64-28.6 12.64V120.59l-.066-26.458H955.116l.066 150.957c10.164 4.25 24.11 6.613 39.24 6.613 38.768 0 57.442-24.804 57.442-67.564 0-33.783-17.26-56.227-47.754-56.227M538.238 110.904c18.438 0 30.258 6.142 38.06 12.285l8.938-15.477c-12.184-10.678-28.573-16.417-46.053-16.417-44.204 0-75.17 26.932-75.17 81.267 0 56.935 33.407 79.14 71.624 79.14 19.148 0 35.46-4.488 46.096-8.976l-.435-60.832V162.76h-56.734v19.135h36.167l.437 46.184c-4.727 2.362-13 4.252-24.11 4.252-30.73 0-51.297-19.32-51.297-60.006 0-41.34 21.275-61.422 52.478-61.422M684.534 94.13h-20.33l.066 25.988v89.771c0 25.04 10.874 41.814 41.84 41.814 4.28 0 8.465-.39 12.53-1.126v-18.245c-2.943.45-6.083.707-9.455.707-17.02 0-24.585-8.74-24.585-23.387v-61.895h34.04v-17.01H684.6l-.066-36.617zM612.62 248.87h20.33V130.747h-20.33v118.12zM612.62 114.448h20.33V94.13h-20.33v20.318z"/>
              </g>
              <path d="M185.398 341.13l68.013-209.322H117.39L185.4 341.13z" fill="#E24329" class="tanuki-shape tanuki-left-ear"/>
              <path d="M185.398 341.13l-68.013-209.322h-95.32L185.4 341.128z" fill="#FC6D26" class="tanuki-shape tanuki-left-eye"/>
              <path d="M22.066 131.808l-20.67 63.61c-1.884 5.803.18 12.16 5.117 15.744L185.398 341.13 22.066 131.807z" fill="#FCA326" class="tanuki-shape tanuki-left-cheek"/>
              <path d="M22.066 131.808h95.32L76.42 5.735c-2.107-6.487-11.284-6.487-13.39 0L22.065 131.808z" fill="#E24329" class="tanuki-shape tanuki-nose"/>
              <path d="M185.398 341.13l68.013-209.322h95.32L185.4 341.128z" fill="#FC6D26" class="tanuki-shape tanuki-right-eye"/>
              <path d="M348.73 131.808l20.67 63.61c1.884 5.803-.18 12.16-5.117 15.744L185.398 341.13 348.73 131.807z" fill="#FCA326" class="tanuki-shape tanuki-right-cheek"/>
              <path d="M348.73 131.808h-95.32L294.376 5.735c2.108-6.487 11.285-6.487 13.392 0l40.963 126.073z" fill="#E24329" class="tanuki-shape tanuki-right-ear"/>
            </g>
          </svg>
        </nuxt-link>
      </div>
      <div class="nav-sidebar__body m-b-3">
        <template v-if="contentTree">
          <ul 
            :open="$route.fullPath.startsWith('/brand-get-started/')" 
            class="nav-sidebar__section"
          >
            <li>
              <span class="nav-sidebar__section-title">Brand</span>
            </li>
            <sub-menu :content-tree="contentTree" category="brand-get-started" category-name="Get started">
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/brand-get-started/brand-personality"
              >Brand personality</nuxt-link>
            </sub-menu>
            <sub-menu :content-tree="contentTree" category="brand-foundations" category-name="Foundations">
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/brand-foundations/gitlab-logo"
                >The GitLab logo</nuxt-link>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/brand-foundations/colors"
                >Colors</nuxt-link>
                <nuxt-link
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/brand-foundations/typography"
                >Typography</nuxt-link>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/brand-foundations/buttons"
                >Buttons</nuxt-link>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/brand-foundations/iconography"
                >Iconography</nuxt-link>
            </sub-menu>
            <sub-menu :content-tree="contentTree" category="brand-content" category-name="Content">
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/brand-content/voice-tone"
              >Voice &amp; Tone</nuxt-link>
            </sub-menu>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-1" 
              to="/brand-resources/resources"
            >Resources</nuxt-link>
          </ul>
          <ul 
            :open="$route.fullPath.startsWith('/product/')" 
            class="nav-sidebar__section"
          >
            <li>
              <span class="nav-sidebar__section-title">Product</span>
            </li>
            <sub-menu :content-tree="contentTree" category="getting-started" category-name="Get started">
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/getting-started/structure"
              >Structure</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/getting-started/contributing"
              >Contributing</nuxt-link>
            </sub-menu>
            <sub-menu :content-tree="contentTree" category="foundations">
              <nuxt-link
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                to="/foundations/colors"
              >Colors</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                to="/foundations/iconography"
              >Iconography</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                to="/foundations/motion"
              >Motion</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                to="/foundations/illustration"
              >Illustration</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                to="/foundations/typography"
              >Typography</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                to="/foundations/interactions"
              >Interactions</nuxt-link>
              <nuxt-link
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                to="/foundations/saving-and-feedback"
              >Saving and feedback</nuxt-link>
            </sub-menu>
            <sub-menu :content-tree="contentTree" category="layout">
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/layout/spacing"
              >Spacing</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/layout/grid"
              >Grid</nuxt-link>
            </sub-menu>
            <sub-menu :content-tree="contentTree" category="components">
              <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/components/status"
                >Status</nuxt-link>
            </sub-menu>
            <sub-menu :content-tree="contentTree" category="regions" />
            <sub-menu :content-tree="contentTree" category="content">
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/content/voice-tone"
              >Voice &amp; tone</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/content/terminology"
              >Terminology</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/content/punctuation"
              >Punctuation</nuxt-link>
            </sub-menu>
            <sub-menu :content-tree="contentTree" category="usability">
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/usability/i18n"
              >Internationalization</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/usability/helping-users"
              >Helping users</nuxt-link>
            </sub-menu>
            <sub-menu :content-tree="contentTree" category="resources">
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/resources/design-resources"
              >Design resources</nuxt-link>
            </sub-menu>
          </ul>
          <ul
            :open="$route.fullPath.startsWith('/research/')" 
            class="nav-sidebar__section"
          >
            <span class="nav-sidebar__section-title">Research</span>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/research/get-started"
            >Get started</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/research/personas"
            >Personas</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/research/toolkit"
            >Toolkit</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/research/first-look"
            >First look</nuxt-link>
          </ul>
          <ul 
            :open="$route.fullPath.startsWith('/accessibility/')" 
            class="nav-sidebar__section"
          >
            <span class="nav-sidebar__section-title">Accessibility</span>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/accessibility/a11y"
            >Statement of compliance</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/accessibility/vpat"
            >VPAT</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/accessibility/best-practices"
            >Best practices</nuxt-link>
          </ul>
          <ul 
            :open="$route.fullPath.startsWith('/contribute/')" 
            class="nav-sidebar__section"
          >
            <span class="nav-sidebar__section-title">Contribute</span>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/contribute/get-started"
            >Get started</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/contribute/resources"
            >Resources</nuxt-link>
          </ul>
        </template>
        <template v-else>
          Loading ...
        </template>
      </div>
    </nav>
    <div :class="contentWrapper"> <nuxt /> </div>
  </div>
</template>

<script>
import subMenu from '../components/sub_menu.vue';

export default {
  components: {
    subMenu,
  },
  data() {
    return {
      contentTree: null,
    };
  },
  computed: {
    contentWrapper() {
      return this.$route.fullPath === '/' ? '' : 'content';
    },
  },
  created() {
    this.$axios
      .$get(`/contents/contentTree.json`)
      .then(treeResult => {
        this.contentTree = treeResult;
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e);
      });
  },
};
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
</style>
