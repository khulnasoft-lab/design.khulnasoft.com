---
name: Calls to action
related:
  - /usability/ai-human-interaction
  - /usability/feature-management
---

## Overview

A _call to action_ (CTA) is a UI element designed to spur a response by guiding users toward a specific action. Use this pattern to connect GitLab Duo with a corresponding trigger, such as [buttons](/components/button) or [links](/components/link).

## Guidelines

### Indicate when an action is AI-powered

Set expectations about a buttons's relationship to AI by using the [tanuki-ai icon](https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/sprite_icons/tanuki-ai.svg) when reasonable.

| Do                                                                                                                                 | Don't                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Default button with tanuki-ai icon" src="/img/ai-cta-with-icon.svg"></figure-img>                                 | <figure-img alt="Default button without tanuki-ai icon" src="/img/ai-cta-without-icon.svg"></figure-img> |
| Use the [tanuki-ai icon](https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/sprite_icons/tanuki-ai.svg) on CTAs, when reasonable. | Don’t leave out the indication that the feature is AI-powered.                                           |

### CTA label

Avoid using "GitLab Duo" or "AI" directly in the CTA label. Use onboarding, supplemental UI copy, or iconography to convey that the feature is AI-powered.

| Do                                                                                          | Don't                                                                                          |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| <figure-img alt="Button with concise UI copy" src="/img/ai-cta-with-icon.svg"></figure-img> | <figure-img alt="Button with overly long UI copy" src="/img/ai-cta-too-long.svg"></figure-img> |
| CTA labels should generally start with a verb and are only a few words.                     | Don’t use lengthy CTA titles as they require more effort to comprehend.                        |

### Indicate feature maturity

Indicate [feature maturity](/usability/feature-management#highlighting-feature-versions) outside of the CTA.

| Do                                                                                                                                                        | Don't                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Feature maturity is indicated outside of the CTA with a Beta badge embedded in UI copy" src="/img/do-feature-maturity.svg"></figure-img> | <figure-img alt="An AI button containing a Beta badge" src="/img/dont-feature-maturity.svg"></figure-img> |
| Show feature maturity outside of the CTA, for example, in supplementary context.                                                                          | Don’t include feature maturity directly in the CTA.                                                       |
