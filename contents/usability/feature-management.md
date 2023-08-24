---
name: Feature management
related:
  - /patterns/forms
---

## Configuration

Disabling unwanted [features is possible in projects](https://docs.gitlab.com/ee/user/project/settings/#sharing-and-permissions), but adding more to this list is not recommended. Disabled features may adversely impact the the [System Usability Scale](https://about.gitlab.com/handbook/engineering/ux/performance-indicators/system-usability-scale/), since it may lead to an unexpected and inconsistent user experience. Admin users cannot disable features at the instance or group levels, as they do not know what functionality end users may need.

## Feature discovery

New features can enhance the experience and unlock significant value for users. However, a user’s context plays a significant role in how they engage with new functionality. Users are more likely to notice and explore features that are relevant to the task they are trying to accomplish, helping them achieve their desired outcome. Before introducing new feature discovery elements consider the following:

* Why does this feature need to be promoted? Is it a value driver that leads to an increase in conversion?
* Is it possible to design the feature so that it doesn't need to be actively promoted? 
* Does the discovery moment need to be shown to all users or only a subset? Who is the target [user persona](https://about.gitlab.com/handbook/marketing/strategic-marketing/roles-personas/#user-personas) or user role?
* If a feature is already being promoted on the page, will the new notice compete with it? Should it replace it instead?
* If two features need a discovery moment, can they be bundled into one? This may be possible, for example, if they are part of the same [Job to be Done](https://about.gitlab.com/handbook/engineering/ux/jobs-to-be-done/).

Use input data to determine where, when, and why a feature discovery element is needed. After introducing a new discovery element, measure its effect on both conversion and adoption before making it a permanent part of the product.

## Patterns for feature discovery

### Contextual notices

Contextual notices are unobtrusive messages that appear when users interact with specific UI elements. They relate directly to an action that a user or namespace has performed. Once dismissed, the notice does not reappear unless the user attempts to re-engage with that feature. 

<figure-img alt="Contextual menu example" label="Contextual menus can reveal additional features relevant to the selected item" src="/img/contextual-menu-example.svg"></figure-img>


### Contextual links

Alongside relevant features, in-page [links](/components/link) allow users to directly access or enable a feature without navigating through multiple layers of menus. The goal is 

<figure-img alt="Contextual link example" label="" src="/img/contextual-link-example.svg"></figure-img>


### Visual Cues

Design elements like icons and [badges](/components/badge) can visually guide users towards new features. For example, a "New" badge or icon on a feature can attract attention.



<figure-img alt="Visual cues example" label="" src="/img/visual-cues.svg"></figure-img>


### Banners

A [banner](/components/banner) can promote awareness of a new feature but they should be used sparingly. Banners that don't match the user's current context can feel irrelevant and contribute to banner blindness or fatigue. Users might start ignoring _all_ banners without fully reading their content. 

<story-viewer component="base-banner" story="no-image" title="Promotion"></story-viewer>





### Highlighting higher tier features

Higher tier features should be easy to identify from the rest of the interface. Consider using the following badge to highlight them: 

<figure-img alt="Premium feature badge" label="Higher tier feature badge" src="/img/higher-tier-feature-badges.svg"></figure-img>

<todo>Replace badge image with live example or link once the new variant has been added to GitLab UI.</todo>
 
#### Specification

* Component name: [`GlBadge`](https://design.gitlab.com/components/badge/code)
* Variant: `Tier`
* Size: `MD`
* Icon: `16`

#### How to use

* Ensure there is a clear connection between the badge and the feature being highlighted. For example, place the badge next to the name of the feature.
* When using the icon only badge, use a [tooltip](/components/tooltip) to display the tier name.
* Tier badge should only be displayed if the active plan is lower than that of the feature. For example if the active plan is Ultimate, and the related feature is also Ultimate, there is no need to display the tier badge.
* For trials, the tier badge should always be displayed.

#### Behaviour

* Links to [tiers details](https://about.gitlab.com/pricing/).
* Can be removed from the UI via group or instance level settings.

<todo>Add links to the documentation.</todo>

### Highlighting feature versions

Similar to higher tier features, feature versions like Experiment and Beta should be easily identifiable, using a [badge](/components/badge/) with an explanation in a [popover](/components/popover):

| Experiment | Beta |
| ------ | ------ |
| <figure-img label="Experiment feature badge" src="/img/experiment-feature-badge.svg"></figure-img> | <figure-img label="Beta feature badge" src="/img/beta-feature-badge.svg"></figure-img> |
| **What's an Experiment**<br>An Experiment is a feature that's in the process of being developed. It's not production-ready. We encourage users to try Experimental features and provide feedback.<br><br>An Experiment:<ul><li>May be unstable</li><li>Can cause data loss</li><li>Has no support and might not be documented</li><li>Can be removed at any time</li></ul> | **What's Beta?**<br>A Beta feature is not production-ready, but is unlikely to change drastically before it's released. We encourage users to try Beta features and provide feedback.<br><br>A Beta feature:<ul><li>May be unstable</li><li>Should not cause data loss</li><li>Is supported by a commercially reasonable effort</li><li>Is complete or near completion</li></ul> |

<todo>Replace badges with live example or link once a dedicated component has been added to GitLab UI.</todo>
#### Specification

* Component name: [`GlBadge`](https://design.gitlab.com/components/badge/code)
* Variant: `neutral`
* Size: `md` or `sm`

#### How to use

* Ensure there is a clear connection between the badge and the feature being highlighted. For example, place the badge next to the name of the feature. 
* When placing the badge, consider the available space and opt for a small badge if needed. The badge can be displayed either before or after the user interacts with the feature.
* When the feature becomes Generally Available, make sure the badge is removed.  

## Visibility

Feature visibility is dependent on a user's permissions or subscription levels, and on which features they've chosen to enable.

### When to hide a feature

* A feature is hidden when the user shouldn't have access to it due to a lack of permissions. Hiding the feature is recommended because the user doesn't need to be aware of the functionality, and there is no UI that would allow them to obtain access. For example, we should hide the delete branch button if the user's role does not allow deletion of branches.

### When to keep a feature visible

* When the user has access to a feature but it's not currently enabled. In this scenario, a feature may be visible but disabled. When a feature is disabled, there should be an explanation for why it's disabled, or controls that allow a user to enable or request access to the feature.
* When child-level settings are enabled from a parent level. In this scenario, a feature may be disabled or replaced with a read-only equivalent. There should be text explaining that the setting is configured at the parent level.
* Avoid using a [tooltip](/components/tooltip) to explain why an element is disabled as keyboard users can't move focus to the trigger to reveal the message. Exposing the message in the UI is preferred. For example, instead of disabling the merge button on a merge request with outstanding approvals, the button is replaced with copy to explain the state, _Merge blocked: all required approvals must be given_.
