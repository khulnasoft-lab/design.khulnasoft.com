---
name: Feature management
---

## Configuration

The ability to configure features by disabling unwanted functionality is [possible at the project level](https://docs.gitlab.com/ee/user/project/settings/#sharing-and-permissions). Admin users cannot disable features at the instance or group levels, as they do not know what functionality end users may need.

## Discovery moments

Feature discovery moments are notices presented in the UI that inform users of additional features. These could be features available in higher tiers, or free features that unlock significant value to users. These notices are contextual and immediately dismissable. Contextual notices relate directly to an action that a user or namespace has performed. Once dismissed, the notice does not reappear unless the user attempts to re-engage with that feature. Re-engaging with a dismissed feature discovery moment might include clicking on a page that contains a locked feature, or clicking on a badge or placeholder. Acceptable patterns for feature discovery moments will be added here as they are tested and approved.

When planning a discovery moment consider the following:

* Why does this feature need to be promoted? Is it a value driver that leads to an increase in conversion?
* If a feature is already being promoted on the page, how does it perform? Will the new notice directly compete with it?
* If two features need a discovery moment, can they be bundled into one? This may be possible, for example, if they are part of the same [Job to be Done](https://about.gitlab.com/handbook/engineering/ux/jobs-to-be-done/).

Use input data to determine where, when, and why a feature discovery moment is needed. After introducing a feature discovery moment, measure its effect on both conversion and feature adoption before making it a permanent part of the product.
