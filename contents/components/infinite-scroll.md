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

[[Example:infinite-scroll-basic]]

[[Example:infinite-scroll-with-finite-total-items]]

[[Example:infinite-scroll-small-fetched-items]]

[[Example:infinite-scroll-large-fetched-items]]

[[Example:infinite-scroll-all-items]]

Todo: Add infinite scroll to Pajamas UI Kit

## Structure

<figure class="figure" role="figure" aria-label="Infinite scroll structure">
  <img class="figure-img" src="/img/infinite-scroll-structure.svg" alt="Numbered diagram of an infinite scroll structure" role="img" />
</figure>

1. **Container**: Wraps the content.
1. **Icon** (optional): Supports or directly communicates the metadata meaning, always left aligned.
1. **Text** (optional): Conveys the status or other attribute of the metadata.

## Guidelines

### When to use

- A list with content that updates frequently. 
- A list when there is no sort/filter functionality. 

### When not to use

- If a list is **more than 20** items long, consider using [pagination](/components/pagination)

### Behavior

- Infinite scroll is triggered once the user has reached the 20th item of a list and there are more items to load. 
- A [loading spinner](/components/spinner) appears at the bottom of the list for the duration of the load time.
- When a user returns to a list from a list entry using the back button in the browser, they should be returned to the same place in the list where they left off.

### Content

#### List count

Always display a counter that details how many items have already loaded and how many items remain. This gives the user an indication of where they are relative to the list. The examples below show how to display different variations of list counts:


------------------------------------
