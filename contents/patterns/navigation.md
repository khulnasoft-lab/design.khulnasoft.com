---
name: Navigation sidebar
---

The navigation namely refers to the persistent left sidebar where a user can access different sections of the application. Utilize the following resources for any change to this region:

- [How to propose a change to navigation](https://about.gitlab.com/handbook/product/ux/navigation/).
- [How to conduct user research of a proposed change to navigation](https://about.gitlab.com/handbook/product/ux/ux-research/evaluating-navigation/).

## Left sidebar

The left sidebar refers to the navigation that is contextual to each page. These options change depending on if you are looking at a project, a group, or a settings page. The names used for each navigation item should be short and easy to remember, ideally 1-2 words in length.

There are two levels of navigation: [top level](#top-level-menu-items) and a [submenu](#submenu-items).

### Top-level menu items

A top-level menu item is the first anchor that appears within the left sidebar. These items are used to display the most important functionality for that navigation category. A top-level menu item may contain related submenu items.

#### Messaging changes to users

Continuously improving the navigation ensures the best possible user experience. To minimize disruption and properly introduce users to changes, follow these guidelines.

Use these approaches based on item usage:

- **None required:** No in-app messaging is required if an item has less than 0.025% of clicks per active user per month.
- **Subsequent:** An in-app [toast](/components/toast) with a confirm action is required after moving a top-level menu item if that item has between 0.026%-0.099% of clicks per active user per month. The toast should appear after first navigating to a screen that includes the sidebar with the navigation change. After dismissal, the toast should not reappear even when navigating to a new group or project with the navigation change.
- **Advanced:** An advanced page-level info [alert](/components/alert) is required if an item has equal to or greater than 0.1% of clicks per active user per month. Advanced notice should be in place for at least one milestone.
- **Temporary opt-in:** If more than 5 top-level navigation items are being changed that have a combined 5% of clicks per active users per month, a temporary opt-in method should be provided for at least 2 milestones. Temporary opt-in provides time to communicate major navigation overhauls while also allowing a user to preview changes.

### Submenu items

Each submenu should be a self-contained group of functionality, for example:

- Items related to planning and managing issues should be under the `Issues` nav item.
- Viewing and editing pipelines should be under the `CI/CD` nav item.

The default active item should be the first submenu item.

In some cases, items within a submenu may change depending on the context, permissions, and roles. For example, the admin area may include more or less items under a top-level menu item than a group or project.

When this occurs, the top-level menu item should remain consistent, even if there is only one submenu item. The reason for top-level menu consistency is to reduce the cognitive effort needed from users to understand the navigation and task hierarchy. For example, we should not replace **CI/CD** with **Runners** or **Infrastructure** with **Terraform** as the top-level menu item in the sidebar.

### Behavior

- When navigating using the left sidebar, the sidebar always persists in order to maintain the user's context. The only exception to this rule is for integrations that utilize the [external link icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~external-link).
- A cookie is set to remember a user's preference between collapsed or expanded.
- For medium and large viewports, the left sidebar is collapsed. When expanded manually, it overlaps the page content. The user's cookie preference is not overridden during this state.
- For small and extra small viewports, the left sidebar is hidden behind a [sidebar icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~sidebar). When expanded, the sidebar overlaps the page and a semi-transparent overlay covers the page content. The user's cookie preference is not overridden during this state.

#### Breakpoints

- Extra large viewports: `1200px` and up
- Medium and large viewports: `768px` to `1199px`
- Small and extra small viewports: up to `767px`
