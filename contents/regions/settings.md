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

* Admin settings
* User settings
* Project or Group settings
* Feature settings

## Usage

### Placement of settings options

Settings can be accessed through the [top horizontal navigation](/regions/navigation#global-navigation), [sidebar navigation](/regions/navigation#contextual-navigation), or contextual options on feature pages. 

### Grouping

Admin, group, project, and user settings utilize full pages to group different categories inside [accordions](/components/accordion). This is different from feature settings which live next to a specific UI element. On settings pages, the most frequently used options should be made easily available to users by not collapsing the content. Horizontal separators are placed between each category to give elements enough room to breathe.

Each category displays a title and a brief explanation of what users should expect when the the accordion is expanded. Use consistent terms and follow the [voice and tone](/content/voice-tone) guidelines. 

### Locked settings

Settings can be locked by admins or group owners. To visualize this, disable the setting option and add a lock icon with a [popover](/components/popover) to explain the nature of the restriction.

![locked-setting-example.png](/img/locked-setting-example.png)

### Saving settings

To keep the experience of settings consistent, avoid using a combination of manual and auto-save in form options. Learn more about [saving progress](/product-foundations/saving-and-feedback#saving-progress).

### User feedback

Error and success messages should be displayed within the corresponding section.

| **Do** | **Don't** |
| ------ | --------- |
| <figure class="figure" role="figure" aria-label="Keep message in its section."><img class="figure-img" src="/img/settings-message-do.png" alt="Message in section" role="img" /><figcaption class="figure-caption">Keep message in its section.</figcaption></figure> | <figure class="figure" role="figure" aria-label="Refresh page, and put message at top of page."><img class="figure-img" src="/img/settings-message-do.png" alt="Message in wrong place" role="img" /><figcaption class="figure-caption">Refresh page, and put message at top of page.</figcaption></figure> |

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

Todo: Add Figma specs for settings
