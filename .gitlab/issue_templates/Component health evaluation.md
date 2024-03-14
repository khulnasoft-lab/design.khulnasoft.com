## Instructions

1. Title the issue with the component name, for example `Health evaluation: componentName`
1. Assign evaluator(s)
1. Add the component label
1. Use the following checklists to evaluate the component
1. Create a thread for each criteria to document your findings
1. Update the status in the description for each criteria (choose a single status from the list below)
1. Update relevant Pajamas (design.gitlab.com) sections

## Health criteria

<!-- A completed task indicates that this part of the evaluation has been completed and doesn't relate to the status -->

### Design

Fulfills design requirements

- [ ] Ensure the [Pajamas UI Kit](https://www.figma.com/community/file/781156790581391771/component-library) design specs cover all states and variants
- [ ] Figma components are available and configurable
- [ ] Compare design specs in the Pajamas UI Kit with [GitLab UI](https://gitlab-org.gitlab.io/gitlab-ui/) stories
- [ ] Check for open issues and MRs that address missing or incomplete design requirements

🪧 **Status**: {status}

### Development

Fulfills functional requirements

- [ ] [GitLab UI](https://gitlab-org.gitlab.io/gitlab-ui/) components have all states, variants, and functionality
- [ ] Ensure that all necessary controls exist in GitLab UI
- [ ] Compare GitLab UI stories with design specs in the [Pajamas UI Kit](https://www.figma.com/community/file/781156790581391771/component-library)
- [ ] Check for open issues and MRs that address missing or incomplete functional requirements

🪧 **Status**: {status}

### Accessibility

Satisfies WCAG success criteria, has passing automated tests, and has passed manual evaluations

- [ ] Satisfies applicable [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (level AA) success criteria
- [ ] Automated tests (Cypress) exist and are passing
- [ ] Accessibility violations in [GitLab UI](https://gitlab-org.gitlab.io/gitlab-ui/) are addressed
- [ ] Keyboard accessible
- [ ] Evaluated with [common screen reader and browser combinations](https://webaim.org/projects/screenreadersurvey10/#browsercombos) (JAWS/Chrome, NVDA/Firefox, VoiceOver/Safari) and issues resolved

🪧 **Status**: {status}

### Documentation

Has supporting examples (stories) and guidelines that prescribe details about variants, implementation, content, and use

- [ ] Documentation page exists in [Pajamas](https://design.gitlab.com/) and follows [component template](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/pages/components/template.md)
- [ ] [GitLab UI](https://gitlab-org.gitlab.io/gitlab-ui/) stories align with [design specs](https://www.figma.com/community/file/781156790581391771/component-library)
- [ ] No todos are present
- [ ] Documentation present in GitLab UI

🪧 **Status**: {status}

---

## Status

- **Incomplete** - Needs attention
- **Viable** - Critical aspects covered and ready for use, but may not fill all use cases or capabilities
- **Complete** - All known aspects satisfied
- **Deprecated** - Component is no longer supported or in use
- **＊** - Used in conjunction with a status to indicate active or planned work

<!-- Do not delete below this line -->

/label ~Figma ~"Pajamas UI Kit" ~"group::foundations" ~"workflow::start" ~"type::maintenance" ~"accessibility" ~"SUS::Non-impacting"

/weight 5
