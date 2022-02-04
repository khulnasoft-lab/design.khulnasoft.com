---
name: Content reflow
---

Content and functionality should be accessible regardless of available space. Consider reflow, truncation, or affordance for horizontal scrolling depending on the situation.


### Content strategy
While designing an interface, be mindful of its primary objective, and group the associated content semantically instead of tying them with a specific component. When grouped semantically, it becomes much easier to reuse and adapt the content to use different components if need be, for responsive behaviour.


### Responsive first
Scaling up from a mobile version to a desktop version is always easier than the opposite. A mobile first approach also helps in apprehending usability issues sooner than later.  

### Reflow rules
Here are some guidelines to help ensure that the reflow of content in a space does not have a negative impact on the user experience:

1. In a table row on a desktop-sized viewport, if there is a group of action buttons on the left side of the row, when adapting to a smaller viewport size, the actions will be condensed inside an ellipsis menu button.


<div class="row">
      <figure class="figure" role="figure" aria-label="Left-aligned buttons in a form">
        <img class="figure-img" src="/img/content-reflow-strategy-buttons.png" alt="A group of 3 button on the left side of a laytout changing to an ellipsis menu." role="img" style="width:100%; max-width:700px; height:auto" />
        <figcaption class="figure-caption">Group of buttons changing to an ellipsis menu</figcaption>
      </figure>
</div>

1. Every table row on a desktop-sized viewport will change into a horizontal table with each key and its corresponding value displayed in a separate row.

<div class="row">
      <figure class="figure" role="figure" aria-label="Left-aligned buttons in a form">
        <img class="figure-img" src="/img/content-reflow-strategy-table.png" alt="A 3X2 table changing to a 2X3 table" role="img" style="width:100%; max-width:700px; height:auto" />
        <figcaption class="figure-caption">Each row in a table changes into a card</figcaption>
      </figure>
</div>

