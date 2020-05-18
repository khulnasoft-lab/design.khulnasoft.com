---
name: Typography
---

## Typeface

GitLab utilizes a system font stack. System fonts are the default fonts used by any given OS, helping performance by eliminating the need to download font files.

### Body font stack

Todo: Add codeblock showing body font variable stack

### Monospace font stack

Todo: Add codeblock showing monospace variable stack

## UI typescale

UI typography is used for any text within GitLab that is not markdown.

### Base

`14px` is the base size of body copy for UI typography.

### Label text

Our UI type scale includes “label” text which is used for short-form content. Label text differs from long-form text because it doesn’t include margins which allows for easier alignment with other UI elements.

Long-form content includes copy in modals and empty states, whereas short-form content includes help text and popover messages.

### Responsive

The `h1` and `h2` headers within our UI type scale are responsive. All other type options within this scale are not dependent on screen size.

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=542%3A334)

## Documentation Markdown Typescale

Documentation markdown is defined as any markdown that is written outside of issuable pages, such as a README or Wiki page. Content written using markdown includes typography that contains fixed margins and increased line-heights to improve readability. Label text is not available for documentation markdown because all markdown is considered long-form content.

### Base

`16px` is used as the base size for body copy within documentation markdown.

### Responsive

The `h1`, `h2`, and `h3` headers within our documentation markdown scale are responsive. All other type options within this scale are not dependent on screen size.

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=542%3A2)

## Compact Markdown Typescale

Within certain views, the markdown type scale is decreased in order to more closely align copy with other UI components. Compact markdown is used for descriptions and comments on issue and merge request pages. Label text is not available for compact markdown because all markdown is long-form content.

### Base

`14px` is used as the base size for body copy within compact markdown.

### Responsive

The `h1` header within our compact markdown scale is responsive. All other type options within this scale are not dependent on screen size.

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=542%3A132)

## Font weight

GitLab uses two font weights within the application: normal and bold. A bold font weight can be used to emphasize specific UI elements, such as a title or input label.

Todo: Show class used for bold typography

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
