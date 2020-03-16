---
name: Empty States
vueComponents:
  - GlEmptyState
related: 
  - banner
  - button
  - illustration
---

An empty state is our way of communicating to the user that there is no content to load and what action they should take next. They are vital in making the experience feel more approachable and understandable.

## Usage

Empty states are composed of 3 elements: the illustration, description, and call to action.

**1\. Illustration**

The [illustration](#illustration) should compliment the need for the empty state. It’s optional, but strongly recommended to help the user understand the situation and add personality.`

**2\. Description**

A description includes a title and message, and should be clear, concise, and explain why the user is seeing this screen.
Occasionally, this can also include a [help link](/usability/helping-users) to provide supplemental information about the content.

**3\. Call to action**

The call to action takes the form of a primary button, with the option to add a secondary button. The label should be direct and actionable.

### When to use an empty state

Empty states can be employed to:

*   Make users aware that a feature is not configured for use.
*   Act as a placeholder for regions in the app left blank intentionally.
*   Convey an error state, which will depend on the nature of the error and should be used judiciously. An example of this would be a server response error, that is, 404 or 500.
*   Display empty search results.

Empty states differ from [banners](/components/banner) in that they are not intended to promote or advertise new features or functionality.

[See banners for more usage information](/components/banner)

## Demo

[[Example:empty-state-multiple-buttons]]

## Design specifications

### Illustration

[See illustration guidelines](/product-foundations/illustration) for design considerations, including style, size, and more.

### Fonts

*   Header title: UI H4 style
*   Description: UI paragraph style

### Description

Todo: Determine text alignment for description of empty states. [Issue gitlab-design#238](https://gitlab.com/gitlab-org/gitlab-design/issues/238)

### Call to action

*   The call to action [button](/components/button) in the empty state should be a primary button.
*   There is only one primary button since there can only be one primary button per form. If there is a need for more than one button, the other should be a secondary button.

[See buttons for more usage information](/components/button)

### Mobile

On mobile, the layout is same as the one on desktop. It only scales down the illustrations and changes the width of paragraph.

TODO: Add Sketch Measure Preview for empty states
