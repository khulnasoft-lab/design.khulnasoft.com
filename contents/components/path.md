---
name: Path
description: Paths are horizontal process flows composed of a series of stages.
vueComponents:
  - GlPath
related:
  - tabs
---

## Examples

[[Example:path-basic]]

[[Example:path-with-metric]]

[[Example:path-full]]

Todo: Add to Pajamas UI Kit.

## Structure

Todo: Add structure image.

## Guidelines

### When to use

- As an indicator of a user’s progress within a process, for example, in a checkout flow.

### When not to use

Todo: Add when not to use.

### Variants

1. **Simple Path**: A simple path only contains stages with labels.
1. **Counter Path**: A counter path contains stages with a counter [badge](/components/badge) showing the number of items it contains. If there are any ”All,” “Overview,” or “Summary” stages, then the counter of that stage should equal the sum total of all the others. Counters shouldn’t be included if they break this pattern.
1. **Metric Path**: A metric path contains stages with an abbreviated metric, such as 12d or 1.5h. The metric can be an integer or float, but should be limited to 5 digits maximum (and fewer when possible). Don’t use multiple metric types on a single path. For example, 1d and 6kg. 
1. **Combination Path**: Some processes may be more complicated and require a path with a combination of icons, counters, and metrics. An icon can also be used at a specific stage, such as an “Overview,” to make it stand out more. Try to limit path complication by only using necessary attributes.

### Accessibility

#### Keyboarding

| Key | Action |
|-----|--------|
| `Tab`  | When focus is outside of the path, moves focus to the active stage. If focus is on the active stage, moves focus to the content within the content of that stage |
| `→`    | Focuses and activates the next stage in the path. If the current tab is the last tab in the tab list, it activates the first tab. |
| `←`    | Focuses and activates the previous stage in the path. If the current tab is the first tab in the tab list, it activates the last tab. |
