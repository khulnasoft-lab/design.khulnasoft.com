---
name: Card
---

Cards are a flexible component used to display content and actions on a variety of content. They are generally restricted to a single topic and it should be easy for users to scan relevant and actionable information. Content, such as images and text, should be positioned within them in a manner that demonstrates their intended hierarchy.

## Usage

Cards are used to connect similar concepts and/or activities to help make it easier for users to browse, read and learn more about GitLab. The use-cases vary from communicating pricing plans to organising content within issue boards. There are two main types of Cards (Static and Dynamic).

| Card type | Purpose |
| --- | --- |
| Static Card | Single topic component to help compare and contrast similar pieces of information |
| Dynamic (Draggable Card) | For use in a multidisciplinary list to help users stay organised |

### Alternatives

**Table:** 
If the purpose of using the component is to compare and contrast 5 or more static (non-draggable) pieces of content a better option would be to structure the data within a [table component](https://design.gitlab.com/components/table).

## Demo

Todo: Add live component block with code example

## Specifications

### Sections
There are three main sections of a Card:

#### Header:
The header is **optional** and acts as the title of the proceeding body content. An example could be the name of a pricing plan or a blog post title. Headings should set clear expectations about the card’s purpose.

#### Body:
This section is **always required**. The content in the body should never be ambiguous or unclear. Strive to be as concise as possible and provide the user with content regarding a single topic. If a Card's purpose is to communicate a pricing plan, the body would contain the plan's price point and key feature information. 

Use multiple sections within the body when you have two or more related but distinct pieces of information to communicate to users. Multiple sections can help break up complicated concepts like pricing data.

#### Actions:
This section is **optional**. There should be no more than 3 actions and no fewer than 1. Actions should always be located within an action bar at the bottom of the Card. Button order and positioning should follow our [guidelines for buttons](/components/buttons).

### Behavior

**Responsive Considerations:** The Card width is fluid by default. When presenting two or more static cards in a row, care must be taken to ensure the appropriate stacking occurs across breakpoints.

**Interactions:** Dynamic Cards can be draggable and re-ordered within a linear list. To help layer the component within this particular use-case a drop shadow is required. A draggable Card will maintain the ability to house individual links and actions. Its empty space becomes the trigger to enable the drag functionality.

## Design Specifications

TODO: Add Sketch Measure Preview for List
