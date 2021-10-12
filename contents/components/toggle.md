---
name: Toggle
description: A toggle is a visual switch which acts as a boolean.
vueComponents:
  - GlToggle
related:
  - checkbox
  - radio-button
  - segmented-control
---

## Examples

[[Example:toggle-default]]

[[Example:toggle-disabled]]

[[Example:toggle-loading]]

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A140)

## Structure

<figure class="figure" role="figure" aria-label="Toggle structure">
  <img class="figure-img" src="/img/toggle-structure.svg" alt="Numbered diagram of a toggle structure" role="img" />
</figure>

1. **Label**: Describes the control when the toggle is on.
1. **Switch**: Visual indication of whether the toggle is on or off. 
1. **Body**: Containing body for the switch to move on and off.
1. **Help text**: Provides additional context for the toggle.

## Guidelines

### When to use

- There's a binary choice for enabling a setting ([ux-research#1215](https://gitlab.com/gitlab-org/ux-research/-/issues/1215#note_492752885)). For examples, choices that follow a pattern of on/off, true/false, enable/disable, or activate/deactivate.
- The item being toggled has a default state. For example, notifications default to off for a merge request you haven't participated in. 
- The result of changing the toggle state is immediately effective and there's **no need** for an additional action to apply or save a change.

### When not to use

- A submit button is needed to apply or save a selection.
- When the setting exists within a form that has other elements, like text inputs or checkboxes, that need to be saved or submitted.
- Two choices don't map to a boolean relationship like on/off.
- There are more than two choices.
- Use a [Checkbox](/components/checkbox) when multiple items can be selected, including nested items, and the result of the selection has to be saved or submitted.
- Use a [Radio button](/components/radio-button) when only one item can be selected and the result of the selection has to be saved or submitted.
- Use a [Dropdown](/components/dropdown) to make a selection from a list of items.
- Use a [Segmented control](/components/segmented-control) to change a content view or preference in the context of that content.

### Behavior

- Consider providing feedback of the toggle state change by using a [toast](/components/toast).

### Content

#### Labels

- Toggle labels are set in bold, positioned above the element by default, and should concisely describe what the control does when the toggle is on.
- In rare cases and exceptions, the label can be placed to the left of the toggle. Examples include non-inline (block) positioned elements.

#### Description and help text

- An optional 1–2 sentence description underneath the label provides an explanation of the purpose or intent of the toggle beyond what the label infers.
- Optional help text clarifies the outcome of changing the toggle state.
- Description and help text are only available when using a vertical layout.

### Accessibility

- The `gl-toggle` component requires an `id`, which is used in the `aria-labeledby` attribute value.
- Use `aria-describedby` to associate the description and help text with the toggle for screen reader users.
- Toggles should use high-contrast colors to indicate the states - On and Off.
