---
name: Navigation
---

## Global navigation

The items in the header include a list of pages that allow you to view global content throughout GitLab. For example, you can view your todos, issues, and merge requests across projects and groups. You can also create new groups and projects, as well as search the application.

Todo: Add global navigation example

## Contextual navigation

The left-side sidebar consists of content that is contextual to each page. These options change depending on if you are looking at a project, group, or settings page. There can be up to two levels of navigation. Each sub nav group should be a self-contained group of functionality. For example, everything related to the issue tracker should be under the 'Issue' tab, while everything relating to the wiki will be grouped under the 'Wiki' tab. The names used for each section should be short and easy to remember, ideally 1-2 words in length.

### Behavior 

- On extra large viewports (`1200px` and up)

The user can choose to have the sidebar always collapsed or expanded. Each time they press the toggle button, a cookie is set to remember their preference.

Todo: Add global navigation example for extra large viewports (`1200px` and up)

- On medium and large viewports (`768px` to `1199px`)

There isn't enough room for the main page content to fit comfortably, so the sidebar is collapsed by default, regardless of the user's cookie preference. This is especially important when there is a right sidebar as well (for example, issue detail page) or when there is a lot of horizontal content (for example, pipelines table). When the user expands the sidebar, it overlaps the page instead of pushing the content. In these viewports, the toggle doesn't change the user's cookie, so their preference is only saved and used on extra large viewports.

Todo: Add global navigation example for medium and large viewports (`768px` to `1199px`)

- On small and extra small viewports (up to `767px`)

The sidebar is hidden behind a “hamburger” icon. When pressed, the sidebar is shown expanded, overlapping the page with a semi-transparent overlay. Like the previous point, this behavior is not affected by the user's cookie preference and doesn't change that preference.

Todo: Add global navigation example for small and extra small viewports (up to `767px`)

