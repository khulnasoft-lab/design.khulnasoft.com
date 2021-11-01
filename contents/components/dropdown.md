---
name: Dropdown
description: A dropdown is a widget that includes a panel opened by a trigger button.
related:
  - button
  - accordion
---

## Examples

[[Example:new-dropdown-default]]

[[Example:new-dropdown-with-header]]

[[Example:new-dropdown-with-section-headers]]

[[Example:new-dropdown-with-search]]

[[Example:new-dropdown-split]]

[[Example:new-dropdown-with-icon]]

[[Example:new-dropdown-with-icon-and-split]]

Todo: An example of a single-selection dropdown

Todo: An example of a multi-selection dropdown

Todo: An example of a dropdown with fixed rows.

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A14)

## Structure

1. ** **:
1. ** **:
1. ** **:

## Guidelines

### When to use

The term "dropdown" generally refers to a component made of a trigger button that opens a panel of options. How the trigger and panel are visually presented doesn't vary much, but the semantic meaning can change significantly; refer to the [variants](#variants) section for the specific implementation.

In general, use a dropdown to:

- Reveal a panel of actions that can be performed in a specific context, including [navigation](/regions/navigation).
- Reveal a panel of single or multi-select options that don't require a form submission to take effect.

### When not to use

- If a user is selecting from group of options within a [form](/components/form), consider using a `<select>` element, [radio group](/components/radio-button), or [checkboxes](/components/checkbox) instead.
- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.

### Variants

- **Disclosure widget**: 
- **Menu**: 
- **Combobox**: 
- **Listbox**: 

### Trigger variants

Dropdown buttons come in a few different combinations to fit different situations. Some offer additional options, while others save on space.

- **Dropdown button**: Dropdown buttons trigger menus of options which can be either actions or input values.
- **Split dropdown button**: Dropdown buttons may be split when there are multiple action options. The text button will allow immediate access to the most common option and an attached dropdown button is available to either change the default action. The dropdown button is attached to the right of the text button and has a chevron icon as its label. If the dropdown menu has no related actions available, a split dropdown button should be converted back to a text button. The currently selected action has a checkmark on the left side of the dropdown item. See also [checkmark dropdowns](/components/dropdowns).
- **Icon dropdown**: Icon dropdowns function similarly to other dropdown button combinations with the difference being an icon label.

### Behavior

- By default, dropdowns are placed below and aligned to the left of the element they stem from. However, when there isn't enough space in the viewport, the dropdown should be moved above and/or be aligned to the right of the element it stems from.
- If there are more rows than fit the dropdown, an overlay with a fade effect will be added at the top or bottom of the dropdown to indicate there are more rows to be scrolled. When reaching the end of the scrollable area, the overlay will be removed.

### Content

- **Header**: A header can be added to make the dropdown's purpose clear.
- **Section header**: A section header is used to categorize the options in a dropdown. A separator must always be included in between sections.
- **Search box**: If there are more than 10 elements in the list, it may be necessary to include a search box.
- **Fixed rows**: A limited amount of rows that don't scroll can be fixed at the bottom of a dropdown. For example, the dropdown used to switch between issue boards has two fixed options at the bottom: _Create new board_ and _Delete board_.

### Accessibility


Todo: Add accessibility requirements and considerations.

## Reference

- [Dropdown usability](https://baymard.com/blog/drop-down-usability)





---



// Repurpose the table content below.

There are three main types of dropdowns:

| Type                       | Purpose                                                                                               | Behavior                                                                                                                                                                                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Plain dropdowns            | These dropdowns usually present a list of actions. They can be thought of as a collection of buttons or links. | If a user clicks a link inside a plain dropdown, it would navigate to the path specified in the link. If a user clicks a button with a function, it would complete that function and close the dropdown. Another way to close the dropdown is to click outside the dropdown container.                             |
| Single-selection dropdowns | These dropdowns are used as a collection of single selection inputs.                                  | The radio button indicates that this is a single selection. After a user makes a selection, the dropdown will close and the request will update the content, if needed.                                                                                                |
| Multi-selection dropdowns  | These dropdowns are used when selecting multiple items.                                   | Each item contains a checkbox and can be clicked to select that item. The dropdown stays open when making selections and each selection will send a request to update the content. The dropdown closes when a user clicks outside of the dropdown or if the user clicks the "x" icon in the top right corner. |
