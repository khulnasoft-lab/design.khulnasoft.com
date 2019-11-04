---
name: Accordion
related:
- modals
- tree
- tabs
---

Accordions are used to group similar content and hide or show it depending on user need or preference. Accordions give users more granular control over the interface and help digest content in stages, rather than all at once.

## Usage

Accordions are displayed vertically stacked. They always contain a header, an icon reflecting its current state (collapsed or expanded), and a clearly identifiable body.

### When to use accordions

* Displaying and regrouping additional information.
* Adding granular control over the information of a given page.
* Shortening pages and reduce scrolling.

### When not to use accordions

* Displaying critical system information or a primary action to be taken on the page. (e.g. Alerts, confirmation or cancellation buttons).
* Displaying navigation elements such as [tabs](/components/tabs).
* Display links pointing to sections of the same page, prefer a [list](components/list).
* Creating hierarchy levels by nesting them within each other. If you need to add hierarchy to the content prefer using a [tree](components/tree).

### Dos and Dont's

| Do | Don't |
| ------ | ------ |
| Use icons and animation to easily reflect collapsed and expanded state. | Leave the header without icon or use a [default buttons](/components/buttons) to trigger collapsible as they could be confound with call to actions or [dropdowns](/components/dropdowns). |
| Headers and icons should both trigger collapsed and expanded state. | Make the icon the only way to trigger collapsed and expanded states. | 
| Prefer using a [chevron](https://gitlab.com/gitlab-org/gitlab-svgs/blob/master/sprite_icons/chevron-right.svg) icon with the header. | Use an icon that can not reflect the transition like a [question mark](https://gitlab.com/gitlab-org/gitlab-svgs/blob/master/sprite_icons/question.svg). | 

### Specifications

#### Accordions anatomy

<figure class="figure" role="figure" aria-label="displaying the anatomy of accordions in its collapsed state, a simple representation of the component including an icon, a header and a body">
  <img class="figure-img" src="/img/components/accordions--anatomy.svg" alt="Accordions anatomy" role="img" />
  <figcaption class="figure-caption"></figcaption>
</figure>

#### Icon

The icon should always reflect the state of the accordion (expanded or collapsed) and be located before the header so users always clicks on the same spot to expand/collapse the accordions, which reduce cognitive load and speed up task completion time. 

Consider using the following 2 icons:

| Chevron | Plus |
| --- | --- |
| <figure class="figure" role="figure" aria-label="Chevron right icon used for accordions"><img class="figure-img" src="/img/components/accordion__icn-chevron-right.svg" alt="Chevron right icon" role="img" /><figcaption class="figure-caption">icn/chevron-right</figcaption></figure> | <figure class="figure" role="figure" aria-label="Plus icon used for accordions"><img class="figure-img" src="img/components/accordion__icn-plus.svg" alt="Plus icon" role="img" /><figcaption class="figure-caption">icn/plus</figcaption></figure> |

Prefer using a chevron icon when:

* The accordion body content is mainly textual. The affordance of the chevron better suits this case to signify related additional information can be found "under" the header.

Prefer using a plus icon when: 

* The accordion body content is a set of visual components following the same style, secondary functionalities, that do not prevent users to accomplish their task... In this case the plus icon would act as a visual signifier for adding extra content of the exact same type. (eg. a set of icons, avatars, secondary buttons...) 

#### Header

Just like [modals](/components/modals/), the header of an accordion could be a question or a title. Either way, headers should give context about the underlying content in a concise and actictionable way. Examples of headers can be "What can GitLab offer me?", or "More options".

#### Body

The accordion body should be differentiable visually from the rest of the page as it is a secondary type information and displayed below its header. Consider using spacing (margin/padding/hr) and/or hierarchy (font size, color) to structure the body content. Body content should directly relate to the header.(eg. Following the example above "What can GitLab offer me?" the content could be "GitLab helps organizations deliver better products faster, increase operational efficiencies, and reduce security and compliance risks...").

#### Interaction

Users should be able to expand and collapse the body by clicking or taping a single area containing the accordion header and icon.
In the case of a page layout built around several accordions following each other, changing one accordion state does not reflect on the other, each accordions would need to be expanded/collapsed individually by users. 

## Accessibility

Use proper semantic markup, so that users of screen readers are aware of the states of the accordion Expanded/Collapsed.

* The `aria-controls` attribute should be used to define the that header is acting as a trigger to reveal content (the accordion body).
* The `aria-expanded` attribute should be used to indicate the state of accordions.
* After a user expand/collapse the accordion, focus should remain on the area wrapping the header and the icon.
* The accordion should not rely on JavaScript to reveal the body content.

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
* [Viget - Testing Accordion Menu Designs & Iconography](https://www.viget.com/articles/testing-accordion-menu-designs-iconography/) 
