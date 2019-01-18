<template>
  <div class="page">
    <nav class="nav-sidebar">
      <div class="nav-sidebar__header">
        <nuxt-link
          to="/"
          class="nav-sidebar__header-anchor p-a-5"
        >
         <svg width="14" height="24" class="m-r-3" fill="none">
            <path d="M5.1777 23.9233l-2.91586-1.5806C.872034 21.5797 0 20.1082 0 18.5004v-6.6765h5.99523v11.6089c0 .436-.43602.7085-.81753.4905z" fill="#DEC9F0"/>
            <path d="M8.9656 15.5845l-7.65755 1.9076C0 17.8191 0 18.3641 0 18.3641V7.38203c0-2.50707 1.68957-4.68714 4.11491-5.28665L12.3992.0243149c.3543-.1090033.6813.1635051.6813.5177651v9.75582c0 2.507-1.6896 4.6871-4.1149 5.2866z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" y1="9.18595" x2="13.0805" y2="9.18595" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7144C6"/>
                <stop offset=".5869" stop-color="#8045C9"/>
                <stop offset=".9995" stop-color="#8E46CC"/>
              </linearGradient>
            </defs>
          </svg>
          Pajamas Design System
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
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/brand-get-started/brand-personas-roles"
              >Personas</nuxt-link>
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
                to="/getting-started/personas"
              >Personas</nuxt-link>
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
