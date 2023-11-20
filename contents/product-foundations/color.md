---
name: Color
---

## Chromatic palette

<note>View the [Data visualization > Color](/data-visualization/color) section for details about the data visualization palette.</note>

We have five primary chromatic hues and their color steps, totaling 55 color variables for use across the application. These colors give flexibility during the design process, while also providing a harmonious palette that looks consistent and in-line with our brand styles.

Though deciding which color to use depends on the situation, here are some general guidelines for using the chromatic palette hues:

### Blue

Blue indicates a current or active state. It communicates management, progress, connectivity, or organization.

<story-viewer component="tokens-color-base-light" story="blue" title="Tokens"></story-viewer>

### Green

Green indicates success. It communicates save, create, add, available, done, approved, or resolved.

<story-viewer component="tokens-color-base-light" story="green" title="Tokens"></story-viewer>

### Orange

Orange indicates attention is required. It communicates warning, pending, missing, or impeded progress.

<story-viewer component="tokens-color-base-light" story="orange" title="Tokens"></story-viewer>

### Red

Red indicates a problem. It communicates a critical state, destructive action, error, failure, removal, stop, or decline.

<story-viewer component="tokens-color-base-light" story="red" title="Tokens"></story-viewer>

### Purple

Purple is not assigned meaning in the same way the other chromatic hues are, and instead is associated with the GitLab brand. It communicates an affinity with the brand, and is used for things like illustrations or company-related announcements in the product.

<story-viewer component="tokens-color-base-light" story="purple" title="Tokens"></story-viewer>

## Neutral palette

The neutral palette is primarily used within components to help differentiate hierarchy. Use shades of gray as backgrounds, borders, and shadows to emphasize areas or set them apart.

<story-viewer component="tokens-color-base-light" story="gray" title="Tokens"></story-viewer>

## Transparency

Transparency is used only to indicate hover and active states within themes. Each theme has a series of four transparencies to utilize alpha levels ranging from 0.02 to 0.08.

### Gray

<story-viewer component="tokens-color-transparency" story="gray" title="Tokens"></story-viewer>

### White

<story-viewer component="tokens-color-transparency" story="white" title="Tokens"></story-viewer>

## Themes

A user may choose between ten different themes to customize the appearance of the application header and navigation sidebar in GitLab. Each theme draws inspiration from one of the primary chromatic colors, the neutral palette, or the corporate indigo color.

### Indigo / Light indigo

Indigo and light indigo share the same `$theme-indigo-` SCSS variables.

<story-viewer component="tokens-color-themes-light" story="theme-indigo" title="Tokens"></story-viewer>

### Green / Light green

Green and light green share the same `$theme-green-` SCSS variables.

<story-viewer component="tokens-color-themes-light" story="theme-green" title="Tokens"></story-viewer>

### Blue

<story-viewer component="tokens-color-themes-light" story="theme-blue" title="Tokens"></story-viewer>

### Light blue

<story-viewer component="tokens-color-themes-light" story="theme-light-blue" title="Tokens"></story-viewer>

### Red

<story-viewer component="tokens-color-themes-light" story="theme-red" title="Tokens"></story-viewer>

### Light red

<story-viewer component="tokens-color-themes-light" story="theme-light-red" title="Tokens"></story-viewer>

### Dark / Light

The dark and light (gray) themes use the [neutral palette](#neutral-palette).

## Interactive states

Color changes can be used to emphasize user actions. When used, they must be combined with other visual feedback. For example, `:focus` color changes are normally accompanied with a focus ring.

Typical state changes (light UI):

- `:hover` a color becomes one step darker than at rest.
- `:focus` a color becomes one step darker than at rest, matching `:hover` color.
- `:active` a color becomes two steps darker than at rest.
- Where there aren't enough steps to follow this pattern, prioritize `:hover` and `:focus` becoming a step darker.

<figure-img alt="Example button state color changes" label="Interactive color state example" src="/img/color-interactive.svg">
  <template #caption>
    A primary confirm button example with a <code>$blue-500</code> fill at rest (1), a <code>$blue-600</code> fill for hover and focus (2, 3), and a <code>$blue-700</code> fill when active (4). The color changes are combined with other visual feedback (cursor, focus ring) to communicate information about the interactive state.
  </template>
</figure-img>

## Accessibility

### Text presentation

At GitLab, we are dedicated to continually improving the accessibility of the application. Pajamas satisfies the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast) AA level for normal text. Learn more in [Accessibility](/accessibility/a11y).

- **Normal text** - Must have a contrast ratio of at least 4.5:1.
- **Large text** - Defined as `14pt` Bold (`18.5px`) or `18pt` (`24px`) and must have a contrast ratio of at least 3:1.
- **AAA** - Pass 7:1+.
- **AA** - Pass 4.5:1+.
- **AA+** - Pass, large text only 3:1+.
- **F** - Doesn’t pass.

Contrast ratios for each color step are calculated using white (`#fff`) and black (`#000`). The `50–400` steps all meet a 4.5:1 contrast ratio or higher against $gray-950 (`#1f1e24`) or darker, while the `500–950` steps all meet a 4.5:1 contrast ratio against `$gray-10` (`#fbfafd`) or lighter.

Color should never be the only visual means of communicating information ([WCAG 1.4.1](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color)).
