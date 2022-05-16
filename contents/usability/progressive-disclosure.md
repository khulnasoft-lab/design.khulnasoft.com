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

Progressive disclosure prevents users from becoming overwhelmed when there is a large amount of content to consume. By using a trigger to reveal an object hidden from view, it can reduce the amount of content on the page at any one time without sacrificing features.

When employing progressive disclosure, display the key actions prominently to reduce cognitive load, and reveal additional information only upon request. Keeping the interface simple in this way allows users to focus their attention, and also helps with new user [onboarding](onboarding-users).

## Best practices

- Clearly distinguish between the primary and secondary actions. Determine which actions are most important using a combination of available user research and usage data.
- Create clear trigger actions for secondary content. Use an established call to action, such as links or [buttons](/components/button), that set the expectation for what to do next.
- Avoid multiple levels of disclosure. If an interaction has three or more levels of disclosure, it could be a sign that the feature is too complex.

## Examples

- Adding items to a table by filling out a form in a [modal](/components/modal) or new page
- Displaying information in [accordions](/components/accordion)
- Hiding navigation items behind a hamburger menu
- Truncating content and previews
- Enabling scrolling for overflow content 
- Using [skeleton loaders](/components/skeleton-loader) while lazy loading a page
- Introducing step-by-step flows for complex scenarios

## Resources

- <a href="https://www.nngroup.com/articles/progressive-disclosure/">Nielsen Norman Group: Progressive disclosure</a>
