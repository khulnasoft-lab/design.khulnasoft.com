---
name: Interactions
---

## Drag and drop

To move and reorder items in a collection or across similar collections, users can press and drag them to a new position.

There is a clear affordance that distinguishes draggable items from non-draggable ones:

* **Draggable** items have rounded corners and a shadow.
* **Non-draggable** items look like a plain list.

Use [system cursors](#cursors) to indicate when an element is draggable. The `grab` cursor appears on hover when an element is draggable. Once it’s dragged, the cursor will change to `grabbing`. For areas where an element cannot be dropped, use the `not-allowed` cursor.

### Usage

This interaction model is used to transform the position of elements. Usually, these are items in collections with other similar items. When moving items across collections, the collections should be similar in content.

Drag and drop should be disabled if the collection is sorted by a specific attribute, as the logic of either contradicts the other. Example: you cannot manually reorder issues if they are sorted by popularity.

Be cautious when allowing drag and drop in a large collection with dozens or hundreds of items. It’s mainly intended for quick reordering of items in short collections where the user can comprehend the collection’s size and scope. This is usually possible by being able to view all of the items at the same time. If the user might spend a long time going through, prioritizing, and reordering hundreds of items, consider a different design.

### Demo

Todo: Add live component block with code example

### Design specifications

Todo: Add design specs link

### Related patterns

* [Data tables](/components/data-tables)
* [Lists](/components/lists)

## Cursors

The mouse cursor is key in helping users understand how to interact with elements on the screen.

<table>
<thead>
<tr>
<th>CSS value</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>`default`</td>
<td align="center">![](~/assets/images/foundations/cursors/cursors-default.svg)</td>
<td>The platform-dependent default cursor. Typically an arrow.</td>
</tr>
<tr>
<td>`pointer`</td>
<td align="center">![](~/assets/images/foundations/cursors/cursors-pointer.svg)</td>
<td>Indicates that you can click on an element to invoke a command or navigate, such as links and buttons.</td>
</tr>
<tr>
<td>`grab`</td>
<td align="center">![](~/assets/images/foundations/cursors/cursors-grab.svg)</td>
<td>Indicates that you can grab and move an element around the screen.</td>
</tr>
<tr>
<td>`grabbing`</td>
<td align="center">![](~/assets/images/foundations/cursors/cursors-grabbing.svg)</td>
<td>Indicates that you are actively moving an element around the screen.</td>
</tr>
<tr>
<td>`text`</td>
<td align="center">![](~/assets/images/foundations/cursors/cursors-text.svg)</td>
<td>Indicates that this is either text that you can select and copy, or a text field that you can click into to enter text.</td>
</tr>
<tr>
<td>`not-allowed`</td>
<td align="center">![](~/assets/images/foundations/cursors/cursors-notallowed.svg)</td>
<td>Indicates that an item may not be dropped at the current location or that the requested action will not be carried out.</td>
</tr>
</tbody>
</table>
