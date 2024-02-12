---
name: Animation fundamentals
---

Animation is a tool to help convey important relationships, changes, or transitions between elements. It is used sparingly and intentionally, highlighting the right elements at the right moment.


## Types of animations

1. **Feedback.** Works after the users’ interaction with controls and other interactive blocks.
1. **Focus.** Highlights important content outside users’ context.
1. **Explanation.** Shows users how and where the block goes.
1. **Engagement.** Helps users feel supported while waiting.
1. **Emotional.** Builds emotional bonds with users and expresses the brand. And makes users feel welcomed and supported.

<todo>Add video explanation</todo>


## Principles

Use animation deliberately to enhance the experience without dominating it. Animation should not be added without good reason. Too much animation can distract users and disrupt their tasks.

* **Be realistic.** Animations should feel natural and mirror traits from the real world such as acceleration, gravity, and volume.
* **Be purposeful.** Animations should assist and support the user experience without distracting from it.
* **Be optional and accessible.** Animations should respect users’ motion preferences using `prefers-reduced-motion` CSS Media Query. Keyboard event animation should be more noticeable.


## Easing

Easing specifies the rate of change of a parameter over time. Adding an easing curve makes the animation feel more natural, cohesive, and connected.

| Illustration | Variable | Value | Use |
| --- | --- | --- | --- |
| <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="" width="400"><source src="/video/easing-default.mp4"></video> | `$gl-easing-default` | `ease` | hover animation |
| <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="" width="400"><source src="/video/easing-out-cubic.mp4"></video> | `$gl-easing-out-cubic` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | focus animation |

<todo>The table will be updated by adding [other animation types](/product-foundations/animation-fundamentals#types-of-animations)</todo>


## Duration

Duration is how long a animation takes from start to end. The total duration should be influenced by the scale, easing, and complexity of the animated elements. This means the further the traveled distance and the more complex the animated object, the longer the duration for the animation should be.

| Variable | Value | Use |
| --- | --- | --- |
| `$gl-duration-100` | `200ms` | color changes, keyboard focus |
| `$gl-duration-200` | `300ms` |  |
| `$gl-duration-300` | `400ms` |  |
| `$gl-duration-400` | `500ms` | action feedback |
| `$gl-duration-500` | `600ms` | position changes, complex transitions |

<todo>The table will be updated by adding [other animation types](/product-foundations/animation-fundamentals#types-of-animations)</todo>


## If you're not sure

1. Use animation support visual state changes
1. Use `$gl-easing-default` easing
1. Use `$gl-duration-100` to change decorative attributes such as color
1. Use `$gl-duration-500` to change position
1. Ask a [UX reviewer or maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com) for help and review


## Patterns

<todo>Will be added later with `linear()` browser support</todo>


## Resources

- [The Role of Animation and Motion in UX](https://www.nngroup.com/articles/animation-purpose-ux/) - Nielsen Norman Group
- [Using the CSS reduce-motion query to prevent motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html) - WCAG
