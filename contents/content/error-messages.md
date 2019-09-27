---
name: Error messages
related:
  - forms
  - alerts
  - broadcast-messages
---

Error messages are an indication of system status. They let users know that they have encountered a problem and provide ways to resolve it, teaching them to avoid future impediments. Whenever possible, the system should keep potential errors to a minimum. See [error prevention](/usability/error-prevention) guidelines.

Error messages can be persistent, dismissible, or temporary. In order to be effective, error messages should be concise, consistent, and specific.

Todo: Add guidelines on when an error message should be persistent, dismissible or temporary.

### Dos and don'ts

| Do | Don't|
| --- | --- |
| Use a contextual error message for each error instance. | Use a generic error message for all error instances. |
| Use live-validation in combination with system validation. | Prevent users from attempting to submit a form or item in case of live-validation errors. |
| Display the error message below the input field | Display the error message in a tooltip or on click. |
| Take users to a different screen/display a different view if users don't have permission to do something in the application. | Use an error message to tell users they don't have permission or are not eligible to do something. |

### Concise

Describe the error message and always inform users what has happened, and how to resolve it. The general [voice and tone](/brand-content/voice-and-tone) guidelines for GitLab’s public communications should apply to all error messages.

Use messages like:

- An error occurred while importing the project to GitLab. For more information, see how to [import your project from GitHub to GitLab](https://docs.gitlab.com/ee/user/project/import/github.html).
- The project name must be 40 characters or fewer.
- Your email is required to sign up with GitLab.

### Consistent

To reduce the cognitive effort needed from users to understand the error, display the error message next to the field or page area where it occurs. All messages should look, sound, and mean the same, according to the component they're displayed in.

Todo: Add example of consistent error messages in different alert types

### Specific

Generic error messages are not helpful, and they don't make sense out of context. Avoid messages that sound like:

- Undefined error.
- An error occured.
- Field is required.
- Field can't be blank.
- Name is too short.

Instead, provide different errors for different messages and scenarios. Error messages for specific situations are more helpful to users. For example, errors in text fields can be too long, too short, in the wrong format, etc.

## Error messages and scenarios

Error messages can be used in the following scenarios:

### Errors in forms

| Error scenario | When to display it | Component | Example message |
| --- | --- | --- | --- |
| The user enters data that doesn't meet the field requirements. | The user clicks or tabs away, or stops typing in the input field. | [Form validation](/components/forms#validation): Displayed inline, below the input field | `Enter a valid email address` |
| The system detects one or more errors in the form data. | The user submits a form that contains an error on one or more fields. | [Form validation](/components/forms#validation): Displayed inline, below the input field. Focus should be on the error fields. | `Your email is required to signing up with GitLab` |
| The user skips a required form field. | The user clicks or tabs away from the field. | [Form validation](/components/forms#validation): Displayed inline, below the input field. All fields are required unless stated otherwise with “(optional)” added to the label of the corresponding input field. | `Enter a name for your project` |

### Errors on a page

| Error scenario | When to display it | Component | Example message |
| --- | --- | --- | --- |
| The content or section of a page cannot be loaded | A system error is affecting the user's current session. | Error page | The page could not be found. Make sure the address is correct and that the page hasn't moved. | 
| The content of a page is inacessible. | The page cannot be accessed or be found, or user doesn't have enough privileges. | Error page | You don't have permission to view this page. Please contact your GitLab administrator if you think this is a mistake. |

### Errors in the system

Todo: Add examples for errors in the system

## Related patterns

- [Error prevention](/usability/error-prevention)
- [Helping users](/usability/helping-users)
- [Saving and feedback](/product-foundations/saving-and-feedback)
