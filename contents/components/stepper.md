<!--
  GENERAL NOTES:
  - Use simple language and be concise.
  - Use singular instead of plural when referencing a component.
  - Use singular instead of plural when referencing a user.
  - Remove all comments and extra space from a new document after content is added.
  - Static visuals can be added to support a concept, but try to keep them
    as simplified as possible. Examples can be viewed in Figma at
    https://www.figma.com/file/2XRq1MnIG69iti76Mh9HpJ/Pajamas-visual-examples?node-id=39%3A0.
  - If content isn't available for a required section, add a todo for
    future completion.
  - Typographer quotes (also known as smart quotes) are added when markdown is converted,
    so it isn't necessary to manually add or convert them.
-->
---
name: Stepper
description: A stepper conveys progress through numbered steps that allow users to input information in a prescribed order.
<!--
  `vueComponents` is used to pull the component from Storybook in order to generate the Implementation tab. Removing this will remove the Implementation tab for the component. List in alphabetical order.

  EXAMPLE:
  vueComponents:
    - GlAlert
-->
related:
  - progress-bar
<!--
  RELATED PATTERNS generates a list of links under a "Related" heading at the bottom of the rendered page. A related pattern should be similar in usage/type of pattern, or if the component is also part of another component. For example, a tooltip and a popover are similar constructs used for different purposes, or a button is its own component, but also present in a modal. Remove this section if there are no related patterns. List in order of most to least related. 

  EXAMPLE:
  related:
    - /layout/grid (link to pages that are not components using '/directory/pattern-name')
    - badge
-->
---

<!-- ## Examples

  LIVE CODED EXAMPLES are included here.

  EXAMPLE:
  <gl-example-display class="app-styles gl-mb-5"  example-name="alert-variants"></gl-example-display>
-->

<!--[View in Pajamas UI Kit →](link-to-page-or-frame)-->
<!--
  Update the design specifications link above to the component in the Pajamas UI Kit. In most cases this will be a link the component’s “Variants” frame. You can find this link by clicking on the “Variants” frame and then copying the link from the “Share” option. Follow the “Figma component” issue template in Pajamas to create the component.
-->

<!--## Structure

  Include a simplified visual of the component with the elements numbered to match the text reference below. Examples can be viewed in Figma at https://www.figma.com/file/2XRq1MnIG69iti76Mh9HpJ/Pajamas-visual-examples?node-id=39%3A0. Request access if needed to create a new visual. An ordered list should match the numbering in the visual. Each list item should begin with element name in **bold** formatting. Use the `figure` element to add the visual, like the below example:

  <figure class="figure" role="figure" aria-label="Button structure">
    <img class="figure-img" src="/img/button-structure.svg" alt="Numbered diagram of a button structure" role="img" />
  </figure>

  EXAMPLE:
  1. **Icon**: Supports the variant meaning.


1. **{element}**: Description.
1. …
-->

## Guidelines
<!--
  The Guidelines section contains the bulk of the page content. Sections are in the same order for every component and there's room where variable sections can be added.
-->

### When to use
<!--
  Include item(s) in a bulleted list that clarify when to use this component. Be direct and try not to reference specific parts of GitLab to keep these guides evergreen and applicable to any GitLab property.

  EXAMPLE:
  - Advise the user that they should be aware of, or address something related to their current context.
-->

- When users need an indication of progress within a staged process (for example, signing up for a new account).
- When a lot of data is requested by the user and can be broken down into chunks in a logical and linear order.

### When not to use
<!--
  Include item(s) in a bulleted list that clarify when NOT to use this component. Be direct and try not to reference specific parts of GitLab to keep these guides evergreen and applicable to any GitLab property.

  Here is a good place to reference an alternate component if it fits the use case better.

  EXAMPLE:
  - If you need to deliver an instance level message from an admin to all users, use a [broadcast message](/components/broadcast-message) instead.
-->

- When there are limited fields, instead use a [form](/components/form).
- When representing completion or progress of a continuous process, instead use a [progress bar](/components/progress-bar).

<!--
### Variants

  If the component has no variants, change this heading to "Appearance."

  EXAMPLES:
  - **Danger**: Advise the user that their attention is needed to address or be aware of a critical issue that relates to the current context. The variant name should be the first item and use **bold** formatting.

  -or-

  ### Appearance

  Background color is chosen by the admin from a set of swatches when creating the broadcast message.


1. **Horizontal:** description.
1. **Vertical:** 
-->

<!-- Begin variable content -->

<!--
  VARIABLE SECTIONS that relate to the component's visual appearance can be placed here. For example, sizes and states.

  ### Heading

  - …
  - …
-->

<!-- End variable content -->

### Behavior
<!--
  Bulleted list of items that describe the component behavior.

  EXAMPLE:
  - Permanently dismissible only when the alert relates to a user’s individual instance and wasn’t triggered by a system condition.
-->

- Steps are always linear, forcing the user to complete them in a specific order.
- **Back** and **Next** actions should always be available so users can navigtate back to previous steps in case they made a mistake.
- All steps should be shown if the number of steps are determined from the start. For example, when signing up for a new account, user input does not impact the total number of steps, so all steps can be shown. 
- Only one step should be populated at a time if the number of steps are undetermined. For example, if user input removes a future step, only one step should be shown at once. This follows [progressive disclosure guidelines](/usability/progressive-disclosure) and ensures that conditional logic can work properly without impacting the user's ability to navigate to previous steps.
- A confirmation dialog should be triggered if the user leaves the flow before they complete their process. Ideally, the progress would be saved so that when they return, they can pick up where they left off. If that is not possible, be sure to communicate they will lose all data they entered.


### Content
<!--
  Bulleted list of items that describe the content within the component. Use a subheading when multiple bullet points relate to one item.

  EXAMPLES:
  - All copy within an alert should be short, actionable, and use clear language.

  -or-

  #### Title
  - Be brief and keep it to a single line by utilizing a sentence fragment.
  - Avoid using punctuation such as periods, commas, or semicolons.
-->

- Each step has a title and optional description.
- If a step is optional, the description can state that it is.
- Step titles should be kept as concise as possible.
- Content in a step should always relate to the step title. When using steppers to request data from users, the content within the step should consist of form elements.

<!-- Begin variable content -->

<!--
  VARIABLE SECTIONS that are unique to this component can be placed here. For example, alignment and combinations.

  ### Heading

  - …
  - …
-->

<!-- End variable content -->

### Accessibility
<!--
  Bulleted list of items that describe the accessibility considerations within the component.

  EXAMPLE:
  - An alert should receive focus and use `aria-live` to announce its presence and allow a user to interact with it immediately.


- …
- …

-->

<!--## Reference

  An optional section for anecdotal comments on key decisions related to the component. This can also include notes about deprecated variants. Reference links should go to publicly available GitLab resources, like an issue, or the Docs site.
-->

<!--
  The list of related components and meta information is automatically added from the frontmatter.
-->