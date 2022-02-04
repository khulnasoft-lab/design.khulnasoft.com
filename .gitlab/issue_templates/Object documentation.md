<!--
Thanks for your interest in contributing to Pajamas!

This issue template is for changes or additions to an object documentation, such as their documentation page, the conceptual model, or their semantic layout. Learn more about objects in https://design.gitlab.com/objects/overview

Follow the checklist at the bottom of this template to use it appropriately.
-->

### Description

<!-- Add a short description of your contribution. Why are those changes or additions necessary? Consider adding a task list that details the changes you are aiming to make, such as specific modifications in Figma or in the object documentation page.-->

### Figma file

<!-- Before pasting the link to your Figma file/frame, in the file sharing settings, make sure that “anyone with the link” can view or that a specific user has been invited to the file. -->

[View working file in Figma →](ADD LINK TO FIGMA FILE/FRAME)

### Checklist

Make sure the following are completed before closing the issue:

1. [ ] **Assignee**: Identify the necessary updates or additions, and define a clear scope of your contribution in the “Description” section above. For example: “This issue will document a new User object in Figma and add the User object documentation to Pajamas.” Learn more about objects in the [object overview page](https://design.gitlab.com/objects/overview).
1. [ ] **Assignee**: Change or add an object's **conceptual model**.
   1. [ ] [Create a branch in Figma](https://www.figma.com/best-practices/branching-in-figma/) from the [Conceptual model file](https://www.figma.com/file/J68bePHXIN5OPWqaFFY9ri/Conceptual-model?node-id=5422%3A470), and add the issue/MR number to the new branch name. That new branch is your “working file”.
    - [ ] Follow the existing product data structure as closely as possible. The [GitLab API documentation](https://docs.gitlab.com/ee/api/) is a good starting point to identify the existing objects, their attributes, actions and relationships. 
    - [ ] Study the UI layouts that represent the object and it's attributes, actions and relationships to inform your diagram. However, be careful to keep the object model UI-agnostic. Sometimes an attribute that seems directly related to your object in the UI is inherited from a different object. 
    - [ ] Use [the existing file components](https://www.figma.com/file/J68bePHXIN5OPWqaFFY9ri/branch/bMpqqGQtDoPqty4sAFPUsy/Conceptual-model?node-id=5423%3A453) to map out the object diagram.
    - [ ] It's recommended to gather feedback from the engineers, product manager or technical writing who might point out any inconsistencies in your object digram as it relates to the existing data structure. 
1. [ ] **Assignee**: When adding or updating an object, its semantic layout might need to be added or updated in the [Semantic Layouts Figma File](https://www.figma.com/file/shVF8UZwrQtkNfMDjcrsyH/Semantic-layouts?node-id=1%3A79). Create a branch in Figma from the [Semantic Layouts Figma File](https://www.figma.com/file/shVF8UZwrQtkNfMDjcrsyH/Semantic-layouts?node-id=1%3A79) (this file on the new branch is considered the “working file”). 
    - [ ] Map out the primary layout for the object you're adding or updating. View [Layouts](https://design.gitlab.com/objects/overview#layouts) for more information.
1. [ ] **Assignee**: Update the link to the working file or files in the issue 
   description.
1. [ ] **Assignee**: Ask a [FE/UX Foundations designer][foundations-team]
   to review your object model (ensure they have edit permissions in Figma).
1. [ ] **Reviewer**: Review and approve assignee’s design. Specific object 
   questions can be addressed with comments in Figma. Comment in this issue when the content is less specific to the object or requires greater visibility.
1. [ ] **Reviewer**: Assign to a [Figma maintainer][figma-maintainer]
   for final review (make sure they have edit permissions in Figma).
1. [ ] **Maintainer**: Review and approve assignee’s changes.
1. [ ] **Maintainer**: Merge the branch or add the changes or additions to the
   target file.
     1. [ ] Ensure that all styles and components now belong to the target file.
1. [ ] **Maintainer**: When applicable, [publish][publishing] any library 
   changes along with a clear commit message.
1. [ ] **Assignee** (or Maintainer, for community contributions): If it’s a new
   object or a significant change, add an agenda item to the next UX weekly call to inform the team.
1. [ ] **Assignee**: When applicable, create an MR to create or update the object’s documentation page. If you do not have the capacity, create an issue in this repository using the "Object documentation" issue template. Bring the issue to your team planning session for prioritization and scheduling. Mark the new issue as related to this one.
1. [ ] **Assignee**: 🎉 Congrats, you made it! You can now close this issue.

/label ~"UX" ~"Figma"

[foundations-team]: https://about.gitlab.com/company/team/?department=fe-ux-foundations-team
[figma-maintainer]: https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com
[publishing]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/pajamas-ui-kit.md#publishing-changes
