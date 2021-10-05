---
name: Date and time format
description: This defines date and time format, and how to use which one when
---

### Different date/time format

#### **Absolute date/time format**

- **Local aware format:**
  - **Default:** use the [medium style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) of local-ware date format. For example, the European style: Jan 03, 2021
  - **Abbreviation:**: we hide year for abbreviation, For example, the European style: Jan 03. For abbreviation, we always show the default format in a tooltip.
- **ISO 8601:**
  - Use only one format for ISO 8061: YYYY-MM-DD. To avoiding confusion, no abbreviation is allowed for ISO 8061

#### **Relative date/time format:**

- XX minutes/hours/days/week/month/years ago
- Always display absolute time in a tooltip (using which absolute format please check the flow chart below)

### **When to use what date/time format**

To choose which format to use, frist please check either your uses-cases match the two exceptions below. If yes, follow what the exceptions suggest, if not, go with the following suggestion: 

 * **If a user doesn't set up in preference to use relative time (default settings)**
  * We display absolute time 
    * If we can detect browser settings, we try to display localised time
    * If we can't, display ISO 8601: YYYY-MM-DD
* **If a user chooses to use relative time in preference**
  * We display relative time and show absolute time in the tooltip 

<figure class="figure" role="figure" aria-label="Date picker structure">
  <img class="figure-img" src="img/Date and time format flow chart.png" alt="flow chart to help make decison when to use what date and time format" role="img" />
</figure>


#### **Exception 1: Always use absolute format**

In following the situation, we always use absolute date/time format :
- When users need to show clarification due to technical, security or legal reasons, such as in an audit log file, tax form, security alert. In other words, think of the situation, if users need to convert relative time to absolute themselves, we always show absolute time to avoid adding extra works to users themselves. 
- When we need to show a range of time. For example, from YYYY-MM-DD to YYYY-MM-DD. 


#### **Exception 2: Always use relative format**
- When the content is updated very frequent, such as a live newsfeed/notification. 
  - For relative time, we always show absolute time in tooltip. When having tooltip is not possible. For example in a download report, we show: 2 days ago (Jan 03, 2021)

### **Special case: add timezone to the end of the date/time format**

By default, we always use the local time based on the user's browser setting. In edge cases, such as in a chart, we need to display different timezones together, we add timezone information at the end of date/time format. 
