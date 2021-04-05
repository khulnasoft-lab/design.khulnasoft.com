---
name: Spacing
---

All GitLab components follow an 8px spacing system. We’ve defined this as our memorable base number to build upon in order to establish spatial values that are utilized by every component. By following a set spatial convention, we decrease design complexity while increasing consistency across the application.

## Geometric progression

We use 8px as the base for determining our spacial system. In order to create a scale that offers flexibility in spacing without providing an abundance of choices, we’ve defined a set of values using geometric progression: `8 * 2^n`. We have augmented the progression in order to provide the flexibility that a complex application needs to accommodate a large amount of content. To do this, we’ve added values after 16px using `n * 1.5`, where `n` is the previous value from the geometric progression.

### 12px outlier

We include 12px as one of our measures, but it should only be reserved for right and left padding of horizontal tabs, buttons, and form elements. This special padding amount allows for better alignment of stacked items while giving elements enough room to breathe. 12px should not be using for any other measurement other than those defined here.

## Demo

<div class="spacing-demo m-b-6">
  <span class="w-1 h-1 c-background-blue-300 d-inline-block" title="2px"></span>
  <span class="w-2 h-2 c-background-blue-300 d-inline-block" title="4px"></span>
  <span class="w-3 h-3 c-background-blue-300 d-inline-block" title="8px"></span>
  <span class="w-4 h-4 c-background-blue-300 d-inline-block" title="12px"></span>
  <span class="w-5 h-5 c-background-blue-300 d-inline-block" title="16px"></span>
  <span class="w-6 h-6 c-background-blue-300 d-inline-block" title="24px"></span>
  <span class="w-7 h-7 c-background-blue-300 d-inline-block" title="32px"></span>
  <span class="w-8 h-8 c-background-blue-300 d-inline-block" title="48px"></span>
  <span class="w-9 h-9 c-background-blue-300 d-inline-block" title="64px"></span>
  <span class="w-10 h-10 c-background-blue-300 d-inline-block" title="96px"></span>
  <span class="w-11 h-11 c-background-blue-300 d-inline-block" title="128px"></span>
  <span class="w-12 h-12 c-background-blue-300 d-inline-block" title="176px"></span>
  <span class="w-13 h-13 c-background-blue-300 d-inline-block" title="256px"></span>
</div>

Todo: Add spacing class examples

## Standard spacing guidelines

`2px` or `4px` is used for spacing within a component.

Todo: Add example of 2px spacing

Todo: Add example of 4px spacing

`8px` is used to separate related elements.

Todo: Add example of 8px spacing (buttons)

`16px` is used to separate unrelated elements.

Todo: Add example of 16px spacing

`24px` is used to separate sub-sections of content.

Todo: Add example of 24px spacing

`32x` is used to separate sections of content.

Todo: Add example of 32px spacing

## GitLab UI spacing variable conversion

The table below is a reference to assist with mapping the spacing rules to [gitlab-ui variables](https://gitlab.com/gitlab-org/gitlab-ui/-/blob/main/src/scss/variables.scss).

The table is based on the configuration of `1rem = 16px` and `$grid-size = 8px`.

| Spacing variable name | Pixel size |
| ------ | ------ |
| $gl-spacing-scale-1 | 2 px |
| $gl-spacing-scale-2	| 4 px |
| $gl-spacing-scale-3	| 8 px |
| $gl-spacing-scale-4	| 12 px |
| $gl-spacing-scale-5	| 16 px |
| $gl-spacing-scale-6	| 24 px |
| $gl-spacing-scale-7	| 32 px |
| $gl-spacing-scale-8	| 40 px |
| $gl-spacing-scale-9	| 48 px |
| $gl-spacing-scale-10 | 56 px |
| $gl-spacing-scale-11	| 64 px |
| $gl-spacing-scale-11-5	| 72 px |
| $gl-spacing-scale-12	| 80 px |
| $gl-spacing-scale-13	| 96 px |
| $gl-spacing-scale-15	| 120 px |
| $gl-spacing-scale-20	| 160 px |

Note: Anytime you see a spacing variable, the number will correspond with the spacing scale here. For example, `.gl-pr-4` uses `$gl-spacing-scale-4` which equals `12px`.

