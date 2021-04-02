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

### Inheritance and enforcement

When enabled, restrictive settings cascade down our [knowledge architecture](https://about.gitlab.com/handbook/product/product-principles/#principled-adherence-to-the-established-knowledge-architecture) in the form of parent-child relationships. Children inherit settings from their direct parent by default and parents govern the ability to remove restrictions from the child. Children should always be able to configure a more restrictive environment than their parent.

| Do                                                          | Don't                                     |
|-------------------------------------------------------------|-------------------------------------------|
| Show why a setting is inherited and enfored                 | Make a user guess why it is disabled      |

#### Scenario 1

I am a group owner, and I want to enforce a specific setting on all my group's projects except for one of them.

<figure class="figure" role="figure" aria-label="Parent setting being inherited"><img class="figure-img" src="/img/settings-inheritance-scenario-1.gif" alt="Parent restricsts settings" role="img" style="width:100%; max-width:600px; height:auto" /></figure> 

#### Scenario 2

I am a subgroup owner, and enforce a specific setting on all projects. This restriction should remain in place regardless of the group level's selection.

<figure class="figure" role="figure" aria-label="Child defining setting enforcement"><img class="figure-img" src="/img/settings-inheritance-scenario-2.gif" alt="Child defines settings" role="img" style="width:100%; max-width:850px; height:auto" /></figure>

#### When not to default to inheritance and enforcement

In some cases situations forcing inheritance of settings is not performant. In these cases, another mechanism should be provide to allow the child to keep up to date with its parent.

> Example: [Forcing project MR Approvals rules  on open Merge Reuqests is not feasible](https://gitlab.com/gitlab-org/gitlab/-/issues/254958)

Additionally, not all settings are useful with enforcement. If a setting better serves as a sensible default, then it should be customizable and not be inherited by existing childern to avoid breaking changes.

### Grouping

Admin, group, project, and user settings utilize full pages to group different categories inside [accordions](/components/accordion). This is different from feature settings which live next to a specific UI element. On settings pages, the most frequently used options should be made easily available to users by not collapsing the content. Horizontal separators are placed between each category to give elements enough room to breathe.

Each category displays a title and a brief explanation of what users should expect when the the accordion is expanded. Use consistent terms and follow the [voice and tone](/content/voice-tone) guidelines. 

### Saving settings

To keep the experience of settings consistent, avoid using a combination of manual and auto-save in form options. Learn more about [saving progress](/product-foundations/saving-and-feedback#saving-progress).

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

Todo: Add Figma specs for settings

