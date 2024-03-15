---
name: Button group
description: A button group visually unites multiple related items into a single collection.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A7
docs: in-progress
gitlab_ui: /components/button/code
components:
  - base-button-group
related:
  - button
  - pagination
  - radio-button
  - checkbox
  - toggle
---

## Examples

<story-viewer component="base-button-group" title="Button Group"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A7)

## Structure

<figure-img alt="Numbered diagram of a button group structure" label="Button group structure" src="/img/button-group-structure.svg"></figure-img>

1. **Button group**: Collection of related items.
1. **Selected button** (optional): Indicates current state, view, or location.

## Guidelines

### When to use

- Visually and programmatically group between two to five items that have similar or related actions to emphasize the relationship.

### When not to use

- If there isn't enough space to accommodate the width of a button group, consider a different configuration or layout.
- If the related items are all links, consider using the [link](/components/link) component for each instead. They can remain in close proximity to each other, but don't need to otherwise be visually grouped.
- If a group of options exists in the context of a form, consider using [radio buttons](/components/radio-button) or [checkboxes](/components/checkbox) instead.

## Appearance

- Items use the [default button variant](/components/button#variants) and share common borders.
- A border radius is only present on the first and last items in the group.
- Items should have similar content, like text or icon only, to support the visual uniformity of the group.
- A single item in the group may have a selected (visual and programmatic) state, but it's not required for every use case.

## Types of button groups

There are two types of button groups:

1. Related items with actions that cause a page reload or redirect.
1. Related items with actions that toggle between a view or change in-page content without a page reload.

Depending on whether a button or link is used, and whether or not the page reloads, there are different [accessibility](#accessibility) considerations that will help ensure the intent and state are correctly communicated for assistive technology users.

## Behavior

- Selecting an item in the group immediately triggers the associated action.
- If there is no page reload, the item can immediately have a selected state.
- If there is a page reload or redirect, the clicked action can have a selected state on load if it persists in the UI.

## Content

- Minimum of two items and a maximum of five.
- Follow the [button content](/components/button#content) guides for individual items.

## Accessibility

- Wrap the group in a `div` with the `role="group"` attribute. Do not use an `aria-label`. See [MDN Web Docs ARIA: group](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) for more details.
- To indicate a selected state of a button and treat it like a toggle, use `aria-pressed="true"`. Only one button should be selected at a time. See [MDN Web Docs aria-pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) for more details.
- To indicate a selected state of a link, use `aria-current="true"`. Using `true` instead of `page` is to indicate the current selection within the group rather than the current page. See [MDN Web Docs aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) for more details.
- Consider where focus should be placed after triggering an action. In some cases it should remain on the element, and in others it should move to the changed content. This is particularly important for page reloads and redirects.
- A link can be styled like a button and included in a group, however, it can be confusing for some users if both a button (`<button>`) and a link (`<a>`) are in the same group.

## Reference

- The button group replaces the [deprecated segmented control](https://gitlab.com/groups/gitlab-org/-/epics/7261).
