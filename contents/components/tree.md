---
name: Tree
related:
- accordion
- breadcrumb
---

Trees provide a clear overview of a structure, apply parent-child hierarchy between elements, and use the concept of progressive disclosure to display this structure to users.

Just like [accordions](/components/accordions), trees are vertically stacked. Trees are composed of a main container (tree trunk) which groups related elements (branches), and their related items (leaves). Since tree trunks and branches are collapsible, they should be paired with an icon that clearly signify the change of state (expand/collapse). Trees should visually reflect the hierarchy and relationship differences between its elements using spacing (margin/padding) and/or lines. See [tree specifications](#specifications) for more details.

## Usage

Consider using a tree as a navigation pattern to map out the relationship and hierarchy between multiple items. For example, a set of projects that are within the same group.

### When to use trees

Use trees to:
* Create hierarchical structure to help users form a mental model of the relationship between elements.

### When not to use trees

Do not use trees to:
*  Provide additional information about a specific element of the page, use an [accordion](/components/accordion) instead.
*  To display a navigation location, use [breadcrumb](/components/breadcrumb) instead.

### Dos and Dont's

| Dos | Donts |
| ------ | ------ |
| Even if the structure is complex, keep the depth of the hierarchy to 4 levels maximum. (eg. Tree trunk > Branch > Sub-branch > Leaf) | Nest more than 4 levels of hierarchy, as it can make part of the content harder to access. In this case prefer a [list](https://design.gitlab.com/components/list). |
| Use a logical order to sort branches/leaves within a tree (e.g., Starting with the most valuable item  from a user standpoint or use alphabetical order). | Leave the hierarchy structure unsorted. | 
| Visually differentiate the relationship between elements using margin and padding to create the hierarchy structure. | Align branches and leaves right under the tree trunk.  | 
| Group related content as leaves under the same branch. (eg. Design > Research > Interviews - Personas - Experience Map) |  Multiply branches if the content is similar and could be grouped as leaves under a same branch. |

### Specifications

#### Tree trunk 

The tree trunk is the starting point of the tree. At the minimum, tree trunks possess a title which should inform the user of the content within the related branches and leaves. An icon is used to signify that the element is expandable and collapsable. This can be triggered by clicking either the icon and title. Additionally, tree trunks may also contain other descriptive elements such as a paragraph or label.

#### Branch

Branches are directly related to tree trunks. They also possess a title, which directly refer to the tree trunk title, as well as an icon, to signify the expandable and collapsable states. Expanding a branch element would unveil a leaf.

#### Leaf

Leaves are the smallest element possible within the tree, they too possess a title, this title  should be as specific as possible about the underlying content.(eg. Charts). Leaves should remain tied to a tree.

## Demo

Using the hierarchy structure set up above, our overall tree should look like the following:

Todo: add tree example

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

Todo: add link
