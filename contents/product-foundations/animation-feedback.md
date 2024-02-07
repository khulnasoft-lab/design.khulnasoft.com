---
name: Feedback animation
---
  
Feedback animation is used to confirm a user interaction with a control or other interactive element.

## Examples

<todo>Add examples from gitlab-ui</todo>

## Guidelines

### When to use

1. State change transitions for interactive elements, such as hover, focus, and active.
1. When confirming a user interaction, including positive or negative feedback.

### When not to use

1. With disabled controls or non-interactive elements.
1. When a user doesn't interact with the element.

### Behavior

#### State change transitions

Interactive elements typically have four states: rest, hover, focus, and active. The appearance of a component often changes between these states to support usability.

When the appearance changes, animate the transition between states using the following combinations.

| State | Example | Duration | Easing |
| --- | --- | --- | --- |
| `hover` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Button animation on hover: background and border colors are changing with ease easing" width="200"><source src="/video/feedback-hover.mp4"></video> | `200m` | `$gl-easing-out-cubic` |
| `focus` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Button animation on focus: outline ring appears with easeOutCubic easing" width="200"><source src="/video/feedback-focus.mp4"></video> | `200ms` | `$gl-easing-out-cubic` |
| `active` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Button animation on click: water rings surround the button" width="200"><source src="/video/feedback-active.mp4"></video> | `500ms` | `$gl-easing-out-cubic` |

##### List components

Interactive components like select option lists, navigation, or tables, have many elements in close proximity. To prevent perceptions of slow performance, feedback should be fast.

| State | Example | Duration | Easing |
| --- | --- | --- | --- |
| `hover` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Select option list animation on hover: background and border colors are changing with ease easing" width="200"><source src="/video/feedback-list-hover.mp4"></video> | `100m` | `$gl-easing-out-cubic` |
| `focus` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label=""Select option list animation on focus: outline ring appears with easeOutCubic easing" width="200"><source src="/video/feedback-list-focus.mp4"></video> | `100ms` | `$gl-easing-out-cubic` |

#### Elements in close proximity

To support a cohesive and predictable experience elements in close proximity should convey feedback consistently, for example animating the same properties.

| Do | Don't |
| --- | --- |
| <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animation of the border color on hover for select, input and button controls" width="400"><source src="/video/feedback-group-transition-do.mp4"></video> | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animation of different properties on hover for select, input and button controls" width="400"><source src="/video/feedback-group-transition-dont.mp4"></video> |

#### Positive, negative and loading feedback

<todo>Add positive and negative feedback</todo>

### Accessibility

- A component should change state discretely when `prefers-reduced-motion` is enabled.

## Resources

- [A guide to designing accessible, WCAG-conformant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/) - Sara Soueidan
- [Focus!](https://a11y-101.com/design/focus) - A11y-101
