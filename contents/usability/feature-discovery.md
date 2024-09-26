---
name: Feature discovery
  - banner
  - popover
  - /patterns/empty-states
---

Feature discovery helps users uncover useful functionality that helps them achieve their goals. Feature discovery can be used to introduce new, updated, or underutilized features.

## Feature discovery patterns

| Pattern name               | Recommendation         |
| -------------------------- | ---------------------- |
| Implicit feature discovery | Recommended            |
| Contextual notices         | Use with justification |
| Prominent notices          | Use sparingly          |

### Implicit feature discovery

Before adding feature discovery notices, explore solutions where the feature is not actively promoted. Ensure that features are introduced at the right moment in the user's journey. Validate that the call-to-action is clear and understood. This approach avoids clutter and allows users to naturally engage with functionality as they need it.

### Contextual notices

Contextual notices are subtle UI elements that draw attention or explain a feature, such as additional text, a [badge](/components/badge), or an [icon](/components/icon). Contextual notices should be positioned near the relevant context of the user’s task and avoid disrupting the user's workflow.

<figure-img alt="A static notice informs users of an alternate way to create a project." label="A static notice informs users of an alternate way to create a project." src="/img/create-project.svg"></figure-img>

Contextual notices can be helpful when a feature requires more [guidance](#onboarding-ui-copy) than a call-to-action alone. If needed, allow users to access additional information through progressive disclosure. Ensure the help content is visible without overwhelming users with too much detail upfront, providing more information only when they seek it.

<figure-img alt="Popover is shown on button hover" label="Popover is shown on button hover." src="/img/info-on-hover.svg"></figure-img>

Use contextual notices when implicit discovery doesn’t suffice, for example:

- **Complex or novel features:** Features that users are not familiar with and need additional information to encourage engagement.
- **Limited visibility:** When a feature is not noticed alongside competing actions and users' previous mental models.

### Prominent notices

Prominent notices are more disruptive and noticable than contextual notices, such as a [banner](/components/banner) or [modal](/components/modal). A prominent notice that doesn't match the user's current context can feel irrelevant and lead to dismissal and therefore limited effectiveness.

<figure-img alt="A banner helps a new user onboard to a esstential feature." label="A banner helps a new user onboard to a essential feature." src="/img/feature-discovery-banner.svg"></figure-img>

Use prominent notices when contextual notices don't suffice, such as:

- **Critical notices:** When engagement is required from the user. For example, to comply with a policy in the organization.
- **User onboarding:** When guiding new users through essential features that they need to understand to use the product effectively.
- **Significant changes:** When the product's functionality has changed in a way that could confuse users or alter their workflows, a prominent notice can clarify the changes.

Be mindful of what notices already exist in the user's workflow. Multiple prominent notices and alerts can overwhelm users, leading to desensitization to important messages.

## Additional considerations

Have a clear goal in mind when adding feature discovery notices to the UI. Consider your user's persona, task, and context when adding UI elements for feature discovery. Additional UI can introduce cognitive load or disrupt the user's flow, so it should be purposeful and unobtrusive. Consider the existing UI and any competing notices. Determine if the feature discovery UI should be shown to all users, or a subset of users. Strive to use the least amount of feature discovery elements needed to effectively capture user's attention.

Feature discovery elements are often temporary, they come with engineering costs. Establish metrics to measure their efficacy and ensure the effort aligns with your goal, confirming that the impact justifies the resources invested.

### Removing notices

Determine if feature discovery notices should be temporary or permanent by considering their original intent and whether that intent has been fulfilled. Assess whether keeping the notice visible provides value or distracts users.

For temporary notices, establish clear criteria for their dismissal. Generally, a notice may be removed when:

- The user dismisses the notice.
- The user interacts with a feature.

When the user has not interacted with the notice or the feature, determine the criteria to remove the notice. For example, the amount of time that has elapsed since the notice was displayed. The exact logic is determined by the context of the feature and the level of importance of the notice.

### Onboarding UI copy

Consider the following recommendations to make your initial prompts more effective and contextual.

- Always explain why the initial prompt is shown (for example, _set up your first pipeline..._)
- What is the value that the user will get from it (for example, _...to make your code more secure and robust._)
- Avoid generic CTA copy like “Let’s go” or “Show me how”. Use something that will tell the user what value they’ll get out of it so that even if they only scan through the copy of the prompt, they’ll still have a good idea of what it is they’re doing and what the result will be. Good example: ”Secure your code”.
