---
name: Banner
description: A banner promotes awareness of a new feature or high-priority research initiative.
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

1. **Container**: Wraps the content.
1. **Illustration** (optional): Compliments the content.
1. **Title**: Header for the content.
1. **Message**: Text content indicating the purpose and potential next steps.
1. **Action**: A single button to provide an explicit action the user can take based on the message.
1. **Dismissal**: Permanently removes the banner for a user.

## Guidelines

### When to use 

- Inform a user of a feature that isn't enabled.
- Promote a new feature.
- Solicit user feedback. 

### When not to use

- Communicate when a feature has not yet been configured or used. For example, when the security dashboard needs further setup or no issues have been added to a project. Instead, use an [empty-state](https://design.gitlab.com/regions/empty-states).
- Give tips and hints on the use of a feature. For example, configuring a review app. Instead, use a tip style [alert](/components/alert).

### Variants

- **Basic Introduction**: Provides a basic introduction to help users get started with an existing feature.
- **Promotion with Banner**: A promotional Banner with an illustration that encourages upgrading to new features.
- **Basic Promotion**: Same as `Promotion with Banner`, but without an illustration.

### Behavior

- A banner can always be dismissed.
  - It doesn't reappear by default and in rare circumstances, the banner can appear again after some time has passed.
  - When temporarily dismissed, it will reappear after **7 days**.
- The action should direct a user to docs for an installation guide or to where they can upgrade their plan to enable a feature.

### Content

- Title should be concise and indicate the purpose of the banner.
- The message describes the benefits of using or upgrading to a feature or the benefit of providing feedback.
- An optional illustration uses the [medium](/product-foundations/illustration#medium) size, and supports the message.

### Accessibility

- When an illustration is used, it should be hidden from screen readers with `aria-hidden="true"`.
