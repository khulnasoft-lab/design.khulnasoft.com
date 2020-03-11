---
name: Filter
related:
  - token
  - search
  - list

---

Filters allow a user to narrow down content by taking an existing list and removing items based on criteria that matches or doesn’t.

Filters are composed of three main parts:

1. **key**: acts as the label of the filter value, for example, `assignee`
1. **logical operator**: the condition that binds the key to the value, for example, `is` or `is not`
1. **value**: the item that the condition will base results on, for example, a `@username`
Visually, each part is a variant of a [token](/components/token/).

## Usage

Filters are always used in combination with [search boxes](/components/search/), preferably with the [“search by confirmation”](#filters-with-“search-by-confirmation”-search-boxes) variant.

Each filter can consist of only one value and can’t be repeated. For example, a list of issues can only be narrowed down by specifying one assignee.

### Placement

Filters are positioned inline with the text cursor in a search box. They can wrap to a new row or cause a search box to become horizontally scrollable.

## Interaction guidelines

Filters include a [remove icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~close) which, when clicked, removes the whole filter from the search box.

Clicking on any of the three parts of a filter opens a corresponding dropdown for selecting the value for that part of the filter. For example, if a user clicks on the value part of the filter, the value dropdown appears, if they click on the operator, the operator dropdown appears and the value part of the filter is removed, if they click on the key the key dropdown appears and the operator and the value of the filter are removed. The text content of the corresponding part becomes editable and the text cursor is immediately placed at the end of that text string so that users can either type or select a suggestion from a dropdown. 

When in this mode where the text string can be edited, if a user selects a different value from the dropdown, that new value replaces the old one. If the user clicks anywhere outside the dropdown or the search box, the string is turned back to a token with whatever its value was at the time of the event. An exception to this is when the values are limited to explicit options only, for example `yes` and `no`, or `is` and `is not`. In that case, we remove the string that isn’t valid and don’t turn it back into a token.

After a filter is successfully added, a dropdown with suggestions for other keys appears immediately.

### Filters with “search by confirmation” search boxes

This should be the preferred variant as adding filters is a somewhat complex interaction with usually large sets of data. The UI will be better performant if a user confirms their search by clicking on the search button, or by pressing “enter” on a keyboard. The [correct search box component variant](https://design.gitlab.com/components/search/#search-by-confirmation) should be used to accurately suggest how a user will interact with it.

1. The user clicks into a search box and a dropdown with the keys that can be used appears
1. The user chooses the key of what they want to filter the list by (for example, `assignee`)
1. The user chooses the logical operator (`is` or `is not`) from a dropdown
1. The user chooses the value of the filter from a dropdown (for example, a `@username`)
1. The user needs to repeat steps 1–4 for each filter they want to use
1. Once done, the user needs to confirm the search to trigger it

### Filters with “search by type” search boxes

This variant is rarely used in GitLab at the moment. Try to default to the “search by confirmation” search box whenever filters can be used. Only consider using this variant if the set of data that will be searched through is small and/or you’re certain that a user will likely use only one to two filters most of the time. The [correct search box component variant](https://design.gitlab.com/components/search/#search-by-typing) should be used to accurately suggest how users will interact with it.

1. The user clicks into a search box and a dropdown with the keys that can be used appears
1. The user chooses the key of what they want to filter the list by (for example, `assignee`)
1. The user chooses the logical operator (`is` or `is not`) from a dropdown
1. The user chooses the value of the filter from a dropdown (for example, a `@username`)
1. As soon as the filter value is chosen, the search is triggered
1. The user needs to repeat steps 1–5 to add more filters to the search


## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimensions, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for filters](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/filters-spec-previews/)
