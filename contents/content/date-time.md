---
name: Date and time
description: Dates and times clarify when something occurred. The way they are formatted should be informative, not disruptive. While users can choose a preferred date and time format, there are occasions when we default to a specified format instead. 
---

## Date and time options

### Absolute format

The absolute format clarifies the precise date and time that something occurred. 

Absolute date and time information can be [localized](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) to display a user's local date and time or follow the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. See the [Guidelines](#Guidelines) section for more information about when dates should be localized, and when they should be shown in ISO 8601.
  - Localized dates display as `Jan 03, 2021` or are shortened to `Jan 03` when space is tight. Always show the full date and time data in a tooltip if the date is shortened. Both `dateStyle` and `timeStyle` should be set to medium. 
  - ISO 8601 format is displayed `YYYY-MM-DD`. Time can also be appended to the end of the date if necessary as `HH:MM:SS`

### Relative format

- XX minute(s), hour(s), day(s), week(s), month(s), or year(s) ago
- For example `1 minute ago` or `10 months ago`
- Always display absolute time in a tooltip (using which absolute format please check the flow chart below)

### When to use what date/time format

- Display date and time in absolute format, unless [users specify they want to use relative formatting](https://docs.gitlab.com/ee/user/profile/preferences.html#use-relative-times) instead.
- If detecting browser settings is possible, display localized time. For example `Jan 03, 2021`. Otherwise, fall back to displaying ISO 8601: `YYYY-MM-DD` (time is optional `HH:MM:SS`).

<figure class="figure" role="figure" aria-label="Date picker structure">
  <img class="figure-img" src="/img/Date and time format flow chart.png" alt="flow chart to decide date and time format" role="img" />
</figure>

### Exceptions

In the following scenarios, the user preference does not override what is displayed. These exceptions keep the date and time in a specific format to ensure that it matches its context.

Use [absolute format](#absolute-format) when:
- Users need clarification due to a technical, security, or legal reason. For example, an audit log, tax form, or security alert.
- Users would need to convert relative time to absolute time in order to complete a task.
- A range of time is displayed, such as a date picker.

Use [relative format](#relative-format) when:
- Content is updated frequently and specifics are not critical. For example, a live news-feed or notification.

### Adding timezone data

When multiple timezones are present, append the timezone information to the end of the date and time format.
