---
name: Sorting
related:
  - filters
---

Sorting allows users to quickly re-organize similar content on a long list of content, especially if the default order may be insufficient for users to scan the data set. The sorting component is usually placed directly on top of the list view. Common use cases for sorting include arranging:

*   Numbers in ascending or descending order.
*   Characters in alphabetical or reverse-alphabetical order.
*   Dates from most to least recent (and the reverse).

## Usage

### Sorting vs filtering

Sorting and filtering are closely tied. Filtering works by hiding part of the data that would otherwise be displayed on the list. Unlike filtering, sorting doesn't hide content, it just re-orders it based on a specified criteria. 

Sorting can be used independently of filering or in tandem with filtering. 

### Sorting component

There are two pieces of the sorting component in GitLab: a dropdown, and a sort icon button.

The dropdown allows users to choose their sorting criteria, whether it be by label, date or popularity. As soon as an item in the dropdown is selected, the list content re-sorts automatically. The sort dropdown currently allows for sorting by a single selected item.

The sort icon button allows users to change the direction of the sort, from ascending to descending (or vice-versa). The default sort order on the component is descending, but the default sort order on a list can (and should) be determined by the designer on a page-by-page basis.

### Persisting sort options

Sort options are meant to be persisted until the page is re-loaded, after which time the sort will update to the page default. 

## Demo

TODO: Add in the example sort component.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

TODO: Add in a link to the measure spec.
