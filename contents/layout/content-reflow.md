---
name: Responsive first design
---

Content and functionality should be accessible regardless of available space. Depending on the situation, consider reflow, truncation, or visual affordance for scrolling.

We take a responsive-first approach instead of a more traditional mobile-first method. This abstraction allows us to think about every component and content block in light of its ability to adapt and function regardless of viewport or layout.

### Hierarchy

Content hierarchy, structure, and relationships should remain intact and clear regardless of the viewport. In almost all cases the visual order should match the DOM order.

### Reflow

Adjust the page content to reflow (wrap) to stay within the boundaries when users accesses it through a different viewport size. There might be a requirement to use different components to display the same content in smaller viewport size to retain their relationship, but at the end  all critical information and functionality should be available.

In the following example, when adapting a table row on a desktop-sized viewport to a smaller viewport size, the actions condense inside an ellipsis menu button.

<div class="row">
      <figure class="figure" role="figure" aria-label="Left-aligned buttons in a form">
        <img class="figure-img" src="/img/content-reflow-strategy-buttons.png" alt="A group of 3 button on the left side of a laytout changing to an ellipsis menu." role="img" style="width:100%; max-width:700px; height:auto" />
        <figcaption class="figure-caption">Group of buttons changing to an ellipsis menu</figcaption>
      </figure>
</div>

## Truncation
When a content is wrapped to fit a narrower viewport, its vertical length can increase considerably. This will require users to scroll a lot to reach the section they are interested in. Truncation of content helps cut down on the unnecessary scrolling and keeps the meaningful content that defines the purpose of the page visible and easily reachable.


## Scroll affordance
There should be upfront affordance on the page, especially on smaller viewport sizes to communicate users of the amount of the hidden information for better accessibility. 

