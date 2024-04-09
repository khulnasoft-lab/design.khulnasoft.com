---
name: Settings management
related:
  - accordion
  - /patterns/navigation
  - /content/ui-text
  - /usability/saving-and-feedback
---

Settings allow users to control how the platform and its features or capabilities should behave or appear. It should be comprised of configurable options and attributes which present choices to the user to modify baseline functionality.

## Best practices

- When possible, allow users to modify task specific options within their current context. Placing settings within a dedicated area requires users to suspend their task to make adjustments, which can be jarring.
- Users should be able to glance at settings and understand all the individual selections and effects.
- Put options that are rarely changed in the dedicated settings area. Most users will not be returning to settings on a regular basis.
- Minimize the number of settings offered and keep them simple. Too many settings can make a platform feel overwhelming, and minimizing the number of configuration options aligns with our Product Principle of [Convention over Configuration](https://handbook.gitlab.com/handbook/product/product-principles/#convention-over-configuration).
- Organize items intuitively as possible. Prioritize consistent placement across in the settings are for within the Admin Area, Groups, and Projects. from there consider which settings page and section is best suited for the configuration option. Consider the proximity of other settings and avoid ambiguous hierarchy.
- Show only what is relevant for decision making. It can be tempting to add a wall of help text, but point users to the docs if necessary.

## Considerations

- Generally, most pages in GitLab are not considered within the scope settings.
- Evaluate what [namespace](https://docs.gitlab.com/ee/user/namespace/) to introduce a setting. It's common to need a setting across all levels of GitLab Instance (Admin Area), Groups, Subgroups, and Projects.
- The structure of a settings page should be as simple as possible. Complex interactions should be nested to avoid weighing down the page.
- Determine [how a setting will cascade](/usability/settings-management#settings-inheritance) to children namespaces and if an override option is necessary.

## Visibility

The [permissions and roles](https://docs.gitlab.com/ee/user/permissions.html) users have in a particular GitLab instance, group, or project dictate what they have access to.

## Behavior

There are aspects of the settings experience that are unique to GitLab to keep the platform scalable, performant, and more consistent.

### Dedicated area for settings

The Admin Area, Groups, Subgroups, Projects, and Users have a dedicated area to aggregate their settings together.

### Settings inheritance

By default, settings cascade down from the parent namespace. Admin settings will thus affect groups or projects in the namespace, and group settings will affect projects in the group. However, some settings can be overridden at the group or project level, so it's important to clarify if a setting will be inherited, and whether or not it's possible to override it.

When a parent setting can be overridden, make that clear in the parent setting's UI. For example, add help text to the setting saying: "can be overridden in each project."

When a child setting is enforced from a parent, make this clear in the child setting's UI. For example, consider disabling the child setting and adding a lock icon with a [popover](/components/popover) to explain the nature of the restriction:

<figure-img label="Example of locked setting" src="/img/locked-setting-example.png"></figure-img>

## Structure

### Subpages

In the admin area, groups, and projects there are subpages that break up settings into distinct areas. New pages must follow a [navigation change request](https://about.gitlab.com/handbook/product/ux/navigation/)

### Layout

Each page groups different categories inside [accordions](/components/accordion). Ideally, the most frequently used options should appear towards the top and made easily available to users by not collapsing the content. Horizontal separators are placed between each category to give elements enough room to breathe.

Each category displays a title and a brief explanation of what users should expect when the the accordion is expanded. Use consistent terms and follow the [UI text](/content/ui-text) guidelines.

Configuration of settings can happen directly within the accordion or can be deferred to a secondary screen using the principles of [progressive disclosure](/usability/progressive-disclosure). For example, consider placing configuration options in a [modal](/components/modal) or on a linked detail page to avoid overwhelming users.

- Setting form elements use the [form layout sizes](/patterns/forms#layout).
- When a settings page contains multiple sections, each section header remains sticky on scroll to provide context.
- A sticky footer containing action buttons (for example, Save and Cancel) should appear when a setting has been changed.
- Settings should appear stacked in a single column.

### Saving settings

To keep the experience of settings consistent, avoid using a combination of manual and auto-save in form options. Learn more about [saving progress](/usability/saving-and-feedback#saving-progress). We often need to rely on a <kbd>Save changes</kbd> button to keep form submission straightforward, even though it is not ideal.

### User feedback

- Use an [alert](/components/alert) for validation messages that are not directly correlated with an input (for example, failures). These alerts utilize [in-page placement](/components/alert#placement) when data is saved asynchronously.
- Use a [toast](/components/toast) for success messages that provide immediate confirmation of an action (for example, saving).

### Linking to settings from a feature page

Consider making configuration options more discoverable to users by linking to settings from the feature page.

- Use an icon-only [button](/components/button) with the [settings icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=settings) that, when hovered, shows a [tooltip](/components/tooltip) with the text `Configure in settings`.

<figure-img label="Settings button with tooltip on hover" src="/img/settings-hover.svg"></figure-img>

- Place it at the page-level, in the top right corner of the page, below the breadcrumbs. This sets the expectation that the settings apply to the page as a whole.
- Navigate to the specific configuration section of that page in the settings area. Doing so makes the result of clicking the button predictable and prevents users from needing to navigate away from their task. For example, navigating via the Package Registry page will end up on the **Settings > Packages & Registries** section of settings.

## Layout

<figure-img label="Example of settings layout" src="/img/settings-1-column.png"></figure-img>

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

<todo>Add Figma specs for settings</todo>
