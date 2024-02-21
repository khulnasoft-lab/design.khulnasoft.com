---
name: Design tokens
---

Design tokens, simply referred to as tokens, capture decisions and intent in code. Tokens abstract out variables like color, typography, and spacing for consistent and meaningful use across tools and platforms.

## Why we use tokens

Tokens help us establish a single source of truth for how, when, and why an element from the design system is used. On the surface, a token is a simple json key/value pair, but its value lays in pairing a design decision with an option that exists in the design system.

For example, choosing `color.gray.700` for text tells someone nothing about why that color was chosen, or how it may react to different modes like light, dark, or high contrast. But, if a token like `color.text.secondary` is applied, someone can understand that the text color is likely less prominent than the primary color regardless of mode. The design intent has been communicated and can't be changed without reconsidering the purpose.

More specifically, we use tokens to:

- Codify design decisions — capturing them openly and objectively.
- Synchronize design decisions across design and development tooling.
- Promote consistent and meaningful abstraction and application.
- Help make new design decisions easier by leveraging existing intent and purpose.
- Support efforts like themes and modes by abstracting intent from underlying values.

## Categories

There are three categories that group tokens by use case.

1. **Base tokens**: Often called primitives, these tokens are the lowest level of tokens and are unchanging key/value pairs. They're referenced in semantic and contextual tokens, but not otherwise intended to be directly consumed.
   **Examples**
    ```
    color.gray.700
    space.4
    ...
    ```
1. **Semantic tokens**: These tokens consume base tokens, but unlike base tokens the value can change in different contexts. For example, in light mode the `color.text.secondary` semantic token can use the `color.gray.500` base token for its value, and in dark mode use the `color.gray.300` base token instead. Semantic tokens capture design intent in an abstracted way. Instead of communicating something like "this surface should be light gray," it communicates "this surface needs to have subtle contrast with the default surface (which happens to be light gray in this mode and a dark gray in another mode)." The abstraction enables the intent to be the same regardless of what values are used or context it happens to be in.
   **Examples**
    ```
    color.text.secondary
    surface.contrast.subtle
    ...
    ```
1. **Contextual tokens**: Because semantic tokens abstract design intent, they won't address every use case or be helpful for experimenting with new design or concepts. This is where contextual tokens can be useful in limited cases to more specifically capture unique or specific design intent for components and patterns.
   **Examples***
   ```
   banner.background.gradient
   label.hover.animate
   ...
   ```

## Naming conventions

<todo>Define naming conventions, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

## Token format

<todo>Define format, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

## Token lifecycle

<todo>Document the governance and workflow for creating and updating tokens. This could be a good place to reference [Style Dictionary](https://amzn.github.io/style-dictionary).</todo>

## Using tokens

We are experimenting with a small subset of tokens, with the intention of introducing more tokens over time.

### In code

<todo>Document usage, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

### In design

<note>We are currently piloting using design tokens in Figma. We're asking that only those part of the pilot use the library. Sign up to the pilot and learn more in the [issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1771).</note>

Design tokens are used by [applying Figma variables](https://help.figma.com/hc/en-us/articles/15343107263511-Apply-variables-to-designs) to elements on the canvas.

We've scoped these Figma variables by limiting the properties they can be applied to. This helps cut out the guess work when designing and supports recommended usage. For example, `color.text.secondary` can only be applied as a fill to a text element and not a stroke or shape layer.
