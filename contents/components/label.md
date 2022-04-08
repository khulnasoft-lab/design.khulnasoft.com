---
name: Label
description: Labels are editable objects that allow users to manually categorize other objects, like issues, merge requests, and epics. They have a name, description, and a customizable color. They provide a quick way to recognize which categories the labeled object belongs to.
stories:
  - base-label--default
related:
  - badge
---

## Examples

<story-viewer story-name="base-label--default" title="Default label"></story-viewer>

<story-viewer story-name="base-label--scoped" title="Scoped label"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A127)

## Structure

<admonition type="todo">Add structure image.</admonition>

## Guidelines

### When to use

<admonition type="todo">Add when to use.</admonition>

### When not to use

- If displaying more generic object metadata that are not categories, consider using [badges](/components/badge). 

### Variants

1. **Scoped Labels**: Scoped labels are a unique type of label, characterized by their mutually exclusive behavior. Each scoped label has a `key` and a `value`. An issue, epic, or merge request can only have one scoped label of a specific `key`. For example, if an issue has the label `workflow::ready for design`, it cannot have any other `workflow::` labels at the same time. Applying a second `workflow::` label will automatically replace the former. A scoped label is visually differentiated from a regular label by the contrasting colors on the left and right sides of the label.

### Behavior

- Clicking on a label navigates the user to a list view filtered by that label.
- Users can manually filter lists and other types of views by labels.
- Labels can include a [close icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~close) that, when clicked, remove the label from the interface.

### Content

#### Description

- A label's description is shown in a [tooltip](/components/tooltip) when hovering the label.

### Accessibility

<admonition type="todo">Add accessibility guidelines.</admonition>
