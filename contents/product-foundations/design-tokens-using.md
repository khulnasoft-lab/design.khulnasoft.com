---
name: Design tokens usage guide
---

## In design

Using design tokens as Figma variables is now GA.

1. Use colors from [Design tokens](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Design-tokens?node-id=2194-34&t=S8Qzj2r4h5sg8dIK-0) as Figma variables instead of styles from **📙&nbsp;Component library**. ([How do I apply a Figma variable?](https://help.figma.com/hc/en-us/articles/15343107263511-Apply-variables-to-designs))
1. Let us know how you get on in the [feedback issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1870). No problem too big, no feedback too small.

We've scoped these Figma variables by limiting the properties they can be applied to. This helps cut out the guess work when designing and supports recommended usage. For example, `text.color.default` can only be applied as a fill to a text element and not to a stroke or shape layer.

### Work with dark mode

To enable switching between light and dark modes in Figma, use **Design tokens library** with **📙&nbsp;Component library**. These libraries use Figma variables that adapt to the selected mode and sync directly with our design tokens in code.

Components in **📙&nbsp;Component library** are built using these variables from **Design tokens library**. Unlike color styles from  **📙&nbsp;Component library**, when you switch mode, variables automatically update to their scheme-specific values.

By default, Figma uses **Auto** mode which defaults to light theme. To change the mode, select **Apply variable mode** in either:

- the Page sidebar when nothing is selected
- the Appearance sidebar when an object is selected

<div class="gl-grid gl-gap-12 lg:gl-grid-cols-2">
  <figure-img alt="Screenshot of Figma user interface sidebar cropped to the page section" label="'Apply variable mode' button in the Page sidebar" src="/img/design-tokens-figma-page-mode-select.png"></figure-img>
  <figure-img alt="Screenshot of Figma user interface sidebar cropped to the appearance section" label="'Apply variable mode' button in the frame appearance section" src="/img/design-tokens-figma-frame-appearance-mode-select.png"></figure-img>
</div>

You should set the mode at the page or parent frame level. Elements with the **Auto** mode inherit the mode from their parent, which allows styles to cascade. In the GitLab product, the mode applies to the entire user interface.

If you design outside the design system, use color styles from **📙&nbsp;Component library**. For example, use `purple-400`. These colors remain static across modes, so document any special behaviors during [handoff](https://docs.gitlab.com/ee/development/contributing/design.html#handoff).

## In code

Use design tokens in code through these approaches, listed in order of preference:

1. **[Pajamas components](/product-foundations/design-tokens-technical-implementation#pajamas-components)**: The primary way to implement design tokens in your UI.
1. **[CSS utility classes](/product-foundations/design-tokens-technical-implementation#css-utilities)**: For custom styling needs not covered by Pajamas components.
1. **[CSS custom properties](/product-foundations/design-tokens-technical-implementation#css-custom-properties)**: For precise control over specific CSS properties.

If these options don't meet your needs, [reach out to the design system team](https://handbook.gitlab.com/handbook/engineering/development/dev/foundations/design-system/) to discuss potential improvements.

Using design tokens in code is explained in more detail in [design tokens technical implementation](/product-foundations/design-tokens-technical-implementation).

## Concepts

Our design tokens are organized into conceptual categories that reflect their purpose and usage within the user interface. These categories help create consistent, accessible, and meaningful user experiences across the product. Consider the context, user needs, and overall design consistency when designing custom elements that use design tokens. Use sufficient color contrast and provide text alternatives for all visual indicators.

### Actions

Actions are interactive elements that trigger or represent user actions. `action.*` design tokens give a common visual style for interactive elements across the GitLab UI.

To create bespoke interactive elements, combine background, foreground, and border color tokens. Note that in some modes, borders might not be visible by default. This is intentional to provide accessible boundaries in modes like Windows High Contrast Mode.

Action tokens support three contexts:

- `neutral`: Default for most actions.
- `confirm`: For positive outcome actions.
- `danger`: For potentially destructive actions.

Interactivity can be communicated through implementing states such as `hover`, `focus`, and `active`.

Consider using existing GitLab components (such as [button](/components/button), [pagination](/components/pagination), or [tabs](/components/tabs)) that already implement action tokens. These provide consistent styling and behavior without custom implementation. For more information on available components, see the [components overview](/components).

### Controls

<todo>Document control design tokens.</todo>

### Feedback

`feedback.*` design tokens are used to communicate dynamic information about the result of an action, event, or opportunity. Feedback often requires a user's attention or action.

Use feedback design tokens when:

- Notifying a user about a system event (for example, an error or successful action).
- Promoting a new feature or important information.
- Providing guidance or additional context.

Examples of custom feedback elements:

- A notice that alerts about unusual performance patterns, or an available dependancy update.
- An inline update providing compliance check feedback, or discovery of a new vulnerability.
- An addition to a collaboration activity stream.

### Status

`status.*` design tokens represent the current state or condition of an element or system. A status item provides static information that doesn't typically require immediate action.

Use status design tokens when:

- Indicating the current state of an item (for example, in progress or completed).
- Showing a priority or importance level.
- Representing system health or connection status.

Examples of custom status elements:

- A color-coded indicator showing task urgency, or the current state of a CI pipline.
- A small icon representing the confidentiality level of a document, or the visibility of a repository.
- Text communicating code test coverage as a percentage.

## Considerations

### Areas

Backgrounds and borders can be used to group related content and functionality into visible areas.
Use areas to establish visual hierarchy and improve scannability.
A border or background can define boundaries and provide visual distinction, and combining them creates stronger separation.

Use `background.color.default` and `border.color.default` by default when a background or border is needed.
Presentational attributes such as `subtle` and `strong` establish visual hierarchy without specific meaning.
Semantic attributes such as `section`, `overlap`, and `disabled` indicate an area's purpose in the interface.

#### Sections

A section is a specific type of area that completely encloses its content. Sections must:

- Include borders on all sides using `border.color.section`.
- Use `background.color.section` as its background color.
- Only include `section` borders within its boundaries.

Optionally, sections can also:

- Use `background.color.subtle` for nested areas when visual hierarchy is needed.
- Use `feedback` and `status` backgrounds for feedback and status regions.

### Choosing between feedback and status

Use these factors to decide between using feedback and status design tokens:

<table>
  <thead>
    <tr>
      <th>Characteristic</th>
      <th>Feedback</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Purpose</td>
      <td>Communicates changes or opportunities</td>
      <td>Informs about current state</td>
    </tr>
    <tr>
      <td>Timing</td>
      <td>Triggered by events or changes</td>
      <td>Always present</td>
    </tr>
    <tr>
      <td>User attention</td>
      <td>Often requires immediate action</td>
      <td>Doesn't require immediate action</td>
    </tr>
    <tr>
      <td>Persistence</td>
      <td>Often temporary</td>
      <td>Persistent until state changes</td>
    </tr>
    <tr>
      <td>Scope</td>
      <td>Can relate to entire system</td>
      <td>Specific to particular element</td>
    </tr>
    <tr>
      <td>Interactivity</td>
      <td>May include interactive elements</td>
      <td>Typically non-interactive</td>
    </tr>
    <tr>
      <td>Examples</td>
      <td>
        <ul>
          <li>Notice of a performance issue.</li>
          <li>Dependency update alert.</li>
          <li>Compliance check results.</li>
          <li>New vulnerability notification.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Task urgency indicator.</li>
          <li>CI pipeline state.</li>
          <li>Repository visibility icon.</li>
          <li>Code coverage percentage.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Additional considerations:

1. Dynamic vs. static: Feedback is often dynamic and changing, while status tends to be more static, changing only when the underlying state changes.
1. Context: Consider the broader context of the user interface. Status is often used within components or alongside specific elements, while feedback might appear separately or overlay other content.
1. Combination use: In some cases, you might use both status and feedback design tokens together. For example, status design tokens to show the current state of a CI/CD pipeline, with feedback design tokens to communicate that a merged result pipeline has failed.
1. Active processes: For ongoing processes (like 'in progress' or 'syncing'), consider using status, as these represent the current state even though they're dynamic.

When in doubt, consider whether the information represents the current state of something (status) or is communicating a change or the result of an event (feedback). Remember that the primary goal is to provide clear, consistent, and meaningful information to the user in the context of GitLab.

### Patterns and matching

<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1816">Document token pairing for color patterns and token matching for conceptual patterns.</todo>

### Accessibility considerations

<todo>Document accessibility considerations when matching design tokens.</todo>
