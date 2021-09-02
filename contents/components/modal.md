---
name: Modal
description: Modals are used to reveal critical information, show information without losing context, or when the system requires a user response.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A129
docs: complete
gitlab_ui: /components/modal/code
vueComponents:
  - GlModal
related:
  - accordion
  - button
  - drawer
  - popover
  - toast
  - tooltip
---

## Examples

[[Example:modal-sizes]]

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=4263%3A21)

## Structure

<figure class="figure" role="figure" aria-label="Modal structure">
  <img class="figure-img" src="/img/modal-structure.svg" alt="Numbered diagram of a modal structure" role="img" />
</figure>

1. **Wrapper**: Contains the modal dialog. 
1. **Title**: Title giving context to the modal dialog.
1. **Dialog**: Modal dialog container.
1. **Dismissal**: Icon to dismiss the modal.
1. **Message**: Modal description.
1. **Actions**: Buttons to take action from the modal.

## Guidelines

### When to use

- When a complex workflow needs to be broken down into simpler steps.
- Serve as a single purpose dedicated to completing the user's task.
- Revealing critical information without losing context.
- When the system requires a user response.
- A non-revertible destructive action is about to take place and needs confirmation

### When not to use

- When content can be displayed inline. Utilize elements such as [popovers](/components/popover), [accordions](/components/accordion), or [drawers](/components/drawer) to present additional information while allowing the user to maintain focus on the page.
- When displaying a simple message, present your message within a [toast](/components/toast); a brief, auto-expiring element for the user to consume while staying focused on their task.
- For a significant amount of content, take the user to a different page to utilize space a modal can‘t provide.
- Consider alternative patterns such as non-modal dialogs or undo patterns to continue the system-user conversation while keeping the user focused on their task.
- For simple edits, users can edit their content inline to avoid showing a modal or bringing user’s to a new page. For example:
  ![Content before edit mode](/img/modal/inline-editing-1.svg)
  When clicking the `edit` button, users will be put in an "edit mode" for this row, which will make text fields editable through a form input:
  ![Inline content in edit mode](/img/modal/inline-editing-2.svg)

### Variants

- **Small**: Small modals are used for simple tasks with little content.
- **Default**: Default modals are used in most use cases.
- **Large**: Large modals are used for lots of content, tabbed content, or content that requires a larger container.

### Behavior

- Utilizes the lightbox effect when opened.
- The first focusable item should be auto-focused within the modal dialog.
- The height of the modal is determined by the content.
  - When modal content extends below the viewport, the viewport remains scrollable.
- On small screens where content requires scrolling, consider opening the content in a new page instead.

### Content

- The header is either a question, a descriptive phrase, or title. The header also contains the close icon in every instance.
- The content in the body should never be ambiguous and unclear. Strive to be as concise as possible and provide the user with specific information in regards to their task. Do not ask a vague question or pose a vague statement. Instead, explain what you are asking the user to do in a [voice and tone](/content/voice-tone) that's straightforward and easy to understand.
- There should be no more than 3 actions and no fewer than 1. Actions should always be located within an action bar at the bottom of the modal. Button order and positioning should follow our [guidelines for buttons](/components/button).
- When labeling your actions, let the user know what will happen for each possible decision you are affording to them and be specific. For example, when asking the user to set their status, use "Set status" and "Remove status" instead of simply, "Save" and "Delete".
- There should always be multiple ways to close/dismiss this type of modal, including allowing the user to click outside of the modal area or use the escape key. This is important as some modals can be tall and we want to avoid making the user scroll up to close a modal.

### Accessibility

Todo: Add accessibility docs

## Reference

- [modalzmodalzmodalz](https://modalzmodalzmodalz.com/)
- [Best Practices for Modals / Overlays / Dialog Windows](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c)
- [Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
