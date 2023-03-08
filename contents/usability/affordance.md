---
name: Affordance
---

## Visibility

If a control or action is critical to a task, and can be achieved no other way, then it should be exposed and available by default for all users and modalities. There may be a way to toggle that as a preference, but not before a user is aware of the existence of such controls and actions to begin with.

If a control or action is exposed at a higher level as a "shortcut" while being available elsewhere and in proximity, then it _may_ be possible to hide/show it for `:hover` and `:focus-within` if it's determined that not showing it by default provides a better overall experience for all users. For example, in an email inbox list hover or focus on an item reveals controls, like delete, that are also available when viewing the individual email itself.

## Cursors

The mouse cursor is key in helping users understand how to interact with elements on the screen.

| **CSS value** | **Example**                           | **Description**                                                                                                         |
| ------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `default`     | ![image](/img/cursors-default.svg)    | The platform-dependent default cursor. Typically an arrow.                                                              |
| `pointer`     | ![image](/img/cursors-pointer.svg)    | Indicates that you can click on an element to invoke a command or navigate, such as links and buttons.                  |
| `grab`        | ![image](/img/cursors-grab.svg)       | Indicates that you can grab and move an element around the screen.                                                      |
| `grabbing`    | ![image](/img/cursors-grabbing.svg)   | Indicates that you are actively moving an element around the screen.                                                    |
| `text`        | ![image](/img/cursors-text.svg)       | Indicates that this is either text that you can select and copy, or a text field that you can click into to enter text. |
| `not-allowed` | ![image](/img/cursors-notallowed.svg) | Indicates that an item may not be dropped at the current location or that the requested action will not be carried out. |
