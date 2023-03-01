---
name: Popover
description: Popovers are used to provide supplemental, useful, unique information about an element, including one or multiple actionable elements. They inform the user of additional information within the context of their original view, but without forcing the user to act upon it like a modal.
stories:
  - base-popover--default
related:
  - tooltip
  - modal
  - drawer
---

## Examples

<story-viewer story-name="base-popover--default"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A131)

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

- You don‘t want to let the user lose context, but still want to provide additional useful unique information about referring elements.
- It isn’t critical for the user to act upon the information.
- You want to give a user a summary of extended information and the option to switch context if they want to dive in deeper.

### When not to use

- If you‘re not providing rich markup or actionable items, consider using a [tooltip](/components/tooltip).
- If you‘re displaying critical content needed for users to complete a task, consider using a [modal](/components/modal).
- If you‘re displaying supplemental information to the user about an element or item, consider using a [drawer](/components/drawer).

### Appearance

- By default, popovers are placed above the referring element. 
- When there isn’t enough space in the viewport, the popover is moved to the side or below as needed. 
- If a popover blocks related content, the placement can be manually set to avoid this.
- To optimize for readability, content within popovers uses left-alignment.
- Be mindful of the popover content that could overflow the viewport, and avoid popovers that flex 100% of the container width.
- Popovers have a default width of `280px`, but they can be adapted to have different sizes, depending on the content being wrapped.

### Behavior

- Popovers are triggered on click on an element whose purpose is to trigger the popover. 
- Popovers are dimissed by clicking on the close button on the popover or by clicking outside of the popover.

### Content

- All copy within a popover should be short, actionable, and use clear language. 
- The copy in the header should be shorter and even more concise than the copy in the body of the popover. 
- The body can contain a link, for example, a "Learn more" link takes the user to the Docs page for more info. 

### Accessibility

- When focus is within the popover, the `Enter` or `Space` key triggers the popover.
- When the popover is visible, the `Tab` key moves focus through interactive elements within it.
- When the focus is within the popover, the `Esc` key will close the popover.
