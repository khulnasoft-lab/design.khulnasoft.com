---
name: Feature discovery
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

| Pattern              | Definition                                                                                                     | Examples                | Recommendation         |
| -------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------- |
| Implicit discovery   | Features are discovered naturally as the user interacts with the interface, without overt prompts or guidance. | Navigation, Empty state | Preferred              |
| Contextual discovery | Features are highlighted in context, as the user reaches a point where the feature is relevant or useful.      | Badge                   | Use with justification |
| Disruptive discovery | Features or information are presented in a way that interrupts the user’s flow.                                | Modal, Banner           | Use sparingly          |

### Implicit discovery

Before adding feature discovery notices, explore solutions where the feature is not actively promoted. Ensure that features are introduced at the right moment in the user's journey. Validate that the call-to-action is clear and understood. This approach avoids clutter and allows users to naturally engage with functionality as they need it.

### Contextual discovery

Contextual notices are subtle UI elements that draw attention or explain a feature, such as additional text, a [badge](/components/badge), or an [icon](/components/icon). Contextual notices should be positioned near the relevant context of the user’s task and avoid disrupting the user's workflow.

<figure-img alt="A static notice informs users of an alternate way to create a project." label="A static notice informs users of an alternate way to create a project." src="/img/create-project.svg"></figure-img>

Contextual notices can be helpful when a feature requires more guidance than a call-to-action alone. If needed, allow users to access additional information through progressive disclosure. Ensure the help content is visible without overwhelming users with too much detail upfront, providing more information only when they seek it.

<figure-img alt="Popover is shown on button hover" label="Popover is shown on button hover." src="/img/info-on-hover.svg"></figure-img>

Use contextual notices when implicit discovery doesn’t suffice, for example:

- **Complex or novel features:** Features that users are not familiar with and need additional information to encourage engagement.
- **Limited visibility:** When a feature is not noticed alongside competing actions and users' previous mental models.

### Disruptive discovery

Disruptive notices, such as a [banner](/components/banner) or [modal](/components/modal), are more noticable than contextual notices. A disruptive notice that doesn't match the user's current context can feel irrelevant and lead to dismissal and therefore limited effectiveness.

<figure-img alt="A banner helps a new user onboard to a esstential feature." label="A banner helps a new user onboard to a essential feature." src="/img/feature-discovery-banner.svg"></figure-img>

Use disruptive discovery when contextual discovery doesn't suffice, such as:

- **Critical notices:** When engagement is required from the user. For example, to comply with a policy in the organization.
- **User onboarding:** When guiding new users through essential features that they need to understand to use the product effectively.
- **Significant changes:** When the product's functionality has changed in a way that could confuse users or alter their workflows, a prominent notice can clarify the changes.

Be mindful of what notices already exist in the user's workflow. Multiple prominent notices and alerts can overwhelm users, leading to desensitization to important messages.

## Onboarding

A well-designed onboarding process can be an effective way to introduce a user to a new feature, like _CI/CD setup_, or product stages, such as _adopt the Secure DevOps stage_. However, it's primary goal is to showcase the value a user gains from these features and stages.

### Guidelines for onboarding experiences

- Identify the value that you're trying to give to the user and work backwards from that. Having a new feature that you want to showcase alone isn't a good reason for onboarding. What is the user-facing value of the new feature? How will they benefit from it?
- Provide a "No, thanks" option that allows users to opt out.

### Think about the user's context

The next step should be to think about the user's context. Where in the app are they? What are they doing? How familiar are they with what you want to show them? Do they have the ability to perform the task? Is their motivation high enough? If not, how will you improve their ability or increase their motivation? Where will you place the prompt so that it’s contextual?

### Patterns for initial prompts

The following patterns can be used as initial prompts to start the onboarding flows. Consult the intrusion level, pattern effectiveness, and recommendations for each one when deciding which to use.

| Pattern name    | Intrusion | Effectiveness | Notes and recommendations                                                                                                                                                                                       |
| --------------- | --------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Popover         | High      | High          | No major changes to the UI required. Use at the beginning or end, not in the middle, of a complex flow or task. Use to guide a user through different pages.                                                    |
| UI modification | Medium    | Medium        | Not a reusable component. Can be used in combination with others but generally requires significant changes to UI. For example, an empty pipeline widget when no pipeline is present on the Merge Request page. |
| Banner          | Low       | Low           | Might require significant changes to the UI. For example, displacement of default elements.                                                                                                                     |
| Empty state     | Low       | High          | Empty states can be used as great starting points for onboarding flows. They’re not intrusive as there’s no content to show; they can give context, explain the value, and provide a CTA.                       |

### Recommendations for writing copy and providing context

Consider the following recommendations to make your initial prompts more effective and contextual.

- Always explain why the initial prompt is shown (for example, _you don’t have a pipeline to check the quality of your code, we can show you how to set it up quickly._)
- What is the value that the user will get from it (for example, _it will make your code more secure and robust._)
- Avoid generic CTA copy like “Let’s go” or “Show me how”. Use something that will tell the user what value they’ll get out of it so that even if they only scan through the copy of the prompt, they’ll still have a good idea of what it is they’re doing and what the result will be. Good example: ”Secure your code”.

### Follow-up prompts

Sometimes, the onboarding flow will span across different pages. When that’s the case, use the [popover](/components/popover) component to keep a user on the right path. The popovers can be animated in with a short delay after the page has loaded to make sure that they’re noticed.

### How many steps?

When an onboarding flow expands across several steps (and possibly pages), try to aim for three steps. Five should be the maximum. If you think you need more, consider breaking it down into multiple and smaller flows. The more steps an onboarding flow has, the less likely it is that a user will complete it.
