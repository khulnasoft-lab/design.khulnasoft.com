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

Use `GlDuoUserFeedback` from [gitlab-ui](https://gitlab-org.gitlab.io/gitlab-ui/?path=/docs/experimental-duo-duo-user-feedback--docs) to collect feedback on the AI's responses.

<figure-img alt="Modal with multiple checkboxes, a disclaimer about visibility, and a free text field." label="Example of the feedback form with generic content." src="/img/duo-feedback-modal.png"></figure-img>

A user's experience of AI output is more than just "good" or "bad". Gathering feedback in users' own words captures additional details and nuance. The free text questions in the form can be modified to be specific to an individual feature, if necessary.

Encourage users to provide as much context as possible to ensure their feedback is actionable, since the verbatim AI output is not stored for legal and privacy reasons.

### Call-to-action (CTA)

Ensure the CTA reinforces that users should only provide feedback on the AI's responses, not the entire feature.

Examples:

- Give feedback to improve this answer
- How was this response?

The CTA should be shown on each instance of AI output.

It is okay to use a **quick feedback** mechanism like the thumbs up 👍 or thumbs down 👎 buttons, but there must always be an option to provide **detailed feedback** with `GlDuoUserFeedback` when AI has given a response.
