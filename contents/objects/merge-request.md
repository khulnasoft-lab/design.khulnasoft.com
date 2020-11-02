---
name: Merge request
---

A Merge Request (MR) is the core object where users collaborate on proposed changes to source code.
From editing, reviewing, testing, and deploying, almost everything in GitLab flows through MRs.
[How are MRs used in the product?](https://docs.gitlab.com/ee/user/project/merge_requests/)

## Conceptual model

To focus on the essence of an MR and the concepts associated with it, below is the MR **conceptual model**.
This model allows for proper separation of concerns: _concepts_ (meaning) and _user interface_ (representation; see [layouts](#layouts)).
In other words, a conceptual model is only focused on the concepts and how they relate to each other, not how it’s technically implemented or used in the UI.
A conceptual model defines the _Objects_ and _Actions_, and enumerates the _Attributes_ for every _Object_.
This is a [Narrative Object Model](https://medium.com/@hpadkisson/object-modeling-for-designers-an-introduction-7871bdcf8baf), a type of diagram that is based on the [UML Class Diagram](https://en.wikipedia.org/wiki/Class_diagram), but simpler and easier to read.

[View conceptual model in Figma →](https://www.figma.com/file/J68bePHXIN5OPWqaFFY9ri/Conceptual-model?node-id=51%3A18)

<div class="figma-embed">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJ68bePHXIN5OPWqaFFY9ri%2FConceptual-model%3Fnode-id%3D51%253A18" allowfullscreen></iframe>
</div>

## Layouts

MR attributes and actions can be embedded in related objects, like Issue or Pipeline, that rely on specific layouts. 

The MR object itself is interacted with and represented in the UI through different layouts in the user’s journey, each with a different purpose.
As an example, some of the layouts used by MRs are List/catalog, Form, and Record.

The main representation of an MR is the **Record** layout.
Below is the **semantic layout** of the MR object – Record layout association.
It's a visualization of the Record layout, overlayed with the concepts of the MR object (its relationships, attributes, and actions; see [conceptual model](#conceptual-model) for more information).

[View semantic layout in Figma →](https://www.figma.com/file/shVF8UZwrQtkNfMDjcrsyH/Semantic-layouts?node-id=50%3A217)

<div class="figma-embed">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FshVF8UZwrQtkNfMDjcrsyH%2FSemantic-layouts%3Fnode-id%3D50%253A217" allowfullscreen></iframe>
</div>
