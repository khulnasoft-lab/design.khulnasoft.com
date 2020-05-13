---
name: Labels
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A127
docs: complete
gitlab_ui: https://gitlab.com/gitlab-org/gitlab-ui/-/tree/master/src/components/base/label
vueComponents:
  - GlLabel
related:
  - badge
---

Labels are editable objects that allow users to manually categorize other objects, like issues, merge requests, and epics. They have a name, description, and a customizable color. They provide a quick way to recognize which categories the labeled object belongs to.

Labels should not be confused with [badges](/components/badge). Badges highlight more generic object metadata that are not categories.

## Usage

Labels are usually displayed in that object's detail page and in list views, next to the corresponding object. Clicking on a label navigates the user to a list view filtered by that label. Users can also manually filter lists and other types of views by labels.

In most places, a label's description is shown in a [tooltip](/components/tooltip) when hovering the label. But if the label's description appears on the page with no need for user interaction, do not show it in a tooltip.

Scoped labels are a sub-type of labels, and their usage is determined by the user. A scoped label is differentiated from a regular label by the contrasting colors on the left and right sides of the label.

## Demo

### Basic example

[[Example:label-basic]]

### Scoped label example

[[Example:label-scoped]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=425%3A127)
