---
name: Feedback animation
---

## Examples

<todo>Add examples from gitlab-ui</todo>

## Guidelines

### When to use

1. With controls and interactive elements.
1. When a user interacts with the element: hover, focus, and active states. The user must understand that the control is interactive.
1. After the interaction with the element. The user needs to see that action was done and positive or negative feedback.

### When not to use

1. With disabled controls or non-interactive elements.
1. When a user doesn't interact with the element.

### Behavior

#### Feedback on user action

All interactive elements should have three states that show they are interactive: hover, focus, and active.

| State | Example | Duration | Easing |
| --- | --- | --- | --- |
| `hover` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Button animation on hover: background and border colors are changing with ease easing" width="200"><source src="/video/feedback-hover.mp4"></video> | `200m` | `$gl-easing-default` |
| `focus` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Button animation on focus: outline ring appears with easeOutCubic easing" width="200"><source src="/video/feedback-focus.mp4"></video> | `200ms` | `$gl-easing-out-cubic` |
| `active` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Button animation on click: water rings surround the button" width="200"><source src="/video/feedback-active.mp4"></video> | `500ms` | `$gl-easing-out-cubic` |

#### Animated properties

Many Pajamas controls can be stacked in one row. To keep the experience more cohesive and predictable, animate the same properties to show the feedback.

| Do | Don't |
| --- | --- |
| <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animation of the border color on hover for select, input and button controls" width="400"><source src="/video/feedback-group-transition-do.mp4"></video> | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animation of different properties on hover for select, input and button controls" width="400"><source src="/video/feedback-group-transition-dont.mp4"></video> |

#### Positive, negative and loading feedback

<todo>Add positive and negative feedback</todo>

### Accessibility

- Components should change their state discretely when `prefers-reduced-motion` is enabled.

## Resources

- [A guide to designing accessible, WCAG-conformant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/) - Sara Soueidan
- [Focus!](https://a11y-101.com/design/focus) - A11y-101
