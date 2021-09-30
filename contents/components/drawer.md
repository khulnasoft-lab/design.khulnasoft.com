---
name: Drawer
description: A drawer presents context-specific information and/or actions without leaving the current page.
vueComponents:
  - GlDrawer
related:
  - modal
  - toast
  - accordion
  - skeleton-loader
---

## Examples

[[Example:drawer]]

Todo: Add link to design specs.

## Structure

Todo: Add structure diagram based on design specs.

1. **Container**: Wraps the content.
1. **Header**: Contains the title, close button, and actions.
1. **Title**: Conveys the purpose of the drawer.
1. **Close button**: Closes the drawer.
1. **Actions** (optional): Buttons or links used to provide explicit action(s) the user can take related to either the page or drawer content.
1. **Content**: Contains a wide variety of content types and controls depending on the purpose, related content, and contextual user tasks. 

## Guidelines

### When to use

- Display additional or supplemental information to the user about an element or item.
- Make simple, contextual tasks available.

### When not to use

- If supplemental content isn't suited for small areas or is part of a flow, consider loading a new page, revealing content with an [accordion](/components/accordion), or using a [modal](/components/modal) instead.
- To confirm an action, consider using a [toast](/components/toast) or [modal](/components/modal) instead.

### Behavior

- The drawer follows the [motion guidelines](/product-foundations/motion) and slides in from the right side of the viewport.
  - 200ms with an ease-in animation.
  - By default, the drawer is above all page content.
  - If full-width elements exist on the page and you do not want the drawer to cover them then you may specify the drawer to be embedded in the page and push some or all of the content rather than covering it.
- A drawer should never take the user by surprise — let a user’s action open it.
- A drawer can be closed with the close button or the <kbd>esc</kbd> key.
- When content overflows the drawer height, it scrolls vertically under the header.
- The drawer maintains its behavior down to the smallest breakpoint, at which point it takes up the full viewport width.

### Content

- All copy within a drawer should be short, actionable, and use clear language.
- The drawer should utilize the [skeleton loader](/components/skeleton-loader/) pattern when possible to represent loading content.
- If an empty state is required, please follow the [empty-state](/regions/empty-states) guidelines.

#### Title

- Be brief and keep it to a single line by utilizing a sentence fragment.
- Avoid using punctuation such as periods, commas, or semicolons.
- Use a full stop only when it's a full sentence.

#### Actions

- Left aligned, except in right-to-left languages where they are right aligned and the order is the same. See [button alignment and order](/components/button#alignment-and-order) for more details.

### Accessibility

- Drawer states (expanded/collapsed) should be announced by a screen reader.
- The focus should move to the drawer once opened. An intentional keyboard trap keeps tab order (looped) within the drawer until it is closed. This is so a user cannot focus on anything outside or under the drawer.
- The <kbd>esc</kbd> key should close the drawer along with activating the close icon button.
