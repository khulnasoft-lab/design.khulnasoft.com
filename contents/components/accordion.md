---
name: Accordion
related:
- modals
- tree
- tabs
---

Accordions are used to group similar content and hide or show it depending on user need or preference. Accordions give users more granular control over the interface and help them digest content in stages, rather than all at once.

## Usage

Accordions are displayed vertically stacked. They always contain a header, an icon reflecting its current state (collapsed or expanded), and a clearly identifiable body.

### When to use accordions

* To display and regroup additional information
* To add granular control over the information of a given page  
* To shorten pages and reduce scrolling

### When not to use accordions

* To display critical system information or primary action to be taken on the page.(eg.alerts, confirmation/cancellation buttons).
* To display navigation elements such as [tabs](/components/tabs).
* To display links pointing to sections of the same page, prefer a [list](components/list).
* To create hierarchy levels by nesting them within each other, if you need to add hierarchy to the content prefer using a [tree](components/tree).

### Dos and Dont's

| Do | Don't |
| ------ | ------ |
| Use icons and animation to easily reflects collapsed and expanded state. | Leave the header without icon or use a [default buttons](/components/buttons) to trigger collapsible as they could be confound with call to actions or [dropdowns](/components/dropdowns). |
| Headers and icons should both trigger collapsed and expanded state. | Make the icon the only way to trigger collapsed and expanded states. | 
| Prefer using a [chevron](https://gitlab.com/gitlab-org/gitlab-svgs/blob/master/sprite_icons/chevron-right.svg) icon with the header. | Use a icon that can not reflect the transition like a [question mark](https://gitlab.com/gitlab-org/gitlab-svgs/blob/master/sprite_icons/question.svg). | 

### Specifications

#### Icon

The icon should always reflect the state of the accordion (expanded or collapsed), and be located before the header so users always clicks on the same spot to expand/collapse the accordions through the icon.

#### Header

Just like [modals](/components/modals/), the header of an accordion could be a question or a title. Either way, headers should give context about the underlying content in a concise and actictionable way. Examples of headers can be "What can GitLab offer me?", or "More options".

#### Body

The accordion body should stand out from the rest of the page and be directly linked to the header.

#### Interaction

Users should be able to expand and collapse the body by clicking a single area that contains the accordion header and icon.

## Demo

Todo: Add live component block with code example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

TODO: Add Sketch Measure Preview for Accordion

## Animation specifications

Todo: Add animation specifications

## Resources

* [NN/G: Progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
* [Smashing Magazine - Designing The Perfect Accordion](https://www.smashingmagazine.com/2017/06/designing-perfect-accordion-checklist/#top)
* [NN/G:Accordions Are Not Always the Answer for Complex Content on Desktops](https://www.nngroup.com/articles/accordions-complex-content/)
