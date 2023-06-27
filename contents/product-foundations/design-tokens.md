---
name: Design tokens
---

## Definition

> Design tokens are a methodology for expressing design decisions in a platform-agnostic way so that they can be shared across different disciplines, tools, and technologies. They help establish a common vocabulary across organisations.

From: [Design Tokens Format Module](https://tr.designtokens.org/format/)

<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1569">Create working design tokens definition.</todo>

## Format

The [Design Tokens Format Module](https://tr.designtokens.org/format/) is used for defining design tokens that integrate with different tools and convert to required file formats. It is a [community group draft report](https://www.w3.org/standards/types#reports), published by the [Design Tokens Community Group](https://www.w3.org/community/design-tokens/).

Automated transformation using [style-dictionary](https://amzn.github.io/style-dictionary) converts design tokens to consumable file formats (CSS/SCSS/JavaScript etc.). A parser makes [design tokens format properties](https://tr.designtokens.org/format/#design-token-properties) compatible with [style-dictionary design token attributes](https://amzn.github.io/style-dictionary/#/tokens?id=design-token-attributes).

Design Tokens Format Module vs. style-dictionary

| DTFM                                                                       | style-dictionary                                                                                                                    |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [`$value`](https://tr.designtokens.org/format/#name-and-value) property    | [`value`](https://amzn.github.io/style-dictionary/#/tokens?id=design-token-attributes) property                                     |
| [`$type`](https://tr.designtokens.org/format/#type-0) property             | implicit nested [`category → type → item` (CTI) convention](https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item) |
| [`$description`](https://tr.designtokens.org/format/#description) property | [`comment`](https://amzn.github.io/style-dictionary/#/tokens?id=design-token-attributes) property                                   |

The Design Tokens Format Module promotes a `*.token.json` extension standard for design token files, with a format that includes [a name and `$value`](https://tr.designtokens.org/format/#name-and-value) and an explicit [`$type`](https://tr.designtokens.org/format/#type-0):

```json
{
  "token name": {
    "$value": "#000",
    "$type": "color"
  }
}
```

### Names

A design token name is a unique and case-sensitive identifier of a value. A name can be used across different [modes](#modes) to generate style overrides.

### Groups

Groups are arbitrary ways to cluster tokens together in a category. They are useful for defining children tokens but should not be used to infer the type or purpose of design tokens.

```json
{
  "group name": {
    "token name": {
      "$value": "#000"
    }
  }
}
```

Group names will prepend design token names when generated, for example:

**JavaScript**

```js
const GROUP_NAME_TOKEN_NAME = "#000";
```

**CSS**

```css
:root {
  --group-name-token-name: #000;
}
```

**SCSS**

```scss
$group-name-token-name: #000;
```

### Values

Name and `$value` are the minimum required properties of a design token, `$value` is a reserved word.

```json
{
  "token name": {
    "$value": "16"
  }
}
```

A design token value can be a string or [alias](#aliases), for example:

| Example       | Value               |
| ------------- | ------------------- |
| color         | `"#1f75cb"`         |
| font weight   | `"bold"`            |
| spacing scale | `"16"`              |
| easing        | `"ease-out"`        |
| duration      | `"200"`             |
| alias         | `"{color.default}"` |

### Aliases

A design token's value can be a reference to another token, for example the alias token `text-color` has the value `{color.default}`:

```json
{
  "text-color": {
    "$value": "{color.default}"
  }
}
```

This allows generated CSS and SCSS output using [Output References](https://amzn.github.io/style-dictionary/#/formats?id=references-in-output-files) to use references as variables:

**CSS**

```css
:root {
  --text-color: var(--color-default);
}
```

**SCSS**

```scss
$text-color: $color-default;
```

### Type

An optional [$type](https://tr.designtokens.org/format/#type-0) property is used for value transformations and grouping tokens together, for example:

```json
{
  "token name": {
    "$value": "#000",
    "$type": "color"
  }
}
```

Results in the output `tokens.grouped.json` that can be used for documentation or tooling configuration:

```json
{
  "color": {
    "token name": "#000"
  }
}
```

### Modes

Modes are processed on top of default tokens and can be combined with other modes, and inherited separately from stylesheets, for example:

#### Default

<div class="gl-display-grid gl-grid-template-columns-2 gl-gap-7">
<div>

**Input**

`color.tokens.json`

```json
{
  "text-color": {
    "$value": "#000",
    "$type": "color"
  }
}
```

</div>
<div>

**Output**

`tokens.grouped.json`

```json
{
  "color": {
    "text-color": "#000"
  }
}
```

`tokens.js`

```js
export const TEXT_COLOR = "#000";
```

`tokens.scss`

```scss
$text-color: #000;
```

`tokens.css`

```css
:root {
  --text-color: #000;
}
```

</div>
</div>

#### Dark mode

<div class="gl-display-grid gl-grid-template-columns-2 gl-gap-7">
<div>

**Input**

`color.dark.tokens.json`

```json
{
  "text-color": {
    "$value": "#fff",
    "$type": "color"
  }
}
```

</div>
<div>

**Output**

`tokens.dark.grouped.json`

```json
{
  "color": {
    "text-color": "#fff"
  }
}
```

`tokens.dark.js`

```js
export const TEXT_COLOR = "#fff";
```

`tokens.dark.scss`

```scss
$text-color: #fff;
```

`tokens.dark.css`

```css
:root {
  --text: #fff;
}
```

</div>
</div>
