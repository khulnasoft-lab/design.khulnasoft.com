---
name: New navigation
---

This page describes the navigation guidelines that apply to the GitLab user interface. This experience is currently in alpha and will replace the preceeding navigation once made generally available.

## General guidance

The navigation is made up of three components: The [navigation sidebar](), the [breadcrumb](), and the [interaction button](). All of these components were designed to work together within the bigger picture of [page templates]().

## Layout

<figure-img alt="New navigation sidebar layout" label="A grid layout of the new navigation sidebar structure identifying specific sections" src="/img/new-navigation.svg"></figure-img>

Navigation sidebar breakdown

1. Header: Contains universal shortcuts.
1. Context switcher: Exposes a disclosure widget to aid users in moving around GitLab.
1. Sections: See the options
1. Footer section: Always contains a help button that opens a disclosure.

Sections

A. Static, single page items
B. Collections, pages classified under a single theme
C. Settings, brings a user to a dedicated settings section
D. Pinned, pages that users have choosen to pin in their group or projects sidebar
E. Functions, pages organized together
F. Filters, unique to Global Search
G. Back button, brings user back to context from the settings section


## Context

There are 9 unique contexts in GitLab. Each is designed for specific intent, and new contexts are not added without sufficient user research. 

1. Admin Area
1. Groups
1. Projects
1. Your work
1. Explore
1. Global search
1. User profile
1. User settings
1. Help

## Behavior

> Just a brain dump for now

There is no limit to the number of items listed in the static section. Although it is discouraged to use more than 3 total including the landing page specifically in the Admin Area, Groups, and Projects. When switching contexts should be to go to the first page listed in the static section.

Pinned items still appear in their respective category grouping. Adding a pinned item puts it at the bottom of the list. There is no limit on the number of pinned items. The pinned section should be expanded by default even when empty. A cookie is set to remember a user's choice to collapse or leave this section expanded. When this section is empty, display the message "Add items below for quick access." [Drag and drop](https://design.gitlab.com/usability/drag-and-drop) is available to reorder the items only in the pinned section. If landing on a page that is pinned, do not show an active state for its collcetion or sub item below in the classification section.

Opening each collections reveals the designated list of items. Only hide a collection if all its features are inaccessible. For example, if they are turned off or behind a paid tier of GitLab. All collections should be collapsed by default. Visiting a page directly should expand its collection, unless it is pinned, and its  should be in the active state. If Collection A is expanded, then opening Collection B should collapse Collection A.

When the navigation sidebar is hidden, the button to show it is always discoverable in the top left corner of the page. It can be shown by triggering a delayed hotspot on the left side of the page or by keyboard shortcut <kbd>tbd</kbd>

When switching from one context to another, if the viewport size (tbd - Large?) can comfortably fit the sidebar, then the sidebar should be shown. For example, switching from a project into user settings. 

The navigation sidebar does not support three tiers of naviagtion. If you have additional content to dispaly, then integrate it into a dedicated page instead.





