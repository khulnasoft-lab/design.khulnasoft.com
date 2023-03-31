---
name: Release process
---

The Pajamas UI Kit will have a new release (version) published at the end of each milestone. At the moment there's no formal version numbering.

- At minimum, a text release post (format TBD) will be published to document the changes that happened during the milestone.
- When possible, a video will accompany the release to highlight any changes, demonstrate how to triage impact, and how to work with new features.
- New .fig files will be saved and updated in the [ui-kit](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/ui-kit) folder of the repo. These leverage the git history to track versions.
- The [version history](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history) of a Figma file summarizes all changes along with notes on [breaking changes](/devops/breaking-changes). Figma will automatically update the history with:
  - Autosaved versions
  - Merged branches
  - Created branches
  - Branch updates from main
  - It's also possible to manually [add a new version](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history#Create_a_new_version) that includes a title and description. This can be done to intentionally create a version to track specific changes to a component or styles.
- We favor continuous delivery, so bug fixes, patches, and other minor updates that don’t include breaking changes can be published at any time during the milestone, including to the [community page](https://www.figma.com/@GitLabDesign) if necessary. They will also be mentioned in release notes.
- Changes within files that don't impact components or styles, like updating an instance, are immediately available in the file.

## Publishing

Figma library updates are published by a [Figma maintainer](https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com_maintainers_Figma), regardless of how minor. To support our [transparency value](https://about.gitlab.com/handbook/values/#transparency), follow these best practices:

- Changes should be reviewed by another designer in a branch or draft before a Maintainer adds it to the Pajamas UI Kit file.
- Use dashes to list changes in the publish description.
- Files that are also published to the community follow the same release cadence and can be published to the community after publishing library updates for the organization.
