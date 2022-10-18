---
name: Loading
related:
  - infinite scroll
  - progress-bar
  - skeleton-loader
  - spinner
---

Loading patterns provide the user with visiblity on what the system is doing and gives the user a sense of control by understanding the perceived wait time.

Loading patterns come in various forms to:
- Provide an indication that content is loading on the page
- Prepare the user for what is coming up next

## Types

Depending on the loading scenario, some types of loading pattens are better to use than others. For example, if the user initiates an action that causes loading, like submitting a form, [instant feedback](product-foundations/saving-and-feedback#instant-feedback) is necessary to inform them that the request has been submitted, but things may be happening in the background to effectively save changes. Using loading patterns has a positive imapact on the perceived speed of the application.

### Load more pattern

The Load more pattern is [a more accessible alternative](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/1196#results) to [infinite scroll](/components/infinite-scroll). This loading pattern gives the user control by allowing them to opt in to more results being shown and to have a clear sense of what's happening.

#### Structure

<figure class="figure" role="figure" aria-label="Load more pattern structure">
  <img class="figure-img" src="/img/load-more-pattern.svg" alt="Numbered diagram of the load more pattern structure" role="img" />
</figure>

1. **Container**: Wraps the content.
1. **Item**: Item within the list.
1. **Scrollbar**: Scrollbar that appears when scrolling the list.
1. **Load more button**: Button with text Load more, or optionally, Load X more, is displayed at the bottom of the list.

#### When to use 

The load more pattern can be used for:
- A list with content that updates frequently.
- A list when there is no sort/filter functionality.

#### When not to use 

If a list is more than 20 items long, consider using [pagination](/components/pagination) instead.

#### Behavior

- The Load more button is triggered once the user has reached the 20th item of a list and there are more items to load.
- A [button](/components/button) appears at the bottom of the list.
- When a user returns to a list from a list entry using the back button in the browser, they should be returned to the same place in the list where they left off.

#### Content

##### List count

Optionally display the number of items that will load when selecting the Load more button. This gives the user an indication of the number of items that will load.

##### Accessibility

Add accessibility guidelines.

<todo>Add infinite scroll loading type guidelines</todo>

<todo>Add progress bar loading type guidelines</todo>

<todo>Add spinner loading type guidelines</todo>
