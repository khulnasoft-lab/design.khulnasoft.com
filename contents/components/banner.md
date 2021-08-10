---
name: Banner
description: Banners promote user awareness for new features or high-priority research initiatives. Unlike [alerts](/components/alert), banners are solely for in-product marketing or for conveying information about a priority feature or study to the user.
vueComponents:
  - GlBanner
related:
  - alert
  - broadcast-message
  - button
  - empty-states
---

## Examples

[[Example:banner-introduction]]

[[Example:banner-promotion-illustration]]

[[Example:banner-promotion]]

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4845%3A7873)

## Structure

<figure class="figure" role="figure" aria-label="Banner structure">
  <img class="figure-img" src="/img/banner-structure.svg" alt="Numbered diagram of a banner structure" role="img" />
</figure>

1. **Container**: Container that wraps the Banner content.
1. **Illustration**: Illustration that compliments the Banner content.
1. **Title**: Top level header for the Banner content.
1. **Body**: The description in the Banner content.
1. **Button**: The primary button used to take action within the Banner content.
1. **Close**: The close icon that dismisses or removes the Banner.

## Guidelines

### When to use 

- Inform a user of a feature that has yet to be enabled. For example, Auto DevOps.
- Promote a new feature. For example, a free trial of GitLab Ultimate featuring the new squash commit functionality in merge requests.
- Solicit user feedback. For example, evaluating a set of new features to help prioritize your roadmap through a survey. 

### When not to use

- Communicate when a feature has not yet been configured or used. For example, when the security dashboard needs further setup or no issues have been added to a project. Instead, use an [empty-state](https://design.gitlab.com/regions/empty-states).
- Give tips and hints on the use of a feature. For example, configuring a review app. Instead, use a tip style [alert](/components/alert).

### Variants

- **Basic Introduction**: Provides a basic introduction to help users get started with an existing feature.
- **Promotion with Banner**: A promotional Banner with an illustration that encourages upgrading to new features.
- **Basic Promotion**: Same as `Promotion with Banner`, but without an illustration.

### Behaviors

- Title should be concise, describing the Banner content or feature being promoted.
- Description describes the benefits of a feature, if encouraged to upgrade or to use that feature.
- Banners do not reappear by default. In rare circumstances, you may present the banner again to a user after some time has passed.
- Banners dismissed temporarily will reappear after **7 days**.
- Primary button directs users to docs for an installation guide or to upgrade their plan to enable features.

### Accessibility

- When an illustration is used, the illustration should be hidden from screen readers with `aria-hidden="true"`.
