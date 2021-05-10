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

### Do not use a toggle when:

- A submit button is needed to apply or save a selection.
- A change in toggle state would trigger other changes that would have to be applied or saved.
- Two choices don't map to a boolean relationship like on and off.
- There are more than two choices.

If the scenario doesn't align with the usage outlined above, consider using a:

- [Checkbox](/components/checkbox) when multiple items can be selected, including nested items, and the result of the selection has to be saved or submitted.
- [Radio button](/components/radio-button) when only one item can be selected and the result of the selection has to be saved or submitted.
- [Dropdown](/components/dropdown) to make a selection from a list of items.
- [Segmented control](/components/segmented-control) to change a content view or preference in the context of that content.

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



