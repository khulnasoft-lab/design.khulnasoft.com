---
name: Settings management
related:
  - tooltip
  - popover
  - alert
  - toast
  - /usability/navigation-sidebar
  - /content/ui-text
  - /usability/saving-and-feedback
  - /usability/progressive-disclosure
---

Settings allow users to control how the platform's features or capabilities should behave or appear. Users can modify these configurable options to adjust baseline functionality.

Admin area, groups, projects, and users have dedicated areas to aggregate their settings, while [permissions and roles](https://docs.gitlab.com/ee/user/permissions.html) dictate which settings users can access.

## Considerations

When considering how to construct a setting within the product, use these questions to help guide your decision-making:

- **Necessity:** Is this control necessary or just nice to have? Remember to strive for [convention over configuration](https://handbook.gitlab.com/handbook/product/product-principles/#convention-over-configuration).
- **Access:** Which type of user is responsible for making configuration decisions? Only specific [roles](https://docs.gitlab.com/ee/user/permissions.html) can manage settings. If possible, avoid placing a setting only in the admin area, because it is limited to Administrators on self-managed.
- **Availability:** In which [namespace](https://docs.gitlab.com/ee/user/namespace/#types-of-namespaces) should this setting be available? There is a difference in functionality between user and group namespaces.
- **Flexibility and control:** Is this setting intended to set a default value or enforce a specific configuration? A setting's wording and UI elements should reflect its capability.
- **Inheritance:** How or if a child namespace will inherit its values from its parent namespace? There is a standardized model for implementing [cascading settings](https://docs.gitlab.com/ee/development/cascading_settings.html), but it does not solve all configuration challenges.
- **Relationship:** How does this setting relate to others? Evaluating where users expect to find it in a workflow or user journey can help identify effective placement.

### Patterns

The current settings structure is less than ideal, which means most solutions have drawbacks. Conflating powerful administration with simple configuration leads to an overwhelming and complex experience. It requires a strong familiarity with GitLab's structure and feature set.

There is no perfect solution that will address all usability challenges with settings, so a reasonable approach is to examine what already exists for extrapolation. These are best practices to get the most out of the settings experience.

#### Clarify criteria

A user should never be left wondering why they cannot change something.

- When a setting is dependent on another configuration or limited to a specific role, explaining its requirements minimizes the need for cross-referencing documentation.
- When a parent setting is overridable, making that clear in the parent setting's UI may necessitate adding informative text.
- When a parent setting is enforced, making this clear in the child setting's UI may require changing the child setting state to disabled and adding a lock icon with a [popover](/components/popover) or [tooltip](/components/tooltip) to explain the nature of the restriction:

<figure-img label="Example of locked setting" src="/img/locked-setting-example.png"></figure-img>

#### Saving changes should make sense

Ideally, the experience of saving a settings selection would be consistent, but not all settings can be treated the same. The impact of changing a theme color is far less consequential than adjusting the default branch. The necessity for a `Save changes` button should match the expected user experience.

Never use a combination of manual and auto-save within the same form. Learn more about [saving progress](/usability/saving-and-feedback#saving-progress).

#### Shortcut users to relevant settings

Consider making configuration options more discoverable to users by linking to settings from the feature page.

- Add a cross-link to the top right corner of a page, below the breadcrumbs. This placement sets the expectation that the settings apply only to that specific feature.
- It's recommended to use the icon-only [button](/components/button) with the [settings icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=settings) with a [tooltip](/components/tooltip) stating `Configure in settings`.
- Redirect a user to the specific configuration section in the dedicated settings area. For example, navigating from the Package Registry page redirects to **Settings > Packages & Registries** section.

<figure-img label="Settings button with tooltip on hover" src="/img/settings-hover.svg"></figure-img>

#### Avoid new navigation entries

Adding new setting pages to the navigation sidebar is often proposed to boost discoverability. Consider increasing discoverability by highlighting the setting elsewhere, such as in-page [shortcuts](#shortcut-users-to-relevant-settings). Remember to justify any changes to the navigation through an [evaluation](https://handbook.gitlab.com/handbook/product/ux/navigation/#how-do-i-evaluate-navigation-changes) to prevent bloat.

#### Check the URL structure

Thoughtfully construct the URL to match the page it maps to since it will be painful to change later.

#### Maintain consistency and adhere to the knowledge structure

Consistency and logical organization are crucial for effective settings management in GitLab. Users expect to find settings in predictable locations, so it's important to integrate each setting within the broader settings structure and information architecture.

- Group related options logically and position them where users would intuitively look for them.
- Ensure consistent placement of settings across multiple levels when applicable.
- Align the UI treatment with similar configuration options throughout the platform.
- Follow the [established knowledge structure](https://handbook.gitlab.com/handbook/product/product-principles/#principled-adherence-to-the-established-knowledge-architecture) when introducing new settings or capabilities.

Consider settings as features that introduce capabilities into GitLab, and organize them accordingly within the broader information architecture.

#### Avoid directly linking to docs

It is not an encouraged pattern to continue using a `?` or `Learn more` link to documentation for settings. Follow [when to use a link to documentation](/usability/contextual-help#when-to-use-a-link-to-documentation) for guidance.
