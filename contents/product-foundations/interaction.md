---
name: Interactions
---

## Drag and drop

To move and reorder items in a collection or across similar collections, users can press and drag them to a new position.

There is a clear affordance that distinguishes draggable items from non-draggable ones:

- **Draggable** items have rounded corners and a shadow.
- **Non-draggable** items look like a plain list.

Use [system cursors](#cursors) to indicate when an element is draggable. The `grab` cursor appears on hover when an element is draggable. Once it’s dragged, the cursor will change to `grabbing`. For areas where an element cannot be dropped, use the `not-allowed` cursor.

### Usage

#### Draggable items

Items contained in a list can be draggable to help users manually order these items based on priority. The direction of the list can be from left to right or from top to bottom. If items are in a grid view, the order would be from left to right, then top to bottom. 

<!-- What happens if the object is particularly tall or wide (maybe even taller or wider than the area it is being previewed in)? An example of this would be dragging a tall board list or board swimlane (where the item could potentially be >1x the height of the screen. -->
<!-- What does a draggable item look like? How does it respond when dragging? -->

When an object is being dragged, it should lower it's opacity so you're able to see content behind it. To account for draggable items that extend beyond the viewport, during drag, it should minimize to contain the minimum amount of content to keep it recognizable as the item you're dragging. For example, if you are dragging a swimlane in issue boards, you would only see the swimlane title while dragging and you should not see all of the issues contained within it.

<!-- How do we best afford that an object can be dragged? How might we make good use of our drag handle icons? -->
<!-- Where and how should we provide guidance on which axis a user can drag? -->

When dragging an item over an area it can be dropped, a solid blue line should appear to show that an item can be dropped in that area. 

<!-- How do users "undo" or "abort" the drag action while it is happening or right after? -->
<!-- How do we confirm an action has taken place as intended? Any microinteractions around dragging, landing/snapping in place, undoing? -->

After dropping a draggable item, a toast should appear to indicate the order of draggable items has changed. That toast should contain an undo link to undo the previous dragged action. This provides a shortcut to undo a moved draggable item, rather than having to re-drag that item back to it's original place. 

<!-- This interaction model is used to transform the position of elements. Usually, these are items in collections with other similar items. When moving items across collections, the collections should be similar in content. -->

#### Dropzone

<!-- Could we simplify this drop target design in some way? Does it need to be a preview of the object, or can it be its own design? -->

<!-- How do we indicate that a drop target is not viable, that a user can't drag an object somewhere, and why? -->

#### Limitations

Drag and drop should be disabled if the collection is sorted by a specific attribute, as the logic of either contradicts the other. Example: you cannot manually reorder issues if they are sorted by popularity.

Be cautious when allowing drag and drop in a large collection with dozens or hundreds of items. It’s mainly intended for quick reordering of items in short collections where the user can comprehend the collection’s size and scope. This is usually possible by being able to view all of the items at the same time. If the user might spend a long time going through, prioritizing, and reordering hundreds of items, consider a different design.

### Demo

Todo: Add live component block with code example

### Design specifications

Todo: Add design specs link

### Related patterns

- [Table](/components/table)
- [List](/components/list)

## Cursors

The mouse cursor is key in helping users understand how to interact with elements on the screen.

| **CSS value** | **Example** | **Description** |
| --- | --- | --- |
| `default` | ![image](/img/cursors-default.svg) | The platform-dependent default cursor. Typically an arrow. |
| `pointer` | ![image](/img/cursors-pointer.svg) | Indicates that you can click on an element to invoke a command or navigate, such as links and buttons. |
| `grab` | ![image](/img/cursors-grab.svg) | Indicates that you can grab and move an element around the screen. |
| `grabbing` | ![image](/img/cursors-grabbing.svg) | Indicates that you are actively moving an element around the screen. |
| `text` | ![image](/img/cursors-text.svg) | Indicates that this is either text that you can select and copy, or a text field that you can click into to enter text. |
| `not-allowed` | ![image](/img/cursors-notallowed.svg) | Indicates that an item may not be dropped at the current location or that the requested action will not be carried out. |

## Sticky containers

A sticky container is a div that sticks to the top or bottom of it's parent container. It contains actions or links that are relevant to the task someone is performing. Sticky containers are useful for long pages that contain lots of content that would push buttons or actions above or below the viewport. For example, when editing a wiki, the save changes button will always be visible even if the wiki content extends below the viewport.

Use sticky containers with caution as they can easily crowd the interface and make it difficult to navigate the page by shrinking the content area.
