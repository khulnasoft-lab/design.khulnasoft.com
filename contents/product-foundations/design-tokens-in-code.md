---
name: Using design tokens in code
---

## Pajamas Components

if you use our pajamas components, you are automatically using our design tokens under the hood.
this should be your first port of call when implementing a UI.

## CSS Utils

If you need something more custom, or you need to customize a pajamas component, our CSS utils should help you out.

### CSS Utility classes

### CSS Apply

## CSS Custom Properties

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

### Using 
