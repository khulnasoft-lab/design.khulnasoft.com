---
name: Date picker
description: The date picker allows a user to choose and/or input a date by by using a calendar dropdown or by typing the date into a text field.
vueComponents:
  - GlDatepicker
related:
  - form
  - dropdown
---

## Examples

[[Example:basic-date-picker]]

[[Example:basic-daterange-picker]]

Todo: Add example date range limit indicator.

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A13)

## Structure

<figure class="figure" role="figure" aria-label="Date picker structure">
  <img class="figure-img" src="/img/date-picker-structure.svg" alt="Numbered diagram of a date picker structure" role="img" />
</figure>

1. **Label**: Text associated with the text field.
1. **Text field**: Input element that gets populated with a date.
1. **Calendar button**: Opens the calendar dropdown.
1. **Clear button**: Clears the text field content.
1. **Calendar dropdown**: Dropdown showing the month.

Todo: Update structure with date range limit indicator.

## Guidelines

### When to use

- Choose a date from a calendar to populate a text field.

### When not to use

- If a user needs to enter a familiar date, like a birthday, consider using a regular [text field](/components/form) without the date picker functionality instead.

### Variants

- **Date picker**: Choose a single date.
- **Date range picker**: Choose a start and end date.

### Behavior

- The user can either type a date into the text field or choose a day from the calendar dropdown which will populate the text field with the chosen date.
- A user can enter a date in different formats. For example, `January 22, 2020` or `22/01/2020`. The date picker translates the format to GitLab's default (ISO 8601) in the API.
- Once a user selects the start (“From”) date, the date picker for the end (“To”) date only allows them to pick a date that is either equal to or after the selection. The days preceding the start date will be disabled.
- If the user picks a future start date, the default month shown for the ending date date picker dropdown should be that same month and not the current month. This doesn’t apply for starting dates selected in the past.
- On smaller viewports, the two date text fields in a date range picker are full-width and vertically stacked so the user’s language reading direction doesn’t have an effect on the order.

### Content

- The label for a date picker can specify what the date selection is for, while the date range picker labels should be "From" for the start date and "To" for the end date.
- The text field uses "YYYY-MM-DD" as placeholder text to indicate the expected format of time to be entered.
- The text field accepts all special characters and numbers.
- The current month (MM) is the default month shown in the calendar dropdown.
- The order of the “From” and “To” text fields should match the user’s reading language setting (left-to-right by default).
- When the date range picker limits the number of selectable days, indicate it in the UI with text that summarizes the number of days currently selected, followed by an [info icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~information-o). The tooltip on the info icon should clarify the date range limit.

### Accessibility

Todo: Add accessibility notes.
