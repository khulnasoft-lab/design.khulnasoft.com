---
name: Type fundamentals
related:
  - /product-foundations/type-markdown
  - /product-foundations/color
---

Text is the primary way of communicating within GitLab. A thoughtful use of semantics and visual hierarchy can provide consistency and clarity to aid in comprehension and action.

## Typefaces

GitLab Sans, based on [Inter](https://rsms.me/inter/), is used for most user interface (UI) elements, with system fonts used as a back-up. GitLab Mono, based on [JetBrains Mono](https://www.jetbrains.com/lp/mono/), is used for code-related elements, for example, code blocks, branch names, commit IDs, and pipeline IDs. The fonts are available to download in [this package](https://www.npmjs.com/package/@gitlab/fonts).

The decision to use custom typefaces supports a consistent core experience for users, regardless of their device. A finer control of font size, variable weight, and other attributes like disambiguation enable greater optimization of usability and polish.

The typefaces were chosen because:

- Tall x-height that improves legibility at small sizes and readability of mixed- and lower-case text.
- Features that include character disambiguation and [OpenType Font Variations](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview).
- Balanced and complementary pairing that supports the [GitLab brand expression](/brand/overview).
- Open source.

**Sans serif font stack**

```css
font-family: 'GitLab Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans',
  Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
  'Segoe UI Symbol', 'Noto Color Emoji';
```

**Monospace font stack**

```css
font-family: 'GitLab Mono', 'Menlo', 'DejaVu Sans Mono', 'Liberation Mono', 'Consolas',
  'Ubuntu Mono', 'Courier New', 'andale mono', 'lucida console', monospace;
```

## Type scales

GitLab utilizes two type scales: **dynamic** and **fixed**.

- The dynamic scale is used for any UI text within GitLab. The **500**–**800** options rely on the viewport width to dynamically change size between the **min** and **max**.
- The fixed scale is used for [markdown](/product-foundations/type-markdown) (user generated content). Text sizes match the **min** of the dynamic scale.

<table class="table-compact gl-mb-6">
<col>
<colgroup span="2"></colgroup>
<col>
<col>
<thead>
<tr>
<th rowspan="2">Variable</th>
<th colspan="2" class="gl-white-space-nowrap">Dynamic scale</th>
<th rowspan="2" class="gl-white-space-nowrap">Fixed scale</th>
<th rowspan="2">Use</th>
</tr>
<th>Min</th>
<th>Max</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="gl-white-space-nowrap">size-text-100</code></td>
<td>12px</td>
<td>12px</td>
<td>12px</td>
<td>Meta text, small labels</td>
</tr>
<tr>
<td><code>size-text-200</code></td>
<td>13px</td>
<td>13px</td>
<td>13px</td>
<td>Level 6 headings</td>
</tr>
<tr>
<td><code>size-text-300</code></td>
<td>14px</td>
<td>14px</td>
<td>14px</td>
<td>Level 5 headings, body text, input labels, help text</td>
</tr>
<tr>
<td><code>size-text-400</code></td>
<td>16px</td>
<td>16px</td>
<td>16px</td>
<td>Level 4 headings, level 2 headings within components (<a href="/components/alert">alert</a>, <a href="/components/banner">banner</a>, <a href="/components/modal">modal</a>), large body text</td>
</tr>
<tr>
<td><code>size-text-500</code></td>
<td>18px</td>
<td>20px</td>
<td>18px</td>
<td>Level 3 headings</td>
</tr>
<tr>
<td><code>size-text-600</code></td>
<td>21px</td>
<td>25px</td>
<td>21px</td>
<td>Level 2 headings</td>
</tr>
<tr>
<td><code>size-text-700</code></td>
<td>24px</td>
<td>30px</td>
<td>24px</td>
<td>Level 1 headings, limited to one per page.</td>
</tr>
<tr>
<td><code>size-text-800</code></td>
<td>28px</td>
<td>36px</td>
<td>28px</td>
<td>A display option that can be applied to a level 1 heading to increase its prominence. This can be useful for a learning path or feature promotion. Limited to one per page.</td>
</tr>
<tr>
<td colspan="5">Pixels are converted to relative units so that text respects browser settings for size and scale.</td>
</tr>
</tbody>
</table>

### Contextual adjustments

The dynamic scale is mapped to heading levels by default, however, in a limited number of cases visual hierarchy can be established aside from semantics. For example, an alert container has additional sectioning affordances like color, spacing, and iconography, because of this a level 2 heading within doesn't require the same visual weight as a level 2 heading that's establishing a content section elsewhere on the page. Similarly, a level 3 heading in a card may not require the same sectioning effect as a level three heading in body content, because the properties of the card itself indicate a section. When in doubt, use the scale by default, consider the full page context, and reference existing patterns.

<todo>Provide more guidelines and examples of scale overrides.</todo>

<todo>Add UI kit links after [#1527](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1527) has been completed.</todo>

## Font weight

GitLab uses contrasting font weights to support visual hierarchy within the application. Generally, three weights are used by default: **400**, **600**, and **700**.

<table class="table-compact gl-mb-6">
<thead>
<tr>
<th>Value</th>
<th>Use</th>
</tr>
</thead>
<tbody>
<tr>
<td>400</td>
<td>Body copy and data tables</td>
</tr>
<tr>
<td class="f-bold">600</td>
<td>Headings and specific UI elements, such as an input label</td>
</tr>
<tr>
<td style="font-weight:700;">700</td>
<td>Inline with 400 for emphasize</td>
</tr>
</tbody>
</table>

## Text color

There are a number of text colors defined in GitLab. Color choice depends on the location and purpose of the text.

<table class="table-compact gl-mb-6">
<thead>
<tr>
<th>Type</th>
<th>Variable</th>
<th>HEX</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Primary</td>
<td><code>$gray-900</code></td>
<td>#303030</td>
<td class="gl-text-gray-900">Main titles and body</td>
</tr>
<tr>
<td>Secondary</td>
<td><code>$gray-500</code></td>
<td>#666666</td>
<td class="gl-text-gray-500">Accompanying help text or menu subtitles</td>
</tr>
<tr>
<td>Tertiary</td>
<td><code>$gray-400</code></td>
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
- Styles correspond with semantics by default, for example, an `h3` is larger and has more visual weight than an `h4`.
