---
name: Tables
vueComponents: 
  - GlTable
related:
  - cards
  - list
  - tree
  - filter
---

Tables display tabular data in a basic grid comprised of cells, columns, and rows. This format makes it easy for users to scan large amounts of data. 

## Usage

### Use tables to:

- Display structured content, where each entry has the same attributes.
- Let users review, enter, edit, or filter granular data sets.
- Display a data set that will continue to grow (e.g. Issues, Environments, and User Profile page).

### Do not use tables to

- Display a list of continuous, vertical indexes of text or images. Use [Lists](/components/list) instead.
- Display contained content and actions on a single topic. Use [Cards](/components/cards) instead.
- Display hierarchical structures. Use the [Tree](/components/tree) view instead.

### Basic table

The basic table is the default option for this component, however, additional functionality can be added to enhance the table for different use cases.

### Search & filter

Any filtering controls that manipulate the data set (including clickable charts) should be placed directly above the table with the option to clear all data. [See filter guidelines](https://design.gitlab.com/components/filter)

Todo: Add demo

### Sorting

Tables use column sorting rather than [list sorting](https://design.gitlab.com/components/sorting). The default sort direction of a table can be up or down depending on the use case and is indicated in the table header using an arrow icon. [See sorting guidelines](https://design.gitlab.com/components/sorting/)

Todo: Add demo

### Pagination, lazy load & infinite scroll

Tables displaying data sets with more than 20 items should use either pagination, lazy load or infinite scroll. Tables have embedded pagination controls which are located at the bottom of the table. [See pagination guidelines](https://design.gitlab.com/components/pagination)

Todo: Add demo

### Inline actions

Table rows can include inline actions located n their far-right column. Inline actions should be visible at all times rather than showing on-hover. If there are two or more actions in a table row, consider using a button group or a [“more menu” button](https://design.gitlab.com/components/button#ellipsis) with a dropdown list option.

Todo: Add demo

### Expandable rows

Use expandable rows to progressively reveal more information about an item in a dataset.  Do not use expandable rows to display hierarchical structures. Use the [Tree](https://design.gitlab.com/components/tree) view instead.

Todo: Add demo

## Content

### Headers

Always use column and/or row headers unless the table content is self-descriptive. Headers should be short, descriptive, and relevant. Avoid headers that are too long for the content in the rows below, and use title-case.

### Columns

Columns should be ordered by priority or in a way that tells a story with the data. Size columns according to the data they contain rather than making them all an even width. 

### Rows

Rows can have a mix of interactive, read-only and editable cells. 

## Content

### Text alignment

Left-align text content rather than justifying or centering it. Right-align numeric data with a consistent number of decimal places to improve scannability.

### Null values

If the data for a cell is null, blank or unavailable, you can either:

- Keep the cell empty to reduce noise and help with legibility
- Use a dash ("-") to signify missing data

### Truncation

You can truncate long text strings with an ellipsis (“…”). On hover, the truncated text should display a tooltip including the full text. [See tooltips guidelines](https://design.gitlab.com/components/tooltips)

### Empty state

A table’s empty state displays when there is no data, yet. [See empty states guidelines](/regions/empty-states).

## Responsiveness

Tables work across multiple screen sizes and conform to responsive guidelines. Prevent horizontal scrolling to ensure the table doesn’t break the layout. 

Todo: Add demo

## Accessibility

Use proper semantic markup, so that users of screen readers can navigate through the table one cell at a time, hearing column and row headers spoken to them.

- `<th>` should not contain heading elements.
- `<th>` should be descriptive and relevant.
- `<th>` should have a defined `scope` attribute to establish relationships between the table headings and rows/columns; for example, `<th scope="col">`.
- `<caption>` should be used to provide a title for a table.
- `<caption>` should be an immediate child element of `<table>`.

## Demo

### Default

Todo: Add demo

### Zebra stripes

Use Zebra stripes to help differentiate dense data sets with lots of columns and/or rows.

Todo: Add demo

## Design specifications

Color, spacing, dimension, and layout specific information about this component can be viewed using the following link:

- [Sketch Measure Preview for Tables →](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/tables-spec-previews/)

## Links

- [Code Review Analytics + Table Component: Design evaluation & usability testing](https://gitlab.com/groups/gitlab-org/-/epics/2954)

