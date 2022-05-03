---
name: Form
description: A form is for capturing and submitting user input.
stories:
  - base-form-form--default
  - base-form-form-group--default
  - base-form-form-input--default
  - base-form-form-textarea--default
related:
  - file-uploader
  - date-picker
  - color-picker
  - search
  - button
---

## Examples

<story-viewer story-name="base-form-form--default" title="Default form"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=425%3A10)

## Structure

<figure class="figure" role="figure" aria-label="Form structure">
  <img class="figure-img" src="/img/form-structure.svg" alt="Numbered diagram of a form" role="img" />
</figure>

### Form elements

Forms may include a variety of elements. By default all information in forms is required unless stated otherwise with "(optional)" added to the label of the corresponding element. However, if your form is entirely optional except for 1-2 fields, you may opt to append "(required)" to the field label instead.

1. **Label**: Clearly and concisely identifies an input.
2. **Input field**: Allows users to provide information. This can be entered by a variety of [form fields](/components/form#form-fields).
3. **Placeholder** (optional): Hints at what should be entered into a field. It's not a replacement for a visible label. An exception is the [search](/components/search) component.
4. **Description** (optional): Clarifies the purpose or intent of an input.
5. **Validation message**: Appears if the input is invalid, acceptable, or needs awareness.
6. **Help text** (optional): Provides contextual examples, formatting information, details about the input field state.
7. **Actions**: Used to submit or cancel a form.

## Guidelines

### When to use

- If user input needs to be captured by one or more form elements and manually submitted by the user.

### When not to use

- If user input invokes an immediate change, like a page refresh or setting being applied and submission isn't required, then a form shouldn't be used.

<todo>Make Forms it's own section with sub pages for components and concepts.</todo>

### Content

- Don't use punctuation. Special characters are allowed for formatting (`-` `:` `;`)
- Avoid repetitive or unnecessary text
- Use the [recommended word list](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html) for guidance
- Help text may include a [help link](/usability/helping-users) when necessary.

<story-viewer story-name="base-form-form-group--default" title="Form text input with help"></story-viewer>

- **Predefined options**: Only a prefix or suffix should be present and provide a unit or specificity.

<story-viewer story-name="base-form-form-input-group--default" title="Form text input with prefix"></story-viewer>

### Optional and required fields

When constructing a form, consider its purpose. Take note of whether the majority of the fields are required or not. If most fields are **required**, then  add the suffix "(optional)" to the label.

This will help reduce visual noise and clutter and ensure consistency.

<story-viewer story-name="base-form-form-group--with-textarea" title="Optional field"></story-viewer>

### Form fields

- **Text input**: The `<input type="text">` element is the default input type,  used for a single line of text.

<story-viewer story-name="base-form-form-input--default" title="Default form text input"></story-viewer>

- **Text area**: The `<textarea>` is used for multi-line text.

<story-viewer story-name="base-form-form-textarea--default" title="Default form text area"></story-viewer>

- **Select**: `<select>` element creates a dropdown of options. See the [dropdown](/components/dropdown) component documentation for dropdowns that are not part of a form. For example, navigation or menus.

<story-viewer story-name="base-form-form-select--default" title="Default form select"></story-viewer>

- **[Checkbox](/components/checkbox)**: use when there are lists of options.

<story-viewer story-name="base-form-form-checkbox--default" title="Default form checkbox"></story-viewer>

- **[Radio buttons](/components/radio-button)**: use when there is a mutually exclusive list of two or more options.

<story-viewer story-name="base-form-form-radio--default" title="Default form radio buttons"></story-viewer>

### Buttons

- **Clear**: The [clear](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~clear) icon is positioned on the right side of the field and clears the content. When the content is cleared, the button is removed.
- **Search**: The [search](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~search) icon submits a query. See the [search](/components/search) component page for details.
- **Calendar**: The [calendar](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~calendar) icon toggles a date picker. See the [date picker](/components/date-picker) component page for details.
- **Show/hide**: Switching between the [eye](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~eye) and [eye-slash](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~eye-slash) icons toggles masked and unmasked appearance of content.
- **Submit**: Either `<input type="submit">` or a `<button>` element submits the form data. Both use the [confirm](/components/button#variants) button variant.

### Layout

By default a form flows top to bottom in a single column. Inline inputs in a vertical form are only acceptable when they’re related, for example, name and surname. In a tabular layout, a form can use both columns and rows.

In rare cases, a `<label>` can be placed to the left of the input. For example, in a [filter](/components/filter) section or a [date picker](/components/date-picker).

Input and selection controls can be any width that uses a [base-8 progression](/layout/spacing). There are also five preset sizes that can be used to normalize the width in any form. When considering responsive behavior, these should be regarded as maximum widths.

- **Extra small**: 80px wide
- **Small**: 160px wide
- **Medium**: 240px
- **Large**: 320px
- **Extra large**: 560px

### Behavior

Form components may display the following behaviors:

#### Validation

- Validation is shown inline and may happen in real-time or on form submission.
- Real-time validation should confirm correct content or help prevent users from submitting the form with incorrect information.
- It should always be visible and not placed in a tooltip.
- The validation message is placed directly below the input, and above any help text.

<story-viewer story-name="base-form-form-group--with-validations" title="Form group with validations"></story-viewer>

There are three types of validation messages:

- **Error**: Indicates content that can’t be submitted, or was invalid and in need of correction.
- **Warning**: Indicates content that may be formatted incorrectly or does not match the expected content.
- **Success**: Indicates content that is valid. In most cases a success message isn't shown.

#### Text limits

Text limits are indicated through a character counter. A user may keep typing when the limit is reached, though that might impact successful form submission.

There are two kinds of character counters:

- **Limited length**: Indicates the total number of characters allowed. When a limit is in place, the counter should be visible by default, and include a scrim (gradient overlay) to prevent collisions with characters in the input. As a user types, the counter shows how many characters remain before reaching the limit.
  - When the number of characters is 30 from the limit, the counter color changes to the `warning` style. It remains styled this way even when the counter reaches 0.
  - When the number of characters crosses the limit, the counter color changes to `danger`, and its font weight to bold. The counter then displays the number of characters over the limit (for example **-23**) with a `$red-200` background color.
  - Hovering over the counter reveals a tooltip that says, “Characters left”. Once over the limit, the text changes to, “Characters over limit”.
- **Recommended length**: Indicates how close a user is to reaching (or surpassing) a recommended character length for the field. This type of counter is *not* present by default.
  - When the number of characters is 30 away from the recommended length, the counter appears within the text area, below the characters, in a `secondary` style. It remains styled like this even when the counter reaches 0.
  - When the number of characters crosses the recommendation, the counter color changes to `info`. The count displays the number of characters over the limit (for example -23) with a `$blue-100` background color.
  - Hovering over the counter reveals a tooltip that says, “Recommended characters left”. Once over the recommended range, the text changes to, “Over recommended length”.

#### Hiding and disabling elements

Hide an element if a user doesn't need access to it.

Disable an element with the `disabled` attribute if the user lacks permission to interact with it, but still needs to know it exists. If an element is already populated, but the user doesn't have permission to edit it, use the `readonly` attribute.

<story-viewer story-name="base-form-form-group--disabled" title="Disabled form group"></story-viewer>

By default a submit button is enabled. Don't disable submit buttons as a way of validating forms. However, disabling a submit button may still make sense in some cases. For example, when editing content and a required change is still incomplete, or after the submit button has already been clicked, which prevents form re-submission.

Including help text below a field explaining why it's disabled can be useful, but note that a disabled element isn't in the focus order. However, the content will still be discoverable with other screen reader methods.

#### Quick submit

A Form should support the "quick submit" behavior, which allows it to be submitted from any control (including Markdown editors) using <kbd>⌘</kbd> + <kbd>Enter</kbd> (or <kbd>Ctrl</kbd> + <kbd>Enter</kbd>).

Note to developers: the quick submit behavior can be automatically added to a form using the `js-quick-submit` CSS class implemented in [`quick_submit.js`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/assets/javascripts/behaviors/quick_submit.js).

### Accessibility

- By default, a `<label>` should use the `for` attribute to associate it with the input ID. Alternately `aria-labelledby` can be used when the label is visible, and `aria-label` can be used in place of a visible label.
- Use `aria-describedby` to programmatically associate a description with an input.
- Use `aria-describedby` to programmatically associate help text with an input.
- The clear button should be implemented as a `<button>`, accessible via keyboard, and its name announced as “Clear” for assistive technology. After content is removed focus is placed back on the input.

#### Keyboarding

- When keyboard focus is inside an input field, pressing the <kbd>Enter</kbd> key should submit the form (provided there are no validation errors). This doesn't apply to mutli-line fields, such as Markdown editors, since these controls need to support the input of new lines.
- There are some cases in which the submit-on-Enter behavior should be disabled. For example, if a form has a dropdown control that includes a search bar, pressing <kbd>Enter</kbd> inside the search bar should **not** submit the form. In general, this behavior should be disabled for input elements that do not directly edit a form’s data.
