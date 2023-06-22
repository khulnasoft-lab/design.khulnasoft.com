---
name: Type fundamentals
related:
  - /product-foundations/type-scales
  - /product-foundations/type-markdown
  - /product-foundations/color
---

## Typefaces

GitLab Sans, based on [Inter](https://rsms.me/inter/), is used for most UI elements, with system fonts used as a back-up. GitLab Mono, based on [JetBrains Mono](https://www.jetbrains.com/lp/mono/), is used for code-related elements, for example, code blocks, branch names, commit IDs, and pipeline IDs. The fonts are available to download in [this package](https://www.npmjs.com/package/@gitlab/fonts).

### Sans serif font stack

```css
font-family: 'GitLab Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans',
  Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
  'Segoe UI Symbol', 'Noto Color Emoji';
```

### Monospace font stack

```css
font-family: 'GitLab Mono', 'Menlo', 'DejaVu Sans Mono', 'Liberation Mono', 'Consolas',
  'Ubuntu Mono', 'Courier New', 'andale mono', 'lucida console', monospace;
```

## Font size

- 12px (0.75rem) is the smallest size option across all of the type scales. Legibility is impacted more at smaller sizes as system font, browser rendering, screen resolution, type styles, and other factors influence the presentation of text. Therefore, use small text in limited capacity for short meta content and actions.
- Pixels are converted to relative units so that text respects browser settings for size and scale.

View the [type scales](/product-foundations/type-scales) page for additional details about body and heading font sizes.

## Font weight

GitLab uses two font weights within the application: normal and bold. Bold is used for headings and to emphasize specific UI elements, such as a title or input label.

<table class="font-weight gl-mb-6">
<thead>
<tr>
<th>Weight</th>
<th>Variable</th>
<th>Value</th>
<th>Demo</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal</td>
<td>$gl-font-weight-normal</td>
<td>400</td>
<td>The DevSecOps Platform</td>
</tr>
<tr>
<td>Bold</td>
<td>$gl-font-weight-bold</td>
<td>700</td>
<td class="f-bold">The DevSecOps Platform</td>
</tr>
</tbody>
</table>

## Text color

There are a number of text colors defined in GitLab. Color choice depends on the location and purpose of the text.

<table class="font-weight gl-mb-6">
<thead>
<tr>
<th>Type</th>
<th>Variable</th>
<th>HEX value</th>
<th>Demo</th>
</tr>
</thead>
<tbody>
<tr>
<td>Primary</td>
<td>$gray-900</td>
<td>#303030</td>
<td class="gl-text-gray-900">Main titles and body</td>
</tr>
<tr>
<td>Secondary</td>
<td>$gray-500</td>
<td>#666666</td>
<td class="gl-text-gray-500">Accompanying help text or menu subtitles</td>
</tr>
<tr>
<td>Tertiary</td>
<td>$gray-400</td>
<td>#868686</td>
<td class="gl-text-gray-400">Placeholder or disabled</td>
</tr>
</tbody>
</table>

## Semantics

- Every page should have a level 1 (`h1`) heading. It can be visually hidden if the context of the page is clear for all users, but it must be present in the DOM.
- Headings should not skip levels, with the following exceptions:
  - When an alert, or other messaging component, gets inserted before the main page content. These components are designed to use a level 2 (`h2`) heading.
  - When a heading is used to identify a region, like navigation. Generally, a level 2 (`h2`) heading is used.
  - A user can order headings as they like in markdown. The visual appearance of a heading is the only guide provided for choosing the correct hierarchy.
