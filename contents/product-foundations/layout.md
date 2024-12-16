---
name: Layout
---

## Responsive-first

We take a [responsive-first](/product-foundations/layout#responsive-ui) approach that considers each component and content block in light of its ability to adapt and function regardless of viewport or layout. Content and functionality are designed to be available and useful independent of page constraints. By default, content should [reflow](#reflow), but [truncation](#truncation) or [visual affordance](#visual-affordance) indicating behavior can also be used to keep the overall experience robust.

### Reflow

When the content on a page reflows to fit the available space, the hierarchy, structure, and relationships should remain intact and clear within any viewport.

- The visual order should match the [DOM order](https://www.w3.org/WAI/WCAG21/Techniques/css/C27).
- Reflow isn't limited to content wrapping. For example, you might consider grouping a list of actions into a single dropdown in smaller viewports.
- Content should not abruptly rearrange as that can be disorienting for users and cause the page to re-load, which may negatively impact the perceived performance of a page.

### Truncation

Content can be truncated when length or wrapping would break a component, negatively impact surrounding content, or cause some content to flow off screen. When content is truncated, there must be a method to easily view and access all of the content for both sighted and unsighted users, as well as those using assistive technology. Use your judgment on how to truncate content in your specific situation, but here are a few methods depending on the content type, usage, and size.

- Show in [tooltip](/components/tooltip): Use when truncated text is non-critical or providing reference information, or when users don't need access to the raw content.
- Show with [ellipsis button](/components/button#ellipsis): Use for longer spans of text, or when users need access to raw content to compare or view critical information.

### Visual affordance

Similar to how an ellipsis provides a visual indicator for text truncation, providing visual affordance for other components and content helps a user understand when there's a behavior that allows them to access additional content or controls. For example, a scrim (gradient overlay) at the bottom of a dropdown panel indicates scrolling. [View scrim in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=12053%3A184)

## Grid

### Responsive UI

GitLab is a responsive experience that works well across all screen sizes, from mobile devices to large monitors. In order to provide a great user experience, the core functionality (browsing files, creating issues, writing comments, and so on) is available at all resolutions. However, due to size limitations, some secondary functionality may be hidden on smaller screens. This functionality is limited to rare actions that aren’t necessary on small devices.

#### Breakpoints

These breakpoints define specifications for different screens, devices, and orientations.

- **`xs`**: <576px
- **`sm`**: ≥576px
- **`md`**: ≥768px
- **`lg`**: ≥992px
- **`xl`**: ≥1200px

### Page containers

Users can choose between two kinds of [layout width](https://docs.gitlab.com/ee/user/profile/preferences.html#layout-width) which set the behavior of page containers: **fixed** (default) or **fluid**.

The **fluid** layout does not impose any width restrictions to page containers, so elements expand across the screen to fill all available space.

The **fixed** layout applies the ideal maximum width to page containers according to the elements being displayed so they can be experienced using the most appropriate width.

[Breadcrumbs](/components/breadcrumb) always share the width of the page container that follows it.

#### Fixed layout

In the fixed layout, there are three possible maximum widths for page containers. For each width, you must consider which one is best to consume and interact with the elements on the page. The following widths include a `16px` padding on both sides.

- **`990px`**: By default, all pages use this maximum width. It’s ideal for forms, simple pages, tables with few columns, or pages that focus on written content.
- **`1280px`**: For pages that have a lot of horizontal elements, such as content-heavy tables/lists or tables with a lot of columns.
- **Full-width** (100%): Exception for pages where the interaction benefits from more screen real-estate, such as charts/graphs and other data visualizations, or boards.

We recommend that you first try and use **`990px`** unless another width is more suited. A width can also be chosen based on consistency between similar views in different pages, even if another width would have been more suitable.

## Sticky containers

A sticky container is a div that sticks to the top or bottom of it's parent container. It contains actions or links that are relevant to the task someone is performing. Sticky containers are useful for long pages that contain lots of content that would push buttons or actions above or below the viewport. For example, when editing a wiki, the save changes button will always be visible even if the wiki content extends below the viewport.

Use sticky containers with caution as they can easily crowd the interface and make it difficult to navigate the page by shrinking the content area.

## Cascading alignment

For layouts that are tabular or mimic a table row, often a single alignment rule applied to all cells or columns may not produce the most scannable outcome. With cascading alignment, the goal is to optically align content in the way that best supports a linear reading flow while maintaining balance. The alignment "cascades" from one element to the next based on the preceding element. For example, **B** aligns with **A**, and **C** aligns with **B**.

<div class="figma-embed" aria-label="Cascading alignment demo 1" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2XRq1MnIG69iti76Mh9HpJ%2FPajamas-visual-examples%3Ftype%3Ddesign%26node-id%3D22364%253A696%26mode%3Ddesign%26t%3DcBlAHP3Ol5JxVR79-1" allowfullscreen></iframe>
</div>

This type of layout is optional, and you should use your best judgement considering the user's task, the content, and other factors that might impact layout, like reflow and responsive behavior.

In the two column example that follows, vertically centering the content with the avatar works well until the content becomes taller than the avatar, at which point it's more scannable to top align and have content extend below.

The three column example that follows is similar, where vertically centering provides optimal linear scanning between all three columns. However, once the third column's content is taller than the avatar in the second, top alignment is used to anchor the third column to the second.

In both examples the goal is to choose the ideal alignment to the left element in a way that visually anchors the content and limits the eye from bouncing around as much as possible.

<div class="figma-embed" aria-label="Cascading alignment demo 2" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2XRq1MnIG69iti76Mh9HpJ%2FPajamas-visual-examples%3Ftype%3Ddesign%26node-id%3D22364%253A656%26mode%3Ddesign%26t%3DcBlAHP3Ol5JxVR79-1" allowfullscreen></iframe>
</div>

## Relative layout

The default alignment for element layout is to align to the top. However to achieve visual balance a combination of layouts may be needed.

There could be a scenario where there is components of different heights. Using top alignment will make the badge and button look misaligned.

<div class="figma-embed" aria-label="Alignment top" role="img">
  <iframe frameborder="0" src="https://www.figma.com/design/2XRq1MnIG69iti76Mh9HpJ/branch/3iXqImJJ9CdSArwFFRPk48/Pajamas-visual-examples?m=auto&node-id=38163-1570&t=3Wdmps4YPZoqSakH-1" allowfullscreen></iframe>
</div>

If we make all elements center aligned then when content that increases the height of the container, items that are placed to the right could be centered to the container rather than it's peers on the left.

<div class="figma-embed" aria-label="Alignment center" role="img">
  <iframe frameborder="0" src="https://www.figma.com/design/2XRq1MnIG69iti76Mh9HpJ/branch/3iXqImJJ9CdSArwFFRPk48/Pajamas-visual-examples?m=auto&node-id=38163-9388&t=3Wdmps4YPZoqSakH-1" allowfullscreen></iframe>
</div>

By thinking of alignment to component relative to one another we can achieve visual balance. Here the buttons and title are center aligned and content is top aligned.

<div class="figma-embed" aria-label="Alignment center" role="img">
  <iframe frameborder="0" src="https://www.figma.com/design/2XRq1MnIG69iti76Mh9HpJ/branch/3iXqImJJ9CdSArwFFRPk48/Pajamas-visual-examples?m=auto&node-id=38163-9402&t=3Wdmps4YPZoqSakH-1" allowfullscreen></iframe>
</div>



<todo>Add live demo. An example that accomplishes this with CSS grid can be viewed in [Codepen](https://codepen.io/lostsatellites/pen/ZEwVOgz).</todo>
