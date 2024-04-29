---
name: How to read design tokens
---

It's true, design token names can be quite the combination of terms strung together. They also take on different formatting depending on where they're referenced. And while each design token has an associated description, it may not always be apparent at the point of use. Let's start by taking a look at the convention and what each term represents, then we'll explore examples, and lastly we'll cover how design tokens are presented in different formats.

## Naming convention

A naming convention provides options for design token authors to construct a design token with, and in turn this results in readable choices for design token users to apply based on the intent.

In the graphic below, each term has a specific purpose and represents what will take its place in an actual design token name. They're strung together in a specific order and grouped by **context**, **element**, and **properties**, but don't worry, in most cases only a few of the terms will be used at any one time as you'll see in the examples further on.

<figure-img alt="Design tokens naming convention: [group].[component].[variant-category].[element].[position].[relationship].[property].[type].[scale].[state]" label="" src="/img/design-tokens-naming-convention.svg"></figure-img>

### Context

Context is information about where the element that follows is being addressed. Context can be either a group or component, but never both at the same time — the context is either broad or narrow. Design tokens that don't include a context are the most generally applied.

<figure-img alt="Design tokens naming convention: context" label="" src="/img/design-tokens-naming-context.svg"></figure-img>

- **Group:** Broad context that can apply to many things. Examples are `feedback`, `action`, and `control`.
- **Component:** Narrow context that only applies to the component. Examples are `avatar`, `button`, and `toggle`.
- **Variant/category:** Further describe the context. Examples are `confirm`, `danger`, and `neutral`.

### Element

An element is the thing the design decision applies to, and may include its position and relationship to other elements or constraints. An element is always present in [semantic](/product-foundations/design-tokens#semantic-design-tokens) and [contextual](/product-foundations/design-tokens#semantic-design-tokens) design tokens.

<figure-img alt="Design tokens naming convention: element" label="" src="/img/design-tokens-naming-element.svg"></figure-img>

- **Element:** Specific thing being addressed. Examples are `background`, `border`, and `text`.
- **Position:** Location of the element. Examples are `top`, `right`, or `outer`.
- **Relationship:** Association to other elements or constraints. Examples are `to-edge`, `to-top`, and `gap`.

### Properties

A property is the attribute for the element that's being addressed along with related modifiers. The property itself can be further described in order to give it more meaning or to understand how it's being modified.

<figure-img alt="Design tokens naming convention: properties" label="" src="/img/design-tokens-naming-properties.svg"></figure-img>

- **Property:** Attribute of the element. Examples are `color`, `space`, and `size`.
- **Type:** Similar to how a variant describes context, the type describes the property. Examples are `info`, `link`, and `overlay`. Type can include the same terms as a variant or category, like _danger_ or _success_, but the same term will never be in two places for a single design token. It is one of the most flexible parts of the naming convention.
- **Scale:** An ordinal range that is finite and doesn't clarify distance between steps. Example ordinal scale are `default`, `subtle`, `strong` and `sm`, `md`, `lg`.
- **State:** Interactive or programmatically unique state. Examples include `default`, `hover`, and `checked`.

## Examples

<todo>Add examples…</todo>

## Formats

<todo>Show representations of json, Figma variables, SCSS variables, CSS custom properties…</todo>

Next, [learn how to use design tokens →](/product-foundations/design-tokens-using)
