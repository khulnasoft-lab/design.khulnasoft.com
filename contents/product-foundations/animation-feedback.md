---
name: Feedback animation
---

## Feedback animation use

1. When user interacts with the element. Hover, focus and active states of the element. User needs to understand that the control is interactive and action was done.
1. After the interaction show the user positive or negative feedback.

### What elements can use this type of animation

1. **Controls.** Buttons, inputs, selects, checkboxes, etc.
1. **Interactive elements.** Tabs, steppers, etc.

## Mouse focus vs keyboard focus

Mouse focus doesn't require a bold and constant focus ring or animation because user interact with elements with the cursor. Users know where is their cursor and what it points on. Mouse focus should show the feedback and fade away.

| Do | Don't |
| --- | --- |
| <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Focus ring fades out after mouse click on button" width="300"><source src="/video/motion-mouse-focus-do.mp4"></video> | <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Focus ring doesn't fade out after mouse click on button" width="300"><source src="/video/motion-mouse-focus-dont.mp4"></video> |

Keyboard focus should be bold, constant and fast. Users don't know what element will be next to focus on. Also users walk through a few elements to get to the right one, so long focus anumation will distract them and make the whole experience feel slow.

| Do | Don't |
| --- | --- |
| <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Keyboard focus ring is bold and bright" width="300"><source src="/video/motion-keyboard-focus-do.mp4"></video> | <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Keyboard focus ring is bold and bright" width="3

## Animated properties

Many Pajamas controls can be stacked in one row. To keep the experience more cohesive and predictable animate the same properties to show the feedback. 

| Do | Don't |
| --- | --- |
| <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Animation of the border color on hover for select, input and button controls" width="400"><source src="/video/motion-group-transition-do.mp4"></video> | <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Animation of the border width on hover for select, input and button controls" width="400"><source src="/video/motion-group-transition-dont.mp4"></video> |

Some elements could be not interactive, but child elements could become visible on hover. To explain what triggered element appearance one or a few properties of a parent element should be animated.

| Do | Don't |
| --- | --- |
| <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Button becomes visible on hover, parent element has a background color transition" width="400"><source src="/video/motion-hover-transition-do.mp4"></video> | <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Button becomes visible on hover, but parent element doesn't have any transition" width="400"><source src="/video/motion-hover-transition-dont.mp4"></video> |00"><source src="/video/motion-keyboard-focus-dont.mp4"></video> |

## Positive and negative feedback

<todo>Add positive and negative feedback</todo>

## Resources

- [A guide to designing accessible, WCAG-conformant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/) - Sara Soueidan
- [Focus!](https://a11y-101.com/design/focus) - A11y-101
