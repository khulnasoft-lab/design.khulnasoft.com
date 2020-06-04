
Paths are horizontal process flows composed of a series of “stages.” Like [tabs](https://design.gitlab.com/components/tabs), paths have one stage visible at a time, while keeping other stage links available.

## Usage
 
### Dos and Dont’s

| Do | Don’t |
|-----------------------|------------------------|
| Use paths rather than tabs when there is a process with unique content at each stage (e.g. [DevOps lifecycle](https://about.gitlab.com/stages-devops-lifecycle/)). | Paths should not be nested. |
|  | Paths should not be used as an indicator of a user's progress within a process (e.g. in a checkout). |

Paths are designed to be flexible. Therefore, there are a number of options and combinations which can be used to represent a process as accurately as possible...

### Simple paths

A simple path just contains stages with titles. 

Todo: Add demo

### Counter paths

A counter path contains stages with a "counter" badge showing the number of items it contains. If there are any "All", "Overview" or "Summary"-type stages, then the counter of that stage should equal the sum total of all the others. Counters should not be included if they break this pattern.

Todo: Add demo

### Metric paths

A metric path contains stages with an abbreviated metric such as 12d or 1.5h. The metric can be an integer or float, but should be limited to 5 digits maximum (and fewer when possible). Do not use multiple metric types on a single path (e.g. 1d & 6kg). 

Todo: Add demo

### Complicated paths

Some processes may be more complicated and require a path with a combination of icons, counters and metrics. An icon can also be used at a specific stage, such as an "Overview", to make it stand out more. Try to limit path complication where necessary.

Todo: Add demo

### Custom ordering

Todo: Add demo when Value Stream Analytics functionality is released

## Responsiveness

Paths share similar overflow properties to those of [tabs](https://design.gitlab.com/components/tabs):
- Design specifications - [View Path/Instances/Overflow](https://www.figma.com/file/IPkJnV9JOR9pdywAE7coDn/Path?node-id=1%3A70)
- Animation - [Overflow arrow slide animation](https://www.figma.com/proto/IFjuIcRE3YiEdd1d2J7c6b/Value-Stream-Path-rough-exploration?node-id=4220%3A2&viewport=-948%2C-100%2C2.0932257175445557&scaling=min-zoom) - 250ms, ease in & out

## Accessibility

### Keyboard controls

| Key    | Action                                                                                                                                                                                                       |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Tab`    | When focus is outside of the path, moves focus to the active stage. If focus is on the active stage, moves focus to the content within the content of that stage |
| `→`      | Focuses and activates the next stage in the path. If the current tab is the last tab in the tab list it activates the first tab. |
| `←`      | Focuses and activates the previous stage in the path. If the current tab is the first tab in the tab list it activates the last tab. |

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View Path component in Figma →](https://www.figma.com/file/IPkJnV9JOR9pdywAE7coDn/Path?node-id=1%3A70)
