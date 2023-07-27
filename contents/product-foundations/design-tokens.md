---
name: Design tokens
---

Design tokens are the most basic way we capture design decisions and intent in code so that they can be shared across tools and platforms. They abstract out design variables like color, typography, and spacing as a means to consistant and meaningfull use. 

For example, choosing `gl.color.gray.700` for text tells someone nothing about why that color was chosen, so the value may be updated arbitrarily. But, if something like `gl.color.text.secondary` was applied, then someone can understand that the text should appear as secondary, or with less prominence, than something that might be primary or more prominent — the design intent has been communicated and can't be changed on a whim without reconsidering the purpose.

Although a design token is a simple json key/value pair, its potential is apparent when thinking about it really as the pairing of a design decision with an option that exists in the design system.

## Why we use design tokens

Design tokens help us establish a single source of truth for how, when, and why a _what_ from the design system is used. More specifically they:

- Codify design decisions so they don't just live in a design tool or the mind of a designer — they are captured openly and objectively.
- Syncronize design decisions between design and development tooling because they share the same source.
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
