---
name: Column charts
docs: in-progress
---

## Usage

Column charts are used to compare values across categories. The categories are usually presented on the x-axis, with the values on the y-axis.

## Variants

### Stacked

Todo: add details

### Grouped

Todo: add details

### Grouped and stacked

Grouped and stacked column charts display two dimensions of data (one nested within another) moving across a time series. 

There are three dimensions displayed in total on grouped and stacked column charts:
- **Groups**: The first dimension is represented by a group of columns.
- **Stacks**: The second nested dimension is represented as a stacked column.
- **Series**: The time series is represented across the x-axis.

*Note: Try to avoid using more than 5 values in each dimension to prevent visual complexity in the charts.*

#### Symmetric versus asymmetric

There are two kinds of grouped and stacked column charts:
- **Symmetric**: The number of stacks in each column is equal.
- **Asymmetric**: The number of stacks in each columnn is not equal.

##### Symmetric

Todo: Add symmetric example

##### Asymmetric

Todo: Add asymmetric example

#### Color patterns

See [color](/data-visualization/color/) for a full description of data visualization color patterns.

##### Cross-column colors

Use cross-column colors to highlight the "Groups" dimension spanning across columns.

Todo: Add example

##### Graded transparency

Use graded transparency to highlight the "Stacks" dimension within the columns whilst differentiating between the other columns.

Todo: Add example

##### Specific colors

Specific colors may be used when values in a chart have certain colors associated with them. For example, merge request state or vulnerability status. Specific colors should be used sparingly.

Todo: Add example

### 2 y-axes

Todo: add details
