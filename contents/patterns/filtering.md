---
name: Filtering
related:
  - filter
  - search
  - tabs
  - date-picker
---
## When to use filtering patterns

[Search](/components/search) and [filter](/components/filter) components in GitLab may seem similar at a first glance since the UI is similar, but their purposes are generally different. Search lets a user find records based on a particular value, while filters let a user display a list of records that meet a common value. The main factor for choosing between these two components should be the user’s goal:

- If the user is looking for a specific item, the search component should be used. For example, trying to find a particular group member by name, surname, or username.
- If the user is looking to narrow down a list of items based on specific parameters (single or multiple values), the filter component or filtering patterns should be used. For example, narrowing down a list of issues for a particular team member and milestone.

The filter component is flexible but complex and should be used for filtering data of highest complexity (for example, a list of issues or merge requests). Consider using other filtering patterns for data that is less complex (for example, a list of users). Consult the table below when deciding whether search or filtering should be used. Then consult the [Data complexity and filtering patterns](#data-complexity-and-filtering-patterns) section to decide wheter the filter component or filtering patterns should be used.

| User intent | Component/Pattern |
|---------------|------------------|
| Searching for something specific when the search term or value is known | Search |
| Searching for something specific when only some parameters are known | Filter/Filtering |
| Narrowing down a range of items based on parameters | Filter/Filtering |
| Narrowing down a range of items based on parameters, while also searching for something specific | Filter/Filtering |

## Data complexity and filtering patterns

The [filter](/components/filter) component, alongside [tabs](/components/tabs), [dropdowns](/components/dropdown-listbox), [sorting](/components/sorting), [date picker](/components/date-picker), and [search](/components/search) can all be used when filtering data. The more complex the data that needs to be filtered, the more components and UI elements can be used to filter it and change the view. For example, a list of members where their name, username, and join date are the data, the sorting and search components are enough to allow users to efficiently search and order the results. If the data also includes the status for each member (active or inactive), adding tabs to allow users to navigate between all, active, and inactive members would add another useful level of filtering. If user role is also part of the data, a dropdown could be used to additionally filter by this parameter. Consult the table below for general guidance and examples on when to use components for filtering based on data complexity.

| Data complexity from 1 (low) to 5 (high) | Data examples | Components/UI elements |
|-----------------------|---------------|-----------------------------|
| 1 | Member name, username | Search |
| 1 | Member name, username, join date | Search, sorting |
| 3 | Member name, username, join date, status | Tabs, search, sorting |
| 4 | Member name, username, join date, status, role | Tabs, search, dropdowns, sorting |
| 4 | List of projects or groups | Tabs, search, dropdowns, sorting |
| 5 | Lists of issues or merge requests | Tabs, filter, sorting |

<todo>Add pattern and component placement guidelines.</todo>
