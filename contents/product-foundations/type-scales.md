---
name: Type scales
related:
  - /product-foundations/type-fundamentals
  - /product-foundations/type-markdown
---

GitLab utilizes two type scales: **dynamic** and **fixed**. The differences are outlined in respective sections below, but they share the following properties:

- The base size for body text is `14px`.
- Body text and heading levels 4–6 (`h4–h6`) stay the same size at any breakpoint.
- Styles correspond with semantics by default, for example, an `h3` is larger and has more visual weight than an `h4`.

<todo>Add UI kit links after [#1527](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1527) has been completed.</todo>

## Dynamic type scale (default)

- Used for any user interface (UI) text within GitLab.
- Heading levels 1–3 (`h1`–`h3`) increase in size, within a set range, for larger viewports.
- Includes a **display** style option that can be applied to an `h1` to increase its prominence. This can be useful for a learning path or feature promotion.
- Includes **label** styles which are used for short-form content that doesn't include margins for easier alignment with other UI elements. Long-form content includes copy in [modals](/components/modal) and [empty states](patterns/empty-states), whereas short-form content includes help text and [tooltip](/components/tooltip) messages.

## Fixed type scale

- Used for markdown (user generated content).

## Contextual adjustments

The dynamic scale is mapped to heading levels by default, however, in a limited number of cases visual hierarchy can be established aside from semantics. For example, an alert container has additional sectioning affordances like color, spacing, and iconography, because of this a level 2 heading within doesn't require the same visual weight as a level 2 heading that's establishing a content section elsewhere on the page. Similarly, a level 3 heading in a card may not require the same sectioning effect as a level three heading in body content, because the properties of the card itself indicate a section. When in doubt, use the scale by default, consider the full page context, and reference existing patterns.

<todo>Provide more guidelines and examples of scale overrides.</todo>
