---
name: Search
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4191%3A0
docs: complete
gitlab_ui: /components/search/code
vueComponents:
  - GlSearchBoxByClick
  - GlSearchBoxByType
related:
  - buttons
  - filter
  - form
  - sorting
  - spinner
---

Search patterns enable users to find certain information by adding criteria that match their query.

## Usage

Our search patterns fall into two groups:

- Search by typing
- Search by confirmation

### Search by typing

This pattern doesn't use a button to trigger the search. The search action is triggered immediately after users start typing. In order to communicate that a search is being performed, a spinner is added in the right corner of the search box. A magnifying glass icon is placed in the left corner of the search box to indicate to the user that the input is a search field.

Narrowing down a large list of results as a user types can create performance issues. Consider using the Search by confirmation pattern if performance is a concern.

[[Example:search-box-by-type-loading]]

### Search by confirmation

This pattern is visually different from the one above because users interact with it differently. The magnifying glass icon is inside the button which triggers the search action. The presence of the button indicates the need for confirmation to trigger the search. Pressing “Enter” also triggers the action.

[[Example:search-box-by-click-v-model]]

A history dropdown is commonly used as an addition to the search by confirmation pattern:

[[Example:search-box-by-click-with-history]]

### Placeholder

The placeholder in a search box should ideally be just “Search” because it should be clear what the user is searching through from the placement of the search box on the page. For example, a search box placed under a title “Labels” searches through labels. If that’s not possible, a more specific ”Search labels” placeholder can be used. The search patterns are one of those exceptions where the input field labels aren’t present at all. Because of that, a placeholder should always be there to clearly indicate to users that this is a search box.

Don’t use ellipsis (…) in the placeholder unless it’s truncated or the text is incomplete (see [Punctuation](/content/punctuation)). For example, “Search” or “Search labels” don’t need an ellipsis, but “Search and jump to…” uses one because the text is incomplete.

Even though the search patterns can be used for either filtering or searching for information, always try to use the word “Search” for the placeholder. This is another small detail that makes the pattern easier to recognize. As an exception, it’s ok to use another word if it makes the interaction and the experience clearer.

### Positioning

It’s a common practice to place the search box on the top right of the page, it’s where Internet users learned to expect it. When the search box is a simple search or filter, it should positioned on the top right and limited in width. More complex search boxes can be wider and positioned elsewhere.

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4191%3A0)
