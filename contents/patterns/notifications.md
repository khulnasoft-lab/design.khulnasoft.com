---
name: Notifications
description: A notification is a user or system generated update pushed to users.
---

## Structure

<todo>Add structure image for email and UI notifications.</todo>

## Guidelines

Notifications from GitLab appear in two places: in a user's email and in the product, on the To-Do List. The To-Do List items are currently a small, actionable subset of the available notifications.

### When to use

- When a user needs to be made aware of a system action.
- When another user is awaiting a response.
- When there is an important product update a user should be aware of.

### When not to use

- To spam users with non-important details. Avoid overburdening users with non-essential notifications as it leads to fatigue and decreases their ability to be productive within the product.

### Behavior

### Content

Both email and UI notifications aim to keep users up-to-date about things happening within GitLab. Content of email and UI notifications is currently non-identical, though we are working to bring more of a parity between them. 

Though content guidelines are still being defined for both email and UI notifications, you can view examples of all emails, organized by type, in either [GDK](https://docs.gitlab.com/ee/development/emails.html#mailer-previews) or in [Figma](https://www.figma.com/design/wRoOy8FwgL5f3uhEP0gMyv/Define-guidelines-for-notifications-Pajamas-%E2%80%A2-%231888?node-id=12307-26544&t=ctKNm5g1co2EWxZi-1). Example of current UI notifications are also visible in [Figma](https://www.figma.com/design/uH0dVVB1PBdJ929KEiGqFf/Notifications?node-id=6977-111489&t=IdcDigotUwYmlbdv-1). Components for both are forthcoming.

### Configuration

Email notification preferences are configured in user settings, under [/profile/notifications](https://gitlab.com/-/profile/notifications). Notifications appearing in the To-Do List are mostly [system-defined](https://docs.gitlab.com/ee/user/todos.html#actions-that-create-to-do-items) at present, though users can opt to [create a To Do list notification](https://docs.gitlab.com/ee/user/todos.html#create-a-to-do-item) by clicking the "To Do" button on issues and MRs. In future, users will be able to [fully customize](https://gitlab.com/gitlab-org/gitlab/-/issues/320912) what appears in their To-Do List. 
