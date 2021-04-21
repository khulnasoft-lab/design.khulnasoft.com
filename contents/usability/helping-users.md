---
name: Helping users
---

Help content should be used as a fallback to help users complete and better understand tasks, with the primary method of understanding being the UI itself. Embedding help content directly within the feature it serves is the best way to assist users who have hit a roadblock. Affordance is higher when help content is available in context.

Help comes in the form of various types of content designed to:

- Assist users unable to complete a task.
- Help users to understand a concept in more detail.
- Provide additional technical details not available in the UI.

## Formatting help content

If the most relevant information can be summarized succinctly, put the summary directly in the UI instead of using a link. However, you can use a informational link "i" to provide supplemental information through a tooltip or popover ([when not to use tooltips](https://design.gitlab.com/components/tooltip#when-not-to-use-tooltips)), while help links "?" should awlays open their page in a new tab.

Use a question to lead the user to helpful information.

- **Example:** User cohorts show how active users are in the last 12 months. [What kind of information is available?](#)

If a question doesn't make sense, use the sentence, "Learn more." Do not use "More information" or other phrases, and always use a period.

- **Example:** User cohorts show how active users are in the last 12 months. [Learn more.](#)

If no room is available for text, then use an icon. The "?" icon should be used to direct users to the docs, while the "i" is reserved for presenting details through a tooltip or popover that are not directly exposed in the UI.


| Do | Don't |
| :-: | :-: |
| <div class="app-styles"><gl-icon name="question-o" class="gl-text-blue-600" /></div>Use the outlined [question-o.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question-o) icon in `$blue-600` (`#1078bf`) | <div class="app-styles"><gl-icon name="question" /></div>Use the solid icon [question.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question) or a color other than blue |
| <figure class="figure" role="figure" aria-label="Info icon with popover"><img class="figure-img" src="/img/info-popover.png" alt="Info icon with popover" role="img" style="max-width: 280px;" /><figcaption class="figure-caption">Use [information-o.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~information-o) with a tooltip or popover</figcaption></figure> | <figure class="figure" role="figure" aria-label="Help icon with popover"><img class="figure-img" src="/img/help-popover.png" alt="Help icon with popover" role="img" style="max-width: 280px;" /><figcaption class="figure-caption">Use the [question-o.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question-o) instead</figcaption></figure> |
| <figure class="figure" role="figure" aria-label="Info icon with popover and help link"><img class="figure-img" src="/img/info-popover-with-help.png" alt="Info icon with popover and help link" role="img" style="max-width: 280px;" /><figcaption class="figure-caption">Use a link to direct users to more help</figcaption></figure> | <figure class="figure" role="figure" aria-label="Help icon next to info"><img class="figure-img" src="/img/info-popover-without-help.png" alt="Help icon next to info" role="img" style="max-width: 280px;" /><figcaption class="figure-caption">Have the information and question icon side-by-side</figcaption></figure> |

Todo: Add live component block with code example

If the help content is outside of the GitLab instance (for example, content at about.gitlab.com), make that clear in the link text. Doing so helps make the result of the links predictable. This is often not possible due to space limitations. An external link icon can be added in place of more copy.

- **Example:** For more integrations, go to [GitLab’s website](#).
