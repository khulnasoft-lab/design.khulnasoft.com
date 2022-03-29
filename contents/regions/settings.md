---
name: Settings
related:
  - accordion
  - /regions/navigation
  - /content/voice-tone
  - /content/terminology
  - /product-foundations/saving-and-feedback
---

[Settings](/content/terminology#settings-%26-configuration) is an area in the product to allow users to configure how their instance should behave.

There are several areas within GitLab to manage settings:

- **Admin settings**: Settings that apply for the the entire instance. Only accessible for the [owner role](https://docs.gitlab.com/ee/user/permissions.html). Accessible in self-managed instances via the [top menu](regions/navigation#top-menu): Menu > Admin. Example: set a favicon
- **User settings:** Preferences that you have an ownership on as an individual user. Accessible via the top navigation Profile > Preferences. Example: change how date and time is displayed.
- **Group settings:** Settings for group features, or settings that apply to projects within that group. Only accessible for the [maintainer role](https://docs.gitlab.com/ee/user/permissions.html). Accessible via the [sidebar navigation](/regions/navigation#left-sidebar): Settings. Example: set up an integration that all projects in the group inherit.
- **Feature settings:** Settings for project features. Only accessible for the [maintainer role](https://docs.gitlab.com/ee/user/permissions.html). Accessible via the [sidebar navigation](/regions/navigation#left-sidebar): Settings. Example: protected branches

## Usage

### Placement of settings

When considering where to place a setting within the product, consider the following:

- **Access:** Which [persona](https://about.gitlab.com/handbook/product/personas/) performs the JTBD related to the setting? What [role](https://docs.gitlab.com/ee/user/permissions.html) or permission does that persona have?
- **Flexibility and control:** At what namespace level (for example, admin, group, or project) should the setting be available? Should the setting cascade down to children namespaces? Should there be a way to override a setting set at a parent namespace?

It should be clear when settings cascade, at which level the setting is set at, and when they can be overrode.
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

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

Todo: Add Figma specs for settings
