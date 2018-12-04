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

#### Pagination
Pagination breaks up results into several pages with controls for navigating to a specific page or to the next or previous pages. Pagination aides users who are looking for a specific item in a list to complete their task.

#### Infinite Scroll
Infinite scroll loads content once the user has reached the bottom of the page and thus removes the need for pagination. Infinite scroll aides users who are browsing through lists with content that updates frequently.

## Usage

| Pagination | Infinite Scroll |
| ---------- | --------------- |
| Pagination is to be used on any list that can be sorted and/or filtered. | Infinite scroll is to be used on lists with no sort/filter functionality. Lists that only have a search function should use infinite scroll and not be considered in the sorted/filtered category. |

#### Pagination
Lists with more than **20** entries require pagination which is always located below the list and takes the form of a [button](component/button) group. No pagination is required on lists with fewer than 20 entries. After a specific number of pages, the button group truncates depending on viewport size.

##### Truncation

###### Large viewport example
Todo: add truncation example on large viewports

###### Medium viewport example
Todo: add truncation example on medium viewports

###### Small/mobile viewport example
Todo: add truncation example on small/mobile viewports


#### Infinite scroll
Infinite scroll begins once the user has reached the 20th entry of a list and there are more entries to load. It's at this point that a [loading spinner](component/spinner) appears briefly with a message letting the user know how many entries have already loaded and how many entries remain in the list, giving the user an indication of where they are in the list.

##### Load more
Once the user has scrolled to a point where the list has loaded twice, a **load next 20 entries** button appears in place of the loading spinner. This 2-to1 scroll to load and load more action repeats until the user reaches the end of the list.

If there are fewer than 20 entries in the list and the user has scrolled enough to load the list twice, we will forgo the usage of a load more button and instead load the remaining entries in the list utilizing the loading spinner.

## Demo

### Pagination
Todo: Add live component block with code example

### Infinite Scroll
Todo: Add live component block with code example

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

Todo: Add spec preview for pagination

Todo: Add spec preview for infinite scroll
