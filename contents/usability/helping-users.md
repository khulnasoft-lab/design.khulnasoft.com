---
name: Helping users
---

Help content should be used as a fallback to help users complete and better understand tasks, with the primary method of understanding being the UI itself. Embedding help content directly within the feature it serves is the best way to assist users who have hit a roadblock. Affordance is higher when help content is available in context.

Help comes in the form of various types of content designed to:

- Assist users unable to complete a task.
- Help users to understand a concept in more detail.
- Provide additional technical details not available in the UI.

## Formatting help content

If the most relevant information can be summarized succinctly, put the summary directly in the UI instead of using a Help link. However, you can use a Help link to provide supplemental information. Help links open up their page in a new tab.

Use a question to lead the user to helpful information.

- **Example:** User cohorts show how active users are in the last 12 months. [What kind of information is available?](#)

If a question doesn't make sense, use the sentence, "Learn more." Do not use "More information" or other phrases, and always use a period.

- **Example:** User cohorts show how active users are in the last 12 months. [Learn more.](#)

If no room is available for text, use the [question svg](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~question) (`#1068bf`) to link to the Help content. Use a tooltip to indicate the primary question answered by the help content.

Todo: Add live component block with code example

If the help content is outside of the GitLab instance (for example, content at about.gitlab.com), make that clear in the link text. Doing so helps make the result of the links predictable. This is often not possible due to space limitations. An external link icon can be added in place of more copy.

- **Example:** For more integrations, go to [GitLab’s website](#).

### UI text example code

When you link from the UI to the documentation, ensure the link opens in a new tab and has `aria-label` alt text. For example:

```shell
= link_to _('Learn more.'), help_page_path('user/project/repository/repository_mirroring', anchor: 'overwrite-diverged-branches'), target: '_blank', rel: 'noopener noreferrer', aria-label: _(Learn more about repository mirroring)
```

- This code makes the link open in a new tab: `target: '_blank', rel: 'noopener noreferrer'`
- This code adds text for screenreaders and does not need punctuation: `aria-label: _(Learn more about repository mirroring)`
  The `aria-label` is not required if the link text is a question like, "How do I use repository mirroring?"
