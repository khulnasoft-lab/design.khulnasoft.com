---
name: Content and semantics
---

**Principle:** Content should be structured, understandable, and appropriately written for the audience, with robust alternative formats for audio and video content.

Clear, well-structured content benefits all users, whether they're temporarily distracted, have visual or cognitive disabilities, or varying comprehension levels. By focusing on clarity and providing alternative formats, we create content that's more accessible to everyone.

**Sections**

- [Plain language](#plain-language)
- [Content structure](#content-structure)
- [Audio and video content](#audio-and-video-content)
- [Resources](#resources)

## Plain language

Plain language ensures communication is understood the first time users read or hear it. As defined by the [Plain Writing Act of 2010](https://www.gpo.gov/fdsys/pkg/PLAW-111publ274/content-detail.html), plain language is “writing that is clear, concise, well-organized, and follows other best practices appropriate to the subject or field and intended audience.“

### Expected behavior

- Content is organized logically with the reader in mind.
- Content matches the audience's needs and comprehension level.
- Writing follows our [UI text guidelines](/content/ui-text).
- Text uses common, everyday words.
- Design features support easy reading.

### Identifying problems

- Complex or technical language without explanation:
  - Define technical terms on first use.
  - Provide a glossary for frequently used terms.
  - Use simpler alternatives when possible.
- Long, complicated sentences:
  - Break into shorter, clearer sentences.
  - Use bullet points for complex ideas.
  - Keep paragraphs focused on single topics.
- Passive voice overuse:
  - Identify the actor in each sentence.
  - Restructure sentences to lead with the subject.
  - Review for and replace passive constructions.
- Poor content organization:
  - Create clear section headings.
  - Use logical content hierarchy.
  - Ensure smooth transitions between topics.
- Ambiguous calls to action:
  - Replace generic phrases like "click here" with specific actions. Also, learn [how calls to action impact a screen reader user](/accessibility/screen-readers#calls-to-action).
  - Include clear destinations in link text.
  - Describe specific outcomes of actions.

## Content structure

Well-structured content helps users find and understand information quickly, whether they're scanning visually or using assistive technology.

### Expected behavior

- Headings create a clear, scannable outline of content accurately preview their content.
- Heading hierarchy follows correct semantic structure (level 1–6 sequentially).
- Content flows logically through the page.

### Identifying problems

- Incorrect heading hierarchy:
  - Ensure heading levels don't skip and are nested correctly.
  - Use headings to represent actual section structure.
- Unclear section organization:
  - Add descriptive headings for each section.
  - Ensure logical content grouping.
  - Use appropriate semantic HTML elements. Also, learn [how headings and semantic elements impact a screen reader user](/accessibility/screen-readers#page-structure).

## Audio and video content

Audio and video content must be accessible through alternative formats, ensuring users can access information regardless of their abilities.

### Expected behavior

- Audio content includes accurate transcripts.
- Video includes closed captions and transcripts.
- Live content provides real-time captioning.
- Media doesn't autoplay without user control.
- Audio descriptions supplement important visual information.

### Identifying problems

- Missing transcripts for audio content:
  - Provide accurate, time-stamped transcripts in an accessible format.
  - Include speaker identification in transcripts.
  - Provide transcripts in accessible formats.
- Inadequate video captions:
  - Add accurate closed captions.
  - Include non-speech sounds in captions.
  - Ensure proper caption timing and placement.
- Lack of alternative formats:
  - Provide both captions and transcripts in an accessible format.
  - Include audio descriptions when needed.
  - Offer multiple ways to access content.
- Autoplaying media:
  - Disable autoplay by default.
  - Provide clear playback controls.
  - Allow a user to control audio levels.

## Resources

- [Readability Analyzer](https://datayze.com/readability-analyzer.php)
- [Federal Plain Language Guidelines](https://plainlanguage.gov/guidelines/)
- [Plain Writing Page Template](https://www.plainlanguage.gov/law/page-template/)
- [Plain Language Checklists](https://www.plainlanguage.gov/resources/checklists/)
- [WebAIM Screen Reader Survey Results](https://webaim.org/projects/screenreadersurvey10/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
