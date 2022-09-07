---
name: Search and Filters
related:
  - filter
  - search
  - tabs
  - date-picker
---

Search and filter components in GitLab may seem similar at a first glance. Their UI is similar but their purposes are generally quite different. Filters let users create a list of records that meet a common value. Search lets users find a single record based on a particular value. The main factor for choosing between these two components should be the user’s goal:
* If the user is looking for a specific item, the Search component should be used (for example, looking for a particular group member by their name, surname, or username)
* If they’re looking to narrow down a list of items based on specific parameters (single or multiple values), the Filter component should be used (for example, narrowing down a list of issues for a particular team member and milestone)

However, the GitLab’s Filter component has the ability to input raw text strings which gives it the ability to search for specific items, on top of its filtering capabilities. Consult the table below when deciding which component to use.

| User’s intent | Component to be used |
|---------------|------------------|
| Searching for something specific, they know the value they are searching for | Search |
| Searching for something specific, they don’t know the specific value they’re searching for, they know some parameters | Filter |
| Narrowing down a range of items based on parameters | Filter |
| Narrowing down a range of items based on parameters while also searching for something specific | Filter |

## Filtering

The Filter component, alongside Tabs, Sort, Date picker, and Search can all be used for filtering data. The more complex the data that needs to be filtered, the more components can be used to filter it. For example, a list of members where their name, username, and join date are the data, the Sort and Search components are enough to allow users to efficiently search and filter it. If the data also consisted the status for each member (active or inactive), adding Tabs to allow users to navigate between all, active, and inactive members would add another useful level of filtering. For general guidance and examples on when to use which components for filtering based on data complexity consult the table below.

| Data complexity level from 1 (low) to 5 (high) | Data examples | Components that can be used |
|-----------------------|---------------|-----------------------------|
| 1 | Member name, username | Search |
| 1 | Member name, username, join date | Search, Sort |
| 3 | Member name, username, join date, status | Search, Sort, Tabs |
| 4 | List of project or group names | Filter |
| 5 | Lists of issues or merge requests | Filter, Sort, Tabs |

## Search

### Global search

[Global search](https://gitlab.com/search?group_id=&project_id=13083&repository_ref=&scope=issues&search=mobile) allows you to search across items in a project, or even across multiple projects. You can switch tabs to filter on type of object, or filter by group.

### List search

There are several core lists in the GitLab experience, such as the Issue list and the Merge Request list. You are also able to filter and search these lists. [More information regarding filter.](/regions/filters)

