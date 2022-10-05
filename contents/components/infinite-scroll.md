---
name: Load more
description: Load more pattern helps users parse a large number of items by breaking up lists and distributing the results.
stories:
  - base-infinite-scroll--default
related:
  - pagination
  - spinner
---

## Examples

<story-viewer story-name="base-infinite-scroll--default" title="Default"></story-viewer>

## Structure

<figure class="figure" role="figure" aria-label="Load more pattern structure">
  <img class="figure-img" src="/img/load-more-pattern.svg" alt="Numbered diagram of the load more pattern structure" role="img" />
</figure>

1. **Container**: Wraps the content.
1. **Item**: Item within the list.
1. **Scrollbar**: Scrollbar that appears when scrolling the list.
1. **Load more button**: Button with text Load more, or optionally, Load X more, is displayed at the bottom of the list.

## Guidelines

### When to use

- A list with content that updates frequently. 
- A list when there is no sort/filter functionality. 

### When not to use

- If a list is **more than 20** items long, consider using [pagination](/components/pagination).

### Behavior

- The Load more button is triggered once the user has reached the 20th item of a list and there are more items to load. 
- A [button](/components/button) appears at the bottom of the list.
- When a user returns to a list from a list entry using the back button in the browser, they should be returned to the same place in the list where they left off.

### Content

#### List count

Optionally display the number of items that will load when selecting the Load more button. This gives the user an indication of the number of items that will load.

### Accessibility

<todo>Add accessibility guidelines</todo>
