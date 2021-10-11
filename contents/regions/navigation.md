---
name: Navigation
---

Note: For guidance on how to propose a change to navigation menu items, see the [Navigation handbook page](https://about.gitlab.com/handbook/engineering/ux/navigation/).

## Top menu

The top menu refers to the top horizontal navigation. The items in the top menu include a list of pages that allow you to view global content throughout GitLab. For example, you can view your todos, issues, and merge requests across projects and groups. You can also create new groups and projects, as well as search the application. 

The top menu navigation items are replaced by exit links during scenarios that have a business impact. This includes signing up, purchasing a subscription, and starting a trial. By doing so, we facilitate task completion and reduce user errors, such as accidentally navigating away.

Todo: Add top menu example

### GitLab Start Page
The GitLab Start Page is the page users see at the top level of GitLab.com or their instance, and it's where users are directed after logging in. This page is considered navigation, as it is meant to help users orient themselves upon logging in. Currently this page is configurable in User Settings.

### User settings menu
The user settings menu is the rightmost menu which contains items related to the logged-in user.

### Help menu
The help menu is the dropdown with the question mark icon and contains links to docs and support. 

## Left sidebar

The left sidebar refers to the navigation that is contextual to each page. These options change depending on if you are looking at a project, a group, or a settings page. The names used for each nav item should be short and easy to remember, ideally 1-2 words in length. There can be up to two levels of navigation: top-level menu items and a sub-nav group. 

### Top-level menu items

A top-level menu item is the first anchor that appears within the left sidebar. These pages are used to display the most important functionality for that navigation category. A top-level menu item may contain a sub-nav group with multiple related items in it.

#### Additions

Proposing new top-level menu items follows the [process outlined in the handbook](https://about.gitlab.com/handbook/engineering/ux/navigation/). New additions are very deliberate and are made to optimize user workflows. Proposals should include data that supports it as key/foundational functionality within our DevOps platform.

We do not add new top-level menu items in order to:

- Improve discoverability of new features. Instead, look for other opportunities to highlight the functionality throughout the product.
- Optimize for the potential future. We should be forward thinking without over optimizing. As features are developed and added, we can look into what changes may need to occur to support a growing feature.

#### Messaging changes to users

Continuously improving the navigation ensures the best possible user experience. To minimize disruption and properly introduce users to changes, follow these guidelines.

Use these approaches based on item usage:

- **None required:** No in-app messaging is required if an item has less than 0.025% of clicks per active user per month.
- **Subsequent:** An in-app [toast](/components/toast) with a confirm action is required after moving a top-level menu item if that item has between 0.026%-0.099% of clicks per active user per month. The toast should appear after first navigating to a screen that includes the sidebar with the navigation change. After dismissal, the toast should not reappear even when navigating to a new group or project with the navigation change.
- **Advanced:** An advanced page-level info [alert](/components/alert) is required if an item has equal to or greater than 0.1% of clicks per active user per month. Advanced notice should be in place for at least one milestone.
- **Temporary opt-in:** If more than 5 top-level navigation items are being changed that have a combined 5% of clicks per active users per month, a temporary opt-in method should be provided for at least 2 milestones. Temporary opt-in provides time to communicate major navigation overhauls while also allowing a user to preview changes.

Consider the following for all top-level menu item changes:

- All changes should be included in the release post.
- A [canary rollout](https://docs.gitlab.com/ee/user/project/canary_deployments.html) may be used to slowly roll out changes to users and get their feedback before releasing to all users.
- Documentation should always be updated in the first release the change is introduced. For canary rollouts, the change may not be available to everyone at the same time and this can be specified in the docs using the following:

> This change is being rolled out incrementally to a subset of the user base. Therefore, this change may not be available to you until it is fully enabled for all users.
#### Sub-nav groups

Each sub-nav group should be a self-contained group of functionality, for example:

- Items related to planning and managing issues should be under the `Issues` nav item.
- Viewing and editing pipelines should be under the `CI/CD` nav item.

The default active item should be the first sub-nav group item.

In some cases, items within a sub-nav group may change depending on the context, permissions, and roles. For example, the admin area may include more or less items under a top-level menu item than a group or project. 

When this occurs, the top-level menu item should remain consistent, even if there is only one sub-menu item. The reason for top-level menu consistency is to reduce the cognitive effort needed from users to understand the navigation and task hierarchy. For example, we should not replace **CI/CD** with **Runners** or **Infrastructure** with **Terraform** as the top-level menu item in the sidebar.

### Behavior

- A cookie is set to remember a user's preference between collapsed or expanded.
- For medium and large viewports, the left sidebar is collapsed. When expanded manually, it overlaps the page content. The user's cookie preference is not overridden during this state.
- For small and extra small viewports, the left sidebar is hidden behind a "hamburger" icon. When expanded, the sidebar overlaps the page and a semi-transparent overlay covers the page content. The user's cookie preference is not overridden during this state.

#### Breakpoints

- Extra large viewports: `1200px` and up
- Medium and large viewports: `768px` to `1199px`
- Small and extra small viewports: up to `767px`
