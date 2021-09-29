<script>
import { bootstrap } from 'vue-gtag';

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    isAccepted() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted');
      }
      return false;
    },
  },
  created() {
    if (this.isAccepted === null) {
      this.isOpen = true;
    }
  },
  methods: {
    accept() {
      if (process.browser) {
        bootstrap()
          .then(() => {
            this.isOpen = false;
            localStorage.setItem('GDPR:accepted', 'true');
            window.location.reload();
            return true;
          })
          .catch(() => {});
      }
    },
    reject() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', 'false');
      }
    },
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted');
      }
      return false;
    },
  },
};
</script>

<template>
  <div
    v-if="isOpen"
    class="app-styles gl-fixed gl-left-0 gl-bottom-0 gl-w-full gl-border-1 gl-border-t-solid gl-border-gray-100 gl-z-index-9999"
  >
    <gl-alert
      primary-button-text="Yeah, sure!"
      secondary-button-text="No"
      @primaryAction="accept"
      @secondaryAction="reject"
      @dismiss="reject"
    >
      Can GitLab use cookies for analytics?
    </gl-alert>
  </div>
</template>
