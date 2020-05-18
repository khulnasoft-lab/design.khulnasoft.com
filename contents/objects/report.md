---
name: Report
---

## Overview
When a user wishes to drill-down into the details of a metric or chart, the Report object is the destination, and the standard template for showing the granular data set. It allows users to scope the data set with filters, and visualize the data set with a table and chart. This works hand-in-hand with the Generic Metrics API.

## Primary workflows

### 1. Drill-down

**Job-to-be-done**: When I drill-down into the details of a metric or chart; I want to view, filter and visualise the data set; so that I can spot patterns and take action on the information.

| Stage | Description | Signal |
| ------ | ------ | ------ |
| **Awareness** | User becomes aware that the data is available | Interacts with embedded analytics, dashboard or navigation |
| **Understanding** | User navigates to analytics page and scans the page for anything useful at a high-level | Page dwell, on-hovers, scrolling |
| **Scoping** | User scopes the content shown from the dataset to something they're interested in | Filters |
| **Exploring** | User manipulates the visualisation of the dataset and deep-dives to uncover insight | Interacts with chart & table |
| **Actioning** | User takes action on the information they uncovered | Clicks on table action buttons |

### 2. Create custom report

**Job-to-be-done**: When I have a specific data set of interest; I want to create a custom Report with saved filters, views and table columns; so that I can regularly analyse, share or report on the information.

| Stage | Description | Signal |
| ------ | ------ | ------ |
| `To do` | `To do` | `To do` |

## Anatomy

### Sub-objects

- None

### Layout & regions

- [Breadcrumb](/components/breadcrumb)
- Page header
- Metrics (optional)
- [Tabs](/components/tabs) (optional)
- [Filter](regions/filters) (optional)
- [Chart](/components/charts) (optional)
- [Table](/components/table)

*Note: Variants of this object can be created by adding/removing the optional regions*


### Entries & exits

**Typical entry-points**:
- Embedded analytics
- Dashboard object
- Project & group sidebar navigation

**Typical exit-points**:
- Individual objects (e.g. Merge Request or Issue page)
- Page actions (e.g. share chart or export table)
- Back to entry-point (e.g. back to dashboard)
