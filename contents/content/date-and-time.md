---
name: Date and time
summary: Date and time formats in GitLab aim for clarity and consistency, balancing user preferences with default formats to enhance comprehension across diverse localization needs.
description: Dates and times clarify when an event occurred. The way they are formatted should be informative, not disruptive. While users can choose a preferred date and time format, there are occasions when we default to a specified format instead.
---

## Date and time options

### Absolute format

The absolute format clarifies the precise date and time that something occurred.

We can either display a [localized time and date format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) based on the user's location or use a non-localized format following the [ISO 8601 standard](https://www.iso.org/iso-8601-date-and-time-format.html).

- Localized dates display the day, month, and full year by default (for example: Jan 3, 2022). The date can be shortened to the day and month when space is tight (Jan 3). If the date is shortened, show the full date and time data in a tooltip, along with the timezone (Jan 3, 2022 11:00am UTC-8).
  - Use the `numeric` value of the `year` [parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) to display the year in full (for example: 2022). The shortened version of the year may be used instead if there is limited space (22).
  - For the `month` parameter, use the `short` value (for example: Mar). Note that the API will auto-adjust to `full` if the language can't be shortened.
  - For the `day` parameter, use the `numeric` value. (For example: 1)
  - For `timeZoneName`, use either `short` (for example: UTC-8) or `long` (for example: Pacific Standard Time), depending on space and what is needed to make the time zone clear in context.
- ISO 8601 format is displayed YYYY-MM-DD. Time can also be appended to the end of the date if necessary (HH:MM:SS).

### Relative format

The relative format communicates the approximate amount of time that has passed since an event occurred; whether that event occurred XX minute(s), hour(s), day(s), week(s), month(s), or year(s) ago. For example, it is used to communicate that an issue was opened "1 minute ago" or "10 months ago".

When using the relative format, always display the absolute time in a tooltip following the [Guidelines](#guidelines) below.

## Guidelines

### Which format to use when

- Display date and time information in the absolute format unless [users specify they want to use relative formatting](https://docs.gitlab.com/ee/user/profile/preferences.html#use-relative-times) instead.
- If it's possible to detect the browser settings, display the localized time, for example, Jan 3, 2021. Otherwise, fall back to displaying the date in ISO 8601: YYYY-MM-DD (time is optionally appended after the date, HH:MM:SS).

```mermaid
graph TD
    A["Which date/time<br>format to use?"]:::start
    B{"Does the<br>situation meet exceptions<br>for always use absolute<br>format?"}:::decision
    C{"Does the<br>situation meet exceptions<br>for always use relative<br>format?"}:::decision
    D{"Does user set<br>'Use relative format'<br>in preferences?<br>(on by default)"}:::decision
    E{"Can browser detect<br>user's region<br>automatically?"}:::decision
    F{"Is there limited<br>space to display?"}:::decision
    G["Use Absolute:<br>localized normal format, Ex: Jan 2, 2021<br>(European style)"]:::ending
    H["Use Absolute:<br>localized format (shortened), Ex: Jan 2<br>(European style)"]:::ending
    I["Use Absolute:<br>ISO 8601 format, Ex: YYYY-MM-DD"]:::ending
    J["Use Relative format<br>Ex: 30 minutes ago"]:::ending

    A --> B
    B -->|Yes| E
    B -->|No| C
    C -->|Yes| J
    C -->|No| D
    D -->|Yes| J
    D -->|No| E
    E -->|Yes| F
    E -->|No| I
    F -->|Yes| H
    F -->|No| G

classDef start fill:#DCFBFC, stroke:#20757D
classDef decision fill:#FEF3D7, stroke:#DAA520
classDef ending fill:#D7BED7, stroke:#63397
```

### Exceptions

In certain scenarios, the date and time are displayed in a specific format and the user's preference is overridden.

Use [absolute format](#absolute-format) when:

- Users need specific dates and/or times for technical, security, or legal reasons. For example, in an audit log, a tax form, or a security alert.
- Users would need to convert relative time to absolute time in order to complete a task.
- A range of time is displayed, for example in a date picker.

Use [relative format](#relative-format) when:

- Content is updated frequently and specifics are not critical. For example, a live newsfeed or notification.

### Adding timezone data

In situations where timezone context is important, for example in alerts or incidents, append the timezone information to the end of the date and time.
