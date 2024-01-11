---
name: Feedback animation
---

### What elements can use this type of animation

1. **Controls.** Buttons, inputs, selects, checkboxes, etc.
1. **Interactive elements.** Tabs, steppers, etc.

### When this animation could be triggered

1. When user interacts with the element. Hover, focus and active states of the element.
1. After the interaction show the user positive or negative feedback.

### Why we should use feedback animation

1. User needs to understand that the control is interactive.
1. User needs to understand that action was done.
1. User needs to see success or failure of the result.

### Animated properties

Many Pajamas controls can be stacked in one row. To keep the experience more cohesive and predictable animate the same properties to show the feedback. 

| Do | Don't |
| --- | --- |
| <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Animation of the border color on hover for select, input and button controls" width="400"><source src="/video/motion-group-transition-do.mp4"></video> | <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Animation of the border width on hover for select, input and button controls" width="400"><source src="/video/motion-group-transition-dont.mp4"></video> |

Some elements could be not interactive, but child elements could become visible on hover. To explain what triggered element appearance one or a few properties of a parent element should be animated.

| Do | Don't |
| --- | --- |
| <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Button becomes visible on hover, parent element has a background color transition" width="400"><source src="/video/motion-hover-transition-do.mp4"></video> | <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="Button becomes visible on hover, but parent element doesn't have any transition" width="400"><source src="/video/motion-hover-transition-dont.mp4"></video> |

### Mouse focus vs keyboard focus

Mouse focus doesn't require a bold and constant focus ring or animation because user interact with elements with the cursor. Users know where is their cursor and what it points on. Mouse focus should show the feedback and fade away.

| Do | Don't |
| --- | --- |
| <figure-img alt="Crisp icon on pixel grid" label="Change the border color" src="/img/icons-pixel-grid-do.svg"></figure-img> | <figure-img alt="Crisp icon on pixel grid" label="Change the border width" src="/img/icons-pixel-grid-dont.svg"></figure-img> |

Keyboard focus should be bold, constant and fast. Users don't know what element will be next to focus on. Also users walk through a few elements to get to the right one, so long focus anumation will distract them and make the whole experience feel slow.

| Do | Don't |
| --- | --- |
| <figure-img alt="Crisp icon on pixel grid" label="Change the border color" src="/img/icons-pixel-grid-do.svg"></figure-img> | <figure-img alt="Crisp icon on pixel grid" label="Change the border width" src="/img/icons-pixel-grid-dont.svg"></figure-img> |

### Action feedback

<note>Will be added later</note>
