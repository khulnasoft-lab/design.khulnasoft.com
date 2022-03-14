---
name: Type fundamentals
related:
  - /product-foundations/type-scales
  - /product-foundations/type-markdown
  - /product-foundations/colors
---

## Typeface

GitLab utilizes a system font stack, which references the default system fonts used by any given OS. Using system fonts helps performance by eliminating the need to download font files, and maintains the language support of the user’s system.

The body font stack is used for all UI elements, except for code-related elements, which use the monospace font stack. Examples of code-related elements are: branch name, commit ID, and pipeline ID.

### Body font stack

```
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', Ubuntu, Cantarell,
  'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji';
```

### Monospace font stack

```
'Menlo', 'DejaVu Sans Mono', 'Liberation Mono', 'Consolas', 'Ubuntu Mono',
  'Courier New', 'andale mono', 'lucida console', monospace;
```

## Font weight

GitLab uses two font weights within the application: normal and bold. A bold font weight can be used to emphasize specific UI elements, such as a title or input label.

<table class="font-weight m-b-6">
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
<td>The platform for modern developers</td>
</tr>
<tr>
<td>Bold</td>
<td>$gl-font-weight-bold</td>
<td>600</td>
<td class="f-bold">The platform for modern developers</td>
</tr>
</tbody>
</table>

## Font color

Use a primary color for main titles and body text. Use a secondary color for accompanying text that adds further information, details, or features to the primary content. Examples include help text and menu subtitles.

<table class="font-weight m-b-6">
<thead>
<tr>
<th>Background</th>
<th>Primary color</th>
<th>HEX</th>
<th>Secondary color</th>
<th>HEX</th>
</tr>
</thead>
<tbody>
<tr>
<td>Light</td>
<td>$gray-900</td>
<td>#303030</td>
<td>$gray-500</td>
<td>#666666</td>
</tr>
<tr>
<td>Dark</td>
<td>$white</td>
<td>#FFFFFF</td>
<td>$gray-100</td>
<td>#DBDBDB</td>
</tr>
</tbody>
</table>



