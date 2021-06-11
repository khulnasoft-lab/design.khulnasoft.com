---
name: Broadcast message
principle: Deliver an instance level message from the admin to all users.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A6
docs: complete
vueComponents:
  - GlBroadcastMessage
related:
  - alert
---

## Usage

A broadcast message is an efficient and prominent way for an admin to deliver critical messages at the instance-level to all users. It can be used to notify users about scheduled maintenance, recent upgrades, and more.

## Examples

[[Example:broadcast-message-basic-example]]

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit-Beta?node-id=1501%3A1583)

## Structure

<figure class="figure" role="figure" aria-label="Broadcast message structure">
  <img class="figure-img" src="/img/broadcast-message-structure.svg" alt="Numbered diagram of the broadcast message structure" role="img" />
</figure>

1. **Container**: Wraps the content.
1. **Icon**: The [bullhorn](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~bullhorn) icon indicates an announcement.
1. **Message**: Text content indicating the purpose.
1. **Dismiss button** (optional): Permanently removes the broadcast message for a user.

## Guidelines

- Located at the top of the page, above the [global navigation](/regions/navigation).
- Multiple broadcast messages stack vertically.
- Contains a small amount of text content that uses the container width when user preference is set to use a [fixed width](https://docs.gitlab.com/ee/user/profile/preferences.html#layout-width) layout.
- Expires after a set period defined by the admin, but can also be dismissed by a user.

### Accessibility

- Part of the DOM order on load, and should flow in the natural reading order.
- The dismiss button uses `aria-label="Dismiss"`.
