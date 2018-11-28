---
name: Charts
---

Charts help users quickly digest, visualize and see trends in their data. 

## Usage

Charts should be:

*   Simple to understand, and easy to interact with.
*   Have a consistent visual appearance, and be accessible on all screen sizes.
*   Be easy to build, and straightforward to modify.
*   Built using a flexible framework, so we have room to grow.

In cases where the charting principles conflict, consider data representation accuracy over speed of delivery, speed over visual consistency, and consistency over interaction.

Going forward, our charts will be built using [Echarts](https://ecomfe.github.io/echarts-doc/public/en/index.html). 

## Types

We currently support column charts, line charts, area charts and pie charts. More charting types will be added, in future.

When choosing a chart type, first consider your data set. If you are hoping to show:

*   a comparision of values, consider a column, bar, line or circular area chart. Most of our charts currently fall into this category.
*   a distribution of values, consider a scatter chart, a line histogram, or a column histogram.
*   the relationship between values, consider a scatter chart or a bubble chart.
*   the composition of a group, consider a stacked column, stacked area, pie, or waterfall chart.

### Column charts

Column charts are used to compare values across categories. The categories are usually presented on the x-axis, with the values on the y-axis.

Column charts can be considered the 'default' chart type. If you are thinking about using a pie chart, consider that a column chart may tell the story more clearly.

### Line charts

Todo: Add specific information about line charts

### Area charts

Todo: Add specific informationa about area charts

### Pie charts

Todo: Add specific information about pie charts

## Demo

Todo: Add live component block with code example of all available chart types

## Design specifications

Todo: Add sketch measure preview specs for each chart type