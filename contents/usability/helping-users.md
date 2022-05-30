---
name: Helping users
related:
  - tooltip
  - popover
  - drawer
---

Help content should be used as a fallback to help users complete and better understand tasks, with the primary method of understanding being the UI itself. Embedding help content directly within the feature it serves is the best way to assist users who have hit a roadblock. Affordance is higher when help content is available in context.

Help comes in the form of various types of content designed to:

- Assist users unable to complete a task.
- Help users to understand a concept in more detail.
- Provide additional technical details not available in the UI.

## Formatting help content

If the most relevant information can be summarized succinctly, put the summary directly in the UI instead of using a help link. However, you can use a help link to provide supplemental information. 

Help links open in a new tab. Doing so makes the result of clicking the links predictable and prevents users from needing to immediately navigate away from their task.

To learn how to link to GitLab docs in various programming languages, see [Linking to /help](https://docs.gitlab.com/ee/development/documentation/#linking-to-help).

### Phrase link text as a question

Try phrasing the link as the question that will be answered by the linked content.

- **Example:** A merge request approval is required when a security report contains a new vulnerability of high, critical, or unknown severity. [Who can approve?](#)

### Learn more

If a question doesn't make sense, use the sentence, "Learn more." Do not use "More information" or other phrases, and always use a period.
Add an [aria-label](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8) with a full-sentence description for screen reader users.

- **Example:** Approve a merge request. [Learn more.](#)
- Make sure the period is part of the link text.

### External links

If the help content is outside of the GitLab instance (for example, content at about.gitlab.com), make that clear in the link text.

- **Example:** For more integrations, go to [GitLab’s website](#).
- An external link icon can be added in place of more copy if space is tight.

### Help icon

If that's not possible and space is tight, use the [help icon](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question-o) that, when hovered or focused on, shows the summary in a [popover](/components/popover). The popover title should be the question that is answered by the summary. A “Learn more” link can be added to the popover to associate additional, relevant information.

| Do | Don't |
| :-: | :-: |
| <div class="app-styles"><gl-icon name="question-o" class="gl-text-blue-600" /></div>Use the outlined [question-o.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question-o) icon in `$blue-600` (`#1068bf`) | <div class="app-styles"><gl-icon name="question" size="16" /></div>Use the solid icon [question.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question) or a color other than blue | 
| <figure class="figure" role="figure" aria-label="Popover with link to documentation"><img class="figure-img" src="/img/help-popover-with-link.png" alt="Popover with link to documentation" role="img" style="max-width: 280px;" /><figcaption class="figure-caption" style="font-size: 16px;">Show information in the popover with a link to documentation</figcaption></figure> | <figure class="figure" role="figure" aria-label="Popover with link to documentation"><img class="figure-img" src="/img/help-tooltip.png" alt="Popover with link to documentation" role="img" style="max-width: 280px;" /><figcaption class="figure-caption" style="font-size: 16px;">Use the icon as a link or with a tooltip|

## Providing reference information

In some cases users might need to reference additional information for completing a task in the UI. When the content length allows, we can surface such information using the [drawer](/components/drawer) component.

### When to use a drawer

- When the help information is supplemental and not critical to the completion of a task.
- When we expect the user to reference that information while performing tasks in the UI.
- When the content is too long to show in a tooltip or popover.
- When the content is short enough to comfortably read in the drawer.

### When not to use a drawer

- When help content is a necessary part of the flow for completing a specific task, consider using a [modal](/components/modal) instead.
- When help content is short enough, consider using a [popover](/components/popover) and/or linking to the documentation instead.

### Content guidelines

Drawer content should always be related to a specific context or task in the UI. The drawer header should reflect the context or task the user is performing.

Drawer content is stored as Markdown in the GitLab repository `/doc` directory, rather than hard-coded in the product code. The drawer content is either:

- Pulled directly from the GitLab documentation, in which case it will be visible in the UI and on `docs.gitlab.com`.
- Displayed only in the drawer. In this case, the content is stored in the `/doc/drawers` folder and is not displayed on `docs.gitlab.com`.

[This merge request](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/82516) shows an example of how to pull docs content into a drawer.

When the content can be pulled into the drawer from documentation without hurting the legibility of content, then pull it directly from the documentation. When content is too long or is formatted in a way that hurts the legibility of content, then customize the content and store it in a markdown file.

When writing custom content, use the [documentation topic types guidelines](https://docs.gitlab.com/ee/development/documentation/structure.html) and general [drawer content guidelines](/components/drawer/#content). You should collaborate with a technical writer when defining the content, and a technical writer review is required on related merge requests.

### Linking to documentation in help drawers

Links to the documentation should be used sparingly since our goal is to present the necessary reference information in the UI. If you need to link to additional documentation, add one link at the end of the drawer content so users can learn more if they found the drawer content insufficient.

### Localization of Help Drawer content

It's not required to localize the help drawer content.

### Help Drawer behavior

For general guidelines follow the [drawer behavior documentation.](components/drawer/#behavior) 

- Help drawer trigger should be specific to the content of the drawer. For example, a "Syntax options" link opens a help drawer with syntax options documentation.
