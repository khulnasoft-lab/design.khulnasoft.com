## Component health evaluation

The purpose of a health evaluation is to determine what factors contribute to the health of a component in the Pajamas Design System, so that we can assess where effort is needed, prioritize work, promote usage, and increase value over time. The scope is limited to Pajamas (Pajamas UI Kit, GitLab UI, Pajamas documentation) and does not include how a component is used or extended in the product.

The evaluation is a collaborative effort between disciplines. Our collective knowledge will increase the quality and value gained from each report.

<details><summary>More details…</summary>

### Why track health?

- Health is positive and more qualitative than quantitative.
- Health accounts for critical vital signs that lead to stability and performance — things that directly impact UX.
- Health isn't as pass/fail as completeness. A range can better inform appropriate use and predict impact in different use cases.
- Health is more closely correlated to SUS.
- Health is a better indicator for infrastructure, which is how we should think about the design system.

### Desired outcome

A simple way to scan component criteria and be able to make decisions about:

- Using the component
- Prioritizing component work

</details>

## Instructions, help, and tips

<details><summary>For evaluators…</summary>

### Instructions

1. Title the issue with the component name, for example `Health evaluation: componentName`
1. Assign evaluator(s)
1. Add the component label
1. Use the following checklists to evaluate the component
1. Create a thread for each criteria to document your findings
1. Update the status in the description for each criteria (choose a single status from the list below)
1. Update relevant Pajamas (design.gitlab.com) sections
1. Create any necessary follow up issues
1. Close this issue

**Status options**

- **Incomplete** - Needs attention
- **Viable** - Critical aspects covered and ready for use, but may not fill all use cases or capabilities
- **Complete** - All known aspects satisfied
- **Deprecated** - Component is no longer supported or in use
- **＊** - Used in conjunction with a status to indicate active or planned work

### Help and tips

- This is an evaluation, not a test. Use your best judgement and ask for help when needed. Even collectively there are some things we just won't know and that's where we can create followups to find out or come to decisions.
- It can be a challenge to determine where the source of truth may be found. Sometimes designs may be newer than code, and the opposite is true too. Do your best to track determine where feedback is most actionable and appropriate.
- Too much information is better than too little. More details and references in the threads will help us now and in the future to get a better handle on component requirements, capabilities, use, and historical decisions that inform the current state.

</details>

## Health criteria

<!-- A completed task indicates that this part of the evaluation has been completed and doesn't relate to the status -->

### Design

Fulfills design requirements

- [ ] Ensure the [Pajamas UI Kit](https://www.figma.com/community/file/781156790581391771/component-library) design specs cover all applicable user-facing states and variants. Eric Bailey has a great reference for [all the user-facing states](https://ericwbailey.website/published/all-the-user-facing-states/). Variants will depend on the component's design and configuration options which may be documented in [Pajamas](https://design.gitlab.com/) or available in [GitLab UI](https://gitlab-org.gitlab.io/gitlab-ui/).
- [ ] Figma components are available and configurable by inserting from the component library and testing properties
- [ ] Review [GitLab UI](https://gitlab-org.gitlab.io/gitlab-ui/) stories to ensure that design specs are accurately implemented and that features present in the Pajamas UI Kit are also present in code
- [ ] Check the [GitLab.org](https://gitlab.com/gitlab-org/gitlab) project for open issues and MRs that address missing or incomplete design requirements

🪧 **Status**: `{status}`

### Development

Fulfills functional requirements

- [ ] [GitLab UI](https://gitlab-org.gitlab.io/gitlab-ui/) components have all states, variants, and functionality
- [ ] Ensure that all necessary controls exist in GitLab UI
- [ ] Review the [Pajamas UI Kit](https://www.figma.com/community/file/781156790581391771/component-library) to ensure that any variants present in [GitLab UI](https://gitlab-org.gitlab.io/gitlab-ui/) stories are also present in the design specs
- [ ] Check for open issues and MRs that address missing or incomplete functional requirements

🪧 **Status**: `{status}`

### Accessibility

Satisfies WCAG success criteria, has passing automated tests, and has passed manual evaluations

- [ ] Satisfies applicable [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (level AA) success criteria
- [ ] Automated test (Cypress) [exists](https://gitlab.com/gitlab-org/gitlab-ui/-/tree/main/cypress/e2e) and is [passing](https://gitlab.com/gitlab-org/gitlab-ui/-/blob/main/doc/contributing/end_to_end_test.md#running-cypress-tests)
- [ ] Accessibility violations reported by the [Storybook accessibility addon](https://storybook.js.org/addons/@storybook/addon-a11y) in [GitLab UI](https://gitlab-org.gitlab.io/gitlab-ui/) have a followup issue or MR
- [ ] [Keyboard accessible](https://design.gitlab.com/accessibility/keyboard-only)
- [ ] Evaluated with [common screen reader and browser combinations](https://webaim.org/projects/screenreadersurvey10/#browsercombos) (JAWS/Chrome, NVDA/Firefox, VoiceOver/Safari) and issues resolved

🪧 **Status**: `{status}`

### Documentation

Has supporting examples (stories) and guidelines that prescribe details about variants, implementation, content, and use

- [ ] Documentation page exists in [Pajamas](https://design.gitlab.com/) and follows [component template](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/pages/components/template.md)
- [ ] [GitLab UI](https://gitlab-org.gitlab.io/gitlab-ui/) stories align with [design specs](https://www.figma.com/community/file/781156790581391771/component-library)
- [ ] No todos are present
- [ ] Documentation present in GitLab UI

🪧 **Status**: `{status}`

<!-- Do not delete below this line -->

/label ~Figma ~"Pajamas UI Kit" ~"group::foundations" ~"workflow::start" ~"type::maintenance" ~"accessibility" ~"SUS::Non-impacting"

/weight 3
