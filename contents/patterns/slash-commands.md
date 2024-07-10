---
name: Slash commands in GitLab Duo Chat
description: Principles of slash commands in GitLab Duo Chat
---

## Overview

Slash commands provide a way for users to efficiently communicate their intent to Duo Chat. They also allow the user to discover the functionality that Duo Chat offers. Slash commands are prefixed with a "/" and followed by a specific keyword from a predefined list.

## Adding slash commands

Be deliberate when adding slash commands. The list of available commands should be curated to highlight the most valuable interactions. Aim to display all commands in the menu without requiring users to scroll or type ahead.

To avoid unnecessary commands, assess the following questions before implementing a new slash command:

- Does the proposed slash command represent a frequently repeated action?
  - What evidence supports this?
- What benefit does the proposed command provide to users?
- What alternative solutions have you explored?

[UX research](https://gitlab.com/gitlab-org/ux-research/-/issues/3098) is ongoing to better understand user needs for slash commands.

## Naming convention and syntax

Slash commands are solution agonsitic. Try to start slash commands with a verb that can apply to multiple contexts. Before adding an additional slash command, check if the action you want to add could be incorporated in the existing slash commands.

| Do                                                                                                     | Don't                                                                                                 |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| <figure-img alt="Solution agnositic slash command" src="/img/slash-command-agnostic.svg"></figure-img> | <figure-img alt="Solution specific slash command" src="/img/slash-command-specific.svg"></figure-img> |
| Use the same command for different use cases to keep the list small and learnable.                     | Don’t create a slash command for a specific feature.                                                  |

When a command is more than one word, use an underscore to denote spaces.

- **Example** /new_conversation

### Arguments

Some commands accept optional arguments, or additional information such as a link, reference, or free text.

- **Example** /summarize #14023 in 5 bullet points

Other commands do not accept arguments.

- **Example** /new_conversation

## Menu layout

<figure-img alt="Example of the slash command menu" label="Example of the slash command menu" src="/img/slash-command-arguments.svg"></figure-img>

The slash command menu displays the command keyword, optional argument formats, and a brief explanation of the command's application.

## Behavior

- The slash command menu is opened by typing / in the Duo Chat text input.
- The menu opens above the text input.
- The menu filters as the user types in the input
- A menu item can be selected by:
  - Focusing the item and clicking or pressing <kbd>return</kbd> to confirm
  - Filtering the list to one item by typing and pressing <kbd>tab</kbd> to confirm
- After selecting a menu item:
  - If the command accepts arguments, it fills in the text input.
  - If the command does not accept arguments, it is sent to Duo Chat.

### Slash commands apply to current context

By default, slash commands should apply to the page the user currently has open, unless specified otherwise by additional arguments. Slash commands should always work without arguments. Avoid requiring the user to input additional information, as it increases mental load to learn syntax and potential to make mistakes.

### Slash command menu depends on current context

Any slash command can be used on any page, with the appropriate arguments. However, the menu of slash commands presented in the UI should only show commands applicable to the page the user is currently viewing. Do not present slash commands in the menu that would not work on the current page.

| Do                                                                                                                              | Don't                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <figure-img alt="Slash command menu is conditional to the current page" src="/img/slash-commands-conditional.svg"></figure-img> | <figure-img alt="Slash command menu is not conditional to the current page" src="/img/slash-commands-not-conditional.svg"></figure-img> |
| Show slash commands in the menu specific to the page the user is currently viewing.                                             | Don’t display slash commands in the menu that would not work on the page the user is currently viewing.                                 |
