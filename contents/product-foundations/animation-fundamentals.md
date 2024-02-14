---
name: Animation fundamentals
---

Animation is a tool to help convey important relationships, changes, or transitions between elements. It is used sparingly and intentionally, highlighting the right elements at the right moment.

## Types of animations

1. **Feedback.** Confirms the users’ interaction with controls and other interactive elements.
1. **Focus.** Highlights important content outside a users’ current context.
1. **Explanation.** Shows users an elements properties, and its relationships to other elements.
1. **Engagement.** Helps users feel supported while waiting.
1. **Emotional.** Builds emotional bonds with users and expresses the brand. It makes users feel welcome and supported.

<todo>Add video explanation</todo>

## Principles

Use animation deliberately to enhance the experience without dominating it. Animation should not be added without a good reason. Too much animation can distract users and disrupt their tasks.

* **Be realistic.** Animations should feel natural and mirror traits from the real world, such as acceleration, gravity, and volume.
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

The duration is the time an animation takes from start to finish. The animated elements' scale, easing, and complexity should influence the total duration. This means that the greater the distance traveled and the more complex the animated object, the longer the animation duration should be.

| Value | Use |
| --- | --- |
| `200ms` | color changes, keyboard focus |
| `500ms` | action feedback |
| `600ms` | position changes, complex transitions |

<todo>The table will be updated by adding [other animation types](/product-foundations/animation-fundamentals#types-of-animations)</todo>

## If you're not sure

1. Use animation to support visual state changes.
1. Use `$gl-easing-default` easing.
1. Use a `200ms` to change an elements decorative attributes such as color.
1. Use a `600ms` to change an elements position.
1. Ask a [UX reviewer or maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com) for help and review.

## Patterns

Patterns are reusable animations.

<todo>Add details of bounce and other effects</todo>

### Page auto-scroll

A page auto-scroll transition can be used to keep an active element visible. An example of this includes clicking an issue board card outside the current viewport.

<todo>Add auto-scroll example (issue board cards)</todo>

### Skeleton loading

Skeleton loaders use a horizontally pulsing animation with a linear 1s timing. Learn more about [skeleton loaders](/components/skeleton-loader).

<todo>Add skeleton loader transition example</todo>

## Resources

- [The Role of Animation and Motion in UX](https://www.nngroup.com/articles/animation-purpose-ux/) - Nielsen Norman Group
- [Using the CSS reduce-motion query to prevent motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html) - WCAG
