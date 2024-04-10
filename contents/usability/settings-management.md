---
name: Settings management
related:
  - accordion
  - /patterns/navigation
  - /content/ui-text
  - /usability/saving-and-feedback
---

Settings allow users to control how the platform's features or capabilities should behave or appear. They are configurable options and attributes which present choices to the user to modify baseline functionality.

The Admin Area, groups, subgroups, projects, and individual users have a dedicated area to aggregate their settings together. The [permissions and roles](https://docs.gitlab.com/ee/user/permissions.html) dictate what settings users have access to.

## Usage

### Placement of settings

When considering where to place a setting within the product, consider the following:

- **Access:** Which [persona](https://about.gitlab.com/handbook/product/personas/) performs the JTBD related to the setting? What [role](https://docs.gitlab.com/ee/user/permissions.html) or permission does that persona have?
- **Flexibility and control:** At what namespace level (for example, admin, group, or project) should the setting be available? Should the setting cascade down to children namespaces? Should there be a way to override a setting set at a parent namespace?

### Settings inheritance

By default, settings cascade down from the parent namespace. Admin settings will thus affect groups or projects in the namespace, and group settings will affect projects in the group. However, some settings can be overridden at the group or project level, so it's important to clarify if a setting will be inherited, and whether or not it's possible to override it.

When a parent setting can be overridden, make that clear in the parent setting's UI. For example, add help text to the setting saying: "can be overridden in each project."

When a child setting is enforced from a parent, make this clear in the child setting's UI. For example, consider disabling the child setting and adding a lock icon with a [popover](/components/popover) to explain the nature of the restriction:

<figure-img label="Example of locked setting" src="/img/locked-setting-example.png"></figure-img>

### Grouping

Admin, group, project, and user settings utilize full pages to group different categories inside [accordions](/components/accordion). This is different from feature settings which live next to a specific UI element. On settings pages, the most frequently used options should be made easily available to users by not collapsing the content. Horizontal separators are placed between each category to give elements enough room to breathe.

Each category displays a title and a brief explanation of what users should expect when the the accordion is expanded. Use consistent terms and follow the [UI text](/content/ui-text) guidelines.

Configuration of settings can happen directly within the accordion or can be deferred to a secondary screen using the principles of [progressive disclosure](/usability/progressive-disclosure). For example, consider placing configuration options in a [modal](/components/modal) or on a linked detail page to avoid overwhelming users.

### Saving settings

To keep the experience of settings consistent, avoid using a combination of manual and auto-save in form options. Learn more about [saving progress](/usability/saving-and-feedback#saving-progress).

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

- Setting form elements use the [form layout sizes](/patterns/forms#layout).
- When a settings page contains multiple sections, each section header remains sticky on scroll to provide context.
- A sticky footer containing action buttons (for example, Save and Cancel) should appear when a setting has been changed.
- Settings should appear stacked in a single column.

<figure-img label="Example of settings layout" src="/img/settings-1-column.png"></figure-img>

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

<todo>Add Figma specs for settings</todo>
