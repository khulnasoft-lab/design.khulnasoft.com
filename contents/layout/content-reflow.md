---
name: Responsive first design
---

Content and functionality should be accessible regardless of available space. Depending on the situation, consider reflow, truncation, or visual affordance for scrolling.

### Hierarchy

Content hierarchy, structure, and relationships should remain intact and clear regardless of the viewport. In almost all cases the visual order should match the DOM order.

### Responsive first

We take a responsive-first approach instead of a more traditional mobile-first method. This abstraction allows us to think about every component and content block in light of its ability to adapt and function regardless of viewport or layout.

### Reflow rules

Here are some guidelines to help ensure that the reflow of content in a space does not have a negative impact on the user experience:

In a table row on a desktop-sized viewport, if there is a group of action buttons on the left side of the row, when adapting to a smaller viewport size, the actions will be condensed inside an ellipsis menu button.

<div class="row">
      <figure class="figure" role="figure" aria-label="Left-aligned buttons in a form">
        <img class="figure-img" src="/img/content-reflow-strategy-buttons.png" alt="A group of 3 button on the left side of a laytout changing to an ellipsis menu." role="img" style="width:100%; max-width:700px; height:auto" />
        <figcaption class="figure-caption">Group of buttons changing to an ellipsis menu</figcaption>
      </figure>
</div>

