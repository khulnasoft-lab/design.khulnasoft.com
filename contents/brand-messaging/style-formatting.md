---
name: Style and formatting
---

For any style questions not directly addressed below, refer to the [Associated Press Stylebook](https://www.apstylebook.com/). Where the guidance below conflicts with AP style, the guidance below takes priority. For guidance on how to use specific terms, refer to the [recommended word list in the documentation](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html).

## Style

### Acronyms and initialisms

When using [acronyms or initialisms](https://www.dailywritingtips.com/acronym-vs-initialism/), ensure that your first mention uses the full term and includes the shortened version in parentheses directly afterwards. From then on you may use the acronym or initialism instead.

If you only use an acronym or initialism once in a piece of content, you probably don’t need it and can simply use the full term instead.

Only capitalize the words that make up an acronym or initialism if it’s a proper noun.

- ✅ *Dynamic application security testing (DAST)* examines applications for vulnerabilities like these in deployed environments.
- ✅ *GitLab Dynamic Application Security Testing (DAST)* includes the following analyzers.

### Contractions

We favor contractions (*can’t, didn’t, it’s, we’re*) to sound more human and less formal.

### Lists

If a numbered or bulleted list reads as a continuous sentence, don’t capitalize the first letter of each item in the list, and don’t include punctuation at the end of each item. 

- ✅ GitLab Duo is unique because we:
  - do not use your content to train models
  - are transparent about all AI models used by GitLab Duo
  - use the right AI model for each task, ensuring you always stay ahead of the curve

If each item in the list reads as its own sentence, capitalize and punctuate as you would free-standing sentences.

- ✅ Here are three reasons GitLab Duo is unique:
  - GitLab Duo features do not use your content to train models.
  - Our publicly available documentation describes all AI models used by GitLab Duo.
  - We use the right AI model for each task, ensuring you always stay ahead of the curve.

### Pronouns

Unless referring to someone in particular, use gender-neutral pronouns (*they, them*).

- ✅ With GitLab, a developer can integrate security into *their* workflow.
- ❌ With GitLab, a developer can integrate security into *his/her* workflow.

### Quotations

Use double quotation marks (" ") for direct quotes, and single quotation marks (' ') for a quote within a quote.

Include periods and commas inside ending quotation marks. Any punctuation that is part of the quotation should be included inside of the quotation marks. Any punctuation that is not part of the quotation (aside from periods and commas, as noted above) should be outside of the quotation marks.

- ✅ Recently, an article was published stating, "Software is eating the world."
- ✅ What do you think of the claim, "Software is eating the world"?
- ✅ "Do you agree that software is eating the world?" wrote the author.

When including direct quotations from interviewees in blog posts, use present tense for verbs such as *says* and *explains*. 

- ✅ "Ruby was optimized for the developer, not for running it in production," says Sid.

The exception would be when quoting from an event that was obviously in the past; in that case use the past tense so the reader is not confused or misled.

### Spelling

We use American English by default on the GitLab blog and marketing site. Please refer to [this list of spelling differences](https://www.oxfordinternationalenglish.com/differences-in-british-and-american-spelling/). In content specifically created for a particular region, use the variant of English that is most appropriate for that region.

## Voice

Generally, use [active voice](https://www.grammarly.com/blog/active-vs-passive-voice/) where possible. Using active voice ensures that your sentence includes a clear subject and verb. 

- ✅ The GitLab community submitted 1 million merge requests in March 2019.
- ❌ One million merge requests were submitted in March 2019.

There may be limited cases where passive voice is the better option. Use your best judgment in each case, and if you decide to use passive voice, try to be aware of why you’re making that choice.

## Capitalization

### Brand and publication names

Ensure you style brand names according to the company’s brand guidelines. 

- ✅ WiFi Tribe, DigitalOcean

If the word the forms part of a brand or publication's name, capitalize it. Omit *The* if including it would make the sentence awkward. 

- ✅ We spoke to a reporter from *The Wall Street Journal*.
- ✅ We spoke to a *Wall Street Journal* reporter.

### GitLab feature names

Generally, GitLab feature names are lowercase, but there are exceptions. Refer to the [recommended word list in the documentation](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html) if you're unsure.

### GitLab functions, departments, and teams

Capitalize the name of the element, but not the word after (*team, department*, etc.). 

- ✅ Engineering team, Security department
- ❌ Engineering Team, security department

### Job titles

Use lowercase for job titles in sentences, regardless of whether they appear before or after a person's name. 

- ✅ John Smith, director of engineering, led the project.
- ❌ John Smith, Director of Engineering, led the project.

Capitalize the title when the person's name and title appear as a standalone (such as in the lower third of a video, a nametag, or attribution on a pull quote).

- ✅ John Smith, Director of Engineering, XYZ Corporation
- ❌ John Smith, director of engineering, XYZ Corporation

### Titles and headers

Generally, use sentence case (capitalize only the first word and any proper nouns) for all headlines, titles, and subheads. There may be exceptions where title case is preferred from a design standpoint.

- ✅ Remediating vulnerabilities with GitLab's security insights and AI
- ❌ Remediating Vulnerabilities with GitLab's Security Insights and AI

## Dates and times

### Date formatting

For external-facing content, spell out the month and use a comma before the year. If the sentence continues after the year, also include a comma after the year. When you are only stating the month and the year, you don't need a comma after the month.

- ✅ Release date: November 16, 2023
- ✅ On November 16, 2023, we released GitLab 16.6.
- ✅ We released Gitlab 16.6 in November 2023.

For internal content, use ISO format (*2023-11-16*). In content geared toward a specific region, use the format preferred in that region.

Don't use rd/st/th after the date, unless the date appears independently from the month (*See you on the 16th*).

## Time formatting

Abbreviate *ante meridiem* and *post meridiem* using **a.m.** and **p.m.** (lowercase, with periods between the letters and a space before it to separate it from the time: *6:00 a.m.*).

We default to the 12-hour clock (*9:00 p.m.*). However, in content geared toward a specific region, use the format used in that region.

When writing about physical events, use the time zone where the event is taking place. Don’t abbreviate time zones. For virtual events, use UTC.

## Punctuation and symbols

### Ampersands

Use ampersands only where they are part of a company's name or the title of a publication or official name.

Do not use an ampersand as a substitute for *and* in body copy.

Ampersands may be used sparingly where character counts are very tight, such as a headline in a display ad.

### Colons

If a colon is used to introduce a complete sentence (including a question), capitalize the first word after the colon. 

- ✅ AI isn’t just another fad: It’s seeing real adoption among practitioners.
- ❌ AI isn’t just another fad: it’s seeing real adoption among practitioners.

- ✅ We aimed to explore several topics: Where are things improving, and where are teams still running into roadblocks?
- ❌ We aimed to explore several topics: where are things improving, and where are teams still running into roadblocks?

- ✅ One thing stood out in the survey responses: the importance of security.
- ❌ One thing stood out in the survey responses: The importance of security.

Always capitalize the first word after a colon in a title, even if it’s not a complete sentence.

### Commas

Our default is to use serial (Oxford) commas. In content geared towards a specific region, feel free to use what is most common in that region.

- ✅ AI can help DevSecOps teams write code, resolve security vulnerabilities, accelerate code review, and improve collaboration.
- ❌ AI can help DevSecOps teams write code, resolve security vulnerabilities, accelerate code review and improve collaboration.

### Dashes

Use an em dash (—) instead of two dashes (--) to set off a distinct thought within a sentence. Place one space on each side of an em dash.

Use an en dash (–) when communicating numeric ranges not preceded by the words *from* or *between* (*Join us October 20–25 in San Francisco*). Don’t include a space on either side of the en dash.

### Ellipses

Include one space before and after an ellipsis ( … ).

### Hyphens

Use a hyphen to connect two or more words that jointly modify another word (*built-in security*).

Do not hyphenate the adverb very or adverbs ending in *-ly* (*fully integrated platform*). 

Generally, don’t hyphenate prefixes such as *semi, pre, non, un, sub*, or *multi* (*multitenant, subtask*). The exception is when the last letter of the prefix is the same as the first letter of the root word (*sub-bucket*).

Do use a hyphen after a prefix followed by a proper noun and for words beginning with the prefixes *all-, mid-, ex-* (meaning "former"), and *self-* (*mid-July, self-managed*).

Refer to the [recommended word list](https://docs.gitlab.com/ee/development/documentation/styleguide/word_list.html) for guidance on how to hyphenate specific words.

### Spacing

Use only one space (not two) after a period. 

Use a space between a number and a unit of measurement (*128 GB*).

## Numbers

### Small numbers

Generally, spell out numbers zero through nine. Exceptions include:

- Percentages: Generally, use numerals and a percent sign (%) for percentages, unless starting a sentence.
- Callout boxes and lists of stats: Use numerals for numbers less than 10 in instances where character counts are limited or when you'd like to emphasize the numbers, such as in a bulleted list of stats, or stat callouts at the top of a case study.

Use numerals for 10 and above unless starting a sentence.

Always use numerals when putting a number at the start of a headline (*5 ways AI can help developers*).

### Large numbers

Numbers with four or more digits should include a comma (*2,000; 100,000*). If you’re writing in a specific context where this might cause confusion (such as for regions that use commas as a decimal separator instead), do what makes the most sense for your audience.

Generally, avoid abbreviations for large numbers, such as *k* (meaning “thousand”) and *M* or *mil*. Use these abbreviations only where space is very limited, such as a callout box with a tight character limit.

### Currencies

In contexts where currencies are mentioned, be sure to denote them in the format <NUMBER> <CURRENCY_CODE> by using the code from the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217#Active_codes_(list_one)) (e.g. 10 USD, 15 EUR, 30 CAD, 30,000 JPY, 29.99 CHF).

### Percentages

Use % instead of *percent* at all times, unless the number is spelled out, in which case also spell out *percent*.