---
name: Spinner
description: A spinner is an animated element that appears after a user's action to indicate that saving or loading is in progress.
vueComponents:
  - GlLoadingIcon
related:
  - skeleton-loader
  - button
  - search
  - form
---

## Examples

[[Example:loading-icon-all-options]]

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=19944%3A0)

## Structure

<figure class="figure" role="figure" aria-label="Spinner structure">
  <img class="figure-img" src="/img/spinner-structure.svg" alt="Numbered diagram of a spinner structure" role="img" />
</figure>

1. **Track**: Background that the segment travels on during the looped animation. 
1. **Segment**: Animated element of the spinner.

## Guidelines

### When to use

- Use a spinner to signify that something is loading.
- In some instances, the UI will reflect a change before the change is actually saved and the spinner is used to indicate background activity until information is successfully saved.

### When not to use

- Ideally, only one spinner should be used at a time. If a larger section of content is loading, consider using a larger size spinner instead of multiple smaller ones or a [skeleton loader](/components/skeleton-loader) instead.
- A spinner shouldn’t be used in combination with a [skeleton loader](/components/skeleton-loader), choose the one that fits the use case best.

### Appearance

- **Dark**: For [neutral](/product-foundations/colors#neutral-palette) backgrounds that are `$gray-200` or lighter, or [chromatic](/product-foundations/colors#chromatic-palette) backgrounds that are `300` or lighter.
- **Light**: For [neutral or chromatic](/product-foundations/colors) backgrounds that are `400` or darker.

### Sizes

- **Small**: 16px, used with text labels or inside other UI elements, like buttons.
- **Medium**: 24px, used within larger visual elements, like merge widget status icons.
- **Large**: 32px, indicates larger components are loading, like a [chart](/data-visualization/charts).
- **Extra large**: 64px, indicates a large content area of the UI is loading.

### Behavior

- A 100ms delay occurs before showing a spinner to mitigate unnecessary spinners showing up at the same time when load times are minimal.

### Accessibility

- When a change occurs in the UI, like a loading state, it's good to notify a user what is happening. While a spinner visually indicates that a process is happening, it should also be announced by assistive technology through the use of `aria-live`.
- See the [WAI-ARIA `aria-live` documentation](https://www.w3.org/TR/wai-aria-1.1/#aria-live) for more details.
