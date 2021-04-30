---
name: Charts
docs: complete
vueComponents:
  - GlAreaChart
  - GlLineChart
  - GlColumnChart
  - GlStackedColumnChart
related:
  - popover
---

Charts help users quickly digest, visualize and see trends in their data.

## Usage

Charts should be:

- Simple to understand, and easy to interact with.
- Have a consistent visual appearance, and be accessible on all screen sizes.
- Be easy to build, and straightforward to modify.

Our charts are built with resources from the [Apache ECharts](https://echarts.apache.org/) Open Source Library.

General content and style considerations for charts include:

- If there is more than one series being displayed, add a legend.
- In legends, any text after the series name is optional. Use this space to add complementary information as needed, such as total or average values.
- Use chart titles, category and value labels as necessary to clarify the content being shown, with units in parentheses, if required. Note that units aren't always necessary, for example, in the case of counts.
- Charts follow the data visualization recommendations for [color](/data_visualization/color). 
- When hovering, detailed information on the data point is shown in a [popover](/components/popover).

While most charts only have a single x and y axis, two y-axis charts may occasionally be used; for example, when showing data sets at different orders of magnitude (for example, issues closed, 10; issues opened, 10; total issues 1,000). In this instance, the second y-axis shows how the two data sets are related while ensuring the visualisation at both orders of magnitude is still usable and parsable.

Todo: add details

## Type overview

GitLab UI supports [column](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-column-chart--default), [line](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-line-chart--default), [area](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-area-chart--default), [bar](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-bar-chart--default), [scatter](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-discrete-scatter-chart--default), [gauge](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-gauge-chart--default) and [sparkline](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/charts-sparkline-chart--default) charts. In addition, there are other forms of data visualizations available (see, for example, the [overview](/data_visualization/overview) page for information on heat maps, and the separate [single stat](/data_visualization/singlestat) page).

Column charts are the default chart type. If you are thinking about using a pie chart, consider that a column chart may tell the story more clearly.

When choosing a chart type, first consider your data set. If you are hoping to show:

- A comparison of values across categories or across time, consider a column, bar, line or sparkline chart.
- A comparison between groups or to show how a whole is divided into parts, consider an area chart.
- A distribution of values or the relationship between them, consider a scatter chart. 
- A value within a given range, consider using a gauge chart.
- The composition of elements within the data set, consider a grouped or stacked column chart.

## Column charts

Column charts are used to compare values across categories. The categories are usually presented on the x-axis, with the values on the y-axis.

The bars on a column chart are presented vertically rather than horizontally, and they can be stacked. Stacking can be useful for comparing multiple series.

[[Example:column-basic]]

### Grouped and stacked column charts

It may sometimes be necessary to stack values in a column or to have groups of columns within your chart, for example when there are two dimensions of data (one nested within another) moving across time. Stacked columns can be either symmetric (where the number of stacks in each column is equal) or asymmetric (where the number of stacks in each column is not equal).

[[Example:stacked-column-basic]]

Todo: Add grouped column chart example

When there are three dimensions of data you want to display, it's also possible to both group and stack columns in the same chart. If, for example, you want to display all of the merged merge requests in one column, open and closed merge requests together in a second column, and show both of these dimensions over time, you would use:

- A group of columns for the first dimension (merged MRs).
- A stacked column for the second dimension (open and closed MRs).
- Show time across the x-axis.

*Note: Since a grouped and stacked chart already contains a lot of inforamtion, avoid using more than 5 values in each dimension.*

#### Color in stacked and grouped charts

When utilizing stacked and grouped charts, consider using color as an additional indicator that items in different groups are related.

Todo: Add example

In addition, graded transparency to can help to highlight differences in stacked variables while still differentiating stacks from groups in your chart.

Todo: Add example

Specific colors may be used when values in a chart have certain colors associated with them. For example, merge request state or vulnerability status. Specific colors should be used sparingly.

Todo: Add example

## Line charts

Line charts are used to display continuous data.

They are useful when you are looking to identify trends or to see larger patterns in your data, and to see how your data changes over time.

[[Example:line-basic]]

## Area charts

Area charts are used to represent "[cumulated totals](http://www.vizwiz.com/2012/10/stacked-area-chart-vs-line-chart-great.html) using numbers or percentages."

In instances where you want to see both the overall trend and the percent contribution, it is preferable to use a line chart rather than an area chart. It can be very difficult for our eyes to correctly assess the width of areas and how it trends.

[[Example:area-basic]]

## Interaction

### Zoom bar

ECharts has a default mechanism for [zooming on charts](https://echarts.apache.org/en/feature.html#interaction). A zoom bar gives users more control over how much data is displayed at any one time, and gives them the ability to dig into issues they are observing at a more granular level.

The zoom bar is not added to all charts by default and shouldn't be used in cases where the chart neatly fits its container. However, in instances where the chart would otherwise overflow its container or where there is a large amount of data for users to explore, the zoom bar should be introduced.

### Chart popovers

By hovering over specific data points on charts, users will see a [popover](/components/popover/). The popovers for charts help provide users with more detailed information about both the values being hovered on and their corresponding positions on the x and y axes. The data displayed in the chart popovers is as follows:

- Popover header: x-axis value (x-axis title)
- Popover body: y-axis title, value

The [column chart measure spec](https://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23195-column-chart-design-spec-previews/) shows examples of how popover content could be structured, in practice.

#### Text wrapping in chart popovers

The max-width of chart popovers is `512px`, with long chart values wrapping rather than truncating. When chart values in popovers wrap, break the word into two lines without using a hyphen.

### More options menu

A "more options" menu (vertical ellipses) can be used in the top righthand corner of charts. This provides users with access to additional chart functionality (such as copying chart embed code) which isn't directly displayed on or near the chart.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following links:

[Column charts measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23195-column-chart-design-spec-previews/)

[Line chart measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23204-line-charts-spec-previews/)

[Area chart measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gitlab-design%23304-area-charts-spec-previews/)

[Zoom bar measure spec](http://gitlab-org.gitlab.io/gitlab-design/hosted/amelia/gd%23221-charts-scrolling-spec-previews/)
