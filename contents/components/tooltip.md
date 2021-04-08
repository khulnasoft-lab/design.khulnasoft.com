---
name: Tooltip
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A142
docs: complete
gitlab_ui: /components/tooltip/code
vueComponents:
  - GlTooltip
related:
  - popover
---

Tooltips identify elements or provide additional, useful information about the referring elements. Tooltips are different from ALT-attributes, which are intended primarily for static images.

Tooltips fade in upon hover or touch of its trigger element. Tooltips remain open until the cursor is outside the tooltip or the target triggering the tooltip.

## Usage

Tooltips display unique data, and shouldn’t repeat information that is shown near the referring element. Information provided in a tooltip should be short and concise. The text will wrap when the content is wider than the max-width.

Tooltips also have a default delay of `500ms` on `show`. Due to the nature of tooltips being open when hovering them, this ensures:

- Users don't accidentally hover an element with a tooltip, which might cover the adjacent element they intended to click
- Keeps the UI quiet by not constantly showing/hiding tooltips for elements already familiar to existing users

While overriding the `show` delay for a tooltip is strongly discouraged for the reasons above, there are instances where it's useful to have an instant `show` of a tooltip, such as pipeline icons. Pipeline icons are the same between all Merge Requests, however, no two Merge Request pipeline titles will be the same. In this case, it's more beneficial to get this information to users quickly. If the `show` delay default of `500ms` is made quicker, please consider the following:

- Do not override the `show` default delay if these tooltips will cover adjacent buttons or links

### When to use tooltips

Use tooltips to:

- Show the same data in a different format, such as date or timestamps.
- Display a full string of text that is shortened with an ellipsis (`…`).
- Provide context for unlabeled items such as [icon buttons](/components/button#icon).

### When not to use tooltips

Do not use tooltips to:

- Display information required for task completion, such as password formatting hints.
- Display more than a single line of information or dimensional data, such as user name or status.
- Display a sophisticated layout and formatting.
- Offer simple controls and/or actions that are closely tied to the element or object, such as searchable list, links, or buttons.

Consider using a [popover](/components/popover) for the scenarios above.

### Timing

When interacting with an element, the timing for summoning a tooltip might be different depending on the situation. A delay is preferred in situations where the information provided is secondary and not needed to gain an immediate understanding of the content or when it easily obscures essential information in an interaction-heavy context. For example, a tooltip inside of a dropdown that contains additional content might obscure more important information like the row above or below. In these situations, a delay provides a more optimal user experience. Alternatively, the meaning of an icon button should be provided instantly in order to remove friction in understanding the content.

To support this, the component allows for either no delay (default) or a preset delay of 400ms.

## Placement

By default, tooltips are placed on top of the referring element. When there isn’t enough space in the viewport, the tooltip is moved to the side or below as needed. If it blocks related content, the preferred tooltip placement can be manually set.

Tooltips should have no space (0px) between themselves and their target. They remain in place while the cursor moves within the target. Tooltips should never obscure the target element.

## Content alignment

Content within a tooltip uses center-alignment.

## Demo

[[Example:tooltip-directive]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=439%3A105)
