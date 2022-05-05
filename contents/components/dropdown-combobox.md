---
name: Combobox
description: A combobox is a widget that includes a text input that controls a listbox of options.
related:
  - dropdown-listbox
  - dropdown-disclosure
  - dropdown-menu
  - button
  - accordion
---

## Examples

<todo>Add updated examples once complete in GitLab UI.</todo>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A14)

## Structure

<todo>Add structure visual and element list.</todo>

## Guidelines

The term "dropdown" generally refers to a component made of a trigger button that opens a panel of options. In the case of a combobox, the panel is primarily triggered by a text input. How the trigger and panel are visually presented doesn't vary much, but the semantic meaning can change significantly; refer to the other dropdown types to learn more about the differences.

### When to use

- Use a combobox to toggle and search through a [listbox](/components/dropdown-combobox) of single or multiselect options ([`role="option"`](https://www.w3.org/TR/wai-aria-1.2/#option)) that don't require a form submission to take effect.

### When not to use

- If a user is selecting from a group of options within a [form](/components/form), consider using a `<select>` element, [radio group](/components/radio-button), or [checkboxes](/components/checkbox) instead.
- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.

### Behavior

- The text input can use autocomplete capability that filters the available options. In addition to selecting an option, typing also populates the input with the choice.
- By default, the dropdown panel that contains the listbox opens below and is aligned to the left of the trigger button. However, when there isn't enough space in the viewport, the panel uses edge detection to position it above and/or aligned to the right of the trigger.
- If the content within the dropdown panel exceeds the maximum height then a scrim (gradient overlay) appears at the bottom of the panel as an overflow affordance. When a user has scrolled to the bottom of the overflowed content the scrim is removed.
- In a single select context when an option is selected, the panel is closed and the control updated.
- In a multiselect context the panel stays open until the user applies the selection. The panel then closes and the changes are visible in the UI.
- All panels can be closed by clicking outside of them or using the <kbd>esc</kbd> key.
- If there are more than 10 elements in the list, it may be necessary to include an autocomplete search box to filter options.
- A limited amount of options that don't scroll can be fixed at the bottom of a dropdown panel.

### Content

- Placeholder text in the input should only be used for extra, non-essential information when the input purpose is still understood in its absence; it's not a replacement for a visible label. An exception is the [search](/components/search) input, which includes a [search](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~search) icon to further clarify its purpose.
- See the [listbox content](/components/dropdown-listbox#content) notes.

### Accessibility

- A text input must be clearly labeled and identified.
- See the [WAI-ARIA Combobox documentation](https://www.w3.org/TR/wai-aria-practices/#combobox) for more details.
- See the [WAI-ARIA Listbox documentation](https://www.w3.org/TR/wai-aria-practices/#Listbox) for more details.
- When options in a panel are filtered, a screen reader should announce how many options are now available via `aria-live`.
- It should be clear if an option is selected or not.

## Reference

- [Drop-Down Usability: When You Should (and Shouldn’t) Use Them](https://baymard.com/blog/drop-down-usability), by Baymard Institute
