---
name: Single stat
figma: https://www.figma.com/file/17NxNEMa7i28Is8sMetO2H/Data-Visualization?node-id=275%3A731
docs: complete
a11y: upcoming
gitlab_ui: https://gitlab.com/gitlab-org/gitlab-ui/-/tree/master/src/components/charts/single_stat
vueComponents:
  - GlSingleStat

related:
  - badge
  - card

---

The single stat component displays the title and value of a selected metric. 

## Usage

A set of single stat components can be used by itself or side-by-side with other single stats to display a range of metrics around a particular topic. There are a number of variations to allow for additional context or interpretation of the metric.

### Dos and Dont’s

### When to use single stat

Use single stats to:
- Give a high-level overview of how a metric is performing
- Show multiple metrics around a similar topic side-by-side

### When not to use single stat

Do not use single stats to:
- Display standard text or labels
- Repeatedly display how the same metric has been performing over time

### Title icon

A single stat with a title icon to convey extra meaning to the metric.

[[Example:single-stat-title-icon]] 

### Meta icon

A single stat with an icon which can be used to convey status or trend.

[[Example:single-stat-meta-icon]] 

### Badge

A single stat with a badge which can be used to convey status or trend in more detail.

[[Example:single-stat-badge]] 

## Demo

[[Example:single-stat-simple]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/17NxNEMa7i28Is8sMetO2H/Data-Visualization?node-id=275%3A731)

