---
name: Slash commands in Duo Chat
description: Principles of slash commands in Duo Chat
---

## Overview

Slash commands provide a way for users to efficiently communicate their intent to Duo Chat. They also allow the user to discover the functionality that Duo Chat offers. Slash commands are prefixed with a "/" and followed by a specific keyword from a pre-defined list.

## Commands available

Be thoughtful when adding slash commands, as each additional command increases the memory burden on the user. Slash commands should be available for frequently repeated actions. Only show commands that are relevant to the user's current context. Aim to to have all commands shown on the menu without the user needing to scroll or type ahead.

## Naming convention and syntax

Slash commands are solution agonsitic. Try to start slash commands with a verb that can apply to multiple contexts. Before adding an additional slash command, check if the action you want to add could be incorporated in the existing slash commands.

| Do                                                                                                                                                      | Don't                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Solution agnositic slash command" label="Example of a desired slash command (fix)" src="/img/slash-command-agnostic.svg"></figure-img> | <figure-img alt="Solution specific slash command" label="Example of a slash command that's too specific (fix_pipeline)" src="/img/slash-command-specific.svg"></figure-img> |
| Use the same command for different use cases to keep the list small and learnable.                                                                      | Don’t create a slash command for a specific feature.                                                                                                                        |

When a command is more than one word, use an underscore to denote spaces.

- **Example** /new_conversation

### Arguments

Some commands accept optional arguments, or additional information such as a link, reference, or free text.

- **Example** /summarize #14023 in 5 bullet points

Other commands do not accept arguments.

- **Example** /new_conversation

When a slash command accepts arguments to [GitLab-specific references](https://docs.gitlab.com/ee/user/markdown.html#gitlab-specific-references), show a menu to help the user select the correct item.

<figure-img alt="Example of a menu to filter issues" label="Example of a menu to filter issues" src="/img/issue-filter.svg"></figure-img>

Default slash commands to the current context. Slash commands should always work without arguments. Avoid requiring the user to input additional information, as it increases mental load to learn syntax and potential to make mistakes.

## Behavior

- The slash command menu is opened by typing / in the Duo Chat text input.
- The menu opens above the text input.
- The menu filters as the user types in the input
- A menu item can be selected by:
  - Focusing the item and clicking or pressing Return to confirm
  - Filtering the list to one item by typing and pressing Tab to confirm
- After selecting a menu item:
  - If the command accepts arguments, it fills in the text input.
  - If the command does not accept arugments, it is sent to Duo Chat.

## Layout

<figure-img alt="Example of the slash command menu" label="Example of the slash command menu" src="/img/slash-command-arguments.svg"></figure-img>

The slash command menu displays the command keyword, optional argument formats, and a brief explanation of the command's application.
