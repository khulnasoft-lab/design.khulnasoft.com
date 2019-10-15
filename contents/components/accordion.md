---
name: Accordion
related:
- modals
- tree
- tabs
---

Accordions are used to regroup a set of specialized content and deliver it on users demand. Accordions give users more granular control over the interface and help them comprehend larger content into smaller digestible parts.

## Usage

Accordions are displayed vertically stacked. They always contain a header, an icon reflecting its current state (collapsed or expanded), and a clearly identifiable body.

### Dos and Dont's

| Do | Don't |
| ------ | ------ |
| Use icons and animation that easily reflects Collapsed and Expanded state. (eg. chevrons, plus signs) as long as they are not conflicting with other elements.(eg. dropdown arrow). | Do not hide critical system information under accordions, or primary action to be taken on the page.(eg.alerts, confirmation/cancellation buttons). |
| Headers and icons should both be trigger of the state, if the header is used as a block or container, then the whole should be actionable. | Do not hide navigational elements such as [tabs](https://design.gitlab.com/components/tabs)or links pointing to sections of the same page. | 
| If several accordions are used within a page, try to order them logically, according to the type of content they each possess.(eg.FAQ section). | Don't use default [buttons](https://design.gitlab.com/components/buttons) to trigger collapsible as they could be confound with call to actions or [dropdowns](https://design.gitlab.com/components/dropdowns). | 

### Specifications

#### Header

Just like [modals](/components/modals/), the header of an accordion could be a question or a title. Either way, headers should give context about the underlying content in a concise and actictionable way. Examples of headers can be "What can GitLab offer me?", or "More options".

#### Icon

The icon should always reflect the state of the accordion (expanded or collapsed), and be located as close as possible to the header.

#### Body

The body should stand out from the rest of the page and be directly linked to the Header.

#### Interaction

Users should be able to expand and collapse the content by clicking a single area, wrapping the header and the icon.

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
