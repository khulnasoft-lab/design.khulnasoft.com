---
name: Link
description: Links are navigational elements that take users to another part of the page, web application, or a different website.
stories:
  - base-link--default-link
related:
- button
---

## Examples

<story-viewer story-name="base-link--default-link" title="Link"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?node-id=440%3A0)

## Guidelines

Links are navigational elements that take less visual affordance than buttons. However, too many links will clutter the page, so focus on which elements on the screen are most important to the user's goal. Use [progressive disclosure](/usability/progressive-disclosure) to avoid overwhelming users.

### When to use:

Use a link when the action is navigational, for example:
- Navigate to a different part of the current page.
- Navigate to a different page within the application.
- Navigate to a different site.

### When not to use:

- If the action is not navigational, use a [button](/components/button) instead.

### Behavior

By default, links should open in the same window rather than a new tab.

### Content

#### Clear and meaningful link text

The user should be able to predict where they will navigate to upon click. Try to avoid vague link texts such as "learn more". Do not use URLs as the link text as they are not easily readable or friendly to screen-readers. Remember that users of screen-readers cannot skim long links. Keep link text concise and no longer than a full sentence.
* **Example:** Before reviewing a MR, review the [best practices](/accessibility/best-practices/).

#### Do not include full stops in links

If a link is at the end of a sentence, the full stop should not be part of the link.
* **Example:** Review the [statement of compliance](accessibility/a11y).

#### External links

Make it clear in the link text that the link is external. If it's not possible the link text clear, use the external link icon.
* **Example:** View accessibility guidelines on the [W3C site](https://www.w3.org/TR/WCAG21/).

#### Placement and styling

Links should be organized and presented in a way that users understand them to be clickable.

- Links can be placed within a block of text or as a standalone element.
- Where possible, links should be blue (`$blue-500`).
- Where possible, underline links. An underline increases affordance that the link is clickable by not relying on color alone.

### Accessibility

- If a link text cannot be descriptive, add an aria-label with a full-sentence description for screen reader users.
- The link text must have a 3:1 contrast ratio from the surrounding non-link text.
- Links have a visible focused state.
- Links can be focused with a `tab` on the [keyboard](accessibility-audits/keyboard-only).
- Links can be clicked with a `return` on the keyboard.
- Underline links to help differentiate them from body content.

### Resources

- [NN Group: Tips for visualizing links](https://www.nngroup.com/articles/guidelines-for-visualizing-links/)
- [Usability & Web Accessibility: Links](https://usability.yale.edu/web-accessibility/articles/links)
