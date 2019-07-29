---
name: Sorting
related:
  - dropdowns
  - filters
  - lists
---

Sorting allows users to quickly re-organize similar content on a long list when the default order may be insufficient for users to scan the data set. The sorting component is usually placed directly on top of the list view. Common use cases for sorting include arranging:

*   Numbers in ascending or descending order.
*   Characters in alphabetical or reverse-alphabetical order.
*   Dates from most to least recent or the reverse.

## Usage

### Sorting vs filtering

Sorting and filtering are closely tied. Filtering works by hiding part of the data that would otherwise be displayed on the list. Unlike filtering, sorting doesn't hide content, it just re-orders it based on a specified criteria. Also, in contrast to filtering, sorting never produces zero search results. 

Sorting can be used independently of filering or in tandem with filtering. Use the sorting component when the list has pagination and spans multiple pages, as it can make it easier for users to digest and find relevant content.

### Sorting component

There are two pieces of the sorting component for lists in GitLab: a dropdown, and a sort icon button.

The dropdown allows users to choose their sorting criteria, whether it be by label, date or popularity. As soon as an item in the dropdown is selected, the list content re-sorts automatically. The sort dropdown currently allows for sorting by a single selected item.

The sort icon button allows users to change the direction of the sort, from ascending to descending (or vice-versa). The default sort order on the component is descending, but the default sort order on a list can (and should) be determined by the designer on a page-by-page basis.

### Sorting "dos"

* Sort options are meant to be persisted until the page is re-loaded, after which time the sort will update to the list default. 
* Note that sorting can occur in tables, as well as in lists. While sorting in lists relies on the sorting component described on this page, sorting within a table happens in the table header. When deciding which sorting pattern to use, consider if the sort functionality needs to be visible or if it can be hidden. Also consider if the user needs to compare the items in a list to each other. If it the items in a list need to be compared to each other, and if the sorting functionality doesn't need to be immediately visible, consider using a table with sorting available in the header instead of a list with the visible sorting component.

### Sorting "don'ts"

* When using the sorting component, make sure the list in the dropdown isn't too long, otherwise it will create usability problems.
* If a list is static, easy to search/scan, or where the data set won't grow, the sorting component is likely unnecessary.

## Demo

TODO: Add in the example sort component.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

TODO: Add in a link to the measure spec.
