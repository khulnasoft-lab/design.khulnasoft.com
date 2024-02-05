---
name: New navigation
---

Users rely on the navigation to move around and orient themselves in GitLab. This pattern outlines some of the qualities that make it consistent, familiar, and usable.

## Overview

The navigation is a consistenly available user interface element that contains functionality for moving around GitLab as well as for accomplishing core tasks. The navigation is made up of two main components: The navigation sidebar and the [breadcrumb](/components/breadcrumb.md). These components were designed to work together within the bigger picture of [page templates](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1556) to invoke a sense of reliable wayfinding. 

### Layout

<figure-img alt="Navigation layout" label="A layout of the navigation structure" src="/img/navigation.svg"></figure-img>

1. Header
1. Body
1. Footer
1. Breadcrumb

#### Sections

A. **Static:** single page items like the merge request list. Sepcific to each context. <br>
B. **Collections:** Contains pages classified under a single theme. <br>
C. **Settings:** A dedicated settings area for inside a given context <br>
D. **Pinned:**, pages that users have choosen to pin in their group or projects sidebar <br>
E. **Functions:** Single pages organized together. Do no appear in the static section. <br>
F. **Filters:** Unique option only to Global Search <br>
G. **Back button:** Brings a user back to context from the settings section <br>

#### Contexts

There are 9 unique contexts in GitLab. Each is designed for specific intent, and new contexts are not added without sufficient user research. 

<figure-img alt="Admin Area layout" label="Admin Area: (A) Static, (B) Collections, (C) Settings" src="/img/admin-area-context.svg"></figure-img>

<figure-img alt="Groups and Projects layout" label="Groups and Projects: (A) Static, (D) Pinned, (B) Collections, (C) Settings" src="/img/groups-and-projects-context.svg"></figure-img>

<figure-img alt="Settings layout for a group or project" label="Settings: (G) Back button, (A) Static, (E) Functions" src="/img/settings-context.svg"></figure-img>

<figure-img alt="Your work layout" label="A layout of the your work context" src="/img/your-work-context.svg"></figure-img>

<figure-img alt="Explore, Profiles, User settings layout" label="Your work: (A) Static, (E) Functions" src="/img/explore-profiles-user-settings-context.svg"></figure-img>

<figure-img alt="Global search layout" label="Global search: (A) Static, (F) Filters" src="/img/global-search-context.svg"></figure-img>

<figure-img alt="Help layout" label="Help: (A) Static, (E) Functions" src="/img/help-context.svg"></figure-img>

## Principles

- Keep the core navigation as close to a sensible default as possible, and only allow customization where necessary
- Not every page belongs in the navigation sidebar
- Collections should clearly communicate their usefulness. Use verbs to name them.
- Higher utlizied pages have priority over lower utilized or new ones. Items that appear inside a collection will be sorted based on page visits.
- Use all the data readily available to us to make informed decisions about what goes where and why.

## Behavior

> To Do: Organize all these thoughts

There is no limit to the number of items listed in the static section. Although it is discouraged to use more than 3 total including the landing page specifically in the Admin Area, Groups, and Projects. When switching contexts should be to go to the first page listed in the static section.

Pinned items still appear in their respective category grouping. Adding a pinned item puts it at the bottom of the list. There is no limit on the number of pinned items. The pinned section should be expanded by default even when empty. A cookie is set to remember a user's choice to collapse or leave this section expanded. When this section is empty, display the message "Add items below for quick access." [Drag and drop](https://design.gitlab.com/usability/drag-and-drop) is available to reorder the items only in the pinned section. If landing on a page that is pinned, do not show an active state for its collcetion or sub item below in the classification section.

Opening each collections reveals the designated list of items. Only hide a collection if all its features are inaccessible. For example, if they are turned off or behind a paid tier of GitLab. All collections should be collapsed by default. Visiting a page directly should expand its collection, unless it is pinned, and its  should be in the active state. If Collection A is expanded, then opening Collection B should collapse Collection A.

When the navigation sidebar is hidden, the button to show it is always discoverable in the top left corner of the page. It can be shown by triggering a delayed hotspot on the left side of the page or by keyboard shortcut <kbd>tbd</kbd>

When switching from one context to another, if the viewport size (tbd - Large?) can comfortably fit the sidebar, then the sidebar should be shown. For example, switching from a project into user settings. 

The navigation sidebar does not support three tiers of naviagtion. If you have additional content to dispaly, then integrate it into a dedicated page instead.





