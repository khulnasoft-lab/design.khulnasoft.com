---
name: Progressive disclosure
related:
  - /usability/error-prevention
  - /usability/onboarding-users
  - accordion
  - button
  - modal
  - skeleton-loader
  - progress-bar
---

> Progressive disclosure defers advanced or rarely used features to a secondary screen, making applications easier to learn and less error-prone. –Jakob Nielsen, Nielsen Norman Group

Implementing progressive disclosure prevents users from becoming overwhelmed. Removing content may seem like the obvious choice, but it's not always possible. Using a trigger that reveals an object hidden from a user's view can reduce the amount of content on the page at one time without sacrificing features.

Displaying the key actions prominently reduces cognitive load while revealing additional information upon request. Keeping the interface simple allows users to focus their attention and aids [onboarding](onboarding-users).

### Best practices

**Distinguish between are the primary versus secondary features**

Determine which features are most important using a combination of available user research and usage data.

**Create clear trigger actions for secondary content**

Use an established call to action, such as links or [buttons](/components/button), that set the expectation for what to do next.

**Avoid multiple levels of disclosure**

If an interaction has three or more levels of disclosure, it could be a sign that the feature is too complex.

### Examples

- Adding items to the table by filling out a form in a [modal](/components/modal) or new page
- Displaying information in [accordions](/components/accordion)
- Hiding navigation items behind a hamburger menu
- Truncating content and previews
- Scrollable content for overflow content like tabs
- Using [skeleton loaders](/components/skeleton-loader) while lazy loading a page
- Step-by-step flows for complex scenarios

### Resources

- <a href="https://www.nngroup.com/articles/progressive-disclosure/">Nielsen Norman Group: Progressive disclosure</a>
