---
name: Best practices
---

If reviewing a merge request, take a few moments to review the following:
* All actions and functionality can be done with a [keyboard](https://design.gitlab.com/accessibility-audits/2-keyboard-only).
* Links, buttons, and controls have a visible [focus state](https://design.gitlab.com/accessibility-audits/2-keyboard-only#focus-states).
* All content is presented in text or with a text equivalent. For example, alt text for SVG, or `aria-label` for icons that have meaning or perform actions.
* Changes in a component’s state are announced by a screen reader. For example, changing `aria-expanded="false"` to `aria-expanded="true"` when an accordion is expanded.
* Color combinations have [sufficient contrast](https://design.gitlab.com/product-foundations/colors#accessibility).

