---
name: Color
---

## Data visualization palette

<note>View the [Foundations > Color](/product-foundations/color) section for details about the UI, neutral, and theme palettes.</note>

Data visualization is critical content within GitLab. The presentation and interpretation of this content relies on visual nuance that is separate from the rest of the UI.

The data visualization palette is designed specifically for conveying different types of data. The meaning is derived from the data itself, not by color as a first measure. The palette is versatile enough to be applied in a number of [data types](#data-types) in both light and dark UI.

### Hues, steps, and variables

There are 5 hues, each with 11 steps for a total of 55 variables. The palette is designed for both light and dark UI where:

* Steps `50`—`500` meet or exceed a 3:1 contrast ratio on a dark `$gray-950` (`#1f1e24`) surface.
* Steps `500`—`950` meet or exceed a 3:1 contrast ratio on a light `$white` (`#ffffff`) surface.

Because the `500` step has at least a 3:1 contrast ratio on both light and dark surfaces, there are 30 total variables that can be used for each surface.

### Blue

<story-viewer component="tokens-color-data-viz-light" story="data-viz-blue" title="Tokens"></story-viewer>

### Orange

<story-viewer component="tokens-color-data-viz-light" story="data-viz-orange" title="Tokens"></story-viewer>

### Aqua

<story-viewer component="tokens-color-data-viz-light" story="data-viz-aqua" title="Tokens"></story-viewer>

### Green

<story-viewer component="tokens-color-data-viz-light" story="data-viz-green" title="Tokens"></story-viewer>

### Magenta

<story-viewer component="tokens-color-data-viz-light" story="data-viz-magenta" title="Tokens"></story-viewer>

## Usage

### Color sequence

We categorize data into three general types: [sequential](#sequential-data), [categorical](#categorical-data), and [divergent](#divergent-data). Each type uses color differently to best present the data.

A color sequence helps colorblind users distinguish data visualization content. With 5 hues in the palette, we can alternate both the hue and steps to create sequences with color and contrast differences.

Data types are covered in more detail below, but here’s a general summary of how each uses color sequences:

* **Sequential data** uses steps within a single hue to present a single data range.
* **Categorical data** uses hues to differentiate categories, and like sequential data, steps within each hue to present a data range.
* **Divergent data** uses hue transitions to present data ranges on either side of a common central point.

### Surfaces, visual separators, and patterns

Per [WCAG 2.1 Success Criterion 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html), UI components and graphical objects must have a contrast ratio of at least 3:1 against adjacent colors. This means sufficient contrast against the surface (background), and each other.

#### Surfaces

* In a light UI, all data visualization should be on a `$white` (`#ffffff`) surface.
* In a dark UI, all data visualization should be on a `$gray-950` (`#1f1e24`) surface.

#### Visual separators

Colors meet or exceed a 3:1 contrast ratio against either a light or dark surface, but not necessarily each other. There are a few solutions, but the easiest is space between each element. This means at least a `1px` gap between elements, where the gap is the color of the surface. Alternately, a border of at least `1px` can be used on elements, where the border matches the surface color. Whether this is an actual gap, or border, the effect is the same.

#### Patterns

Pattern fills can create accessibility issues of their own, namely cognitive, and we currently do not support this as an option.

## Data types

### Sequential data

Sequential data uses steps within a single hue, and color lightness to indicate a range from low to high.

Blue is the default hue for charts with a single data range, and `$data-viz-blue-500` is the base step for both light and dark UI. Others hues can be used instead by following a similar pattern.

* Steps in a light UI go from `500` (low) to `950` (high) so that the higher the value, the darker it is and the more contrast it has against the light surface.
* Steps in a dark UI go from `500` (low) to `50` (high) so that the higher the value, the lighter is is and the more contrast it has against the dark surface.

<figure-img label="Default color sequence in a light UI" src="/img/dv-sequential-blue-light-ui.svg"></figure-img>

<figure-img dark label="Default color sequence in a dark UI" src="/img/dv-sequential-blue-dark-ui.svg"></figure-img>

<todo>Include example of chart with sequential data</todo>

**Potential applications:** stacked bar charts, heat maps, choropleth maps, funnels, cycle diagrams, clusters, pyramids, etc.

### Categorical data

Categorical data (also known as qualitative or thematic) uses hue to differentiate categories (qualitative), and lightness to differentiate a data range (quantitative).

A chevron-skipping sequence is used to alternate both hue and lightness to increase contrast between sibling elements.

The default sequence loops through different steps of each hue in the following order:

1. Blue
1. Orange
1. Aqua
1. Green
1. Magenta

Blue is always the default starting point, and `$data-viz-blue-500` is the base step for both light and dark UI.

<figure-img label="Chevron-skipping pattern in a light UI">
  <img class="gl-mb-5" src="/img/dv-chevron-light-ui.svg" alt="Chevron-skipping pattern for color sequence" role="img" />
  <img src="/img/dv-chips-light-ui.svg" alt="Step order from chevron-pattern for color sequence" role="img" />
</figure-img>

<figure-img dark label="Chevron-skipping pattern in a dark UI">
  <img class="gl-mb-5" src="/img/dv-chevron-dark-ui.svg" alt="Chevron-skipping pattern for color sequence" role="img" />
  <img src="/img/dv-chips-dark-ui.svg" alt="Step order from chevron pattern" role="img" />
</figure-img>

<todo>Include example of chart with categorical data</todo>

<todo>Add a sequence generator</todo>

**Potential applications:** bar charts, pie charts, line graphs, stacked area charts, etc.

### Divergent data

Divergent data moves in opposite directions from a central point. Color is used to indicate distance from the center by stepping darker in a light UI to each end, while stepping lighter in a dark UI to each end.

The pattern for selecting values skips every other step by default, and has a range of 11 steps including the central point. For data with a smaller range, the pattern could be a subset that starts at the same central point, but does not extend as far to each end. For data with a larger range, add skipped values into the sequence, starting from the center out.

The number of steps required to make a useful progression would not meet 3:1 contrast ratios by using fill alone (each hue has 6 steps with enough contrast for each surface), so a border that uses the `500` value from the relative hue surrounds low-contrast fills.

There are two divergent options, choose the one that works best with the type of data being shown.

* A cool to warm hue transition is helpful for showing a decrease vs. increase from a central point, where the warm steps show the increase.
* A cool to cool hue transition could be useful for showing data based on a central point, where either end of the range does not necessarily have positive or negative connotation.

<figure-img label="Cool to warm, and cool divergent sequences in a light UI" src="/img/dv-divergent-light-ui.svg"></figure-img>

<figure-img dark label="Cool to warm, and cool divergent sequences in a dark UI" src="/img/dv-divergent-dark-ui.svg"></figure-img>

<todo>Include example of chart with divergent data</todo>

**Potential applications:** butterfly charts, choropleth maps, sparklines, etc.

### Data associated with system status

Colors are often associated with system status in data visualizations (for example, green for success and red for failure). However, because using green and red together can be problematic for some color blindness conditions, try to utilize the recommended palette as a first pass.

When representing a success status alone against the generic data, use `$data-viz-blue-500` for all and `$data-viz-green-700` for success.

If it's necessary to show success and failure states together in the same graph, `$data-viz-green-500` and `$data-viz-magenta-600` is the recommended combination (`$data-viz-green-500` and `$data-viz-magenta-400` in a dark UI). To avoid indicating status by color alone, use text and additional visual indicators when possible to clarify the status. To ensure sufficient contrast ratio, follow the [color guidelines](#usage) for specific data types.

<todo>Include example of recommended color combinations</todo>

## Accessibility

At GitLab, we are dedicated to continually improving the accessibility of the application. Color is no exception. Every step of every hue in the data visualization palette has been evaluated to satisfy a 3:1 contrast ratio against a light or dark surface.

* For light UI, that is a contrast ratio of at least 3:1 on `$white` (`#ffffff`).
* For a dark UI, that is a contrast ratio of at least 3:1 on `$gray-950` (`#1f1e24`)

## Resources

* [Inclusive Color Sequences for Data Viz in 6 Steps](https://medium.com/design-ibm/inclusive-color-sequences-for-data-viz-in-6-steps-712869b910c2) - Design at IBM
* [Re-approaching Color](https://design.lyft.com/re-approaching-color-9e604ba22c88) - Lyft Design
* [ColorBox](https://www.colorbox.io/) - Lyft Design
