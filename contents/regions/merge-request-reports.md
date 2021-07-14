---
name: Merge request reports
---

The merge request reports region synchronizes a wide variety of merge request (MR) widgets that serve many purposes. By systematizing attributes like layout, hierarchy, and content sections, the widgets will be more consistent, scannable, and utilitarian. Widgets will better adapt to page layout (responsive), and future widgets will have patterns to follow. The framework provides constraints where possible, but ultimately a widget's unique purpose should define the extent of how it's applied.

## Layout

Each widget is laid out as a grid with three possible horizontal levels and three vertical sections. Levels define [hierarchy](#hierarchy) and sections define [content sections](#content-sections) for each level.

<div class="figma-embed" aria-label="A grid layout of the merge request widget structure" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqEddyqCrI7kPSBjGmwkZzQ%2FComponent-library%3Fnode-id%3D38345%253A40393" allowfullscreen></iframe>
</div>

### Levels

- [Level 1](#level-1) - parent level of the widget.
- [Level 2](#level-2) - child of level 1.
- [Level 3](#level-3) - child of level 2.

### Sections

- [Status](#status) - contains the status icon for the widget and each child item.
- [Subject](#subject) - defines the widget and each child item.
- [Actions](#actions) - a group of optional actions for the widget and each level 2 child item.

### Grid

The MR widget uses the base-8 scale from Pajamas to align elements within. External spacing is always greater than or equal to internal spacing, meaning that as nesting increases, the space decreases. This helps identify content relationships and make the higher levels more scannable. Widget content nests up to two levels deep.

- Level 1 adjusts vertical spacing responsively to keep more widgets in view at smaller breakpoints.
- All levels adjust horizontal spacing responsively to provide more room for the subject at smaller breakpoints.

<div class="figma-embed" aria-label="A layout with different sized overlays to indicate content spacing" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqEddyqCrI7kPSBjGmwkZzQ%2FComponent-library%3Fnode-id%3D38345%253A39976" allowfullscreen></iframe>
</div>

### Responsive

Content sections follow a left-to-right reading order at all breakpoints.

- Subject content wraps depending on available space.
- Actions other than info and the expand/collapse toggle are within an overflow (ellipse) navigation for the medium breakpoint and down (< 768px).
- A download dropdown unfurls within the overflow navigation so that each option is its own item within the overflow.

<div class="figma-embed" aria-label="A layout with different sized overlays to indicate content spacing" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqEddyqCrI7kPSBjGmwkZzQ%2FComponent-library%3Fnode-id%3D38345%253A40168" allowfullscreen></iframe>
</div>

### Overflow

The expanded area under each level 1 has a maximum height with a subtle visual affordance that scrolling is necessary to view all of the level 2 and level 3 content.

<div class="figma-embed" aria-label="A layout with different sized overlays to indicate content spacing" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqEddyqCrI7kPSBjGmwkZzQ%2FComponent-library%3Fnode-id%3D38345%253A40424
" allowfullscreen></iframe>
</div>

1. The maximum height of the expanded level 2 and level 3 area is 170px. Scroll is set to overflow: auto.
1. A scrim visual indicator overlays the bottom of the scroll area when the content height excedes the maximun height. The scrim is hidden once the end of the scrolling content is reached.

## Hierarchy

In addition to external spacing being greater than internal spacing, widgets use progressive indentation to help establish hierarchy.

### Container

The container wraps one or more widgets.

- `1px` `$gray-100` inset border
- `$white` background
- `4px` border radius

<div class="figma-embed" aria-label="A grid layout of the merge request widget structure" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqEddyqCrI7kPSBjGmwkZzQ%2FComponent-library%3Fnode-id%3D38381%253A40790" allowfullscreen></iframe>
</div>

### Level 1

Level 1 is the parent level of the widget and has the primary status in text and icon form, as well as optional controls and actions that apply to the entire widget. The status icon is surrounded by a highlight to make it a stronger visual anchor while emphasizing the status. The primary status is determined by the widget's rules and influenced by level 2 statuses if present. Expand/collapse controls are only visible when this level contains children.

- Top border `1px` `$gray-100` for `n+1`
- `$white` background
- Collapsed by default
- Status icon: required

<div class="figma-embed" aria-label="A grid layout of the merge request widget structure" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqEddyqCrI7kPSBjGmwkZzQ%2FComponent-library%3Fnode-id%3D38381%253A40795" allowfullscreen></iframe>
</div>

### Level 2

Level 2 has a status that may be the same or different from the parent, as well as optional controls and actions that apply to itself. Its influence on the parent status will depend on the type of widget and the rules that are applicable. Likewise, its own status will be determined by applicable rules and influenced by level 3 status if present.

- Content indented and left-aligned to the level 1 subject.
- Full width `1px` `$gray-100` top border for `n+1`
- Top border inset (`16px` left and right padding) `1px` `$gray-100` for `n+1`
- `$gray-10` background
- Level 3 children are always visible
- Status icon: optional
- Actions: optional
- Section title and description: optional

<div class="figma-embed" aria-label="A grid layout of the merge request widget structure" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqEddyqCrI7kPSBjGmwkZzQ%2FComponent-library%3Fnode-id%3D38381%253A40828" allowfullscreen></iframe>
</div>

### Level 3

Level 3 has a status that may be the same or different from the level 2 parent. Its influence on the level 2 parent status will depend on the type of widget and the rules that are applicable.

- Content indented and left-aligned to the level 2 subject.
- `$gray-10` background
- Status icon: optional
- Actions: inline text links only
- Section title and description: optional

<div class="figma-embed" aria-label="A grid layout of the merge request widget structure" role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqEddyqCrI7kPSBjGmwkZzQ%2FComponent-library%3Fnode-id%3D38381%253A40923" allowfullscreen></iframe>
</div>

## Content sections

There are three content sections: status, subject, and actions.

### Status

Each widget has rules that determine its status. The icon at the top level of each widget reflects the highest severity, unless the highest nested severity doesn’t trigger a failure of the parent.

#### Level 1

- Failed
- Warning
- Success
- Neutral
- Loading

#### Level 2–3 general

- Failed
- Error
- Warning
- Notice
- Success
- Neutral

#### Level 2–3 severity

- Critical
- High
- Medium
- Low
- Info
- Unknown

### Subject

Since everything in a widget is technically content, identifying a specific _subject_ section allows us to focus on the text and meta information that identifies the item, what it means for a user, and how to remedy problems.

- Section title, description, and meta information are optional, but the main text is required.
- Subject can only be truncated on level 2 and 3 for the small breakpoint and down (< `576px`).
- Follow [Pajamas Voice and Tone](/content/voice-and-tone) guidelines for writing all text content.

IMG

1. **Section title and description** - groups level 2 and level 3 status items. A description must be preceeded by a title, but a title does not require a description.
1. **Text** - identifies the item, what it means for a user, and how to remedy problems. It can contain inline links and formatting to emphasize text.
1. **Meta** - suplemental text, links, and badges that add meaningful context to an item. Text can include formatting for emphasis.

### Actions

Actions are available for level 1 and level 2. By default, the **MR widget actions** component includes all the actions that are available, however, it is extremely unlikely that all would be present at once — show and hide actions as needed.

- Only level 1 can be expanded and collapsed.
- Level 3 can only have inline text links.
- All actions are optional with the exception of the expand/collapse toggle for a level 1 item with children.

IMG

1. **Info button** - provides suplemental information in a popover.
1. **Options button** - provides suplemental information in a popover. On hover/focus a tooltip reads “{widget} options”.
1. **Download dropdown** - ability to download assets related to the widget. On hover/focus a tooltip reads “{widget} downloads”.
1. **Tertiary button** - actions that can be taken on or from the widget, like “Manage licenses” or “View report”.
1. **Expand/collapse button** - toggles the visiblity of level 2 and level 3 items when present. On hover/focus a tooltip reads “Show {widget} details” when collapsed and “Hide {widget} details” when expanded.

## Accessibility

The following provides guidance on roles, keyboarding, and content for screen readers.

**Legend**

- Region
- Tab stop
- Screen reader
- Note

### Landmark

The widget area is an important enough section or a merge request page that it should be identified as its own region. The region contains the unordered list where each widget is a list item.

IMG

1. `<div role=“region” aria-label=”Merge request reports”>`

### Focus order

The focus order traverses focusable elements in the DOM in a left to right, top down order.

- `TAB` key moves through the list of interactive items in the order of the DOM.
- `ENTER` or `SPACE` key expands/collapses the mobile overflow dropdown.
- `ENTER` or `SPACE` key expands/collapses a level 1 item to reveal level 2–3 content.

### Screen reader

The following highlights element attributes and the general expectation of how they should be announced by a screen reader.

IMG

1. `aria-label=“{status} {widget}”`<br>
   SR: “{status} {widget}, image”
1. `aria-label=“{widget} information”`<br>
   `aria-describedby=“{popoverID}”`
   SR: “{widget} information, button, {popoverID content}”
1. `aria-label=“[widget} options”`<br>
   Collapsed: `aria-expanded=“false”` → Expanded: `aria-expanded=“true"`<br>
   `aria-haspopup=“true”`<br>
   `aria-controls=“{menuID}”`<br>
   SR collapsed: “{widget} options, collapsed, pop up button” → SR expanded: “{widget} options, expanded, pop up button”
1. Collapsed” `aria-label=“Show {widget} details”` → Expanded: `aria-label=“Hide {widget} details”`<br>
   Collapsed: `aria-expanded=“false”` → Expanded: `aria-expanded=“true”`<br>
   `aria-controls=“{nestedStatusID}”`<br>
   SR collapsed: “Show {widget} details, collapsed, button” → SR expanded: “Hide {widget} details, expanded, button”
1. `aria-label=“Downloads”`
   Collapsed: `aria-expanded=“false”` → Expanded: `aria-expanded=“true”`<br>
   `aria-haspopup=“true”`<br>
   `aria-controls=“{menuID}”`<br>
   SR collapsed: “Downloads, collapsed, pop up button” → SR expanded: “Downloads, expanded, pop up button”
1. `aria-label=“{status} {report}”`<br>
   SR: “{status} {report}, image”

### Notes

The widgets are organized in an unordered list, which has the benefit of providing hierarchy and a report count (number of list items) to screen reader users.

IMG

1. The widget group is wrapped in a `<div>` that functions as a [landmark](#landmark).
1. Each level is a `<ul>` with `<li>`s for individual reports. A title and description for a report are contained within that report’s `<li>`.
