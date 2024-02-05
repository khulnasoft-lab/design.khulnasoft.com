---
name: New navigation
---

Users rely on the navigation to move around and orient themselves in GitLab. This pattern outlines some of the qualities that make it consistent, familiar, and usable.

## Overview

The navigation is a consistenly available user interface element that contains functionality for moving around GitLab as well as for accomplishing core tasks. The navigation is made up of two main components: The navigation sidebar and the [breadcrumb](contents/components/breadcrumb.md). These components were designed to work together within the bigger picture of [page templates](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1556) to invoke a sense of reliable wayfinding. 

### Layout

There are two different navigation structures in GitLab. 

| Authenticated User | Visitor |
| ------------------ | ------- |
| <figure-img alt="Navigation layout" label="A layout of the navigation structure" src="/img/navigation-layout.svg"></figure-img> | <figure-img alt="Navigation layout" label="A layout of the navigation structure" src="/img/navigation-layout-visitor.svg"></figure-img> |

1. Header
1. Body
1. Footer
1. Breadcrumb
1. Top Bar (Unauthenticated users)

#### Header elements

1. **Logo**: [Customizable by Administrators](https://docs.gitlab.com/ee/administration/appearance.html#customize-your-homepage-button). Always links to the [homepage](https://docs.gitlab.com/ee/user/profile/preferences.html#choose-your-homepage).
1. **Next badge**: Displayed when canary infrastruture is being utilized.
1. **Sidebar button**: Hides the navigation sidebar
1. **Create new button**: Dropdown for creation actions based on context.
1. **User dropodown**: Dropodwn for user related items and actions.
1. **Shortcuts**: Quick links to items users are responsible for.
1. **Search**: Opens a modal for navigating, using [global search](https://docs.gitlab.com/ee/user/search/) or the [command palette](https://docs.gitlab.com/ee/user/search/command_palette.html#open-the-command-palette).
1. **Impersonation**: For stopping [impersonation](https://docs.gitlab.com/ee/administration/admin_area.html#user-impersonation) once turned on.

#### Body elements

A. **Title:** Name of the context
B. **Static items:** Always present at the top of the navigational items<br>
C. **Pinned items:** Items that users have choosen for quick access. Only available to  <br>
D. **Collections:** Contain items classified under a single theme.<br>
E. **Settings:** A dedicated settings area inside a given context <br>
F. **Filters:** Unique option only to Global Search <br>

##### Contexts

1. Your work
1. Groups and Projects
1. Explore
1. Admin Area
1. Profile
1. User settings
1. Global search

#### Footer elements

#### Top bar elements

## Principles

As a large expansive platform, the navigation structure needs to be thoughtfully considered. 

- Use all the data readily available to us to make informed decisions about what goes where and why.
- Reduce the need for context switching when possible.
- Prioritize depth over new additions when reasonable.


## Guidelines

- There is no limit to the number of static elements. The DRIs of a given context can determine what should be exposed to all users.
- Think of each navigation item like an individual application.
- Collections should clearly communicate their purpose. Use verbs to name them.
- Consider listing higher utlized items first.
- Categorize integration with similar GitLab items. They should appear last in the list.

## Behavior 

**General**

- When the navigation sidebar is hidden, the button to show it is always discoverable in the top left corner of the page. It can be shown by triggering a delayed hotspot on the left side of the page or by keyboard shortcut <kbd>/</kbd> or <kbd>s</kbd>.
- The navigation sidebar does not support three tiers of naviagtion. If you have additional content to dispaly, then integrate it into a dedicated page instead.

**Pinned items** 

- Pinned items still appear in their corresponding collection. 
- Adding a pinned item puts it at the bottom of the list. 
- There is no limit on the number of pinned items. 
- The pinned section should be expanded by default even when empty. 
- A cookie is set to remember a user's choice to collapse or leave this section expanded. When this section is empty, display the message "Add items below for quick access." [Drag and drop](https://design.gitlab.com/usability/drag-and-drop) is available to reorder the items only in the pinned section. If landing on a page that is pinned, do not show an active state for its collcetion or sub item below in the classification section.
- Defaults have been set for groups and projects.
- Reserved for authenticated users.

**Collections**

- Opening each collections reveals the designated list of items. 
- Only hide a collection if all its features are inaccessible. For example, if they are turned off or behind a paid tier of GitLab. 
- All collections should be collapsed by default. 
- Visiting a page directly should expand its collection, unless it is pinned, the it should be in the active state.




