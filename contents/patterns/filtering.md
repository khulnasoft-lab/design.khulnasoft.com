---
name: Filtering
related:
  - filter
  - search
  - tabs
  - date-picker
---
## Search vs filter

[Search](/components/search) and [filter](/components/filter) components in GitLab may seem similar at a first glance since the UI is similar, but their purposes are generally different. Search lets a user find records based on a particular value, while filters let a user display a list of records that meet a common value. The main factor for choosing between these two components should be the user’s goal:

- If the user is looking for a specific item, the search component should be used. For example, trying to find a particular group member by name, surname, or username.
- If the user is looking to narrow down a list of items based on specific parameters (single or multiple values), the filter component or filtering patterns should be used. For example, narrowing down a list of issues for a particular team member and milestone, or searching for an issue assigned to a team member and from a specific milestone but not knowing it's title.

The filter component is flexible but complex and should be used for filtering data of highest complexity which can be filtered by numerous parameters (for example, a list of issues or merge requests). Consider using other filtering patterns for data that is less complex (for example, a list of users). Consult the [Data complexity and filtering patterns](#data-complexity-and-filtering-patterns) section to decide whether the filter component or filtering patterns should be used.

## Data complexity and filtering patterns

The [filter](/components/filter) component, alongside [tabs](/components/tabs), [dropdowns](/components/dropdown-listbox), [sorting](/components/sorting), [date picker](/components/date-picker), and [search](/components/search) can all be used when filtering data. The more complex the data that needs to be filtered, the more components and UI elements can be used to filter it and change the view. For example, a list of members where their name, username, and join date are the data, the sorting and search components are enough to allow users to efficiently search and order the results. If the data also includes the status for each member (active or inactive), adding tabs to allow users to navigate between all, active, and inactive members would add another useful level of filtering. If user role is also part of the data, a dropdown could be used to additionally filter by this parameter. Consult the table below for general guidance and examples on when to use components for filtering based on data complexity.

| Data complexity from 1 (low) to 5 (high) | Data examples | Components |
|-----------------------|---------------|-----------------------------|
| 1 | Member name, username | Search |
| 1 | Member name, username, join date | Search, sorting |
| 3 | Member name, username, join date, status | Tabs, search, sorting |
| 4 | Member name, username, join date, status, role | Tabs, search, dropdowns, sorting |
| 4 | List of projects or groups | Tabs, search, dropdowns, sorting |
| 5 | Lists of issues or merge requests | Tabs, filter, sorting |

## Placement guidelines

In data complexity levels where the filter component isn’t used (1-4), the search should be placed on the left, followed by dropdowns for filters, and the dropdown for sorting should be inline but right-aligned. The recommended number of filter dropdowns is 3-5, when more are required consider using the filter component or the [filter builder](#filter-builder).

<todo>Add guidelines for choosing between the filter component and the filter builder pattern.</todo>

### Selecting filters with dropdowns

This pattern is recommended for cases when a single filter can be selected with each filter dropdown. For example, a list of issues can only be filtered by one assignee.

<figure role="figure" aria-label="Tabs, search, filter, and sorting placement" class="figure">
  <img src="/img/filtering-medium-complexity-placement-example.png" alt="Two tabs with search below on the left, dropdowns for fitlers to the right of search, and sorting dropdown right-aligned to the filters" role="img" class="figure-img">
</figure>

If more dropdowns for filters are required they can be pushed into a separate row with a border between the search and the filters. The sorting dropdown is inline but to the right of the filter dropdowns, the search remains limited in width.

<figure role="figure" aria-label="Tabs, search, filter, and sorting placement when filter dropdowns are in their own row" class="figure">
  <img src="/img/5-filters-in-new-line.png" alt="Two tabs with search below on the left, dropdowns for fitlers below in its own row, and sorting dropdown right-aligned to the filters" role="img" class="figure-img">
</figure>

On small screens the filter and sort dropdowns get pushed below the search and are full width. The functionality of toggling the visibility of filters can be added to make the UI less overwhelming. A button with the filter icon and a label _Filters_ can be the trigger for this toggling. If filters are applied and then hidden, the button reflects the number of filters applied in a badge to the right of the button label. 

<div class="row">
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Tabs, search, filters, and sorting UI placement on mobile devices">
      <img class="figure-img" src="/img/filtering-medium-complexity-placement-example--mobile.png" alt="Two tabs with search below, followed by filter and sort dropdowns each in new line" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Tabs, search, filters, and sorting placement on mobile devices</figcaption>
    </figure>
  </div>
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Tabs, search, filters, and sorting UI placement on mobile devices">
      <img class="figure-img" src="/img/filtering-medium-complexity-placement-example--mobile--filters-hidden.png" alt="Two tabs with search below and a filters button to the right of it" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Example of the button for toggling the visibility of filters</figcaption>
    </figure>
  </div>
</div>

### Adding filters with dropdowns

This pattern is recommended for cases when multiple filters can be added with each filter dropdown. For example, a list of issues can be filtered by multiple assignees.

<todo>Add pattern and guidelines for adding multiple filters with dropdowns.</todo>

## Filter builder

<todo>Add filter builder pattern and guidelines.</todo>
