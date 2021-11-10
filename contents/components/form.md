---
name: Form
description: A form is for capturing and submitting user input.
vueComponents:
  - GlFormGroup
  - GlFormInput
  - GlFormTextarea
related:
  - file-uploader
  - date-picker
  - color-picker
  - search
  - button
---

## Examples

[[Example:form-group]]

[[Example:form-group-disabled]]

[[Example:form-group-validations]]

Todo: Add additional examples to demonstrate different configurations and capabilities.

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A10)

## Structure

Todo: Add form structure visual and item list.

## Guidelines

### When to use

- Use a form when user input needs to be captured and manually submitted by the user.

### When not to use

- If user selection or input invokes an immediate change, like a page refresh or setting being applied, and submission isn't required then a form shouldn't be used.

Todo: Make Forms it's own section with subpages for components and concepts.

### Form items

There are many parts that comprise a form. To help organize these better they're grouped into the following categories:

- [Text](#text)
- [Input and selection](#input-and-selection)
- [Buttons](#buttons)

#### Text

Identify and clarify input and selection.

- **Label**: A `<label>` clearly and concisely identifies the input.
- **Description**: 1–2 sentences directly below the label can be used to describe the purpose or intent of the input as an explanation or instructions when it may be unclear how or where the user's entry or selection will be used, or to provide an explanation beyond what a label infers.
- **Help**: Text directly below the input can be used to provide contextual examples or formatting information. Additionally, a link or [help link](/usability/helping-users) can provide a contextual action or supplemental information.
- **Placeholder**: Text in a `placeholder` attribute should only be used if the input purpose is still understood were it not there. It is not a replacement for a visible label. An exception is the [search](/components/search) component, which also includes a [search](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~search) icon to identify its purpose.
- **Character counter**: There are two methods for providing character count feedback. A user are can keep typing when the limit or the recommended length is reached, although it may prevent form submission.
  - **Limited length**: Let a user know the amount of characters allowed in a text input field or text area.
    - Visible by default when there is a limit.
    - Includes a scrim (gradient overlay) to prevent colliding with characters in the input. 
    - As a user types, the counter shows how many characters remain before reaching the limit.
    - When the number of characters entered is 30 away from the limit, the counter changes its color to the `warning` style. It remains styled like this even when it reaches 0.
    - When the number of characters entered crosses the limit, the counter changes its color to `danger`, its font weight to bold, and counts the number of characters that are over the limit (for example **-23**).
    - The characters that are over the limit are also marked with a background set in `$red-200`.
    - While hovering over the limited length character counter a tooltip with the label “Characters left” must show up. Once over the limit, the label is changed to “Characters over limit”.
  - **Recommended length**: Let a user know when they've reached and/or surpassed the recommended length in a text input or a text area.
    - The character counter is *not* present by default.
    - When the number of characters entered is 30 away from the recommendation, the counter appears within the text area bounds, but below the characters, and styled with the `secondary` style. It remains styled like this even when it reaches 0.
    - When the number of characters entered crosses the recommendation, the counter changes its color to `info`, its font weight remains regular, and counts the number of characters that are over the limit (for example -23).
    - The characters that are over the recommended length are also marked with a background set in `$blue-100`.
    - While hovering over the recommended length character counter a tooltip with a label “Recommended characters left” must show up. Once over the recommended range, it changes to “Over recommended length”.

#### Input and selection

Controls that accept user input and provide selection.

- **Text input**: The `<input type="text">` element is the default input type and used for a single line of text.
- **Text area**: The `<textarea>` is used for multi-line text. Predefined widths from the **Input fields** section apply to text area as well.
- **Checkbox**: See the [checkbox](/components/checkbox) component page for details.
- **Radio button**: See the [radio button](/components/radio-button) component page for details.
- **Select**: The `<select>` element creates a dropdown of options.

#### Buttons

Interactive options and submission.

- **Clear button**: A button with the [clear](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~clear) icon can appear within the right bounds of a populated input field to clear the content. After clearing the content, the button is removed.
- **Search button**: A button with the [search](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~search) icon can be used to submit a query. See the [search](/components/search) component page for details.
- **Calendar button**: A button with the [calendar](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~calendar) icon can be used to toggle a date picker. See the [date picker](/components/date-picker) component page for details.
- **Show/hide button**: A button that switches between the [eye](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~eye) and [eye-slash](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~eye-slash) icons as it toggles masked and unmasked appearance of the content.
- **Submit button**: Either `<input type="submit">` or a `<button>` element submit the form data. The [confirm](/components/button#variants) button variant should be used.

### Sizes

- Input and selection controls can be any width that uses a [base-8 progression](/layout/spacing).
- There are also five preset sizes that can be used to normalize the width in any given form. When considering responsive behavior, these should be regarded as maximum widths.
  - **Extra small**: 80px wide
  - **Small**: 160px wide
  - **Medium**: 240px
  - **Large**: 320px
  - **Extra large**: 560px

### Layout

- By default a form flows top to bottom in a single column.
- In a tabular layout a form can use both columns and rows.
- Inline inputs in a vertical form are only acceptable when they’re related. For example, name and surname. 
- In a rare case a `<label>` can be placed to the left of the input. For example, in a [filter](/components/filter) section or a [date picker](/components/date-picker).

### Validation

- Validation should be shown inline and happen in real-time or on submission.
- Real-time validation should confirm correct content or assist a user to input the correct information to prevent them from attempting to submit the form with possibly incorrect information.
- Validation should always be visible and not placed in a tooltip.
- The validation message is placed directly below the input, and above any help text.
- There are three types of validation messages:
  - **Error**: Indicates content that can’t be submitted or was found to be missing or invalid and needs to be corrected.
  - **Warning**: Indicates content that may be formatted incorrectly or does not match the expected content.
  - **Success**: Indicates content that is valid. In most cases a success message isn't shown.

#### Required vs. optional

By default all information is required unless stated otherwise with "(optional)" added to the label of the corresponding input field.

### Disabling and hiding elements

- Disable an element with the `disabled` attribute when the a user doesn't have permission to populate or select it, but still needs to know it exists.
- If an element is already populated, but the user doesn't have permission, use the `readonly` attribute.
- Including help text below the field to explaining why it's disabled can be helpful, but note that a disabled element isn't in the focus order. The content will still be discoverable with other screen reader methods.
- Hide an element for all users if a user doesn't need disclosure or access to an item.
- By default a submit button is enabled and isn't disabled as a way of validating forms.
- A submit button is disabled once clicked to avoid the possibility of submitting the form twice.
- Disabling a submit button by default can still make sense in some cases.For example, when editing content and a change has yet to be made that would necessitate submitting.

##### Quick submit

- A Form should support the "quick submit" behavior, which allows it to be submitted from any control (including Markdown editors) using <kbd>⌘</kbd> + <kbd>Enter</kbd> (or <kbd>Ctrl</kbd> + <kbd>Enter</kbd>).

Note to developers: the quick submit behavior can be automatically added to a form using the `js-quick-submit` CSS class implemented in [`quick_submit.js`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/assets/javascripts/behaviors/quick_submit.js).

### Accessibility

- By default, a `<label>` should use the `for` attribute to associate it with the input ID. Alternately `aria-labelledby` can be used when the label is visible, and `aria-label` can be used in place of a visible label.
- Use `aria-describedby` to programmatically associate a description with an input.
- Use `aria-describedby` to programmatically associate help text with an input.
- The clear button should be implemented as a `<button>`, accessible via keyboard, and its name announced as “Clear” for assistive technology. After content is removed focus is placed back on the input.

#### Keyboarding

- When keyboard focus is inside an input field, pressing the <kbd>Enter</kbd> key should submit the form (provided there are no validation errors). This doesn't apply to mutli-line fields, such as Markdown editors, since these controls need to support the input of new lines.
- There are some cases in which the submit-on-Enter behavior should be disabled. For example, if a form has a dropdown control that includes a search bar, pressing <kbd>Enter</kbd> inside the search bar should **not** submit the form. In general, this behavior should be disabled for input elements that do not directly edit a form’s data.
