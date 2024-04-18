---
name: Keyboard shortcuts
related:
  - button
  - tooltip
---

Keyboard shortcuts can be a useful mechanism for improving the productivity of users. While not every action or functionality should warrant a keyboard shortcut, consider if it would be beneficial to add as an optimization to a workflow.

## Guidelines

- Reference the list of [GitLab keyboard shortcuts](https://docs.gitlab.com/ee/user/shortcuts/) to look for patterns or discover potential conflicts.
- Consider any reserved keybindings in MacOS and Windows/Linux or in related applications.
- When the user has keyboard shortcuts turned on, show a shortcut near its action or through a [tooltip](/components/tooltip). If there are multiple shortcuts for the same action, only show one shortcut.
- For modifier keys, show symbols rather than text labels. This ensures consistency across operating systems, locales, and keyboards. For example, show <kbd>⌘</kbd> instead of <kbd>Command</kbd>.
