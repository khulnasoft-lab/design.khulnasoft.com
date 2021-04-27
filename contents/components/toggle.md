---
name: Toggle
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A140
docs: complete
vueComponents:
  - GlToggle
related:
  - checkbox
  - radio-button
  - segmented-control
---

A toggle is a visual switch which acts as a boolean.

## Usage

Use toggles when there is a choice between two selections, it has a default state, the results are effective and noticeable immediately, and there is **no need** for a user to click a submit button.

Avoid using toggles when a submit button is needed. This confuses users and dilutes the experience by preventing instant results.

Use the following table to see when a toggle should be used over other alternative components.

|  | [Single checkbox](/components/checkbox) | [Toggle](/components/toggle) | [Single-select dropdown](/components/dropdown) | [Radio buttons](/components/radio-button) | [Segmented control](/components/segmented-control) | [Multiple checkboxes](/components/checkbox) | [Multi-select dropdown](/components/dropdown) |
|---|---|---|---|---|---|---|---|
| Available options | 1 | 1 | >1 or unknown | >1 and <6 | >1 and <6 | >1 and <6 | >1 or unknown |
| Selectable options | 1 | 1 | 1 | 1 | 1 | >1 or even all | >1 or even all |
| Pre-selected options | Possible | Possible | Possible | Yes, 1 | Yes, 1 | Possible | Possible |
| Disabled options | Possible | Possible | Possible | Possible | No | Possible | Possible |
| Option descriptions | Possible | Possible | Possible | Possible | No | Possible | Possible |
| UI space | Little room | Not a problem | Little room | Not a problem | Not a problem | Not a problem | Little room |
| Example | Accepting terms and conditions on sign up | Enabling/disabling project features | “Sort by” dropdowns | Project visibility setting | 7, 30, 90 days timeframe in analytics dashboards | Scopes selection in User settings > Applications | Add/remove labels |

### Labels

Toggle labels are set in bold, positioned above the element by default, and should concisely describe what the control does when the toggle is on.

In rare cases and exceptions, the label can be placed to the left of the toggle. Examples include non-inline (block) positioned elements. Don’t use help text if you are placing the label to the left of the toggle. Use the default layout if you are using both a label and help text. 

### Visual Design

Toggles should use high-contrast colors to indicate the states - On and Off.

### Possible conflict between [Toggles](/components/toggle) and [Checkbox](/components/checkbox)
- If an action is expected to have an instant effect, choose Toggle over Checkbox.
- When there is a need to provide sub-options to select from, use Checkboxes as they could have an indeterminate state.
- For a list of independant choices, use toggles. For a list of related items, use checkboxes.
- Use a single checkbox when the result of a checked/unchecked state is not effective or noticeable immediately, and the user needs a confirmation of it being saved. (Use a toggle when a state change has an immediate effect.)
- If an action is enabling users to progressively disclose a new possibility for customization, use Checkbox. This will encourage users to audit the newly appeared options before they confirm to retain them.


## Demo

[[Example:toggle-default]]

[[Example:toggle-disabled]]

[[Example:toggle-loading]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A282)



