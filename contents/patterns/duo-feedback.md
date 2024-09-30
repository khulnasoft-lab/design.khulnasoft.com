---
name: Feedback
related:
  - /components/button
  - /components/link
---

## Overview

The output an AI produces is not entirely predictable. It's important to monitor the AI's output to understand the quality and if it satisfies user needs. Additionally, users should have the ability to report AI output they find harmful or malicious. Provide users with a way to give feedback on the AI's output in the UI.

User-provided feedback should always be aggregated with other data. Since most users don’t provide feedback, and those who do tend to report only when the AI [makes mistakes](https://gitlab.dovetail.com/insights/mqPtDYLPavImmJtGtQik), relying on it alone can create a skewed perspective. Therefore, it's crucial to also consider other data points, such as user interviews, product analytics, and the [evaluation framework](https://about.gitlab.com/direction/ai-powered/ai_model_validation/ai_evaluation/procedures/) to form the complete picture.

## Guidelines

Use the [duo-user-feedback](https://gitlab-org.gitlab.io/gitlab-ui/?path=/docs/experimental-duo-duo-user-feedback--docs) component to collect feedback on the AI's responses. The shared component helps avoid duplicated effort and [track feedback](https://10az.online.tableau.com/#/site/gitlab/views/DuoFeedbackDashboard/DuoFeedbackDashboard) trends across AI features.

<figure-img alt="Example of the feedback form" label="Example of the feedback form with generic content." src="/img/duo-feedback-modal.svg"></figure-img>

### Form

[Users struggle](https://gitlab.dovetail.com/projects/1zcL5n3UX0yD0PYHQzWhms/insights/present/1IoqjGt8wqk4oKCqftDBBE) to categorize their feedback as simply "good" or "bad" and prefer providing more context. A form enables users to provide detailed, nuanced feedback, which is richer in information and more actionable.

The shared component supports the addition of custom questions, to provide contextual feedback per feature.

### Call-to-action (CTA)

Each instance of AI output should include a feedback form call-to-action. For example, every response from Duo Chat should have a link to open the feedback form. The feedback form intended to gather feedback on the AI output specifically, not the entire feature. Ensure the CTA clearly states that users are providing feedback on the AI's responses.

To encourage feedback, highlight how user input contributes to improving the feature. Consider adding a brief note near the CTA or within its label to reinforce this message:

<figure-img alt="Duo Chat feedback CTA" label="The CTA indicates that feedback will improve the answer." src="/img/duo-feedback-cta.svg"></figure-img>

The feedback modal can be used in conjunction with other feedback mechanisms, such as thumbs up/thumbs buttons. However, the call-to-action to open the feedback form should always be accessible.

<figure-img alt="The feedback modal CTA with thumbs up/thumbs down." label="The feedback form CTA should always be accessible." src="/img/duo-thumbs-feedback.svg"></figure-img>

### Multiple feedback CTAs

Limit the number of requests for feedback in the UI to prevent overwhelming users. If multiple feedback prompts are necessary, ensure each one specifies the type of feedback being requested. For example, differentiate between “rate the AI output” and “general feature feedback” to avoid confusion.

<figure-img alt="Request for general feedback has a distinct UI and CTA." label="Request for general feedback has a distinct UI and CTA." src="/img/general-feedback.svg"></figure-img>

### Providing context in feedback

The verbatim AI output is not stored for legal and privacy reasons. Encourage users to provide as much context as possible to ensure their feedback is actionable.
