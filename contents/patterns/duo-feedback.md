---
name: Feedback
related:
  - /components/button
  - /components/link
---

## Overview

The output an AI produces is not entirely predictable. It's important to monitor the AI's output to understand the quality and if it satisfies user needs. Additionally, users should have the ability to report AI output they find harmful or malicious.

User-provided feedback should always be aggregated with other data, such as user interviews, to form a complete picture.

## Guidelines

Use the [duo-user-feedback](https://gitlab-org.gitlab.io/gitlab-ui/?path=/docs/experimental-duo-duo-user-feedback--docs) component to collect feedback on the AI's responses. The shared component helps avoid duplicated effort and [track feedback](https://10az.online.tableau.com/#/site/gitlab/views/DuoFeedbackDashboard/DuoFeedbackDashboard) trends across AI features. The duo-user-feedback component enables the addition of custom questions to collect feedback specific to each feature.

<figure-img alt="Example of the feedback form" label="Example of the feedback form with generic content." src="/img/duo-feedback-modal.svg"></figure-img>

The use of a feedback form enables users to provide detailed feedback, which can be translated into actionable insights to improve the feature.

### Call-to-action (CTA)

The form gathers feedback on the AI output, not the entire feature. Ensure the CTA clearly states that users are providing feedback on the AI's responses. Each instance of AI output should include a feedback form call-to-action. For example, every response from Duo Chat should have a CTA to open the feedback form.

To encourage feedback, highlight how user input contributes to improving the feature. Consider adding a note near the CTA or within its label to reinforce this message:

<figure-img alt="Duo Chat feedback CTA" label="The CTA indicates that feedback will improve the answer." src="/img/duo-feedback-cta.svg"></figure-img>

The feedback form can be used in conjunction with other feedback mechanisms. However, the call-to-action to open the feedback form should always be accessible.

<figure-img alt="The feedback modal CTA with thumbs up/thumbs down." label="The feedback form CTA should always be accessible." src="/img/duo-thumbs-feedback.svg"></figure-img>

### Providing context in feedback

The verbatim AI output is not stored for legal and privacy reasons. Encourage users to provide as much context as possible to ensure their feedback is actionable.
