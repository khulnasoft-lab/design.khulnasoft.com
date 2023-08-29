---
name: Design tokens
---

Design tokens capture decisions and intent in code. They abstract out variables like color, typography, and spacing for consistent and meaningful use across tools and platforms. 

For example, choosing `color.gray.700` for text tells someone nothing about why that color was chosen, so the value may be updated arbitrarily. But, if something like `color.text.secondary` was applied, then someone can understand that the text should appear as secondary, or with less prominence, than something that might be primary or more prominent — the design intent has been communicated and can't be changed on a whim without reconsidering the purpose.

Although a design token is a simple json key/value pair, its potential is apparent when thinking about it really as the pairing of a design decision with an option that exists in the design system. Nesting design tokens in groups can provide extra context to their usage, and aid in discovery and maintenance.

## Why we use design tokens

Design tokens help us establish a single source of truth for how, when, and why an element from the design system is used. More specifically they:

- Codify design decisions, capturing them openly and objectively.
- Synchronize design decisions across design and development tooling.
- Promote consistent and meaningful abstraction and application.
- Help make new design decisions easier by leveraging existing intent and purpose.
- Support efforts like themes and modes by abstracting intent from underlying values.

## Types of design tokens

<todo>Define taxonomy, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

## Naming conventions

<todo>Define naming conventions, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

## Design token format

<todo>Define format, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>

## Design token lifecycle

<todo>Document the governance and workflow for creating and updating tokens. This could be a good place to reference [Style Dictionary](https://amzn.github.io/style-dictionary).</todo>

## Using design tokens

<todo>Document usage, see https://gitlab.com/sdejonge/design-tokens for current exploration.</todo>
