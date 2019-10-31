---
name: Tree
related:
- accordion
- breadcrumb
---

Trees provides a clear overview of a structure applying parent-child hierarchy between elements, using the concept of progressive disclosure to display this structure to users.

## Usage

Consider using a tree as a navigation pattern to map out relations and hierarchy between multiple items.

### Dos and Dont's

| Dos | Donts |
| ------ | ------ |
| Use a hierarchical structure that should help users forming a mental model of the relationship between elements. | Nest more than 4 levels of hierarchy, as it can make part of the content harder to access, in that case prefer a [list](https://design.gitlab.com/components/list). |
| Prefer a logical order to sort branches/leaves within a tree (eg.starting with the most valuable item at the beginning, from a user standpoint. Using an alphabetical order...).| Hide main global navigation elements (eg.Settings page). | 
| Visually differentiate relationship between elements. | Multiply branches if the content is similar and could be regrouped as leaves under a same branch. | 

### Specifications

Just like [accordions](/components/accordions), trees are vertically stacked. Trees are composed of a main container (tree trunk) regrouping related elements,  branches, its related leaves. As tree trunk and branch elements of the tree are collapsible, they should be paired with an icon that clearly signify the change of state (Expand/Collapse). Trees should visually reflect the hierarchy and relationship differences between its elements using spaces (margin/padding) or lines.

#### Tree trunk 

The tree trunk is the starting point of the tree. At the minimum, Tree trunk possess a title, as generic and broad as possible to give a general idea of their related branches and leaves (eg.GitLab.com), and an icon signifying the element is expandable and collapsable. Additionally, tree trunk can also contain other descriptive elements such as paragraph (eg. Open source software to collaborate on code), labels(eg.Public)... Tree trunk are collapsible elements and could be expanded and collapsed by clicking both icon and title.

#### Branch

Branches are directly related to tree trunks. They also possess a title, ideally directly referring to the tree trunk title (eg. GitLab Infrastructure team) and an icon signifying the expandable and collapsable states. Expanding a branch element would unveil a leaf.

#### Leaf

Leaves are the smallest element possible within the tree, they too possess a title, this title  should be as specific as possible about the underlying content.(eg.Charts). Preferably, leaves should remain tied to a branch within a tree.

##### Example of the structure

To recap, using the hierarchy structure set up above, our overall tree should look like the following: [GitLab.com](http://gitlab.com) (tree trunk) > GitLab Infrastructure team (branch) > Charts (leaf).

## Demo

Todo: add tree example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

Todo: add link
