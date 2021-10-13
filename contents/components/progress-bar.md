---
name: Progress bar
description: A progress bar indicates a percentage of completion.
related:
  - spinner
  - skeleton-loader
---

## Examples

Todo: Add code example.

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A132)

## Structure

<figure class="figure" role="figure" aria-label="Progress bar structure">
  <img class="figure-img" src="/img/progress-bar-structure.svg" alt="Numbered diagram of progress bar structure" role="img" />
</figure>

1. **Progress indicator**: Element that indicates the current progress of completion.
1. **Track**: Background that indicates total progress available.

## Guidelines

### When to use

- Represent a percentage of completion or progress of an activity, process, or task.

### When not to use

- If you need to indicate that content is loading, use a [skeleton loader](/components/skeleton-loader) or [spinner](/components/spinner) instead. 

### Sizes

- Extra small
- Small
- Medium

Todo: Add size use cases.

### Behavior

The progress indicator is a static representation of progress at a given point of time and doesn't animate.

### Content

- Although the progress bar as a component doesn't include any visible content, it should be supported by visible text that indicates the what the bar is for and the units the progress represents. See the [reference section](#reference) for additional considerations.
- The `aria-label` or `aria-labelledby` content must clearly establish what the progress is for.

### Accessibility

- Progress bars aren't focusable elements, but they can be accessed with the virtual cursor.
- Use the HTML `<progress>` element in conjunction with either `aria-label` or `aria-labelledby`.
- The WAI-ARIA [`progressbar`](https://www.w3.org/TR/wai-aria-1.1/#progressbar) role can also be used.

## Reference

Although browser support is good for `<progress>`, screen readers handle them inconsistently and you may want to consider hiding it from screen readers while relying on visible text instead. Read the [Styles Progress Bar](https://scottaohara.github.io/a11y_styled_form_controls/src/progress-bar/) post, by Scott O'Hara, for more details. 
