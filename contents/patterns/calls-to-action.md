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

Set expectations about a buttons's relationship to AI by using an AI-specific icon when reasonable. For Duo Chat features, use the [duo-chat icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~duo-chat). For other AI features, use the [tanuki-ai icon](https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/sprite_icons/tanuki-ai.svg).

| Do                                                                                                                                       | Don't                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Default button with tanuki-ai icon" label="Button uses AI-specific icon." src="/img/ai-cta-with-icon.svg"></figure-img> | <figure-img alt="Default button without tanuki-ai icon." label="Button omits AI-specific icon" src="/img/ai-cta-without-icon.svg"></figure-img> |

### CTA label

Avoid using "GitLab Duo" or "AI" directly in the CTA label. Instead, use onboarding, supplemental UI copy, or iconography to convey that the feature is AI-powered.

| Do                                                                                                                                   | Don't                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Button with concise UI copy" label="Button briefly describes action." src="/img/ai-cta-with-icon.svg"></figure-img> | <figure-img alt="Button with overly long UI copy" label="Button label is overly long." src="/img/ai-cta-too-long.svg"></figure-img> |

### Indicate feature maturity

When a feature is experimental or beta, display that information with a badge outside a button according to the [guidelines](/usability/feature-management#highlighting-feature-versions).

| Do                                                                                                                                                                                                                     | Don't                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Feature maturity is indicated outside of the CTA with a Beta badge embedded in UI copy" label="Feature maturity is indicated outside of the button." src="/img/do-feature-maturity.svg"></figure-img> | <figure-img alt="An AI button containing a Beta badge" label="Feature maturity is indicated in the button." src="/img/dont-feature-maturity.svg"></figure-img> |
