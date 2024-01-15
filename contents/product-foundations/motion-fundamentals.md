---
name: Motion fundamentals
---

Motion is the part of design language. Motion can guide the user through their experience and bring it to life.

## Why interface needs motion

Animations are a natural part of human life, we are used to see the world moving around us. We interact with elements with an analog reference and expect to see the same analog behavior. Buttons, for example, should mimic real buttons in their behavior, with smooth and realistic pressure.

Predator eyes are designed to focus on moving objects. It's a powerful tool. With this in mind, we can explain to users what the most important action on the screen is and walk them through the workflow.

We can say something to our users without using words. Motion is an essential part of the design language. It helps describe relationships between states and the functionality of individual elements.


## When interface needs motion

- When the user interacts with an element.
- When the user has to wait for something.
- When we need to navigate users through the workflow.

<todo>Add video explanation</todo>


## Principles

Add motion purposefully, supporting the experience without overshadowing it. Don’t add motion for the sake of adding motion. Gratuitous or excessive animation can distract people or make them feel disconnected, especially in an app that doesn’t provide an immersive experience.

1. **Be realistic.** To achieve a natural feel, animations should mirror traits from the real world such as acceleration, gravity, and volume.
1. **Be purposeful.** Add animations purposefully to support the user experience without overshadowing it. Animations should assist users rather than distract them or make them feel disconnected.
1. **Be optional and accessible.** Respect users’ motion preferences using `prefers-reduced-motion` CSS Media Query. Keyboard event animation should be more noticeable.


## Types of animations

<note>Video explanation will be added later</note>

1. [**Feedback.**](./motion-focus.md) Works after the users’ interaction with controls and other interactive blocks.
1. **Focus.** Highlights important content outside users’ context.
1. **Explanation.** Shows users how and where the block goes.
1. **Engagement.** Helps users feel supported while waiting.
1. **Emotional.** Builds emotional bonds with users and expresses the brand. And makes users feel welcomed and supported.


## Easing

Easing specifies the rate of change of a parameter over time. Adding an easing curve makes the motion feel more natural, cohesive, and connected.

| Illustration | Variable | Value |
| --- | --- | --- |
| <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="" width="400"><source src="/video/easing-default.mp4"></video> | `$gl-easing-default` | `ease` |
| <video tabindex="0" preload="true" autoplay="true" controls="" loop="true" playsinline="true" aria-label="" width="400"><source src="/video/easing-out-cubic.mp4"></video> | `$gl-easing-out-cubic` | `cubic-bezier(0.22, 0.61, 0.36, 1)` |
|  |  |  |

<note>The table will be updated by adding other animation types</note>


## Timings

The scale of an animation, its easing curve, and the complexity of the element which is being animated should influence the total animation duration. This means the further the traveled distance and the more complex the animated object, the longer the timing for the animation should be.

| Variable | Value | Description |
| --- | --- | --- |
| `$gl-timing-200` | `200ms` | Used for simple transitions, like color change. Keyboard focus. For example [Button](../components/button), [Text input](../components/text-input), [Textarea](../components/textarea), [Breadcrumb](../components/breadcrumb), etc. |
| `$gl-timing-300` | `300ms` |  |
| `$gl-timing-400` | `400ms` |  |
| `$gl-timing-500` | `500ms` | Mouse focus for small elements, like [Checkbox](../components/checkbox) |
| `$gl-timing-600` | `600ms` | Used for long distances ([Drawer](../components/drawer)) and complex transitions (mouse focus) |

<note>The table will be updated by adding other animation types</note>

## If you're not sure

1. Add `transition` to every element with a few states
2. Write the list of all animated properties, don't use `transition: all`
1. Use `$gl-easing-default` for easings
2. Use `$gl-timing-200` for transitions
3. Use `$gl-timing-600` for translates and other animations
4. Ask [UX reviewer or maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com) for help and review

## Patterns

<note>Will be added later with `linear()` browser support</note>
