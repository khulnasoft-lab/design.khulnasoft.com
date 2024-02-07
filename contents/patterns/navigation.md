---
name: Navigation
---

Users rely on the navigation to move around and orient themselves in GitLab. This pattern outlines some of the qualities that make it consistent, familiar, and usable. For help with other aspects of GitLab's navigation, refer to the following resources:

- [How to propose a change to navigation.](https://about.gitlab.com/handbook/product/ux/navigation/)
- [How to conduct user research of a proposed change to navigation.](https://about.gitlab.com/handbook/product/ux/ux-research/evaluating-navigation/)

## Overview

The navigation is a consistenly available user interface structure that contains functionality for moving around GitLab as well as for accomplishing core tasks. The navigation is made up of two main components: The navigation sidebar and the [breadcrumb](/components/breadcrumb). These components were designed to work together within the bigger picture of [page templates (draft)](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1556) to invoke a sense of reliable wayfinding. 

### Layout

There are two different versions of the navigation structure in GitLab.

| Authenticated user | Visitor |
| ------------------ | ------- |
| <figure-img alt="Authenticated navigation layout" src="/img/navigation-layout.svg" width="350"></figure-img> | <figure-img alt="Visitor navigation layout" src="/img/navigation-layout-visitor.svg" width="350"></figure-img> |

1. **Header**: Elements specific to the user and available functionality.
2. **Body**: Elements are interchangable based on context.
3. **Footer**: Elements available for convenience or tertiary tasks.
4. **Breadcrumb**: Elements relay the heirarchy to reinforce wayfinding. 
5. **Top bar (visitors only)**: Elements include External links and calls-to-action.

#### Header elements

<figure-img alt="Navigation header structure" label="A layout of the header structure within the navigation sidebar" src="/img/navigation-header-structure.svg"></figure-img>

1. **Logo**: [Customizable by Administrators](https://docs.gitlab.com/ee/administration/appearance.html#customize-your-homepage-button). Always links to the [homepage](https://docs.gitlab.com/ee/user/profile/preferences.html#choose-your-homepage).
2. **Next badge**: Displayed when canary infrastruture is being utilized.
3. **Sidebar button**: Hides the navigation sidebar.
4. **Create new button**: Dropdown for creation actions based on context.
5. **User dropodown**: Dropodwn for user related items and actions.
6. **Impersonation**: For stopping [impersonation](https://docs.gitlab.com/ee/administration/admin_area.html#user-impersonation) once turned on.
7. **Shortcuts**: Quick links to items users are responsible for.
8. **Search**: Opens a modal for navigating, using [global search](https://docs.gitlab.com/ee/user/search/) or the [command palette](https://docs.gitlab.com/ee/user/search/command_palette.html#open-the-command-palette).

#### Body elements

|  Standard | Custom |
| ------------------ | ------- |
| <figure-img alt="Navigation body structure" label="Typical layout" src="/img/navigation-body-structure.svg"></figure-img> | <figure-img alt="Navigation body structure for search" label="Specific to context" src="/img/navigation-body-structure-search.svg"></figure-img> |

1. **Title:** Name of the context for wayfinding, and should always appear at the top of the body.
2. **Static items:** Always present at the top of the navigational items. Used sparingly.
3. **Pinned items:** Items that users have choosen for quick access. Only available to authenticated users.
4. **Collections:** Contain items classified under a single theme.
5. **Settings:** A dedicated settings area inside a given context.
6. **Filters:** Unique option only to Global Search.

##### Contexts

Each context in GitLab has it's own dedicated body. The structure of the body can be adapted to fit it's corresponding context.

1. Your work
2. Groups and Projects
3. Explore
4. Admin Area
5. Profile
6. User settings
7. Global search

#### Footer elements

1. **Help**: : Dropodwn for helpful resources, updates, and information. Slight differences depending on SaaS and Self Managed.
1. **Admin Area**: Shortcut to jump to the Admin Area. Only visible to Administrators.

#### Top bar elements

The top bar is only present for unauthenticated users. It hold a few links to the marketing site, exploring GitLab, and strong call-to-actions. The items are replaced by exit links during scenarios that have a business impact. This includes signing up, purchasing a subscription, and starting a trial. By doing so, we facilitate task completion and reduce user errors, such as accidentally navigating away.

## Principles

As a large expansive platform, the navigation structure needs to be thoughtfully considered. 

- Use all the data to make informed decisions about what goes where and why.
- Reduce the need for context switching whenever possible.
- Prioritize depth over new additions when reasonable.
- Placement consistency between the Groups and Projects is critical.


## Guidelines

- The names used for each navigation item should be short and easy to remember, ideally 1-2 words in length.
- Think of each navigation item within a Group or Project like an individual application.
- Collections should clearly communicate their purpose. Use verbs to name them.
- Consider listing higher utlized items first.
- Categorize integrations with similar GitLab items. They should appear last in the collection list.

### Messaging changes to users

Continuously improving the navigation ensures the best possible user experience. To minimize disruption and properly introduce users to changes, follow these guidelines.

Use these approaches based on item usage:

- **None required:** No in-app messaging is required if an item has less than 0.025% of clicks per active user per month.
- **Subsequent:** An in-app [toast](/components/toast) with a confirm action is required after moving a top-level menu item if that item has between 0.026%-0.099% of clicks per active user per month. The toast should appear after first navigating to a screen that includes the sidebar with the navigation change. After dismissal, the toast should not reappear even when navigating to a new group or project with the navigation change.
- **Advanced:** An advanced page-level info [alert](/components/alert) is required if an item has equal to or greater than 0.1% of clicks per active user per month. Advanced notice should be in place for at least one milestone.
- **Temporary opt-in:** If more than 5 top-level navigation items are being changed that have a combined 5% of clicks per active users per month, a temporary opt-in method should be provided for at least 2 milestones. Temporary opt-in provides time to communicate major navigation overhauls while also allowing a user to preview changes.

## Behavior

### General

- When the navigation sidebar is hidden, the button to show it is always discoverable in the top left corner of the page. It can be shown by triggering a delayed hotspot on the left side of the page or by keyboard shortcut <kbd>/</kbd> or <kbd>s</kbd>.
- The navigation sidebar does not support three tiers of naviagtion. If you have additional content to dispaly, then integrate it into a dedicated page instead.

#### Pinned items

- Pinned items still appear in their corresponding collection.
- Adding a pinned item puts it at the bottom of the list.
- There is no limit on the number of pinned items.
- The pinned section should be expanded by default even when empty.
- A cookie is set to remember a user's choice to collapse or leave this section expanded. When this section is empty, display the message "Add items below for quick access."
- [Drag and drop](https://design.gitlab.com/usability/drag-and-drop) is available to reorder the items only in the pinned section. 
- If landing on a page that is pinned, do not show an active state for its collcetion or sub item below in the classification section.
- Defaults have been set for groups and projects.
- Reserved for authenticated users.

### Collections

- Opening each collections reveals the designated list of items.
- Only hide a collection if all its features are inaccessible. For example, if they are turned off or behind a paid tier of GitLab.
- All collections should be collapsed by default.
- Visiting a page directly should expand its collection, unless it is pinned, then it should be in the active state and collapsed under its collection.

#### Breakpoints

- Extra large viewports: 1200px and up
- Medium and large viewports: 768px to 1199px
- Small and extra small viewports: up to 767px
