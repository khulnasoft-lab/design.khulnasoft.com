---
name: Alerts
related:
  - broadcast-messages
  - toasts
---

Alerts allow the application to pass along relevant system information to the user without impeding their journey. Alerts can be either system generated or user-generated, however, they are not error validation messages, nor are they feedback notifications after the user takes action, see [toasts](https://design.gitlab.com/components/toasts) for more information. Alerts may contain a dismiss button and an action button depending on the situation. 

## Usage

|Component type|Purpose|
| --- | --- |
|Danger alerts|To be used for critical warnings that require the user's attention.|
|Warning alerts|To be used for other non-critical warnings that require the user's attention.|
|Information alerts|To be used to display important information to the user related to their task.|
|Tip alerts|To be used to display tips on using GitLab, new/unused features, and other marketing information.|
|Success alerts|To be used to alert the user that the action they have completed was successful.|

### When to use alerts

Alerts should be used when the application needs to notify the user with information pertaining to their current experience. Deciding when to use a toast, error or an alert can be tricky, see the below use cases to get a better understanding of when to use an alert:

#### Example use cases

| Alert | Use Case | Example |
| ----- | -------- | -------- |
| Danger | Configuration error | Use a danger alert when there is a configuration issue with the `.gitlab-ci.yml` file. |
| Warning | Missing files from a commit | Use a warning alert when the `.gitlab-ci.yml` file is not found in the commit. |  
| Information | Inform a user | Use an information alert in Settings/Export-project to detail what will happen when a user exports a project.  |
| Tip | Promotional offer  | Use a tip alert in Operations/Kubernetes to make the user aware of a GCP credit offer. |
| Success | Confirmation of a proper action | Use a success alert when the user sets-up security checks correctly and the jobs run for the first time. |


## Demo

The alert pattern is designed to be flexible and accounts for as many use cases as possible.

Todo: Add an example of a non-dismissible alert related to a usage guideline.

Todo: Add an example of a dismissible alert related to a usage guideline.

Todo: Add an example of an alert with an action button.


## Design specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for Alerts](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/alerts-spec-previews/)
