---
name: Adding data to a list
---

This pattern explains how to allow users to add complex data to a [list](/components/list), such a as a [table](/components/table).

### When to use this pattern

Use this pattern when a user needs to input complex data via a [form](/components/form) that will be displayed in a list of similar data. Filling out a form in a [modal](/components/modal) or new page reduces complexity of the page that displays the data.

### When not to use this pattern

* The data being entered is a single form field and could be done in-line
* Adding data is the primary usecase
* The list will only display one item

## How it works

#### Triggering the form

Place a [button](/components/button) to the top right of the list to allow the user to add new content.

<figure class="figure" role="figure" aria-label="Table with add button on top right">
  <img class="figure-img" src="/img/add-data-to-list-table.svg" alt="Table with add button on top right" role="img" />
  <figcaption class="figure-caption"></figcaption>
</figure>

The button content should reference the name of the list in combination with a verb such as "add". For example, if the header of the list is called **Deploy tokens**,

| Do | Don't |
| --- | --- |
| Button label: `Add deploy token` | Button label: `New` |

The button can either open a [modal](/components/modal) or a new page to display the form.

If the list content is editable, clicking the edit button opens an editable filled out form.

#### Adding or editing data

The content of the [form](components/form) should use the same terminology as the list it will appear in. The form should have the same order of fields as what will be presented in the list.

<figure class="figure" role="figure" aria-label="Modal form">
  <img class="figure-img" src="/img/modal-protected-tags.svg" alt="Table with add button on top right" role="img" />
  <figcaption class="figure-caption"></figcaption>
</figure>

The confirmation button on the form should reference the specific action the user is taking. For example, if the header of the form's purpose is to add deploy tokens:

| Do | Don't |
| --- | --- |
| Button label: `Add deploy token` | Button label: `Save` |


#### Presenting data

After pressing the confirmation button on the form, the user directed back to the list. If the form was on a new page, they are redirected back to the page displaying the list. Submitting the form adds a new row or entry to the top of the list. If the newest item is not first in the list, the sort order of the list should be signaled to the user.
