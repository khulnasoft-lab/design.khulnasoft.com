---
name: Broadcast message
status: built
vueComponents:
  - GlBroadcastMessage
related:
  - alert
---

Broadcast messages provide an efficient and prominent way to deliver critical messages at the instance level to all users. For example, a broadcast message can be used when an admin wants to announce that their platform will experience downtime during a specific period.

In comparison with an [alert](/components/alert), broadcast messages are created by an admin and not triggered by the system.

## Usage

Broadcast messages are always located at the top of the page, above the [global navigation](/regions/navigation). They use a background color that matches the available theme colors but should stand apart to ensure users notice the information.

Broadcast messages expire after a set period as defined by the admin but they can also be dismissed at the user level.

Broadcast messages generally contain a small amount of content. It is a rare usecase for multiple broadcast messages to be present at a given time. When this happens, however, the messages should stack.

## Demo

[[Example:broadcast-message-basic-example]]

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for broadcast messages](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/broadcast-messages-spec-previews/)
