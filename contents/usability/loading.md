---
name: Loading
related:
  - infinite-scroll
  - skeleton-loader
  - spinner
---

A loading state or action provides a user with visiblity on what the system is doing, gives them a sense of control, and helps manage their expectations.

Loading states and actions can:

- Indicate that content is loading on the page.
- Indicate that a backend process is occurring.
- Prepare the user for what is about to happen.
- Empower the user to choose when loading occurs.

In Pajamas, the following methods indicate and initiate loading:

- [Infinite scrolling](#infinite-scrolling)
- [Loading animations](#animated-loaders)
- [Loading more](#loading-more)

## Infinite scrolling

<todo>Add [infinite scroll](/components/infinite-scroll) interaction guidelines.</todo>

## Loading animations

<todo>Add details about the use of [skeleton loaders](/components/skeleton-loader) and [spinners](/components/spinner).</todo>

## Loading more

The _load more_ interaction is [a more accessible alternative](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/1196#results) to [infinite scroll](/components/infinite-scroll) by allowing a user to load more results by clicking a 'Load more' [button](/components/button). The button text can optionally include the number of items that will be loaded, for example, 'Load 20 more'.

The load more interaction can be used for:

- A list with content that updates frequently.
- A list without sort or filter functionality.
- A list that doesn't use [pagination](/components/pagination) to provide a preset number of results per view.

### Behavior

- The 'Load more' button is present at the end of a list when there are more items to load.
- Clicking the button loads more results inline and moves the button to the end of the list if there are more items that can be loaded.
- The number of initial results, and results that load after clicking the button, can be adjusted to best present the results. For example, it could be better to load 20 more single line items, while only loading 10 more items that contain multiple elements and take more time to scan.
- When a user returns to the list by using the back button in the browser, they should be returned to the same place in the list where they left off.
- Loading more is a one-way action and _showing less_ is reserved for expand and collapse behavior, like an [accordion](/components/accordion).
