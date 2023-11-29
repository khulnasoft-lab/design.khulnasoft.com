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

Many Pajamas controls can be stacked in one row. To keep the experience more cohesive and predictable we suggest to animate the same properties to show the feedback. 

<todo>Fill in the table</todo>

| Do | Don't |
| --- | --- |
| <figure-img alt="Crisp icon on pixel grid" label="Change the border color" src="/img/icons-pixel-grid-do.svg"></figure-img> | <figure-img alt="Crisp icon on pixel grid" label="Change the border width" src="/img/icons-pixel-grid-dont.svg"></figure-img> |
| <figure-img alt="Crisp icon on pixel grid" label="Change the background and border colors for all the controls" src="/img/icons-pixel-grid-do.svg"></figure-img> | <figure-img alt="Crisp icon on pixel grid" label="Change the background or border colors for some of the controls" src="/img/icons-pixel-grid-dont.svg"></figure-img> |

### Speed

Interactive elements are small so they should use the `$gl-timing-fast` speed.

<todo>Fill in the table</todo>

| Do | Don't |
| --- | --- |
| <figure-img alt="Crisp icon on pixel grid" label="$gl-timing-fast speed" src="/img/icons-pixel-grid-do.svg"></figure-img> | <figure-img alt="Crisp icon on pixel grid" label="$gl-timing-slow speed" src="/img/icons-pixel-grid-dont.svg"></figure-img> |

### Easing

The best way to find the right easing is to find the reference from the real world. When you push the button, the button will go down slowly and go back really fast. It's a `$gl-easing-accelerate`. Hovers we can compare witht he sun — it's shine with no acceleration, but thill smooth. It's a `$gl-easing-default`.

<todo>Fill in the table</todo>

| Do | Don't |
| --- | --- |
| <figure-img alt="Crisp icon on pixel grid" label="$gl-easing-accelerate easing for focus and active states" src="/img/icons-pixel-grid-do.svg"></figure-img> | <figure-img alt="Crisp icon on pixel grid" label="$gl-easing-decelerate easing for focus and active states" src="/img/icons-pixel-grid-dont.svg"></figure-img> |
| <figure-img alt="Crisp icon on pixel grid" label="$gl-easing-default easing for hover state" src="/img/icons-pixel-grid-do.svg"></figure-img> | <figure-img alt="Crisp icon on pixel grid" label="$gl-easing-decelerate easing for hover state" src="/img/icons-pixel-grid-dont.svg"></figure-img> |

### Demo

<todo>Add demos</todo>
