---
name: Infinite scroll
description: Infinite scroll helps users parse a large number of items by breaking up lists and distributing the results.
vueComponents:
  - GlInfiniteScroll
related:
  - list
  - pagination
  - spinner
---


## Examples

<gl-example-display class="app-styles gl-mb-5"  example-name="infinite-scroll-basic"></gl-example-display>

<gl-example-display class="app-styles gl-mb-5"  example-name="infinite-scroll-with-finite-total-items"></gl-example-display>

<gl-example-display class="app-styles gl-mb-5"  example-name="infinite-scroll-small-fetched-items"></gl-example-display>

<gl-example-display class="app-styles gl-mb-5"  example-name="infinite-scroll-large-fetched-items"></gl-example-display>

<gl-example-display class="app-styles gl-mb-5"  example-name="infinite-scroll-all-items"></gl-example-display>

<admonition type="todo">Add infinite scroll to Pajamas UI Kit</admonition>

## Structure

<figure class="figure" role="figure" aria-label="Infinite scroll structure">
  <img class="figure-img" src="/img/infinite-scroll-structure.svg" alt="Numbered diagram of an infinite scroll structure" role="img" />
</figure>

1. **Container**: Wraps the content.
1. **Item**: Item within the infinite scroll list.
1. **Scrollbar**: Scrollbar that appears when scrolling the list.
1. **Count**: Text displaying number of shown items out of total number of items in the list.

## Guidelines

### When to use

- A list with content that updates frequently. 
- A list when there is no sort/filter functionality. 

### When not to use

- If a list is **more than 20** items long, consider using [pagination](/components/pagination).

### Behavior

- Infinite scroll is triggered once the user has reached the 20th item of a list and there are more items to load. 
- A [loading spinner](/components/spinner) appears at the bottom of the list for the duration of the load time.
- When a user returns to a list from a list entry using the back button in the browser, they should be returned to the same place in the list where they left off.

### Content

#### List count

Always display a counter that details how many items have already loaded and how many items remain. This gives the user an indication of where they are relative to the list.

### Accessibility

<admonition type="todo">Add accessibility guidelines</admonition>
