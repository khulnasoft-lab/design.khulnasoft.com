---
name: Date and time
description: The way that dates and times are formatted is crucial for ensuring that information is context-specific. Users should not be left wondering when something occurred. It should be formatted so that it matches its intent to inform and not be disruptive. While we offer users the choice to use their preferred format, there are exceptions when it should never change. 
---

## Date and time options

### Absolute format

Localized using [Intl.DateTimeFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat):
  - For example, `Jan 03, 2021` or shortened `Jan 03`. Always show the full string of the date and time data in a tooltip if shortened.
  - **options**
    - dateStyle: "medium"
    - timeStyle: "medium"

Using [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html):
  - Internationally agreed way to represent dates is `YYYY-MM-DD`
  - Time can also be appended if necessary as `HH:MM:SS`

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
