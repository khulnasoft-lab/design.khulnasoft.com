---
name: Objects overview
---

Objects are the product concepts that make GitLab and match how users think about it. These objects not only exist in the users' mental model, but they are also consistently referenced across all levels of the product stack: database, code, user interface (UI), documentation, customer support, sales, marketing, and more.

Some examples of possible objects from products you may know:
* Facebook: Friend, Post, Message, Event, Page, Group.
* Airbnb: Listing, Host, Guest, Trip, Experience.
* Slack: Team, Member, Channel, Message, Reaction, Thread.
* Intercom: Customer, Teammate, Message, Conversation, Article.

In GitLab, examples of our core objects are: repository, issue, [merge request](/objects/merge-request), pipeline.

## Object thinking

Thinking in terms of objects is about separating the _concepts_ (meaning) from the _UI_ (representation), which allows us to see the concepts in their purest, most abstract form. It doesn't matter how users interact with the objects to achieve their goals. We can use the same objects to build any kind of interface: a mobile app, a web app, a plugin for another app, an API, a voice-controlled app, etc.

There are many benefits to this kind of thinking:

* Identify inconsistencies and duplication in the system.
* Identify opportunities for feature additions or enhancements.
* Design features that work well from a conceptual point of view, regardless of how they are represented in the UI.
* Improve team's communication about the objects and how the system works.

Above all, object thinking helps build a solid foundation for the user experiences we're creating.

Learn more about objects in [“The full stack design system”](https://www.intercom.com/blog/the-full-stack-design-system/), where Intercom shares the need, benefits, and how they use objects to build their product.

## Documentation

There are two main ways to document objects, each with its purpose: the [conceptual model](#conceptual-model) for all objects and [semantic layouts](#semantic-layouts) for each object.

### Conceptual model

The conceptual model is the visual representation of [object thinking](#object-thinking). Through interconnected diagrams, the conceptual model allows us to see GitLab's objects and their relationships, unlocking the benefits of object thinking. This results in an easy to navigate map of GitLab's product concepts.

For each object, we document its _attributes_ and _actions_, and also how it relates to other objects. This visual language is agnostic of how the objects are actually represented in the user interface or implemented in code. The conceptual model is meant to be as simple and accessible as possible to everyone, even if they aren't familiar with these kinds of diagrams.

As an example, see the [merge request conceptual model diagram](/objects/merge-request#conceptual-model).

Learn more about conceptual models in [“Object Modeling for Designers”](https://medium.com/@hpadkisson/object-modeling-for-designers-an-introduction-7871bdcf8baf).

### Semantic layouts

Users can interact with an object at various moments in their journey. At each of those moments, the object can be represented in the UI through different visual layouts, each with its purpose. Semantic layouts give meaning to each part of those layouts, from the smallest [components](/components/overview) to the largest regions. In practice, a semantic layout places the objects (and their relationships, attributes, and actions) over the layout, so we can see its meaning and purpose.

As an example, see the [merge request semantic layout](/objects/merge-request#layouts).

## How to contribute an object in Pajamas

To contribute an object to Pajamas, create an issue in the [Pajamas Design System project](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com) using the `Object` issue template (TBD).
