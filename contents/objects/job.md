---
name: Job
---

A Job is a basic building block of a CI/CD pipeline. A Job contains the scripts and the configuration that defines when and how those scripts run as part of an automated CI/CD pipeline.
[How are Jobs used in the product?](https://docs.gitlab.com/ee/ci/jobs/)

## Conceptual model

To focus on the essence of a Job and the concepts associated with it, below is the Job **conceptual model**.
This model allows for proper separation of concerns: concepts (meaning) and user interface (representation; see [layouts](#layouts)).
In other words, a conceptual model is only focused on the concepts and how they relate to each other, not how it’s technically implemented or used in the UI.
A conceptual model defines the **objects** and **actions**, and enumerates the **attributes** for every object.
The language of the conceptual model diagram is meant to be as simple and accessible as possible to everyone, even if they are not familiar with these kinds of diagrams (for more information, see [Object Modeling for Designers](https://medium.com/@hpadkisson/object-modeling-for-designers-an-introduction-7871bdcf8baf).

[View conceptual model in Figma →](https://www.figma.com/file/J68bePHXIN5OPWqaFFY9ri/Conceptual-model?node-id=4488%3A462)

<div class="figma-embed" aria-label="Conceptual diagram that is a reflection of the Job object actions, attributes and its object relationships." role="img">
  <iframe frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJ68bePHXIN5OPWqaFFY9ri%2FConceptual-model%3Fnode-id%3D4488%253A462" allowfullscreen></iframe>
</div>

## Layouts

Job attributes and actions can be embedded in related objects that rely on specific layouts. For example, a pipeline page or a merge request.

The Job object itself is interacted with and represented in the UI through different layouts in the user’s journey, each with a different purpose.
As an example, some of the layouts used by Jobs are a jobs list, mini-pipeline graph or a merge request widget.

The main representation of a Job is the **Job page** layout.
Below is the **semantic layout** of the combination between the Job object and the Job page layout.
It's a visualization of the Job page layout, overlayed with the concepts of the Job object (its relationships, attributes, and actions; see [conceptual model](#conceptual-model) for more information).

[View semantic layout in Figma →](TBD)

<div class="figma-embed" aria-label="A layout of a Job object with overlays to highlight different sections that represent the actions, attributes and object relationships within the Job layout." role="img">
  <iframe frameborder="0" src="TBD" allowfullscreen></iframe>
</div>

