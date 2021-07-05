---
name: Environment
---

An Environment describe where code is deployed. In more technical terms, an environment is a deployment target defined by the user.

[How are Environments used in the product?](https://docs.gitlab.com/ee/ci/environments/)

## Conceptual model

This model allows for proper separation of concerns: concepts (meaning) and user interface (representation; see [layouts](#layouts)).
In other words, a conceptual model is only focused on the concepts and how they relate to each other, not how it’s technically implemented or used in the UI.

A conceptual model defines the **objects** and **actions**, and enumerates the **attributes** for every object.
The language of the conceptual model diagram is meant to be as simple and accessible as possible to everyone, even if they are not familiar with these kinds of diagrams (for more information, see [Object Modeling for Designers](https://medium.com/@hpadkisson/object-modeling-for-designers-an-introduction-7871bdcf8baf).

[View conceptual model in Figma →](https://www.figma.com/file/0pQXky3SCtdzydXRZSQZm8/Release-Group-%E2%80%A2-Ops-Object-Models?node-id=1%3A786)

<div class="figma-embed" aria-label="Conceptual diagram connecting objects, along with their attributes and actions, to the primary Environment object." role="img">
  <iframe frameborder="0" src="https://www.figma.com/file/0pQXky3SCtdzydXRZSQZm8/Release-Group-%E2%80%A2-Ops-Object-Models?node-id=1%3A786" allowfullscreen></iframe>
</div>

## Layouts

[WIP]