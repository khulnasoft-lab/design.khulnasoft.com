---
name: Link
description: A link is a navigational element that takes a user from one context to another. This could include to another URL, an element within a page, or a file.
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

### When to use

- A link (anchor <a>) element is used as navigation to:
  - A new URL.
  - An element within a page.
  - A file.

### When not to use

- If you are performing an action, like saving, consider using a [button](/components/button) (<button>) element instead.
### Behavior

- A link opens the destination in the same window by default and native controls to open a link in a new tab or window aren't suppressed.
- A link can use `target="_blank` if it's intentional that the user cannot use the browser back function to return to the reference, and that it's clear to the user they are leaving the current experience.

### Content

#### Clear and meaningful link text

Users should be able to predict where they will navigate to upon click. Avoid vague link texts such as "more information" or "click here", adding URLs as link texts, or long links that cannot be skimmed by screen readers. Keep link texts concise, no longer than a full sentence and human-readable.
* **Example:** Before reviewing a MR, review the [best practices](/accessibility/best-practices/).

#### Do not include full stops in links

If a link is at the end of a sentence, the full stop should not be part of the link.
* **Example:** Review the [statement of compliance](accessibility/a11y).

#### External links

Make it clear in the link text that the link is external or use the external link icon.
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
- Underline links where possible to help differentiate them from body content.

### Resources

- [NN Group: Tips for visualizing links](https://www.nngroup.com/articles/guidelines-for-visualizing-links/)
- [Usability & Web Accessibility: Links](https://usability.yale.edu/web-accessibility/articles/links)
