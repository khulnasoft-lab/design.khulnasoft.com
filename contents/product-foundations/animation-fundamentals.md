---
name: Animation fundamentals
---

Animation is a tool to help convey important relationships, changes, or transitions between elements. It's used sparingly and intentionally, highlighting the right elements at the right moment.

## Types of animation

1. **Feedback.** Confirm a user interaction with a control or other interactive element.
1. **Focus.** Highlight important content outside of a user's current context.
1. **Explanation.** Show a user an element's properties, and its relationship to other elements.
1. **Engagement.** Help a user feel supported while waiting.
1. **Emotional.** Build emotional bonds with a user and expresses the brand. It makes a user feel welcome and supported.

<todo>Add video explanation.</todo>

## Principles

Use animation deliberately to enhance the experience without dominating it. Animation should not be added without a good reason. Too much animation can distract a user and disrupt their task.

* **Be realistic.** An animation should feel natural and mirror traits from the real world, such as acceleration, gravity, and volume.
* **Be purposeful.** An animation should assist and support the user experience without distracting from it.
* **Be optional and accessible.** An animation should respect the user's motion preferences by using the `prefers-reduced-motion` CSS media query. Keyboard event animation should be more noticeable.

## Easing

Easing specifies the rate of change of a parameter over time. Adding an easing curve makes the animation feel more natural, cohesive, and connected.

| Illustration | Variable | Value | Use |
| --- | --- | --- | --- |
| <video tabindex="0" preload="true" autoplay="false" controls="" loop="true" playsinline="true" aria-label="" width="400"><source src="/video/easing-default.mp4"></video> | `$gl-easing-default` | `ease` | Hover animation |
| <video tabindex="0" preload="true" autoplay="false" controls="" loop="true" playsinline="true" aria-label="" width="400"><source src="/video/easing-out-cubic.mp4"></video> | `$gl-easing-out-cubic` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | Focus animation |

<todo>Update the table with [other animation types](/product-foundations/animation-fundamentals#types-of-animations).</todo>

## Duration

The duration is the time an animation takes from start to finish. The animated element's scale, easing, and complexity should influence the total duration. This means that the greater the distance traveled and the more complex the animated object, the longer the animation duration should be.

| Value | Use |
| --- | --- |
| `200ms` | Color changes, keyboard focus |
| `500ms` | Action feedback |
| `600ms` | Position changes, complex transitions |

<todo>Update the table with [other animation types](/product-foundations/animation-fundamentals#types-of-animations).</todo>

## If you're not sure

1. Use animation to support visual state changes.
1. Use `$gl-easing-default` easing.
1. Use `200ms` to change an element's decorative attributes, such as color.
1. Use `600ms` to change an element's position.
1. Ask a [UX reviewer or maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com) for help and review.

## Patterns

Patterns are reusable animations.

<todo>Add details of bounce and other effects.</todo>

### Page auto-scroll

A page auto-scroll transition can be used to keep an active element visible. An example of this includes clicking an issue board card outside the current viewport.

<todo>Add auto-scroll example (issue board cards)</todo>

### Skeleton loading

Skeleton loaders use a horizontally pulsing animation with a linear 1s timing. Learn more about [skeleton loaders](/components/skeleton-loader).

<todo>Add skeleton loader transition example</todo>

## Resources

- [The Role of Animation and Motion in UX](https://www.nngroup.com/articles/animation-purpose-ux/) - Nielsen Norman Group
- [Using the CSS reduce-motion query to prevent motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html) - WCAG
