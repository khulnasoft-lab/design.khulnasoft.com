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

### When to use tables

- Display structured content, where each entry has the same attributes.
- Let users review, enter, edit, or filter granular data sets.
- Display a data set that will continue to grow (e.g. Issues, Environments, and User Profile page).

### When not to use tables

- Display a list of continuous, vertical indexes of text or images. Use [Lists](/components/list) instead.
- Display contained content and actions on a single topic. Use [Cards](/components/cards) instead.
- Display hierarchical structures. Use the [Tree](/components/tree) view instead.

### Basic table

The basic table is the default option for this component, however, additional functionality can be added to enhance the table for different use cases.

## Additional functionality

The default option for the table component does not include complex interactions. However, additional functionality can be added to enhance the table for different use cases.

### Search & filter


Any filtering controls that manipulate the data set (including clickable charts) should be placed directly above the table with the option to clear all data. [See filter guidelines](/components/filter)

Todo: Add demo

### Sorting

Tables use column sorting rather than [list sorting](/components/sorting). The default sort direction of a table can be up or down depending on the use case and is indicated in the table header using an arrow icon. [See sorting guidelines](/components/sorting/)

Sorting is designed as a native functionality of tables. For sorting on [static lists](/components/list), use the [List sorting](/components/sorting) component.

The default sort direction of a table is usually ordered by one specific column attribute, such as status, last updated, or priority. Sorting is indicated in the table header using the [chevron down](https://gitlab-org.gitlab.io/gitlab-svgs/?q=chevron-down) and [chevron up](https://gitlab-org.gitlab.io/gitlab-svgs/?q=chevron-up) icons. 
    
Clicking the icon will sort the rows based on the selected column, in ascending order first, and subsequently toggling between ascending and descending order. 
    
Sorting can be disabled to prevent users from changing the sorting order of a column. The default order will utilize one specific attribute.
    
The sorting icon and functionality should not be visible on responsive tables.

Todo: Add demo

### Pagination, lazy load & infinite scroll

Tables displaying data sets with more than 20 items should use either pagination, lazy load or infinite scroll. Tables have embedded pagination controls which are located at the bottom of the table. [See pagination guidelines](/components/pagination)

Todo: Add demo

### Additional actions

Table rows can include additional actions located in their far-right column. These actions should be visible at all times rather than showing on-hover. If there are two or more actions in a table row, consider using a button group or a [“more menu” button](/components/button#ellipsis) with a dropdown list option.

Todo: Add demo

## Anatomy

### Headers

A table header is the row at the top of the table that helps identify the columns below. The header provides clarity if data is non-descriptive or ambiguous. 

Always use column or row headers unless the table content is self-descriptive, like names, dates, and so on. Headers should be short, descriptive, and relevant. Avoid headers that are too long for the content in the rows below, and use title-case.

### Columns

Columns should be ordered by priority or in a way that tells a story with the data. Size columns according to the data they contain rather than making them all an even width. For example, columns of small content should be narrow, while columns of paragraphs should be relatively wide. Allow the browser to lay out the tables according to the viewport size.

### Rows

Rows can have a mix of interactive, read-only and editable cells. 

## Content

### Text alignment

Align the table content by importance, based on the information needs of your users. 

Left-align text content, rather than justifying or centering it, to avoid confusion or readability issues. Text in tables tends to end up in narrow columns. Don’t justify or center the text; it causes confusion and harms readability.

In some circumstances, right-aligning the text content helps with readability. Right-align the numeric data with a consistent number of decimal places to improve scannability.

Tables may switch their alignment for right-to-left audiences when designing for [internationalization](/usability/i18n).

### Null values

If a cell is empty or unavailable, keep the cell empty to reduce noise and help with legibility.

- Keep the cell empty to reduce noise and help with legibility
- Use a dash ("-") to signify missing data

### Truncation

Truncate long text strings with an ellipsis (“…”). On hover, the truncated text should display a tooltip including the full text. [See tooltips guidelines](/components/tooltips)

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

## Design specifications

Color, spacing, dimension, and layout specific information about this component can be viewed using the following link:

- [Sketch Measure Preview for Tables →](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/tables-spec-previews/)

## Links

- [Code Review Analytics + Table Component: Design evaluation & usability testing](https://gitlab.com/groups/gitlab-org/-/epics/2954)

