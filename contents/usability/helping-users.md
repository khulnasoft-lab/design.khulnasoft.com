---
name: Helping users
---

Help content should be used as a fallback to help users complete and better understand tasks, with the primary method of understanding being the UI itself. Embedding help content directly within the feature it serves is the best way to assist users who have hit a roadblock. Affordance is higher when help content is available in context.

Help comes in the form of various types of content designed to:

- Assist users unable to complete a task.
- Help users to understand a concept in more detail.
- Provide additional technical details not available in the UI.

## Formatting help content

If the most relevant information can be summarized succinctly, put the summary directly in the UI instead of using a Help link. However, you can use a Help link to provide supplemental information. Help links open up their page in a new tab.

Use a question to lead the user to helpful information.

- **Example:** User cohorts show how active users are in the last 12 months. [What kind of information is available?](#)

If a question doesn't make sense, use the sentence, "Learn more." Do not use "More information" or other phrases, and always use a period.

- **Example:** User cohorts show how active users are in the last 12 months. [Learn more.](#)

If no room is available for text, then use an icon.

| Do | Don't |
| - | - |
| <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.433 6.191c0-.418.142-.842.426-1.271.285-.43.7-.785 1.247-1.067.546-.282 1.182-.423 1.91-.423.677 0 1.274.118 1.793.354.518.235.918.556 1.2.96.282.406.423.846.423 1.322 0 .374-.08.702-.241.984a3.03 3.03 0 01-.574.73c-.222.204-.62.549-1.194 1.033a4.731 4.731 0 00-.381.36 1.466 1.466 0 00-.214.284c-.385.89-2.058.79-1.735-.455.12-.271.282-.509.482-.714.201-.204.472-.448.812-.73.3-.246.515-.432.648-.558a1.91 1.91 0 00.336-.42.97.97 0 00.136-.501c0-.352-.138-.65-.416-.892-.278-.242-.636-.363-1.075-.363-.513 0-.89.122-1.134.367-.242.244-.448.604-.616 1.08-.158.497-.46.746-.903.746a.915.915 0 01-.661-.261c-.18-.174-.27-.362-.27-.565zM8 16A8 8 0 118 0a8 8 0 010 16zm0-2A6 6 0 108 2a6 6 0 000 12zm0-1a1 1 0 110-2 1 1 0 010 2z" fill="#1078bf"/></svg><br>Use the outlined [question-o.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question-o) icon in `$blue-600` (`#1078bf`) | <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zM4.86 4.92c-.285.43-.428.853-.428 1.271 0 .203.09.391.27.565.18.174.4.26.661.26.444 0 .745-.248.903-.746.168-.475.374-.835.616-1.08.243-.244.621-.366 1.134-.366.44 0 .797.121 1.075.363.278.242.416.54.416.892a.97.97 0 01-.136.502 1.91 1.91 0 01-.336.42 14.35 14.35 0 01-.648.557c-.34.282-.61.526-.812.73-.2.205-.361.443-.482.714-.323 1.244 1.35 1.345 1.735.455.047-.085.118-.18.214-.284.096-.103.223-.223.381-.36.575-.484.972-.829 1.194-1.033a3.03 3.03 0 00.574-.73 1.95 1.95 0 00.241-.984c0-.476-.14-.916-.423-1.321-.282-.405-.683-.726-1.2-.961-.518-.236-1.116-.354-1.793-.354-.728 0-1.364.141-1.91.423-.546.282-.962.637-1.247 1.067zM7 12a1 1 0 102 0 1 1 0 00-2 0z" fill="#666"/></svg><br>Use the solid icon [question.svg](http://gitlab-org.gitlab.io/gitlab-svgs/?q=~question) or a color other than blue |

Todo: Add live component block with code example

If the help content is outside of the GitLab instance (for example, content at about.gitlab.com), make that clear in the link text. Doing so helps make the result of the links predictable. This is often not possible due to space limitations. An external link icon can be added in place of more copy.

- **Example:** For more integrations, go to [GitLab’s website](#).
