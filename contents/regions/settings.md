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

- Admin settings
- User settings
- Project or Group settings
- Feature settings

## Usage

###  Placement of settings options

Settings can be accessed through the top horizontal navigation, sidebar navigation, or contextual options on feature pages.

### Linking to settings from a feature page

Users often look within the feature page to adjust the settings. Make a feature's settings more discoverable by linking to settings from the feature page.

- Use an icon-only [button](/components/button) with the [settings icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=settings) on the feature page. On hover, the button shows a [tooltip](/components/tooltip) with the text "Configure in settings":

<figure class="figure" role="figure" aria-label="Settings button with tooltip on hover">
  <img class="figure-img" src="/img/settings-hover.svg" alt="Settings button with tooltip on hover" role="img" />
  <figcaption class="figure-caption">Settings button with tooltip on hover</figcaption>
</figure>

- Place the button in the top right corner of the page. This sets the expectation that the button leads to the settings for that page as a whole rather than a granular function within the page. 
- Navigate to the specific settings page and category of that feature. For example, navigating to settings via the Package Registry will end up on the Packages & Registries page of settings.


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
