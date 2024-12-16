---
name: Using design tokens in code
---

## Pajamas components

When you use a Pajamas component, you're automatically using design tokens under the hood — this should be your first approach when implementing a UI.

## CSS utilities

If you need something more custom or you need to customize a Pajamas component, CSS utilities can help you out. Since these are powered by Tailwind, your IDE will be able to autocomplete, see the [documentation](https://gitlab-org.gitlab.io/frontend/tailwind-documentation) for available classes.

For predictable styling between color modes use [semantic design token](/product-foundations/design-tokens#semantic-design-tokens) utility classes, for example, `.gl-text-subtle` or `.gl-bg-default`.
Using color scale values directly like `.gl-text-green-900` or `.gl-bg-white` with utility classes is deprecated. [Constant design tokens](/product-foundations/design-tokens#constant-design-tokens) are not currently exposed as CSS utility classes for use as they do not provide values for color modes.

There are multiple ways to apply these utility classes. For the current guidance on how best to do this, please refer to the [SCSS style guide](https://docs.gitlab.com/ee/development/fe_guide/style/scss.html#leveraging-tailwind-css-in-html-and-in-stylesheets).

## CSS custom properties

Utility classes are great, but sometimes you need something more bespoke. For those cases, CSS custom properties (also known as CSS variables) allow you to use design tokens in a more flexible manner. For example, to change the caret color of an input (don't actually do this), use design tokens like so:

```css
.exampleInput {
  caret: var(--gl-text-color-info);
}
```

Remember to use them [semantically](/product-foundations/design-tokens#semantic-design-tokens). Don't use `info` if you only want the color `blue`. In different modes, `info` may be a different color. So only use that token if the element it applies to is an informational element.

## Dark mode

Because design tokens focus on semantics and not color, dark mode for your UI elements should work out of the box. However, there are times when we need to change the way something behaves in dark mode. As with all deviations from the design system, the first, second, and third thing you should ask yourself and the designer is, "do I really need to deviate from the standard pattern?" If it still makes sense to do so, CSS utilities have methods to help.

### Using @apply

This is the preferred method.
When using the [@apply method](https://docs.gitlab.com/ee/development/fe_guide/style/scss.html#2-apply-utility-classes-in-component-classes-when-necessary), you can specify a dark variant inline.
For example; if you wanted to use the subtle background in light mode, but the dark-mode equivalent didn't work,
you can override it by explicitly setting the dark mode override to be `gray-100` like so:

```css
.my-class {
  @apply gl-bg-subtle dark:gl-bg-neutral-900
}
```

This should always be done with a semantic token, overridden by a specific color token:

- ✅ `@apply gl-bg-subtle dark:gl-bg-neutral-900`
- ❌ `@apply gl-bg-neutral-10 dark:gl-bg-neutral-900`
- ❌ `@apply gl-bg-gray-10 dark:gl-bg-gray-100`
- ❌ `@apply gl-bg-subtle dark:gl-bg-section`

Whilst this is the preferred method, it still comes with side-effects and should only be used when necessary.

### Using `.gl-dark`

In the olden days, you could add dark mode overrides with the `.gl-dark` selector. Today, you still can, but you shouldn't. Using the `.gl-dark` selector directly will not automatically scale for additional color modes, they will need to be added manually with parent CSS selectors:

The difference between using `@apply` vs `.gl-dark &` is small. We shouldn't need to use either, but we're not naïve enough to think that we won't have situations where we do need these overrides. To make sure they're handled consistently, we need to pick one so we went with the one that's easiest to grep against should we decide to re-visit this topic.

```scss
.exampleSelector {
  color: black;

  .gl-dark & {
    color: white;
  }
}
```

You'll likely see a few uses of this in our codebase but we are phasing this out.
Please don't do this.
If you believe you have a legitimate reason to do this, come and speak to us as this is a gap in our design system that we'll want to fix.
