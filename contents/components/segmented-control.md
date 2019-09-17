---
name: Segmented control
related:
  - buttons
  - dropdowns
  - radio-button
  - toggles
---

A segmented control allows users to choose one out of a range of available options. It is a button group of equal options where only one can be selected and active. There must always be one option active.

## Usage

A segmented control is commonly used as an alternative to [dropdown](/components/dropdowns), [radio button](/components/radio-button), or [toggle](/components/toggles) components, but it comes with its own limitations. Because it takes up more space, a segmented control should only be used for up to 5 options. It is ideal when there are 2 or 3 because they visually expose the options available to a user. A segmented control should be used instead of a dropdown when there are only a few options and enough room to fit within the UI. It requires fewer interactions and is easier to use on mobile devices, thus having a smaller effect on the user’s cognitive load. Results are effective and visible immediately similar to toggles.

Follow the table below to correctly choose when to use a segmented control.

| Scenario | Component to use | Comment |
|----------|------------------|---------|
| Users can only choose one of the maximum two options indicating on and off states. | Toggle | *Enabling/disabling a feature.* |
| Users can choose only one out of two or more options, the availability of the options is unafected by other local or global settings and the options don’t require additional explanations, the space in the UI isn’t limited. | Segmented control | / |
| Users can choose only one out of two or more options, the availability of the options is unafected by other local or global settings and the options don’t require additional explanations, the space in the UI is limited. | Dropdown | / |
| Users can choose only one out of two or more options, the availability of the options is affected by other local or global settings, the options don’t require additional explanations. | Radio buttons and help text for explanations about the availability | *Help text should be used when an option is not available (is disabled)* |
| Users can choose only one out of two or more options, the availability of the options is unaffected by other local or global settings, the options require additional explanations. | Radio buttons | *Help text should be used for the additional explanations* |
| Switching between two or more options of the same type | Segmented control | *For example: showing a timespan of 7, 14 or 28 days.* |
| Switching between two or more options of the same type with  limited space in UI | Dropdown | *For example: showing a timespan of 7, 14 or 28 days.* |


### Labels

Label positioning rules are the same as they are for [forms](/components/forms). They can be placed to the left of segmented control when there’s a lack of vertical space. But by default, the label comes above the segmented control.

The label can be omitted in cases when it’s clear what the segmented control is referring to from the UI (for example, switching between a day, week or month view in a calendar UI).

Todo: Add live component block with code example (whitespace exmple)

Button labels need to be as short as possible and should ideally be only one word. Sometimes, that can be done by removing the repeating word and using it as a label (above the segmented control). For example, instead of having button labels “Show whitespace” and “Hide whitespace” use “Whitespace” as a label and only “Show” and “Hide” as button labels.

Alternatively icons can be used to replace button labels.

### Sizing

The options must be equal in width and prominence. If there are 3 options, each of them should take 33% of the total width of segmented control.

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for the Segmented control](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/segmented-control-spec-previews/)
