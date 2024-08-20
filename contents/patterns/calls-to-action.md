---
name: Calls to action
related:
  - /usability/ai-human-interaction
  - /usability/feature-management
  - /components/button
  - /components/link
---

## Overview

A _call to action_ (CTA) is a UI element designed to spur a response by guiding users toward a specific action. Use this pattern to connect GitLab Duo with a corresponding trigger, such as buttons or links. GitLab Duo CTAs follow existing [button](/components/button) and [link](/components/link) guidelines, with some additional considerations.

## Guidelines

### Indicate when an action is AI-powered

When reasonable, use an AI-specific icon to set expectations about a CTA's relationship to AI. For Duo Chat features, use the [duo-chat icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~duo-chat). For other AI features, use the [tanuki-ai icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~tanuki-ai).

| Do                                                                                                                                       | Don't                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Default button with tanuki-ai icon" label="Button uses AI-specific icon." src="/img/ai-cta-with-icon.svg"></figure-img> | <figure-img alt="Default button without tanuki-ai icon." label="Button omits AI-specific icon." src="/img/ai-cta-without-icon.svg"></figure-img> |

### CTA label

Avoid CTA labels with "GitLab Duo" or "AI" to keep them simple and brief. Instead,to convey that the feature is AI-powered, use onboarding, supplemental UI copy, or iconography. 

| Do                                                                                                                                   | Don't                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Button with label: Summarize comments" label="Button label is simple and brief." src="/img/ai-cta-with-icon.svg"></figure-img> | <figure-img alt="Button with label: Summarize comments with GitLab Duo" label="Button label is too complex and long." src="/img/ai-cta-too-long.svg"></figure-img> |

### Indicate feature maturity

When a feature is experimental or beta, indicate that with a badge outside the CTA. Also see [how to highlight feature versions](/usability/feature-management#highlighting-feature-versions).

| Do                                                                                                                                                                                                                     | Don't                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Feature maturity is indicated outside of the CTA with a Beta badge embedded in UI copy" label="Feature maturity is indicated outside of the button." src="/img/do-feature-maturity.svg"></figure-img> | <figure-img alt="An AI button containing a Beta badge" label="Feature maturity is indicated in the button." src="/img/dont-feature-maturity.svg"></figure-img> |
