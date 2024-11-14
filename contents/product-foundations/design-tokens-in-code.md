---
name: Using design tokens in code
---

## Pajamas Components

if you use our pajamas components, you are automatically using our design tokens under the hood.
this should be your first port of call when implementing a UI.

## CSS Utils

If you need something more custom, or you need to customize a pajamas component, our CSS utils should help you out.
Since these are powered by tailwind, your IDe should be able to autocomplete and you can see the [documentation](https://gitlab-org.gitlab.io/frontend/tailwind-documentation) for more information.

There are more some utilities that are available right now that we advise against using as they use had-coded color values instead of our design tokens.
Try to avoid color tokens that reference a color (e.g. `gl-text-green-900` or `gl-bg-white`) and instead use a contextual equivalent e.g. `gl-text-success` or `gl-bg-default`.
This ensures the colors will update predictably when changing modes.

### CSS Utility classes

The simplest way to use these utilities is to add classes to the components themselves.

```html
<span class="gl-text-subtle gl-truncate">This text will be a subtle gray color, truncated to fit its container.</span>
```

This is reccomended for most cases but can clutter up the codebase if overused.
If you find yourself adding too many of these classes and want a cleaner approach, you can use `@apply` instead.

### CSS Apply

This is a little more complex than adding the classes but produces the same result.
Instead of adding the util classes directly to the element, you can `@apply` them in the (S)CSS.

```html
<span class="exampleText">This text will be a subtle gray color, truncated to fit its container.</span>
```

```css
.exampleText {
  @apply gl-text-subtle gl-truncate;
}
```

This can be cumbersome if you only need to add a few classes (like in this example) but makes things a lot cleaner when you need to add multiple utilities to one element.

## CSS Custom Properties

Our utility classes should do 90% of what you need but sometimes you need something a little more bespoke.
For those 10% of cases, CSS sustom properties (AKA CSS variables) allow you to use design tokens in a more flexible manner.
For example, if we wanted to change the caret color of an input (don't actually do this), we can still use design tokens like so:

```css
.exampleInput {
  caret: var(--gl-text-color-info);
}
```

Remember to use them semantically, don't use `info` if you simply want `blue`.
In different modes, `info` may be a different color.

## Dark Mode

Because design tokens focus on semantics and not color, dark modes for your UI elements should work out of the box.
However, there are times when we need to step out of that box and change the way something behaves in dark mode.
As with all deviations from the design system, the first, second, and third thing you should ask yourself and your
designer is, "Do I really need to deviate from the standard pattern?".
If it still makes sense to do so, our CSS utils have some methods to help.

### Using @apply

This is the preferred method.
When using the [@apply method](#css-apply), you can specify a dark variant inline.
For example; if you wanted to use the subtle background in light mode, but the dark-mode equivalent didn't work,
you can override it by explicitly setting the light and dark mode backgrounds to be `gray-10` and `gray-100` respectively like so:

```css
.my-class {
  @apply gl-bg-gray-10 dark:gl-bg-gray-100
}
```

This should always be done with a specific color token, overridden by another specific color token:

- ✅ `@apply gl-bg-gray-10 dark:gl-bg-gray-100`
- ❌ `@apply gl-bg-subtle dark:gl-bg-gray-100`
- ❌ `@apply gl-bg-subtle dark:gl-bg-section`

Whilst this is the preferred method, it still comes with side-effects and should only be used when nessacary.

### Using `.gl-dark`

In the olden days, you could add dark mode overrides with the `.gl-dark` selector.
Today, you still can, but you shouldn't.

```scss
.exampleSelector {
  color: black;

  .gl-dark& {
    color: white;
  }
}
```

You'll likely see a few uses of this in our codebase but we are phasing this out.
Please don't do this.
If you beleive you have a legitamate reason to do this, come and speak to us as this is a gap in our design system that we'll want to fix.
