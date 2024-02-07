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
| `focus` | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Select option list animation on focus: outline ring appears with easeOutCubic easing" width="200"><source src="/video/feedback-list-focus.mp4"></video> | `100ms` | `$gl-easing-out-cubic` |

#### Elements in close proximity

| Do | Don't |
| --- | --- |
| <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animation of the border color on hover for select, input and button controls" width="400"><source src="/video/feedback-group-transition-do.mp4"></video><br />Keep animations predictable and consistent, for example, animate the same properties: change only border and background colors for all the elements. This approach makes the UI cleaner and interactive elements more predictable. | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animation of different properties on hover for select, input and button controls" width="400"><source src="/video/feedback-group-transition-dont.mp4"></video><br />Avoid using different animations for elements within a group. For example, when some elements change border width, but others do not. Using similar animations for interactive elements reduces the user's cognitive load, making it easier to understand how these elements work. |
| <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animating the text field focus ring in 200ms that feels natural" width="400"><source src="/video/feedback-transition-duration-do.mp4"></video><br />Animation duration shouldn't be too fast or too slow, but should mimic the timing of real-world objects. | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animating the text field focus ring in 100ms that feels instant" width="400"><source src="/video/feedback-transition-duration-dont-1.mp4"></video><video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animating the text field focus ring in 300ms that feels buggy" width="400"><source src="/video/feedback-transition-duration-dont-2.mp4"></video><br />Avoid both instant and slow animations. Slow animations can make the entire user interface feel sluggish, while instant animations can make it feel less lively. |
| <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animating the text field focus ring with cubic-bezier — fast at the start and slow at the end" width="400"><source src="/video/feedback-transition-easing-do.mp4"></video><br />Use cubic-bezier easing to make the animation appear more natural. | <video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animating the text field focus ring with linear easing" width="400"><source src="/video/feedback-transition-easing-dont-1.mp4"></video><video tabindex="0" preload="true" controls="" loop="true" playsinline="true" aria-label="Animating the text field focus ring with default ease function" width="400"><source src="/video/feedback-transition-easing-dont-2.mp4"></video><br />Avoid linear or other default easing functions for animations, they make UI feel less lively. |

#### Loading feedback

Set the button to the loading state following a user action, if the action occurs on the same page.

<story-viewer component="base-button" title="Loading button" :args-loading="true"></story-viewer>

#### Positive and negative feedback

<todo>Add positive and negative feedback</todo>

### Accessibility

- A component should change state discretely when `prefers-reduced-motion` is enabled.

## Resources

- [A guide to designing accessible, WCAG-conformant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/) - Sara Soueidan
- [Focus!](https://a11y-101.com/design/focus) - A11y-101
