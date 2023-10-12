---
name: Headings
related:
  - /product-foundations/type-fundamentals
  - /product-foundations/type-markdown
---

## Classes

There are 2 sets of heading mixins and utility classes:

`gl-heading-{1-6}` mixins and classes are promoted as the preferred approach to heading typography. Their usage should align with semantic heading level e.g. `<h2 class="gl-heading-2">...</h2>`. While it is possible to use a different class to heading element e.g. `<h2 class="gl-heading-3">...</h2>`, the migration work will adjust headings to provide meaningful heading levels.

`gl-heading-scale-{100-800}` mixins and classes are used for [contextual adjustments](#contextual-adjustments) for updating specific cases where the semantic heading scale does not visually align.

### Margins

The `gl-heading-{1-6}` mixins and classes provide a default `margin-bottom` (and reset Bootstrap's `margin-top`). In order to opt-out of the margin users add a `gl-mb-0!` class:

```html
<h2 class="gl-heading-2">...</h2> <!-- has margin -->
<h2 class="gl-heading-2 gl-mb-0!">...</h2> <!-- to remove margin -->
```

`gl-heading-scale-{100-800}` mixins and classes do not provide margins.

### Contextual adjustments

By default, heading levels are mapped to the dynamic scale. However, in some cases, visual hierarchy can be established aside from [semantics](#semantics). For example:

- In an [alert](/components/alert), its container already has sectioning affordances like color, spacing, and iconography. Because of this, a level 2 heading in the alert doesn't need the same emphasis as a level 2 heading for a content section elsewhere on the page.
- Similarly, in a [card](/components/card), the properties of the card itself indicate a section. Because of this, a level 3 heading may not require the same sectioning effect as a level 3 heading in body content.

When in doubt, use the scale by default, consider the full page context, and reference existing patterns.

<todo>Provide more guidelines and examples of scale overrides.</todo>

<todo>Add UI kit links after [#1527](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1527) has been completed.</todo>

## Semantics

- Every page should have a level 1 (`h1`) heading. It can be visually hidden if the context of the page is clear for all users, but it must be present in the DOM.
- Headings should not skip levels, with the following exceptions:
  - When an alert, or other messaging component, gets inserted before the main page content. These components are designed to use a level 2 (`h2`) heading.
  - When a heading is used to identify a region, like navigation. Generally, a level 2 (`h2`) heading is used.
  - In user-generated Markdown content a user can order headings as they like. The visual appearance of a heading is the only guide provided for choosing the correct hierarchy.
- Styles correspond with semantics by default, for example, an `h3` is larger and has more visual weight than an `h4`.
