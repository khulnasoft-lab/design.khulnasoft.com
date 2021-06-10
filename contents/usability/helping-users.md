---
name: Helping users
---

Help content should be used as a fallback to help users complete and better understand tasks, with the primary method of understanding being the UI itself. Embedding help content directly within the feature it serves is the best way to assist users who have hit a roadblock. Affordance is higher when help content is available in context.

Help comes in the form of various types of content designed to:

- Assist users unable to complete a task.
- Help users to understand a concept in more detail.
- Provide additional technical details not available in the UI.

## Formatting help content

If the most relevant information can be summarized succinctly, put the summary directly in the UI. However, you can utilize other components to provide supplemental information to keep the layout concise. 

All help links should open in a new window. Doing so helps make the result of the links predictable.

If the help content is outside of the GitLab instance (for example, content at about.gitlab.com), make that clear in the link text.

- **Example:** For more integrations, go to [GitLab’s website](#).
- An external link icon can be added in place of more copy if space is tight.

Use a question to lead the user to helpful information.

- **Example:** User cohorts show how active users are in the last 12 months. [What kind of information is available?](#)

If a question doesn't make sense, use the sentence, "Learn more." Do not use "More information" or other phrases, and always use a period.

- **Example:** User cohorts show how active users are in the last 12 months. [Learn more.](#)

Use the help icon ([question-o.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question-o)) to prevent users from needing to navigate away from their task.

| Do | Don't |
| :-: | :-: |
| <div class="app-styles"><gl-icon name="question-o" class="gl-text-blue-600" /></div>Use the outlined [question-o.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question-o) icon in `$blue-600` (`#1078bf`) | <div class="app-styles"><gl-icon name="question" size="16" /></div>Use the solid icon [question.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question) or a color other than blue | 
| <figure class="figure" role="figure" aria-label="Popover with link to documentation"><img class="figure-img" src="/img/help-popover-with-link.png" alt="Popover with link to documentation" role="img" style="max-width: 280px;" /><figcaption class="figure-caption" style="font-size: 16px;">Show information in the popover with a link to docs</figcaption></figure> | <figure class="figure" role="figure" aria-label="Popover with link to documentation"><img class="figure-img" src="/img/help-tooltip.png" alt="Popover with link to documentation" role="img" style="max-width: 280px;" /><figcaption class="figure-caption" style="font-size: 16px;">Use the icon as a link or with a tooltip|
