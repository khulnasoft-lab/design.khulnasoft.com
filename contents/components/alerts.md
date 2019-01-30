---
name: Alerts
related:
  - broadcast-messages
  - forms
  - toasts
---

Alerts allow the application to pass along relevant system information to the user without impeding their journey. Alerts can be either system generated or user-generated; however, they are not [validation](https://design.gitlab.com/components/forms#validation) error messages, nor are they feedback notifications after the user takes action, see [toasts](https://design.gitlab.com/components/toasts) for more information. Alerts may contain a dismiss button and an action button depending on the situation. 

## Usage

|Component type|Purpose|
| --- | --- |
|Danger alerts| To advise the user that their attention is needed to address a critical issue in the system. |
|Warning alerts|To caution the user that their attention may be needed due to an issue in the system, however, it is not critical that they take action.|
|Information alerts| To inform the user of the resulting system changes that will take place based on their action.| 
|Tip alerts| To educate the user about new or unused features, and other useful information.|
|Success alerts| To affirm that the user has taken the proper steps to address a system issue or that a prior action they've taken was successful.|

### When to use alerts

Alerts should be used when the system needs to notify the user of its status or to provide the user with information about their current experience. Deciding when to use a broadcast message, error, toast or an alert can be tricky, see the below use cases to get a better understanding of when to use an alert:

| Alert | Use case | Example |
| ----- | -------- | -------- |
| Danger | Configuration issue | Use a danger alert when there is a configuration issue with the `.gitlab-ci.yml` file. |
| Warning | Missing files from a commit | Use a warning alert when the `.gitlab-ci.yml` file is not found in the commit. |  
| Information | Changes stemming from a user's action | Use an information alert in Settings/Export-project to detail what will happen when a user exports a project.  |
| Tip | Promotional offer  | Use a tip alert in Operations/Kubernetes to make the user aware of a GCP credit offer. |
| Success | Confirmation of a proper configuration | Use a success alert when the user sets-up security checks correctly and the jobs run properly for the first time. |

### When not to use alerts

There are times when using an alternative component other than an alert is necessary to provide the best experience to the user. See the following use cases to get a better idea of when not to use an alert: 

| Component | Use case | Example | Why an alert was not used |
| ---- | ---- | ---- | ---- |
| [Broadcast Message](https://design.gitlab.com/components/broadcast-messages) | Deliver critical, user-generated messages all users | Use a broadcast message when an admin wants to relay a critical message to all users at the instance level. | Broadcast messages are created by an admin and not the system. We want to differentiate between system-generated and user-generated messages, hence a broadcast message is used in this case. |
| [Validation error](https://design.gitlab.com/components/forms#validation) | Notification of an invalid action | Use an error when the user has entered invalid characters into the project name field. | We want to immediately communicate to the user that they have taken an invalid action. Using an error will provide the best experience due to is differentiation from the danger alert, allowing the user to recognize that they have only taken an invalid action and nothing else. |
| [Toast](https://design.gitlab.com/components/toasts) | Immediate confirmation of an action | Use a toast when the user has dismissed a vulnerability and it no longer appears in the list.  |  We want to reaffirm to the user the system recognized their action and that no further action is needed on their part. Toasts, by design present this notification in the best experience. |

## Demo

The alert pattern is designed to be flexible and accounts for as many use cases as possible.

Todo: Add an example of a non-dismissible alert related to a usage guideline.

Todo: Add an example of a dismissible alert related to a usage guideline.

Todo: Add an example of an alert with an action button.

## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for Alerts](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/alerts-spec-previews/)
