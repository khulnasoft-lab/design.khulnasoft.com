contents/date-time.md
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

Using[ ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html):
  - Internationally agreed way to represent dates is `YYYY-MM-DD`
  - Time can also be appended if necessary as `HH:MM:SS`

### Relative format

- XX minute(s), hour(s), day(s), week(s), month(s), or year(s) ago
- For example `1 minute ago` or `10 months ago`
- Always display absolute time in a tooltip (using which absolute format please check the flow chart below)

### **When to use what date/time format**

Use the following suggestion, unless your use case matches either of the two exceptions listed.

Display date and time in absolute format, unless [users specify they want to use relative formatting](https://docs.gitlab.com/ee/user/profile/preferences.html#use-relative-times) instead.
- Try to display localized time, for example `Jan 03, 2021`
- If we can't detect browser settings, fallback to displaying ISO 8601: `YYYY-MM-DD` (time is optional `HH:MM:SS`)
- Relative formatting would include the absolute time in a tooltip

<figure class="figure" role="figure" aria-label="Date picker structure">
  <img class="figure-img" src="img/Date and time format flow chart.png" alt="flow chart to help make decison when to use what date and time format" role="img" />
</figure>


### Exceptions

In either case, the preferences of a user should not change what is displayed. These exceptions keep the date and time in a specific format to ensure that it matches its context.

#### When to only use the absolute format
- When users need to show clarification due to technical, security or legal reasons, such as in an audit log file, tax form, security alert.
- If users would need to convert relative time to absolute themselves, we always show absolute time to avoid adding extra works to users themselves.
- When we need to show a range of time like in the date picker.

#### When to only use the relative format
- When the content is updated very frequently and specifics are not critical
  - For example, a live newsfeed or notification

### Adding timezone data

Always use the local time based on the user's browser setting. In edge cases, such as in a chart, when different timezones are displayed together, then add timezone information at the end of date/time format.
