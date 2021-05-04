---
name: Toggle
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A140
docs: complete
gitlab_ui: /components/toggle/code
vueComponents:
  - GlToggle
related:
  - checkbox
  - radio-button
  - segmented-control
---

A toggle is a visual switch which acts as a boolean.

## Usage

### When to use a toggle

Use toggles when there is a choice between two selections, it has a default state, the results are effective and noticeable immediately, and there is **no need** for a user to click a submit button.

Consider providing feedback of the toggle state change by using a [toast](/components/toast).

Note: 🔍 Insight: [Toggles were preferred to checkboxes because of relation to turning something on/off](https://dovetailapp.com/projects/c3e1c2a0-fcfd-449e-9994-5c9f3f4f02af/insights/present/aeb1fead-f023-4afc-ad39-68b4462fccc4)

### When not to use a toggle

Avoid using toggles when a submit button is needed. This confuses users and dilutes the experience by preventing instant results.

- When there are 2 choices that don't map to a boolean relationship like on & off.
- There are more than 2 choices.
- Consider using a [checkbox](/components/checkbox) when there are sub-options to select from and there is the ability to select/deselect all. A checkbox has an indeterminate state that could be used to show that not all sub-options have been selected.
- When a change to the toggle state allows for possible customization and requires user action to confirm the change. Some examples of this include adding/removing items from a list and/or changing the default settings.

Components to consider using in these scenarios instead of a toggle:

- [Checkbox](/components/checkbox)
- [Dropdown](/components/dropdown)
- [Radio buttons](/components/radio-button)
- [Segmented control](/components/segmented-control)

### Labels

Toggle labels are set in bold, positioned above the element by default, and should concisely describe what the control does when the toggle is on.

In rare cases and exceptions, the label can be placed to the left of the toggle. Examples include non-inline (block) positioned elements. Don’t use help text if you are placing the label to the left of the toggle. Use the default layout if you are using both a label and help text. 

### Visual Design

Toggles should use high-contrast colors to indicate the states - On and Off.

## Demo

[[Example:toggle-default]]

[[Example:toggle-disabled]]

[[Example:toggle-loading]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A282)



