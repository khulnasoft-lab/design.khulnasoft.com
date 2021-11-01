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

- Infinite scroll container should use the `role="feed"` attribute. 
- Set `aria-busy="true"` when loading new content. Make `false` when content has finished loading.
- Use `aria-labelledby` to provide an accessible name for the feed.
- For `aria-setsize`, the value should be the total number of items in the list, whether they're shown or not. Additionally, this value should be set on every item in the list, not the container. If the total number in the feed is not known, set `aria-setsize="-1"`.
- For `aria-posinset`, the value should indicate the position of the of each item in the list. 
- Each article within a feed should be focusable. 
- A list item should be scrolled into view when it, or a descendant element, receives focus.

#### ARIA examples for an infinite scroll list

Here's an example that shows items 5 through 9 in a set of 14.

```
<h2 id="label_colors">Available Colors</h2>
<ul role="feed" aria-labelledby="label_colors" aria-busy="...">
  <li role="article" aria-posinset="5" aria-setsize="14">Orange</li>
  <li role="article" aria-posinset="6" aria-setsize="14">Yellow</li>
  <li role="article" aria-posinset="7" aria-setsize="14">Blue</li>
  <li role="article" aria-posinset="8" aria-setsize="14">Red</li>
  <li role="article" aria-posinset="9" aria-setsize="14">Green</li>
</ul>
```

## Reference

- [WAI-ARIA-1.1 guidelines for a Feed](https://www.w3.org/TR/wai-aria-1.1/#feed)
- [MDN docs for role="feed"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Feed_Role)
