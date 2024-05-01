---
name: Using design tokens
---

<todo>All the things below and more!</todo>

- Token matching: Token matching. Does naming infer pairing and how to document token matching patterns. e.g., A designer might ask, should background-color-default have to be paired with border-color-default? The answer is maybe, but why? Does text-color-disabled have to rest on background-color-disabled? Again, the answer is maybe, but how do I reliably know when to choose what? Are there things that should always pair? e.g., text-color-default and icon-color-default
- Color patterns: e.g., icon color is one step lighter (light UI) in the color ramp from its text counterpart to aid with optical balance (opposite is true in dark mode). Border color should never be stronger than the main enabled content color within. And more!
- In design
- In code

### In design

<note>We are currently piloting using design tokens in Figma. We're asking that only those part of the pilot use the library. Sign up to the pilot and learn more in the [issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1771).</note>

Design tokens are used by [applying Figma variables](https://help.figma.com/hc/en-us/articles/15343107263511-Apply-variables-to-designs) to elements on the canvas.

We've scoped these Figma variables by limiting the properties they can be applied to. This helps cut out the guess work when designing and supports recommended usage. For example, `color.text.secondary` can only be applied as a fill to a text element and not a stroke or shape layer.

## Design token lifecycle

<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1654">Document the governance and workflow for creating and updating design tokens. This could be a good place to reference [Style Dictionary](https://amzn.github.io/style-dictionary).</todo>
