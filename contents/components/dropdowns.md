---
name: Dropdowns
vueComponents:
  - GlNewDropdown
related:
  - button
  - checkbox
  - dropdowns
  - forms
  - segmented-control
---

Dropdowns lists (or simply dropdowns) are used to provide the user with a list of options, which can be either actions or input values. Dropdown lists are triggered by dropdown [buttons](/components/button) or [form inputs](/components/forms).

## Usage

There are three main types of dropdowns:

| Type                       | Purpose                                                                                               | Behavior                                                                                                                                                                                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Plain dropdowns            | These dropdowns usually present a list of actions. They can be thought of as a collection of buttons or links. | If a user clicks a link inside a plain dropdown, it would navigate to the path specified in the link. If a user clicks a button with a function, it would complete that function and close the dropdown. Another way to close the dropdown is to click outside the dropdown container.                             |
| Single-selection dropdowns | These dropdowns are used as a collection of single selection inputs.                                  | The radio button indicates that this is a single selection. After a user makes a selection, the dropdown will close and the request will update the content, if needed.                                                                                                |
| Multi-selection dropdowns  | These dropdowns are used when selecting multiple items.                                   | Each item contains a checkbox and can be clicked to select that item. The dropdown stays open when making selections and each selection will send a request to update the content. The dropdown closes when a user clicks outside of the dropdown or if the user clicks the "x" icon in the top right corner. |


Use the following table to see when a dropdown should be used over other alternative components.

|  | [Single checkbox](/components/checkbox) | [Toggle](/components/toggle) | [Single-select dropdown](/components/dropdowns) | [Radio buttons](/components/radio-button) | [Segmented control](/components/segmented-control) | [Multiple checkboxes](/components/checkbox) | [Multi-select dropdown](/components/dropdowns) |
|---|---|---|---|---|---|---|---|
| Available options | 1 | 1 | >1 or unknown | >1 and <6 | >1 and <6 | >1 and <6 | >1 or unknown |
| Selectable options | 1 | 1 | 1 | 1 | 1 | >1 or even all | >1 or even all |
| Pre-selected options | Possible | Possible | Possible | Yes, 1 | Yes, 1 | Possible | Possible |
| Disabled options | Possible | Possible | Possible | Possible | No | Possible | Possible |
| Option descriptions | Possible | Possible | Possible | Possible | No | Possible | Possible |
| UI space | Little room | Not a problem | Little room | Not a problem | Not a problem | Not a problem | Little room |
| Example | Accepting terms and conditions on sign up | Enabling/disabling project features | “Sort by” dropdowns | Project visibility setting | 7, 30, 90 days timeframe in analytics dashboards | Scopes selection in User settings > Applications | Add/remove labels |

### Behavior

By default, dropdowns are placed below and aligned to the left of the element they stem from. However, when there isn't enough space in the viewport, the dropdown should be moved above and/or be aligned to the right of the element it stems from.

If there are more rows than fit the dropdown, an overlay with a fade effect will be added at the top or bottom of the dropdown to indicate there are more rows to be scrolled. When reaching the end of the scrollable area, the overlay will be removed.

## Example

#### Plain dropdown

Todo: An example of a plain dropdown

#### Single-selection dropdown

Todo: An example of a single-selection dropdown

#### Multi-selection dropdown

Todo: An example of a multi-selection dropdown

### Accessories

There are some special elements that can be included in dropdowns to better adapt them to different situations.

#### Dropdown header

A header can be added to make the dropdown's purpose clear. For example, the header _Assign milestone_ can be added to make it clear that selecting an option will modify an issue's milestone instead of applying a filter.

Todo: An example of a dropdown with a header.

#### Section headers

Section headers are used to categorize the options in a dropdown. A separator must always be included in between sections.

Todo: An example of a dropdown with section headers.

#### Search box

If there are more than 10 elements in the list, it may be necessary to include a search box.

Todo: An example of a dropdown with a search box.

#### Fixed rows

A limited amount of rows that don't scroll can be fixed at the bottom of a dropdown. For example, the dropdown used to switch between issue boards has two fixed options at the bottom: _Create new board_ and _Delete board_.

Todo: An example of a dropdown with fixed rows.

## Button combinations

Dropdown buttons come in a few different button combinations to fit different situations. Some offer additional options, while others save on space.

### Dropdown

Dropbown buttons trigger menus of options which can be either actions or input values.

[[Example:new-dropdown-default]]

#### Split dropdown

Dropdown buttons may be split when there are multiple action options. The text button will allow immediate access to the most common option and an attached dropdown button is available to either change the default action. The dropdown button is attached to the right of the text button and has a chevron icon as its label.

If the dropdown menu has no related actions available, a split dropdown button should be converted back to a text button.

The currently selected action has a checkmark on the left side of the dropdown item. See also [checkmark dropdowns](/components/dropdowns).

[[Example:new-dropdown-split]]

#### Icon dropdown

Icon dropdowns function similarly to other dropdown button combinations with the difference being an icon label.

[[Example:new-dropdown-with-icon]]

[[Example:new-dropdown-with-icon-and-split]]

## Design specifications

Color, spacing, dimension, and layout-specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for Dropdowns](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/dropdown-spec-previews/)

## Resources

* [Drop down usability](https://baymard.com/blog/drop-down-usability)
