---
name: Search
description: Search patterns enable users to find certain information by adding criteria that match their query.
componentLabel: form-search
components:
  - base-search-box-by-click
  - base-search-box-by-type
related:
  - button
  - filter
  - sorting
  - spinner
  - text-input
---

## Examples

<story-viewer component="base-search-box-by-click" story="history" title="Search by click with history" iframe-padding="0 0 200px 0"></story-viewer>

<story-viewer component="base-search-box-by-type" title="Search by type"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=49840-75722&mode=design)

## Structure

<todo>Add structure image.</todo>

## Guidelines

### When to use

<todo>Add when to use.</todo>

### When not to use

<todo>Add when not to use.</todo>

### Variants

1. **Search by typing**: This pattern doesn't use a button to trigger the search. When users start typing the search action triggers after a short delay. In order to communicate that a search is being performed, a spinner is added in the right corner of the search box. A magnifying glass icon is placed in the left corner of the search box to indicate to the user that the input is a search field. Narrowing down a large list of results as a user types can create performance issues. Consider using the Search by confirmation pattern below if performance is a concern.
1. **Search by confirmation**: This pattern is visually different from the one above because users interact with it differently. The magnifying glass icon is placed inside the button which triggers the search action. The presence of the button indicates the need for confirmation to trigger the search. <kbd>Enter</kbd> also triggers the action. A dropdown containing search history is commonly used as an addition to the search by confirmation pattern.

### Appearance

It’s a common practice to place the search box on the top right of the page — it’s where Internet users learned to expect it. When the search box is a simple search or filter, it should be positioned on the top right in the layout, and limited in width. More complex search boxes can be wider and positioned elsewhere.

#### Placeholder

- The placeholder in a search box should ideally be just **Search** because it should be clear what the user is searching through from the placement of the search box on the page. For example, a search box placed under a title **Labels** searches through labels. If that’s not possible, a more specific **Search labels** placeholder can be used. The search patterns are one of those exceptions where the input field labels aren’t present at all. Because of that, a placeholder should always be there to clearly indicate to users that this is a search box.
- Don’t use ellipsis (…) in the placeholder unless it’s truncated or the text is incomplete (see [Punctuation](/content/punctuation)). For example, **Search** or **Search labels** don’t need an ellipsis, but **Search and jump to…** uses one because the text is incomplete.
- Even though the search patterns can be used for either filtering or searching for information, always try to use the word **Search** for the placeholder. This is another small detail that makes the pattern easier to recognize. As an exception, it’s OK to use another word if it makes the interaction and the experience clearer.

### Behavior

Search by typing variant uses delayed feedback to reduce the server load. Use a faster [debounce period](/usability/saving-and-feedback#delayed-feedback) when possible to make search results feel quick and responsive.

### Content

While search results aren't part of the component itself, the [Empty States](/patterns/empty-states#empty-search-results) page has additional guidance on what to display if the search returns no results.
