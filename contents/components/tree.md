---
name: Tree
description: A tree component structures parent and child nodes into a meaningful hierarchy.
related:
- accordion
- breadcrumb
- list
---

## Examples

Todo: Add tree example

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A143)

## Structure

<figure class="figure" role="figure" aria-label="Tree structure">
  <img class="figure-img" src="/img/tree-structure.svg" alt="Numbered diagram of a tree structure" role="img" />
</figure>

1. **Caret**: Identifies when the node is open or closed. Pointing down is open. Pointing right is closed. 
1. **Icon**: Indicates what type of node it is.
1. **Avatar**: Supporting visual for the node title.
1. **Title**: Identifies the node.
1. **Description** (optional): Describes the node.
1. **Connector**: Visual aid to indicate hierarchy and connections.

## Guidelines

### When to use

- Create hierarchical structure to view and access parent and child nodes.

### When not to use

- If you need a way for a user to expand or collapse a content section, use an [accordion](/components/accordion) instead.
- To indicate page location in a navigational hierarchy, use a [breadcrumb](/components/breadcrumb) instead.
- If you're organizing general content in a structured way, consider using the [list](/components/list) component instead.

### Appearance

- A tree follows a top-down pattern and each consecutive nested node (level) is indented to communicate the hierarchy.
- Collapsed and expanded nodes should be distinguishable.

### Behavior

There are two primary interactions in a tree:

1. Expanding and collapsing nodes.
1. Links to node content.

### Content

- The title should be clear and concise.
- Additional content, like an [avatar](/components/avatar), [icon](https://gitlab-org.gitlab.io/gitlab-svgs/), [label](/components/label), or description can be attributes of the node.

### Accessibility

- A tree view uses a containing element with the `tree` role. Nodes use the `treeitem` role.
- See the [WAI-ARIA tree view documentation](https://www.w3.org/TR/wai-aria-practices/#TreeView) to learn more about computed and declared ARIA properties and how to control focus and selection of node items.
