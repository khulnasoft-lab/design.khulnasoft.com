import { glClientSDK } from '@gitlab/application-sdk-browser';

const ONETRUST_ANALYTICS_CONSENT_GROUP = 'C0002';

let glClient = null;

const isAnalyticsConsented = () =>
  (typeof window?.OnetrustActiveGroups === 'string' &&
    window?.OnetrustActiveGroups.split(',').includes(ONETRUST_ANALYTICS_CONSENT_GROUP)) ||
  true;

const createClientIfNecessary = () => {
  if (glClient) {
    return;
  }
  if (!isAnalyticsConsented()) {
    return;
  }

  glClient = glClientSDK({
    appId: process.env.GITLAB_ANALYTICS_ID,
    host: process.env.GITLAB_ANALYTICS_URL,
  });
};

// handle changes to cookie consent
window.gtagOneTrustCallback = () => {
  createClientIfNecessary();
};

// eslint-disable-next-line import/no-default-export
export default ({ app }) => {
  createClientIfNecessary();

  app.router.afterEach(() => {
    glClient?.page();
  });
};
