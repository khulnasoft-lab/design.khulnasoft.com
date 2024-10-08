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

Settings allow users to control how the platform's features or capabilities should behave or appear. These configurable options present choices to the user to modify baseline functionality.

Admin, groups, projects, and users have dedicated areas to aggregate their settings, while [permissions and roles](https://docs.gitlab.com/ee/user/permissions.html) dictate which settings users can access.

## Considerations

When considering how to construct a setting within the product, use these questions to help guide your decision-making:

- **Necessity:** Is this control necessary or just nice to have? Remember to strive for [convention over configuration](https://handbook.gitlab.com/handbook/product/product-principles/#convention-over-configuration).
- **Access:** Which type of user is responsible for making configuration decisions? Only specific [roles](https://docs.gitlab.com/ee/user/permissions.html) can manage settings. If possible, avoid placing a setting only in the admin area limited to Administrators on self-managed.
- **Availability:** In which [namespace](https://docs.gitlab.com/ee/user/namespace/#types-of-namespaces) should this setting be available? There is a difference in functionality between user and group namespaces.
- **Flexibility and control:** Is this setting intended to set a default value or enforce a specific configuration? A setting's wording and UI elements should reflect its capability.
- **Inheritance:** How or if a child namespace will inherit its values from its parent namespace? There is a standardized model for implementing [cascading settings](https://docs.gitlab.com/ee/development/cascading_settings.html), but it does not solve all configuration challenges.
- **Relationship:** How does this setting relate to others? Evaluating where users expect to find it in a workflow or user journey can help identify effective placement.

### Patterns

There are no perfect patterns that will address all usability challenges with settings. A reasonable approach is to examine what already exists for extrapolation. Use these best practices to get the most out of the settings experience.

#### Don't make users guess

A user should never be left wondering why they cannot change something.

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

#### Use consistency to your advantage

Being consistent is not a cure-all for all usability issues, but users tend to expect to find things in a consistent location.

Settings in GitLab may not always be fully consistent, so ensure that each setting integrates well within the broader settings structure. The UI treatment should align with similar configuration options.

Settings should be logically grouped with related options and positioned where users would expect. If a setting is available across multiple levels (e.g., group and project settings), ensure its placement remains consistent.

#### Adhere to the knowledge structure

Settings are like features because they introduce capabilities into the product. As such, follow the [established knowledge structure](https://handbook.gitlab.com/handbook/product/product-principles/#principled-adherence-to-the-established-knowledge-architecture) when possible. If a setting is available in multiple levels (e.g., group and project settings), ensure its placement remains consistent across those levels. Each setting should integrate well within the broader information architecture of settings.

### Avoid directly linking to docs

It is not an encouraged pattern to continue using a `?` or `Learn more` link to documentation for settings. Follow [when to use a link to documentation](/usability/contextual-help#when-to-use-a-link-to-documentation) for guidance.

## Disclaimer

The current settings structure is less than ideal, which means most solutions have drawbacks. Conflating powerful administration with simple configuration leads to an overwhelming and complex experience. It requires a strong familiarity with the structure of GitLab and its feature set. The experience is overdue for an overhaul, so proceed in a way that makes the most sense given the structure of settings today.
