---
name: Illustration
---

One of our values is to create a distinct GitLab personality that is strong and consistent. Illustration is a great way to visually convey concepts to the user and should reflect our particular sense of style.

An illustration should align with topics and goals within context. In most cases our illustration is complimentary to content. Because of this, it’s often considered decoration instead of content itself.

## Principles

1. **Be simple.** For clarity, we use simple and specific elements to create our illustrations.
1. **Be optimistic.** We take an open-minded, positive, and friendly approach. Those values are reflected in our illustrations with a light and airy feel.
1. **Be helpful.** Our illustrations help users understand concepts and guides them in the right direction. Illustrations are supportive, so they should be obvious, but not comprehensive, focusing on impressions over complexity.

## Style

### Color

For consistency, choose colors from the Brand and Neutral Theme color palettes.

Todo: Update example

| Orange | Purple | Neutral |
| -------- | -------- | -------- |
| <div class="color-overview p-a-3" style="background-color:#fc6d26;"><span class="variable f-inverted">Orange</span> <span class="hex f-small f-inverted">#fc6d26</span></div> | <div class="color-overview p-a-3" style="background-color:#6e49cb;"><span class="variable f-inverted">Purple</span> <span class="hex f-small f-inverted">#6e49cb</span></div> | <div class="color-overview p-a-3" style="background-color:#a7a7a7;"><span class="variable">$gray-500</span> <span class="hex f-small">#a7a7a7</span></div> |
| <div class="color-overview p-a-3" style="background-color:#f4c6ac;"><span class="variable">+60% White</span> <span class="hex f-small">#f4c6ac</span></div> | <div class="color-overview p-a-3" style="background-color:#c2b7e6;"><span class="variable">+60% White</span> <span class="hex f-small">#c2b7e6</span></div> | <div class="color-overview p-a-3" style="background-color:#dfdfdf;"><span class="variable">$gray-200</span> <span class="hex f-small">#dfdfdf</span></div> |
| <div class="color-overview p-a-3" style="background-color:#f9e2d5;"><span class="variable">+80% White</span> <span class="hex f-small">#f9e2d5</span></div> | <div class="color-overview p-a-3" style="background-color:#e0dbf2;"><span class="variable">+80% White</span> <span class="hex f-small">#e0dbf2</span></div> | <div class="color-overview p-a-3" style="background-color:#f2f2f2;"><span class="variable">$gray-100</span> <span class="hex f-small">#f2f2f2</span></div> |
| <div class="color-overview p-a-3" style="background-color:#fcf0ea;"><span class="variable">+90% White</span> <span class="hex f-small">#fcf0ea</span></div> | <div class="color-overview p-a-3" style="background-color:#efedf8;"><span class="variable">+90% White</span> <span class="hex f-small">#efedf8</span></div> |   |

### Shape

Illustrations are primarily comprised of geometric shapes. Use circles, rectangles, squares, and triangles for base elements, with lines and organic shapes for details as needed. Avoid typography or tanuki in illustrations.

<figure class="figure" role="figure" aria-label="Basic geometric shapes">
  <img class="figure-img p-a-5" src="/img/illus-shape.svg" alt="square, rectangle, triangle, circle" role="img" />
  <figcaption class="figure-caption">Basic geometric shapes</figcaption>
</figure>

### Strokes

The default stroke is **4px**, but **2px** can be used for smaller details and lines. You can also alternate the stroke weights to emphasize different elements of the illustration, with the heavier stroke providing more emphasis. Lines use rounded caps, unless doing so would misrepresent the object. Round line joins are optional and also depend on the object. When possible, align the stroke to the inside of the shape.

<div class="row">
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="4px stroke, aligned inside">
      <img class="figure-img p-a-5" src="/img/illus-stroke-4px.svg" alt="Shape with 4px stroke" role="img" />
      <figcaption class="figure-caption">4px stroke, aligned inside</figcaption>
    </figure>
  </div>
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="2px stroke, aligned inside">
      <img class="figure-img p-a-5" src="/img/illus-stroke-2px.svg" alt="Shape with 2px stroke" role="img" />
      <figcaption class="figure-caption">2px stroke, aligned inside</figcaption>
    </figure>
  </div>
  <div class="col col-33">
    <figure class="figure" role="figure" aria-label="Line with round cap, round join (left), miter join (right)">
      <img class="figure-img p-a-5" src="/img/illus-stroke-round.svg" alt="Lines with round cap and join examples" role="img" />
      <figcaption class="figure-caption">Line with round cap, round join (left), miter join (right)</figcaption>
    </figure>
  </div>
</div>

<figure class="figure" role="figure" aria-label="4px and 2px strokes at 100%">
  <img class="figure-img p-a-5" src="/img/illus-stroke-actual.svg" alt="Strokes at actual size" role="img" />
  <figcaption class="figure-caption">4px and 2px strokes at 100%</figcaption>
</figure>

### Border radius

The default border radius for shapes is **8px**, with **0px**, **4px**, or multiples of **4px** allowed to better represent an object or parts of it. Clarity should always override consistency, and the guides are flexible when necessary.

<figure class="figure" role="figure" aria-label="Border radius options, 8px is default">
  <img class="figure-img p-a-5" src="/img/illus-border-radius.svg" alt="Shapes with 0px, 4px, 8px, and 16px border radius" role="img" />
  <figcaption class="figure-caption">Border radius options, 8px is default</figcaption>
</figure>

### Size

An illustration can be one of three sizes below depending on the use case. It can scale within a layout so long as the proportion and aspect ratio remain unchanged, e.g., shrinking on smaller screens. Keep details and complexity to a minimum for medium and small “spot” illustrations. Illustration dimensions don’t include padding and should go to the edge of the design artboard, relying on CSS classes for padding.

#### Large

* Dimensions: **430×380px** or less.
* Use: Empty states, error pages (e.g., 404)

<figure class="figure" role="figure" aria-label="Large illustration">
  <img class="figure-img p-a-5" src="/img/illus-lg.svg" alt="Merge request conversation" role="img" />
  <figcaption class="figure-caption">Large illustration</figcaption>
</figure>

Todo: Update example

| Vertical layout | Horizontal layout |
| --------------- | ----------------- |
| <figure class="figure" role="figure" aria-label="Large “spot” illustration in layout"><img class="figure-img p-l-5 p-r-5" src="/img/illus-lg-live-vertical.png" alt="Screenshot featuring large-sized illustration in a vertical layout" /><figcaption class="figure-caption">Large “spot” illustration in layout</figcaption></figure>  | <img src="/img/illustration-size-large-horizontal.png" width=480px />

#### Medium

* Dimensions: **240×160px** or less.
* Use: Banner

<figure class="figure" role="figure" aria-label="Medium “spot” illustration in banner layout">
  <img class="figure-img p-t-5 p-b-5" src="/img/illus-md-live.png" alt="Screenshot featuring medium-sized illustration" />
  <figcaption class="figure-caption">Medium “spot” illustration in banner layout</figcaption>
</figure>

#### Small

* Dimensions **160×90px** or less.
* Use: Graphics for explanatory text or yarn status.

<figure class="figure" role="figure" aria-label="Small “spot” illustration">
  <img class="figure-img p-a-5" src="/img/illus-sm.svg" alt="Bookmarked code document" role="img" />
  <figcaption class="figure-caption">Small “spot” illustration</figcaption>
</figure>

<figure class="figure" role="figure" aria-label="Small “spot” illustration in layout">
  <img class="figure-img p-t-5 p-b-5" src="/img/illus-sm-live.png" alt="Screenshot featuring small-sized illustration" />
  <figcaption class="figure-caption">Small “spot” illustration in layout</figcaption>
</figure>

## Process

### Layout

…

### Subpixel antialiasing

…

### Optimization

…

### SVG

…

### Accessibility

…

### GitLab SVG Project

…