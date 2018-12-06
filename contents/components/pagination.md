---
name: Pagination
vueComponents:
  - GlPagination
related:
  - buttons
  - lists
  - spinner
---

Breaking up lists and distributing the results either by the use of pagination or by infinite scroll helps the user parse a large number of items whenever there are too many results to show at once. We use both pagination and infinite scroll to segment results based on the user's task.

## Definitions

**Pagination** breaks up results into several pages with controls for navigating to a specific page or to the next or previous pages.

**Infinite scroll** loads the next batch of items in a list once the user has reached the bottom of the page and thus removes the need for pagination.

## Usage

| | Pagination | Infinite Scroll |
| ----- | ---------- | --------------- |
| **Description:** | Aides users who are looking for a specific item in a list to complete their task. | Aides users who are browsing through lists with content that updates frequently. |
| **When to use:** | To be used on any list that can be sorted and/or filtered. | To be used on lists with no sort/filter functionality. Lists that only have a search function should use infinite scroll and not be considered in the sorted/filtered category. |
| **Examples:** | Issues and Todos dashboards | Activity dashboards and the Environments page |

### Pagination
Lists with **more than 20** items require pagination which is always located below the list and takes the form of a [button](components/button) group. No pagination is required on lists with 20 or fewer items.

#### Behavior

##### Truncation
Truncation is shown using `...` when the number of pages exceeds the pagination display limit. By default `...` are shown after the **5th page** on large and medium viewports and after the **2nd page** on small and mobile viewports.

Double truncation occurs when the current page is separated by 5 or more pages from the first and last page on large and medium viewports. On small and mobile viewports, double truncation occurs when 1 or more pages separate the current page from the first and last page.

###### Large/medium viewport example
Todo: add truncation example on large/medium viewports

Todo: add double truncation example on large/medium viewports

###### Small/mobile viewport example
Todo: add truncation example on small/mobile viewports

Todo: add double truncation example on small/mobile viewports


### Infinite scroll
Infinite scroll begins once the user has reached the 20th item of a list and there are more items to load. It's at this point that a [loading spinner](component/spinner) appears within a button at the bottom of the list for the duration of the load time.

#### Behavior

##### Load more
Once the list has loaded more items twice, a **show 20 more** button appears in place of the loading spinner button. This pattern of loading the list twice then showing a "show 20 more" button repeats itself until the user has reached the end of the list.

Todo: Add load more button example

In cases where the user has scrolled enough to load the list twice, and fewer than 20 items remain in the list, we will forgo the use of a load more button and instead load the remaining items using the loading spinner button.

##### List count

Always display a counter that details how many items have already loaded and how many items remain below lists with infinite scroll, giving the user an indication of where they are relative to list.


##### Returning to a list
When a user returns to a list from a list entry using the back button in the browser, they should be returned to the same place in the list where they left off.


## Demo

### Pagination
Todo: Add live component block with code example

### Infinite Scroll
Todo: Add live component block with code example

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

Todo: Add spec preview for pagination

Todo: Add spec preview for infinite scroll
