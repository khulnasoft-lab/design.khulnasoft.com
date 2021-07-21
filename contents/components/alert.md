---
name: Alert
description: An alert is a system generated, contextual, and timely message to a user that may or may not result from their action.
figma: https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A1
docs: complete
gitlab_ui: /components/alert/code
vueComponents:
  - GlAlert
related:
  - broadcast-message
  - form
  - toast
---

## Examples

[[Example:alert-variants]]

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=425%3A278)

## Structure

<figure class="figure" role="figure" aria-label="Alert structure">
  <img class="figure-img" src="/img/alert-structure.svg" alt="Numbered diagram of an alert structure" role="img" />
</figure>

1. **Container**: Wraps the content.
1. **Icon**: Supports the variant meaning.
   - [error](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~error) icon for error and danger alerts.
   - [warning](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~warning) icon for the warning alert.
   - [check-circle](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~check-circle) icon for the success alert.
   - [information-o](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~information-o) icon for the information alert.
   - [bulb](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~bulb) icon for the tip alert.
1. **Title** (optional): Conveys what event triggered the alert.
1. **Dismissal** (optional): Permanently removes the alert for a user.
1. **Message**: Text content indicating the purpose and potential next steps.
1. **Actions** (optional): Buttons used to provide explicit action(s) the user can take to either remedy the alert or continue with a task.

## Guidelines

### Variants

- **Danger**: Advise the user that their attention is needed to address or be aware of a critical issue that relates to the current context.
- **Warning**: Caution the user that their attention or action may be needed within the current context, but it may not be critical.
- **Success**: Reaffirm to the user that a prior action they have taken, often in a different location within the application, has been successful.
- **Information**: Provide supplemental information to the user in regards to the current context or action they are about to take.
- **Tip**: Educate the user about new or unused features, and other useful information.

### Content

- All copy within an alert should be short, actionable, and use clear language.- Keep translations in mind when writing copy and follow [voice and tone](/content/voice-tone) guidelines.
- The contents of an alert are constrained by a `max-width` variable that:
  - Prevents the line length (measure) of the text from being too wide and impacting readability.
  - Keeps short alert content and the close button more central in the layout, preventing it from getting lost in a user's peripheral vision or too stretched out in a wide viewport.
  <figure class="figure" role="figure" aria-label="An alert background fills container width after content reaches max-width">
    <img class="figure-img" src="/img/alert-max-width.png" alt="Alert with left and right content edges marked to show max-width" role="img" style="width:100%; max-width:332px; height:auto" />
    <figcaption class="figure-caption">An alert background fills container width after content reaches max-width</figcaption>
  </figure>

#### Title

- Be brief and keep it to a single line by utilizing a sentence fragment.
- Avoid using punctuation such as periods, commas, or semicolons.
- Use a full stop only when it's a full sentence.

#### Message

- Provide next steps, troubleshooting actions, or links to learn about or remedy the event that triggered the alert.
- Avoid paraphrasing the title if one is included.
- Write as if the title was the first sentence of the message.
- Keep to one or two sentences when possible.
- Use sentence case and appropriate punctuation based on our [punctuation guidelines](/content/punctuation).

#### Actions

- Up to two actions can be used at a time.
- Primary action uses the **confirm** button variant.
- Secondary action uses the **default** button variant.
- Left aligned, except in right-to-left languages where they are right aligned and the order is the same. See [button alignment and order](/components/button#alignment-and-order) for more details.

### Behavior

- Permanently dismissible only when the alert relates to a user's individual instance and wasn't triggered by a system condition.
- Permanently dismissible when a task isn't blocked if no action is required.
- No dismiss button or action should be present when a system-condition must be met.
- A dismissed alert can reappear if an action or system event reproduces it.

### Placement

- **Global**: Impacts the entire experience, is full-width, and is placed directly below the navigation bar.
  <figure class="figure" role="figure" aria-label="Full-width danger alert under the global navigation and above the contextual navigation">
    <img class="figure-img" src="/img/alert-global.png" alt="Global alert position" role="img" style="width:100%; max-width:332px; height:auto" />
    <figcaption class="figure-caption">Full-width danger alert under the global navigation and above the contextual navigation</figcaption>
  </figure>
- **Page-level** Appears at the top of a page, directly below the navigation bar and above the breadcrumbs, and restricted to the content container width which can be either fixed or fluid, depending on user’s preference.
  <figure class="figure" role="figure" aria-label="Page-level alert in the main content area with space above and below">
    <img class="figure-img" src="/img/alert-page-level.png" alt="Page-level alert position" role="img" style="width:100%; max-width:332px; height:auto" />
    <figcaption class="figure-caption">Page-level alert in the main content area with space above and below</figcaption>
  </figure>
- **In-page**: Within a section of the page when the message is specific to that content.
  <figure class="figure" role="figure" aria-label="In-page alert contextually placed with space above and below">
    <img class="figure-img" src="/img/alert-in-page.png" alt="In-page alert position" role="img" style="width:100%; max-width:332px; height:auto" />
    <figcaption class="figure-caption">In-page alert contextually placed with space above and below</figcaption>
  </figure>

#### Sticky positioning

- Uses `position: sticky` to keep critical information in view as the page scrolls.
- Helpful when an alert is added without a page refresh and its position would otherwise be out of view.
- Typically is reserved for errors, as they need to be addressed by users.
- Only one sticky alert should be used at a time.

### Multiple alerts

- Multiple alerts should be avoided if at all possible, but if necessary ensure the [placement](#placement) of each is in the same context as the content it relates to.
- When multiple alerts are present in the same location, order them from most to least severe.

### Accessibility

- An alert should receive focus and use `aria-live` to announce its presence and allow a user to interact with it immediately.
- If sticky positioning is used, the user must still be able to access and view focusable elements the alert may be covering.
- An alert is separate from, but complimentary to [validation](/components/form#validation) error messages. In this way an alert announces that there are validation errors and links a user to each instance.
