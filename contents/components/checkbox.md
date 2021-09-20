---
name: Checkbox
description: A checkbox form element represents a boolean option.
vueComponents:
  - GlFormCheckbox
related:
  - radio-button
  - toggle
  - segmented-control
  - dropdown
---

## Examples

[[Example:form-checkbox-checked]]

[[Example:form-checkbox-group-options-array]]

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4347%3A7242)

## Structure

<figure class="figure" role="figure" aria-label="Checkbox structure">
  <img class="figure-img" src="/img/checkbox-structure.svg" alt="Numbered diagram of a checkbox structure" role="img" />
</figure>

1. **Legend** (optional): A title for a group of checkboxes.
1. **Checkbox**: The element that provides the visual affordance for the control.
1. **Label**: Text indicating the option.
1. **Help text** (optional): Used to further clarify an option.

## Guidelines

### When to use

- In a form for a user to indicate a selection of one or more options.

### When not to use

- If only one option in a set can be selected, use [radio buttons](/components/radio-button) instead.
- If you are wanting to have a change immediately applied when an option is selected, consider using a [toggle](/components/toggle) instead.
- If selecting an option would change the state or view of other content, consider using a [segmented control](/components/segmented-control) instead.
- If choices exist outside of a form and as a menu of options, use a [dropdown](/components/dropdown) instead.

### Appearance

- Options are stacked vertically, with one checkbox per line.

### States

- **Unchecked**: The option is unselected.
- **Checked**: The option is selected and the `checked` attribute is applied.
- **Indeterminate**: Occurs when nested checkboxes under a parent checkbox are in both checked and unchecked states. The indeterminate state can only be programmatically set with Javascript ([example](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)).
- **Disabled**: Any of the previous states can also be disabled so that the current state can't be changed.

### Behavior

- Selecting an option changes it state to either checked or unchecked.
- Selecting a nested checkbox can change the state of a parent checkbox to either checked, unchecked, or indeterminate depending on the state of sibling checkboxes.

### Content

- Use a `fieldset` with `legend` to group a set of checkboxes with a clear name and purpose.
- A text label is positioned to the right of the checkbox element (for left-to-right languages), and should be as concise as possible.
- [Help text](/components/form#help-text) can be added below the checkbox label or as a paragraph below the group.

### Accessibility

- Some screen readers will announce the contents of the legend before each nested input to maintain context for a user.
