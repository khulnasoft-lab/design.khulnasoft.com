---
name: Tabs
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A138
docs: in-progress
gitlab_ui: https://gitlab.com/gitlab-org/gitlab-ui/-/tree/master/src/components/base/tabs
vueComponents:
  - GlTabs
  - GlTab
related:
  - /regions/navigation
---

Tabs are used to divide content into meaningful, related sections. Tabs allow users to focus on one specific view at a time while maintaining sight of all the relevant content options available. Each tab, when active, will reveal it's own unique content.

## Usage

There can only be one tab active at a given time. Tabs may be nested, with a maximum nesting of two levels. Please note that this should be considered only as a last resort.

### Tabs with counter badges

Each tab may include a [badge](/components/badge) with a counter of how many items that particular view contains.

If tabs contain such a badge, the “All” tab should have a badge that is the sum of the other tabs. A tab with a badge should not be included if it breaks this pattern.

For example, in the merge request list view, there should not be "Open" and "WIP" tabs. As a merge request can be both "Open" and "WIP," this will cause the sum of all badges not to match the number of "All" merge requests. An alternative would be to have a separate sorting function within the tab's content which filters open merge requests by "WIP."

### Fitted tabs

When tabs are used in a narrow container, column, or space, the tabs themselves may be fitted to the entire width instead of remaining left aligned.

## Demo

### Basic example

[[Example:tabs-basic]]

### Tabs with counter badges

[[Example:tabs-with-counter-badges]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=2497%3A25)
