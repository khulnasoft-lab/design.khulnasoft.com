import Vue from 'vue';
import VueGtag from 'vue-gtag';

const enableAnalytics = localStorage.getItem('GDPR:accepted') === 'true';

Vue.use(VueGtag, {
  config: { id: process.env.GOOGLE_ANALYTICS_ID },
  bootstrap: enableAnalytics,
  appName: 'APP_NAME',
  enabled: enableAnalytics,
  pageTrackerScreenviewEnabled: true,
});
