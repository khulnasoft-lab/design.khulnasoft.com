---
name: Badges
---

Badges highlight metadata of objects (e.g. issue status, user 2FA status, branch protection), the kind of information that wouldn't be useful on its own, that always needs some context.

Showing metadata does not require the use of badges, you can just use plain icons, text, or both. But if the metadata is worth highlighting or differentiating, badges can help.

Badges should not be confused with [labels](/components/labels). Labels also show object metadata, but they are much more specific in usage and scope — they are editable objects for users to manually categorize other objects, like issues, merge requests, and epics.  Other terms that are commonly used to refer to badges: counters, statuses, chips, tags, metadata, lozenges, pills, and bubbles.

## Usage

Information can be rendered in badges as icons, text, or both. If they only have an icon, provide a quick explanation for users in a [tooltip](/components/tooltips). As for text, they can not only contain words but also numbers, acting as a _counter_ (e.g. number badges in [tabs](/components/tabs)).

Badges should always be linked to the object they refer to unless the user is already seeing the most detailed state of that object (i.e. the object's detail page).

### Variations

Depending on the context and the value of the badge's information, some style attributes can be changed from the defaults:
* **Font weight**: Text is bold by default but some or all of it can be changed to regular weight.
* **Visual weight**: “Neutral secondary” is the default variation. Start with that and see if it works. If necessary, decrease or increase the visual weight of the badge by switching to “neutral tertiary” or “neutral primary” respectively. Be mindful of not attracting too much attention to the badge and prioritizing it over other surrounding elements.
* **Color**: They use the neutral color variations by default. If the badge's information is related to success, information, warning, or danger, it can adopt a more colorful variation. Color should be used with care and as a last resort for highlighting badges. Like the visual weight point before, start with the secondary color variation and be mindful when using the primary.

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

Todo: Add link of [Sketch Measure Preview for Badges](#)

## Related patterns

* [Labels](/components/labels)
