---
name: Settings
related:
  - accordion
  - /regions/navigation
  - /content/voice-tone
  - /content/terminology
  - /product-foundations/saving-and-feedback
---

[Settings](/content/terminology#settings-%26-configuration) is an area in the product that allows users to configure how their instance should behave.

There are several areas within GitLab to manage settings:

- Admin settings
- User settings
- Project or Group settings
- Feature settings

Settings visibility and access depend on the [permissions and roles](https://docs.gitlab.com/ee/user/permissions.html) users have in a particular GitLab instance, group, or project.

- **User settings:** Preferences that you have an ownership of as an individual user. Accessible via the top navigation, under Profile > Preferences. Example setting: Changing how the date and time are displayed.
- **Group settings:** Settings for group features, or settings that apply to projects within a group. Group settings are only visible to [maintainers](https://docs.gitlab.com/ee/user/permissions.html) and above, and are accessed via the Settings section in the [left sidebar](/regions/navigation#left-sidebar). Example setting: Configuring an integration that all projects in the group will inherit.
- **Project settings:** Settings for project features. Project settings are only visible to [maintainers](https://docs.gitlab.com/ee/user/permissions.html) and above, and are accessed via the Settings section in the [left sidebar](/regions/navigation#left-sidebar). Example setting: Enabling protected branches.

## Usage

### Placement of settings

When considering where to place a setting within the product, consider the following:

- **Access:** Which [persona](https://about.gitlab.com/handbook/product/personas/) performs the JTBD related to the setting? What [role](https://docs.gitlab.com/ee/user/permissions.html) or permission does that persona have?
- **Flexibility and control:** At what namespace level (for example, admin, group, or project) should the setting be available? Should the setting cascade down to children namespaces? Should there be a way to override a setting set at a parent namespace?

It should be clear when settings cascade, at which level the setting is set at, and when they can be overridden.

### Grouping

Admin, group, project, and user settings utilize full pages to group different categories inside [accordions](/components/accordion). This is different from feature settings which live next to a specific UI element. On settings pages, the most frequently used options should be made easily available to users by not collapsing the content. Horizontal separators are placed between each category to give elements enough room to breathe.

Each category displays a title and a brief explanation of what users should expect when the the accordion is expanded. Use consistent terms and follow the [voice and tone](/content/voice-tone) guidelines.

### Locked settings

Settings can be locked by admins or group owners. To visualize this, disable the setting option and add a lock icon with a [popover](/components/popover) to explain the nature of the restriction.

![locked-setting-example.png](/img/locked-setting-example.png)

### Saving settings

To keep the experience of settings consistent, avoid using a combination of manual and auto-save in form options. Learn more about [saving progress](/product-foundations/saving-and-feedback#saving-progress).

### User feedback

- Use an [alert](/components/alert) for validation messages that are not directly correlated with an input (for example, failures). These alerts utilize [in-page placement](/components/alert#in-page) when data is saved asynchronously.
- Use a [toast](/components/toast) for success messages that provide immediate confirmation of an action (for example, saving).

### Linking to settings from a feature page

Consider making configuration options more discoverable to users by linking to settings from the feature page.

- Use an icon-only [button](/components/button) with the [settings icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=settings) that, when hovered, shows a [tooltip](/components/tooltip) with the text `Configure in settings`.

<figure class="figure" role="figure" aria-label="Settings button with tooltip on hover">
  <img class="figure-img" src="/img/settings-hover.svg" alt="Settings button with tooltip on hover" role="img" />
  <figcaption class="figure-caption">Settings button with tooltip on hover</figcaption>
</figure>

- Place it at the page-level, in the top right corner of the page, below the breadcrumbs. This sets the expectation that the settings apply to the page as a whole.
- Navigate to the specific configuration section of that page in the settings area. Doing so makes the result of clicking the button predictable and prevents users from needing to navigate away from their task. For example, navigating via the Package Registry page will end up on the **Settings > Packages & Registries** section of settings.

## Layout

Settings can be displayed in two ways:

- Side by side
- Stacked

### Side by side

The side by side layout puts the settings content in a smaller width area when the screen is greater than the `lg` breakpoint (> 992px).

This allows the form content to fit the optimal width at larger screen widths while utilizing white space efficiently.

<todo>Add example of form input at full width versus side by side</todo>

The headings of search section will be placed on the left side. Each section may have an optional description to describe the content.

When scrolling, the headings of each section should remain sticky to provide context of the section form.

By placing the headings next to the settings form content it will shorten the overall page height.

<todo>Add diagram of how many columns this layout will take up</todo>

This layout when the user preference is set to `fluid`, this layout will ignore that setting and will have a max width of 1200px to maintain optimal form input sizes.

### Stacked

For breakpoints less than equal to the `lg` breakpoint (≤ 992px), the form section heading and description will be stacked on top of the form content.

### Mixed layout

There are times when settings form content is not able to fit in the side by side layout. The resolution to these cases are:

- Display that content in the full width area
- Make the group responsible for that settings section aware that they will need to redesign that section to conform to the general pattern

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

<todo>Add Figma specs for settings</todo>
