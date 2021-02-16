---
name: Single stat
figma: https://www.figma.com/file/17NxNEMa7i28Is8sMetO2H/Data-Visualization?node-id=275%3A731
docs: complete
a11y: upcoming
gitlab_ui: https://gitlab.com/gitlab-org/gitlab-ui/-/tree/master/src/components/charts/single_stat
vueComponents:
  - GlSingleStat

---

The single stat component displays the title and value of a metric.

## Usage

A single stat can be used by itself or side-by-side with other single stats to display a topical set of metrics. There are a number of variations to allow for additional context or representation of the metric.

### When to use a single stat

- To show an overview of how a metric is performing.
- To show multiple metrics around a similar topic side-by-side.

### When not to use single stat

- To display standard text or labels.
- To display the same metric over a period of time (use a [chart](/data-visualization/charts) instead).

## Demo

### Simple

The default pattern for displaying a metric.

[[Example:simple]]

### Title icon

A single stat with a title icon to convey extra meaning to the metric.

[[Example:titleIcon]] 

### Meta icon

A single stat with an icon which can be used to convey status or trend.

[[Example:metaIcon]] 

### Badge

A single stat with a badge which can be used to convey status or trend in more detail.

[[Example:badge]] 

## Design specifications

Color, spacing, dimension, and layout information can be viewed in the [Pajamas UI Kit →](https://www.figma.com/file/17NxNEMa7i28Is8sMetO2H/Data-Visualization?node-id=275%3A731)

