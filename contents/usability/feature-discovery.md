---
name: Feature discovery
summary: Introduce and promote new functionality, emphasizing user context, motivation, and value to ensure effective adoption.
related:
  - banner
  - popover
  - /patterns/empty-states
---

New features can enhance the experience and unlock significant value for users. However, a user’s context plays a significant role in how they engage with new functionality. According to the [FOGG Behavior Model](https://behaviormodel.org/), three factors impact people's behavior with regards to completion of tasks:

1. Their ability to perform the task.
2. Their motivation for the task.
3. The prompt that triggers the behavior.

Prompts to trigger the desired behavior succeed when motivation and ability are high enough. We can improve a user's _ability_ to perform a task by guiding them using discovery patterns and boost their _motivation_ by clearly communicating the value of a task. Keeping these principles in mind helps us to improve both the experience and make it more likely that a user achieves their desired outcome.

## Feature discovery patterns

| Pattern              | Definition                                                                                                     | Examples                                                                                    | Recommendation         |
| -------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------- |
| Implicit discovery   | Features are discovered naturally as the user interacts with the interface, without overt prompts or guidance. | [Navigation sidebar](/usability/navigation-sidebar), [empty states](/patterns/empty-states) | Preferred              |
| Contextual discovery | Features are highlighted in context, as the user reaches a point where the feature is relevant or useful.      | [Badge](/components/badge)                                                                  | Use with justification |
| Disruptive discovery | Features or information are presented in a way that interrupts the user’s flow.                                | [Modal](/components/modal), [banner](/components/banner)                                    | Use rarely             |

### Implicit discovery

Implicit discovery patterns are the preferred approach to integrate features into the experience. Before you add feature discovery notices, explore solutions where the feature is not actively promoted. When the user can find features within the context of their existing tasks, they remain focused and are not overwhelmed. Ensure that the feature is introduced at the right moment, and that the call-to-action is clear and understood. This approach promotes long-term engagement with new features as the user organically builds an understanding of the product.

### Contextual discovery

Before you consider contextual discovery, you should explore solutions where the feature is not actively promoted (see [implicit discovery](#implicit-discovery)). Contextual notices are subtle UI elements that draw attention or explain a feature, such as additional text, a [badge](/components/badge), or an [icon](/components/icon). These notices should be positioned near the relevant context of the user’s task and avoid disrupting the user's workflow.

<figure-img alt="Under the button to create a project, a static notice shows that it's also possible to create a project with the command line." label="A static notice informs the user of an alternate way to use the feature." src="/img/create-project.svg"></figure-img>

Contextual notices can be helpful when a feature requires more guidance than a call-to-action alone. If needed, allow the user to access more details through progressive disclosure. Ensure the help content is visible but don't overwhelm the user with too much information at first, and offer more details only when they seek it.

<figure-img alt="A badge with the label 'New' is shown next to a button. When the user hovers on the button, a popover appears and explains the feature." label="Popover is shown upon button hover." src="/img/info-on-hover.svg"></figure-img>

Use contextual notices when implicit discovery doesn’t suffice, for example:

- **Complex or novel features:** Features that the user is not familiar with and need additional information to encourage engagement.
- **Limited visibility:** When features are not noticed alongside competing actions and the user's previous mental models.

### Disruptive discovery

Before you consider disruptive discovery, you should explore solutions where the feature is not actively promoted (see [implicit discovery](#implicit-discovery)). Disruptive notices, such as a [banner](/components/banner) or [modal](/components/modal), are more noticeable than contextual notices. When a notice is disruptive and doesn't match the user's current context, it can have limited effectiveness, because it the user feels it's irrelevant and dismisses it.

<figure-img alt="A banner invites a new user to try GitLab CI, with a call-to-action to try a test template." label="A banner helps a new user onboard to an essential feature." src="/img/feature-discovery-banner.svg"></figure-img>

Use disruptive discovery when contextual discovery doesn't suffice, such as:

- **Critical notices:** When engagement is required from the user. For example, to comply with a policy in the organization.
- **User onboarding:** To guide a new user through essential features that they need to understand to use the product effectively.
- **Significant changes:** When functionality changed in a way that could confuse a user or alter their workflows, a prominent notice can clarify the changes.

Be mindful of what notices already exist in the user's workflow. Multiple prominent notices and alerts can overwhelm them and lead to desensitization to important messages.

