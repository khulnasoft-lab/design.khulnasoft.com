---
name: Using design tokens
---

## In design

Using design tokens as Figma variables is moving to open-beta following a successful invite-only pilot.

It's easy to opt in to the beta.

1. Add [Beta:&nbsp;Design&nbsp;tokens&nbsp;library](https://www.figma.com/design/tiAetVi1j5MGP8WA5FswcD/Beta%3A-Design-tokens?node-id=2194-34&t=S8Qzj2r4h5sg8dIK-0) to your files. ([How do I add a library to my file?](https://help.figma.com/hc/en-us/articles/1500008731201-Enable-or-disable-a-library-in-a-design-file))
1. Use colors as Figma variables instead of styles from **📙&nbsp;Component&nbsp;library**. ([How do I apply a Figma variable?](https://help.figma.com/hc/en-us/articles/15343107263511-Apply-variables-to-designs))
1. Let us know how you get on in the [feedback issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1870). No problem too big, no feedback too small.

In the future, color styles will be removed from the component library and these Figma variables will be updated to support dark mode.

We've scoped these Figma variables by limiting the properties they can be applied to. This helps cut out the guess work when designing and supports recommended usage. For example, `text.color.default` can only be applied as a fill to a text element and not to a stroke or shape layer.

## In code

<note>A pilot for design tokens in code has been completed as part of this [issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1776), and we're currently doing more exploration with a small subset of components as part of this [issue](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/2583). More details about officially using design tokens will be coming soon, but in the meantime carry on with your typical development process.</note>

## Concepts

### Actions

Actions are interactive elements that trigger or represent user actions. `action.*` design tokens give a common visual style for interactive elements across the GitLab UI.

To create bespoke interactive elements, combine background, foreground, and border color tokens. Note that in some modes, borders might not be visible by default. This is intentional to provide accessible boundaries in modes like Windows High Contrast Mode.

Action tokens support three contexts:

- `neutral`: Default for most actions
- `confirm`: For positive outcome actions
- `danger`: For potentially destructive actions

Interactivity can be communicated through implementing states such as `hover`, `focus`, and `active`.

Consider using existing GitLab components (such as [button](/components/button), [pagination](/components/pagination), or [tabs](/components/tabs)) that already implement action tokens. These provide consistent styling and behavior without custom implementation. For more information on available components, see the [components overview](/components/overview).

Form elements and user inputs should use [`control.*` design tokens](#controls) instead of action design tokens.

### Controls

<todo>Document control design tokens</todo>

### Feedback and status

Feedback and status tokens help communicate information about the system, actions, and elements to users. While related, they serve distinct purposes in the user interface.

#### Feedback

Feedback tokens are used to communicate dynamic information about actions, events, or opportunities. They often require user attention or action.

Use feedback tokens when:

- Notifying a user about system events (e.g., errors, successful actions)
- Promoting new features or important information
- Providing guidance or additional context

Examples of custom feedback elements:

- A floating notification that appears after a user action
- An inline message providing context-sensitive help
- A dismissible banner announcing important updates

#### Status

Status tokens represent the current state or condition of an element or system. They provide static information that doesn't typically require immediate action.

Use status tokens when:

- Indicating the current state of an item (e.g., in progress, completed)
- Showing priority or importance levels
- Representing system health or connection status

Examples of custom status elements:

- A color-coded indicator showing task urgency
- A small icon representing the confidentiality level of a document
- A progress bar indicating the status of a long-running process

#### Choosing between feedback and status

Use these factors to decide between feedback and status tokens:

1. Persistence: Is the information temporary (feedback) or persistent until a state change (status)?
2. Scope: Does it relate to a specific element (status) or a broader context (feedback)?
3. Interactivity: Does it require user action (often feedback) or is it informational (typically status)?
4. Timing: Is it triggered by an event or action (feedback) or always present (status)?

While feedback and status serve different purposes, they can be used together to create a comprehensive user experience. For example, you might use a status token to show an item's current state, and a feedback token to notify users when that state changes.

When designing custom elements using feedback and status tokens, consider the context, user needs, and overall design consistency. Use appropriate color contrast and provide text alternatives for any visual indicators.

### Patterns and matching

<todo issue="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1816">Document token pairing for color patterns and token matching for conceptual patterns.</todo>
