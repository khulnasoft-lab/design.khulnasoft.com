---
name: Filter
related:
  - token
  - search

---

Filters allow users to narrow down content by taking an existing list and removing items based on criteria that match or don't match.

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

Filters inlclude a [remove icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~close) which, when clicked, removes the whole filter from the search box.

Clicking anywhere else on a filter opens the dropdown for selecting the value of the filter. The token of the filter value is removed and the text content of it becomes editable again. The text cursor is immediately placed at the end of that text string. 

When in this mode where the text string can be edited, if a user selects a different value from the dropdown, that new value replaces the old one. If the user clicks anywhere outside the dropdown or the search box, the string is turned back to a token with whatever its value was at the time of the event.

### Filters with “search by confirmation” search boxes

This should be the preferred variant as adding filters is a somewhat complex interaction with usually large sets of data. The UI will be better performant if a user confirms their search by clicking on the search button, or by pressing “enter” on a keyboard. The [correct search box component variant](https://design.gitlab.com/components/search/#search-by-confirmation) should be used to accurately suggest how a user will interact with it.

1. The user clicks into a search box and a dropdown with the keys that can be used appears
1. The user chooses the key of what they want to filter the list by (for example, `assignee`)
* They then choose the logical operator (`is` or `is not`) from a dropdown
* They then choose the value of the filter from a dropdown (for example: user’s username)
* They need to repeat all four steps for each filter they want to use
* Once done, they need to confirm their search to trigger it

### Filters with “search by type” search boxes

This variant is rarely used in GitLab at the moment. Try to default to the “search by confirmation” search box whenever filters can be used. Only consider using this variant if the set of data that will be searched through is small and/or you’re certain that users will most likely use only one to two filters most of the time. The [correct search box component variant](https://design.gitlab.com/components/search/#search-by-typing) should be used to accurately suggest how users will interact with it.

* The users click into a search box and a dropdown with the keys that can be used appears
* The users then choose the key of what they want to filter the list by (for example: assignee)
* They then choose the logical operator (`is` or `is not`) from a dropdown
* They then choose the value of the filter from a dropdown (for example: user’s username)
* As soon as the filter value is chosen, the search is triggered
* The users need to repeat all steps to add more filters to their search

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for filters](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/filters-spec-previews/)
