---
name: Mini pipeline graph
figma: TBD
docs: complete
a11y: upcoming
gitlab_ui: upcoming

---

A mini pipeline graph is a visualization of a CI/CD pipeline. It shows the status of the pipeline stages and downstream or upstream pipelines. A user is able to navigate between individual pipeline jobs.

## Usage

A mini pipeline graph can be used in different layouts throughout the product as a way to monitor the pipeline run and navigate between the pipelines stages and jobs.

### When to use a mini pipeline graph

- When it's necessary to communicate the status of the different pipeline stages and jobs in one place.

### When not to use single stat

- To display the status of the whole pipeline. A pipeline status badge should be used in that case.

## Demo

### Simple pipeline

A mini pipeline graph for a simple 3-stage pipeline.

Example TBD

### Upstream and downstream pipelines

A 3-stage pipeline with an upstream and a downstream pipelines.

Example TBD

## Design specifications

Color, spacing, dimension, and layout information can be viewed in the Pajamas UI Kit (LINK TBD)
