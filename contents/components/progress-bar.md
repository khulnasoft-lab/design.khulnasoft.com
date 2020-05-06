---
name: Progress bar
status: integrated
vueComponents:
  - GlProgressBar
related:
  - charts
  - skeleton-loader
---

A progress bar is a UI element that indicates a percentage of total progress. Progress bars are a way to display analytics of progress. An example of this would be [time tracking](https://gitlab.com/help/user/project/time_tracking.md). Time is just one unit you can use to display in a progress bar, there may be other units, but as long as you have a percentage of a total amount, you can use progress bars to display that visually.

## Usage

Use progress bars if you are measuring a percentage of a total amount of progress. Units can include things like time. If you are displaying a percentage of total time spent on tasks, it is appropriate to use a progress bar to display that in a visual way.

### Dos and Dont’s

| Do | Don't |
| --- | --- |
| Use progress bars to visually display a percentage. | Use progress bars to indicate loading of content, use a [skeleton loader](/components/skeleton-loader) for that instead. |
| Include text below the progress bar to indicate total progress and the maximum potential progress |  |
| Include a tooltip on hover to indicate total amount of progress |  |

Todo: Add live component block with code example

## Demo

<!--
  DEMO, keep this section for all patterns, the code block demo will be added at a later date
-->

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4265%3A20)
