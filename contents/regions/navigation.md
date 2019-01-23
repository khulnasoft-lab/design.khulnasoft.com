---
name: Navigation
---

## Global navigation

The items in the header include a list of pages that allow you to view global content throughout GitLab. For example, you can view your todos, issues, and merge requests across projects and groups. You can also create new groups and projects, as well as search the application.

Add global navigation example

## Contextual navigation

The left-side sidebar consists of content that is contextual to each apge. These options change depending on if you are looking at a project, group, or settings page. There can be up to two levels of navigation. Each sub nav group should be a self-contained group of functionality. For example, everything related to the issue tracker should be under the 'Issue' tab, while everything relating to the wiki will be grouped under the 'Wiki' tab. The names used for each section should be short and easy to remember, ideally 1-2 words in length.

### Behavior 

- On a large viewports (`1200px` and up)

    You can choose to have the sidebar always displayed, or always collapsed. Each time you click the collapse/expand button, a cookie is set to remember your choice.

- On a small & medium viewports (`768px` - `1199px`)

    There is no longer enough room for the main page content to fit comfortably, so the sidebar collapses, regardless of your cookie preference (this was especially important for pages that have a right sidebar as well, like the issue page or MR page, or pages where we have a lot of horizontal content, like the CI tables). When you toggle the sidebar to see all the text, it will overlap the screen instead of pushing the content. In this state, the button no longer sets/unsets the cookie, so when you expand the screen once more, your preference should still be saved (for example, the sidebar should go full-width again if that's what you originally had it on)

- On extra small viewports (up to `767px`)

    The mobile sidebar is enabled, which always overlaps the content, adds the semi-transparent overlay, and always displays the full sidebar, again regardless of whether you have the collapsed version set as your preference.