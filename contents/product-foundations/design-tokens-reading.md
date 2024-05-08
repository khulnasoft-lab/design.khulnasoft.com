---
name: Reading design tokens
---

Understanding how design tokens are named will help you to use and apply them correctly.

## Naming convention

A naming convention provides readable choices so that you can choose a design token that matches your design intent. Design token names include terms that may define the **context**, **element**, and **properties** for a design token. For example:

<img class="gl-display-block gl-mx-auto gl-mt-7" src="/img/design-tokens-naming-convention.svg" alt="Design tokens naming convention with context, element, and properties groups" />

<small class="gl-display-block gl-text-center">`[group].[component].[variant/category].[element].[position].[relationship].[property].[type].[scale].[state]`</small>

### Context

Context is information about where the element that follows it is applied. Context can be either a group or component, but never both at the same time — the context is either broad or narrow. Design tokens that don't include a context are the most generally applied.

<img class="gl-display-block gl-mx-auto gl-my-7" src="/img/design-tokens-naming-context.svg" alt="Design tokens naming convention for context, includes group, component, and variant/category" />

- **Group:** Broad context that can apply to many things. Examples are `feedback`, `action`, and `control`.
- **Component:** Narrow context that only applies to the component. Examples are `avatar`, `button`, and `toggle`.
- **Variant/category:** Further describe the context. Examples are `confirm`, `danger`, and `neutral`.

### Element

An element is what the design decision applies to, and may include its position and relationship to other elements or constraints. An element is always present in a [semantic](/product-foundations/design-tokens#semantic-design-tokens) and [contextual](/product-foundations/design-tokens#semantic-design-tokens) design token name.

<img class="gl-display-block gl-mx-auto gl-my-7" src="/img/design-tokens-naming-element.svg" alt="Design tokens naming convention for element, includes element, position, and relationship" />

- **Element:** What's being addressed. Examples are `background`, `border`, and `text`.
- **Position:** Location of the element. Examples are `top`, `right`, or `outer`.
- **Relationship:** Association to other elements or constraints. Examples are `to-edge`, `to-top`, and `gap`.

### Properties

A property is the attribute for the element that's being addressed along with related modifiers. The property itself can be further described in order to give it more meaning or to understand how it's being modified.

<img class="gl-display-block gl-mx-auto gl-my-7" src="/img/design-tokens-naming-properties.svg" alt="Design tokens naming convention for properties, includes property, type, scale, and state" />

- **Property:** Attribute of the element. Examples are `color`, `space`, and `size`.
- **Type:** Similar to how a variant describes context, the type describes the property. Examples are `info`, `link`, and `overlay`. Type can include the same terms as a variant or category, like _danger_ or _success_, but the same term will never be in two places for a single design token. It is one of the most flexible parts of the naming convention.
- **Scale:** An ordinal range that is finite and doesn't define distance between steps. Example ordinal scale are `default`, `subtle`, `strong` and `sm`, `md`, `lg`.
- **State:** Interactive or programmatically unique state. Examples include `default`, `hover`, and `checked`.

## Examples

General design tokens with wide applicability.

<img class="gl-display-block gl-mx-auto gl-my-7" src="/img/design-tokens-example-01.svg" alt="Design token example: text.color.default" />

More specific design tokens with specific use cases.

<img class="gl-display-block gl-mx-auto gl-my-7" src="/img/design-tokens-example-02.svg" alt="Design token example: feedback.info.background.color" />

The most specific design tokens that are related to components.

<img class="gl-display-block gl-mx-auto gl-my-7" src="/img/design-tokens-example-03.svg" alt="Design token example: dropdown.icon.right.to-edge.space" />

## Formats

One of the features of design tokens is their adaptability. They are defined in one place (input), and then output for various formats. This means that they won't always appear the same — differences in delimiters and language formatting — but the naming convention remains unchanged.

Unless indicating a specific format, a design token referenced in documentation will use the json formatting with a dot notation to separate terms and a dash to join compound terms. For example, `focus-ring.outer.color`.

Below is what the json input looks like, followed by a few examples of the design tokens formatted for different platforms.

### Input

#### json

```json
{
  "color": {
    "neutral": {
      "950": {
        "$value": "#1f1e24",
        "$type": "color"
      }
    }
  },
  "text": {
    "color": {
      "strong": {
        "$value": "{color.neutral.950}",
        "$type": "color"
      }
    }
  }
}
```

### Output

#### CSS

```css
--color-neutral-950: #1f1e24;
--text-color-strong: var(--gl-color-neutral-950);
```

#### SCSS

```scss
$color-neutral-950: #1f1e24 !default;
$text-color-strong: $gl-color-neutral-950 !default;
```

#### JavaScript

```js
export const COLOR_NEUTRAL_950 = "#1f1e24";
export const TEXT_COLOR_STRONG = "#1f1e24";
```

#### Figma variables

```text
color/neutral/950: #1f1e24
text/color/strong: color/neutral/950
```

<br>

<todo>Once the documentation is created, add link to GitLab UI to learn how design tokens are output into different formats.</todo>

Next, [learn how to use design tokens →](/product-foundations/design-tokens-using)
