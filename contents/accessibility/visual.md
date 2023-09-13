---
name: Visual
---

**Principle**: Page elements are distinguishable, the flow is logical, and the content is adaptable.

Appearance and visual design aren't always subjective, and as it relates to accessibility there are many ways to measure the effectiveness of attributes like color, statefulness, hierarchy, and more.

**Sections**

- [Visual disabilities](#visual-disabilities)
- [Color](#color)
- [Page flow](#page-flow)
- [Resizing](#resizing)
- [Resources](#resources)

## Visual disabilities

To lay the groundwork for the following sections, it's important to understand that not everyone sees things the same way. This may seem obvious, but at the same time it means that we often neglect to go beyond our own experience when designing or evaluating design. We won't take a deep dive here, as others have done this quite well, but before proceeding take a few moments to familiarize yourself with visual disability and deficiency categories. This article, [Visual Disabilities](https://webaim.org/articles/visual/) from WebAIM is a great place to start.

## Color

In his article, [Automated Lies, with one line of code](https://karlgroves.com/automated-lies-with-one-line-of-code/), Karl Groves states that "By volume, insufficient color contrast is the most common accessibility issue on the Web." In addition to being one of the most common issues, it can be one of the most straightforward to address. But contrast is only aspect to cover, we also need to consider how color communicates meaning, and how a consistent use of color benefits accessibility.

### Contrast

An evaluation of color contrast includes the following:

- Text
- Images of text used as meaningful content
- Graphics used for interaction or as meaningful content (non-decorational)

For text, the contrast ratio to satisfy [WCAG 2.1 SC 1.4.3 Contrast (Minimum) (Level AA)(https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)] is a 4.5:1 ratio between text and background. Larger text (18pt and larger or 14pt bold and larger) only needs a 3:1 ratio between text and background, but we aim to satisfy the higher ratio for all text.

WCAG uses points instead of pixels when referencing text size, but helpfully notes in the [WCAG 2.1 Understanding Docs](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html#intent) that "The ratio between sizes in points and CSS pixels is 1pt = 1.333px, therefore 14pt and 18pt are equivalent to approximately 18.5px and 24px."

Graphics like icons, illustrations, charts, and other non-text interactive elements only need a 3:1 contrast ratio against the background or sibling elements to satisfy [WCAG 2.1 SC 1.4.11 Non-text Contrast (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html). Generally speaking, even though a graphic may be used as decoration, it should have enough contrast to be distinguished from surrounding content, and any meaningful details within a graphic should be distinguished from surrounding elements. Read the [data visualization color guidelines](/data-visualization/color) for more information about the use of color for data visualization.

In some instances, contrast must be checked in more than one way. Take a button for example, the button text must have at least a 4.5:1 contrast ratio with the button background at all states, and the button background should have at least a 3:1 contrast ratio with the background when the background is necessary for understanding the bounds of the control or to distinguish it from surrounding elements. Similarly, linked text that isn't underlined (or distinguished in a similar way) must have at least a 3:1 contrast ratio with surrounding text _and_ at least a 4.5:1 contrast ratio with the background.

Logos and text in logos are an exception to the contrast criteria, but when in our control we also aim for at least a 3:1 contrast ratio.

Contrast ratios can be calculated with everything from Figma plugins to browser developer tools, and native apps to web apps. There might be a little variance in exact ratios depending on the tool (some of which are listed in the [resources](#resources) below), but generally they all do a good job when provided the same data. Automated testing can also flag contrast issues, but they should be manually validated when possible.

### Meaning

Color doesn't always have to be associated with meaning, but when it is it can't be the only means of conveying the meaning. For example, a red border on an invalid form field is insufficient by itself to indicate an error, but if error text and even an error icon is present, then the red border isn't the only way the error is communicated. Likewise, an icon that only changes color to indicate a status is insufficient, but if the icon itself were to change, or it was paired with a clear text message, then color alone isn't being relied on. Not all users discern colors in the same way, so it's imperative that color is used to enhance meaning along with other elements.

 Refer to the [WCAG SC 1.4.1 Use of Color (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) docs for more information.

### Consistency

A consistent use of color will help a user identify interactive, status, or other feedback patterns across a site. For example, blue is used for interactive elements like buttons and links, while green is used when a task is successful.

### Expected results

- All text must have a contrast ratio of 4.5:1 or higher.
- All text states (hover, focus, and active) must have a 4.5:1 contrast ratio. The exception is disabled states, and for those we aim to have a contrast ratio of 3:1 even though as of WCAG 2.1 there isn't a specific criteria to satisfy.
- Even though logos don't need to meet the contrast ratio, they should have appropriate `alt` text. If possible though, it's better when a logo is legible and easily distinguished from its surroundings.
- Decorative text that conveys no information is excluded. For example, words that form a graphical pattern or that are part of a larger illustration where they are inconsequential.
- Color can not be the only attribute that conveys meaning.
- The [chromatic color palette](/product-foundations/color#chromatic-palette) is used consistently and aligns with prescribed meanings.

## Page flow

A page should have a logical flow that provides visual cues for hierarchy and content sectioning. The use of visual weight and spacing increases scannability and enhances relationships. As much as possible, the natural reading order and DOM order should align, which benefits a keyboard-only or screen reader user. Responsive behavior shouldn't alter the flow or hierarchy.

### Expected results

- Headings help logically structure a page by providing visual hierarchy and meaningful sections.
- The reading order is closely aligned with the DOM order. If there was no CSS or visual cues, would the content make sense in the current order?
- Dynamic content, like alerts, feedback, or loading states make sense in the page hierarchy and don't unnecessarily break the flow.
- Content reflows predictably when responsive.
- If text references other page elements based on location, it must make sense responsively. For example, if the text says "reference the status table to the right," but in a smaller viewport the table is below, then the text should be more general.

## Resizing

Text scaling is a capability that many users take advantage of either through browser or system settings. In fact, per [WCAG SC 1.4.4 Resize Text (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) a user should be able to resize text "up to 200 percent without loss of content or functionality." This doesn't apply to images of text or captions used as alternate media for video or audio.

### Expected results

- If a user updated a system setting to increase text size, all text content should be readable and available up to 200 percent. 
  - Text that truncates should still easily be available in it's full form regardless of modality (mouse, keyboard, touch).
  - Text should reflow appropriately and be legible, scrollable, and not have any loss in function or impede the legibility or function of other elements.
- System and browser settings are different, however, the above also applies when a user has updated browser settings to increase text or UI size up to 200 percent.
- The above is true regardless of translation.

## Resources

- [Supporting the Design Phase with Accessibility Heuristics Evaluations](https://www.deque.com/blog/supporting-the-design-phase-with-accessibility-heuristics-evaluations/) - Article from Denis Boudreau of Deque that outlines ten accessibility heuristics that can be applied during the design process along with a helpful checklist (PDF).
- [Colour Contrast Analyzer (CCA)](https://www.tpgi.com/color-contrast-checker/) - TPGi's free colour contrast checker app for Windows or Mac.
- [ColorSlurp](https://colorslurp.com/) - Color picker app with accessibility and palette features.
- [Link Contrast Checker](https://webaim.org/resources/linkcontrastchecker/) - A tool from WebAIM to check contrast between link color and surrounding text, and link color and background.
- [Axe for Designers](https://www.figma.com/community/plugin/1085612091163821851) - A Figma plugin from Deque to check contrast and more.
- [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/) - A color blindness simulator app for iOS and Mac.
- Additional resources can be found in the Color section of the [Accessibility Cache](https://jeldergl.gitlab.io/accessibility-cache/#color).
