---
name: UI friction
---

Friction in user interfaces is often regarded as something to avoid or resolve. However, it can have positive usecases such as preventing a user to complete a destructive action without fully understanding the concequences.

Additional steps can be introduced in such cases to:

* Assist users from accidentilly clicking a destructive action.
* Help users to understand what happens after they confirm their destructive action.
* Provide alternative options to potentially resolve their problem without resorting to a destructive action.

## Severity guidelines

Depending on the severity of destructiveness of the action performed by the user we can implement the following friction patterns.

### High severity

Usefull when the destructive action would be very hard to be undone or data will be lost permanently. Strongly consider implementing a [modal](/components/modals) in order to either ask the user for confirmation or to guide them to an alternative route.

### Medium severity

Destructive actions which can introduce real annoyance to the user when performed unintendedly. Recovering from these actions will be a bit of a harder and will therefore have an emotional impact on the user. Consider assisting the user with an additional step to prevent accidentily clicking this action. A real example would be to put this action within a dropdown requiring a minimum of two clicks.

### Low severity

The desctructive action can easily be undone and no actual data was lost. Consider adding no friction at all in order to streamline the interface, especially in places where the action needs to be performed in bulk. These kinds of destructive actions can be exempt of being [elementary](/components/buttons/#elementary) styled and can instead be [neutral](/components/buttons/#neutral) styled buttons.