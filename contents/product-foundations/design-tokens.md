---
name: Design tokens overview
---

Design tokens capture decisions and intent in code. Design tokens abstract out variables like color, typography, and spacing for consistent and meaningful user interface (UI) design across tools and platforms.

<figure-img alt="Example design tokens in use" label="" src="/img/design-tokens.svg"></figure-img>

## Why we use design tokens

Design tokens are a methodology to establish a single source of truth for how, when, and why a foundational element from the design system is used. On the surface, a design token takes the form of a simple name/value pair, but each design token is the culmination of many factors and considerations that pair design intent with elements within the design system.

<figure-img alt="Example design token name and value pair" label="" src="/img/design-tokens-name-value.svg"></figure-img>

We use design tokens to:

- Catalogue design constants.
- Codify design decisions — capturing them openly and objectively.
- Synchronize design decisions across design and development tooling.
- Promote consistent and meaningful abstraction and use for both stable and experimental design.
- Help make new design decisions easier by leveraging existing intent and purpose.
- Support efforts like themes and modes by abstracting intent from underlying values.

## Categories

Our design tokens are grouped into three categories — **constant**, **semantic**, and **contextual** — that each serve a different purpose. Categories organize design tokens, but they don't impact how tokens are named.

### Constant design tokens

Constant design tokens (constants) are the rudimentary, unchanging key/value pairs found at the lowest level of the design system that capture essential attributes like color and spacing. Constant design tokens are not intended to be used directly. Instead, they act as the building blocks that are referenced in semantic and contextual design tokens.

<figure-img alt="Example constant design token" label="" src="/img/design-tokens-constant.svg"></figure-img>

### Semantic design tokens

Semantic design tokens reference constant design tokens to encapsulate global design decisions for everything from text to surfaces, and spacing to elevation. Semantic design tokens use a naming strategy that helps clarify design intent and use.

<figure-img alt="Example semantic design token" label="" src="/img/design-tokens-semantic.svg"></figure-img>

### Contextual design tokens

Contextual design tokens are the most specific of the three categories. These design tokens are useful for capturing specific design intent for components, patterns, and experiments. They can reference either semantic or constant design tokens.

<figure-img alt="Example contextual design token" label="" src="/img/design-tokens-contextual.svg"></figure-img>

Next, [learn how to read design tokens →](/product-foundations/design-tokens-reading)
