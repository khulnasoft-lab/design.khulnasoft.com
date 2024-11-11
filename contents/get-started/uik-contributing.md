---
name: Contributing
---

This guide explains how to contribute changes to the [Pajamas UI Kit libraries](/get-started/uik-file-structure).

### Before You Start

1. Check the [issue tracker](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues) to see if your proposed change already has an issue.
1. If no issue exists, create one using the `Figma update` template. This template provides a helpful checklist to guide your work.
1. Create a new branch in the Figma library. Include the issue number in your branch name.
1. Refer to the [component guidelines](/get-started/uik-components) while working.

### Submitting your changes for review

Once you've completed your changes and the checklist from the `Figma update` template, create a merge request:

1. While on your branch in Figma, click the dropdown menu next to the file name.
1. Select "Review and merge changes".
1. Add a [Figma maintainer](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/.gitlab/CODEOWNERS#L18) as your reviewer.
1. Click "Request review".
1. Write a merge description in the modal that appears (see format below).
1. Add a comment in Figma with:
   - Any additional context the reviewer should know.
   - A link to the related issue.

### Writing merge descriptions

Merge descriptions from Figma are used to automatically generate [release notes](https://design.gitlab.com/get-started/uik-release-notes). Follow these guidelines:

#### Format rules

- Start each line with a hyphen (-)
- Begin with one of these verbs: "Adds", "Enhances", "Changes", "Removes", "Fixes", or "Deprecates"
- Be clear and concise

#### Examples

Do:

```markdown
- Adds multiple-choice icon
```

Don't:

```markdown
- Hey can you take a look at this? I added a new icon
```

#### Multiple-line merge descriptions

You can add additional details after the first line. Subsequent lines don't need to start with action verbs:

```markdown
- Removes header property from Modal
- Header property is not optional in GitLab UI
- Updates instances to have realistic content
```
