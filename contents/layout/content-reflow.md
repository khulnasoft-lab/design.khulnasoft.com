---
name: Content reflow
---

All GitLab components should allow for content to reflow when text is larger than the space available, or when they are applied in layouts with less horizontal space.


### Content strategy
While designing UI for a feature, be mindful of it's primary objective and group the associated content semantically instead of tying them with specific component. When grouped semantically, it gets much easier to reuse and adapt the content to use different components if need be, for responsive behaviour.


### Mobile first
Scaling up from a mobile version to a desktop version is always easier than the opposite. A mobile first approach also helps in apprehending usability issues sooner than later.  

### Reflow rules
Here are some guidelines to help ensure that the reflow of content in a space does not have a negative impact on the user experience:

1. In a row in a table in a desktop version, if there is a group of action button stacked on the left side of teh row, on adapting to a smaller viewport size, the actions will be condensed inside an ellipsis menu.


<div class="row">
      <figure class="figure" role="figure" aria-label="Left-aligned buttons in a form">
        <img class="figure-img" src="/img/content-reflow-strategy-buttons.png" alt="A group of 3 button on the left side of a laytout changing to an ellipsis menu." role="img" style="width:100%; max-width:700px; height:auto" />
        <figcaption class="figure-caption">Group of buttons changing to an ellipsis menu</figcaption>
      </figure>
</div>

1. Every row in a table, in desktop version, will change into a horizontal table with each key and it's corresponding value displayed in a separate row.

<div class="row">
      <figure class="figure" role="figure" aria-label="Left-aligned buttons in a form">
        <img class="figure-img" src="/img/content-reflow-strategy-table.png" alt="A 3X2 table changing to a 2X3 table" role="img" style="width:100%; max-width:700px; height:auto" />
        <figcaption class="figure-caption">Each row in a table changes into a card</figcaption>
      </figure>
</div>

