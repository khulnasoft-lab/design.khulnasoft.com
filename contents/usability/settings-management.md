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

Settings allow users to control how the platform's features or capabilities should behave or appear. They are configurable options and attributes, which present choices to the user to modify baseline functionality.

Admin, groups, projects, and users have dedicated areas to aggregate their settings. [Permissions and roles](https://docs.gitlab.com/ee/user/permissions.html) dictate which settings users have access to.

## Considerations

When considering how to construct a setting within the product, use these questions to help guide your decision-making:

- **Necessity:** Is this control necessary or just nice to have? Remember we strive for [convention over configuration](https://handbook.gitlab.com/handbook/product/product-principles/#convention-over-configuration).
- **Access:** Which type of user is responsible for making configuration decisions? Only specific [roles](https://docs.gitlab.com/ee/user/permissions.html) can manage settings.
- **Availability:** In which [namespace](https://docs.gitlab.com/ee/user/namespace/#types-of-namespaces) should this setting be available?
- **Flexibility and control:** Is this setting intended to set a default value or enforce a specific configuration?
- **Inheritance:** How or if a child namespace will inherit its values from its parent namespace?
- **Relationship:** How does a setting relate to others? Where might users expect to find it in a workflow or user journey?

### Patterns

There are no perfect patterns that will address all usability challenges with settings. A reasonable approach is to examine what already exists, and see if that can be extrapolated into the solution being explored. We've implemented a few concepts, but they are far from being consistent in the product.

#### Don't make users guess

Inheritance can leave settings in a read-only state, but a user should never be left wondering why they cannot change something.

- When a parent setting is overridable, making that clear in the parent setting's UI may necessitate adding informative text.
- When a parent setting is enforced, making this clear in the child setting's UI may require changing the child setting state to disabled and adding a lock icon with a [popover](/components/popover) or [tooltip](/components/tooltip) to explain the nature of the restriction:

<figure-img label="Example of locked setting" src="/img/locked-setting-example.png"></figure-img>

#### Saving changes should make sense

Ideally the experience of saving a settings selection would be consistent, but not all settings can be treated the same. The impact of changing a theme color is far less consequential than adjusting the default branch. The necessity for a `Save changes` button should match the expected user experience.

Never use a combination of manual and auto-save within the same form. Learn more about [saving progress](/usability/saving-and-feedback#saving-progress).

#### Give feedback upon a change

How feedback can be shared depends on the type of action that just occurred.

- Use an [alert](/components/alert) for validation messages that are not directly correlated with an input (for example, failures). These alerts utilize [in-page placement](/components/alert#placement) when data is saved asynchronously.
- Use a [toast](/components/toast) for success messages that provide immediate feedback of an action (for example, saving).

#### Shortcut users to relevant settings

Consider making configuration options more discoverable to users by linking to settings from the feature page.

- Add a cross-link to the top right corner of a page, below the breadcrumbs. This placement sets the expectation that the settings apply only to that specific feature.
- It's recommended to use the icon-only [button](/components/button) with the [settings icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=settings) that, when hovered, shows a [tooltip](/components/tooltip) with the text `Configure in settings`.
- Redirect a user to the specific configuration section in the dedicated settings area. For example, navigating via the Package Registry page will end up on the **Settings > Packages & Registries** section in settings.

<figure-img label="Settings button with tooltip on hover" src="/img/settings-hover.svg"></figure-img>

#### Avoid new top-level settings pages

Often a new page in the top-level of the sidebar is suggested for sake of discoverability. Sometimes this is reasonable, but other times it would just adds bloat to the already full navigation sidebar.

#### Check the URL structure

Once a URL is implemented it become very painful to change, so be mindful of the way it is structured and how it matches the page it maps to.

#### Consistency if your best friend

Being consistent is not a cureall for all usability issues, but users tend to expect to find things in a consistent location. When they are placed in two different places in the group and project level then that is generally not perceived well.

#### Adhere to the knowledge structure

Settings are like features, they introduce capabilities into the product. As such, follow the [established knowledge structure](https://handbook.gitlab.com/handbook/product/product-principles/#principled-adherence-to-the-established-knowledge-architecture) when possible.

### Move away from linking to docs

It's common to find a `?` or `Learn more` link in settings options, while tempting that is not a good pattern to blindly follow. [See when to use a link to documentation](/usability/contextual-help#when-to-use-a-link-to-documentation).

## Disclaimer

The current settings structure is less than ideal, which means there will likely be a drawback to any solution that finds it way into settings. Settings conflates powerful administration with simple configuration which leads to a overwhelming and complex experience. It requires strong familiarity with the structure of GitLab and its feature set. Our settings experience is overdue for an overhaul, but it wil require completely rewriting the experience to get it right. So proceed in a way that makes the most sense given the structure of the settings today.
