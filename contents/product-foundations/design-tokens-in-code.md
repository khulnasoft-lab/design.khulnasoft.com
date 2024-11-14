---
name: Using design tokens in code
---

## Pajamas components

When you use a Pajamas component, you're automatically using design tokens under the hood — this should be your first approach when implementing a UI.

## CSS utils

If you need something more custom or you need to customize a Pajamas component, CSS utils should help you out. Since these are powered by Tailwind, your IDE should be able to autocomplete, see the [documentation](https://gitlab-org.gitlab.io/frontend/tailwind-documentation) for details.

There are more utilities currently available, but we advise against using them as they have hard-coded color values that will not respond to different modes. Try to avoid color utilities that directly reference a color (for example, a [constant](/design-tokens#constant-design-tokens) like `gl-text-green-900` or `gl-bg-white`) and instead use a [semantic](/design-tokens#semantic-design-tokens) equivalent (for example, `gl-text-success` or `gl-bg-default`). This ensures the colors will update predictably when changing modes.

### CSS Utility classes

The simplest way to use these utilities is to add classes to the components themselves.

```html
<span class="gl-text-subtle gl-truncate">This text will be a subtle gray color, truncated to fit its container.</span>
```

This is reccomended for most cases but can clutter up the codebase if overused.
If you find yourself adding too many of these classes and want a cleaner approach, you can use `@apply` instead.

### CSS apply

This is a little more complex than adding the classes directly to the element, but produces the same result. Instead of adding the utility classes directly to the element, you can `@apply` them in SCSS.

```html
<span class="exampleText">This text will be a subtle gray color, truncated to fit its container.</span>
```

```css
.exampleText {
  @apply gl-text-subtle gl-truncate;
}
```

This can be cumbersome if you only need to add a few classes (like in this example), but it makes things cleaner when you need to add multiple utilities to one element.

## CSS custom properties

Utility classes should do 90% of what's desired, but sometimes you need something a little more bespoke. For those 10% of cases, CSS custom properties (also known as CSS variables) allow you to use design tokens in a more flexible manner. For example, to change the caret color of an input (don't actually do this), use design tokens like so:

```css
.exampleInput {
  caret: var(--gl-text-color-info);
}
```

Remember to use them [semantically](/design-tokens#semantic-design-tokens), don't use `info` if you simply want `blue`. In different modes, `info` may be a different color.

## Dark mode

Because design tokens focus on semantics and not color, dark mode for your UI elements should work out of the box. However, there are times when we need to change the way something behaves in dark mode. As with all deviations from the design system, the first, second, and third thing you should ask yourself and the designer is, "do I really need to deviate from the standard pattern?" If it still makes sense to do so, CSS utils have methods to help.

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
