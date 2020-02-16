---
name: Drawer
status: built
vueComponents:
  - GlDrawer
related:
  - accordion
<<<<<<< HEAD
  - buttons
  - modals
  - spinner
---

A drawer is a convenient way to present context specific information or to provide the user with a deeper interaction experience without leaving the page. 
=======
  - modals
---

A drawer is a convenient way to present context-specific information or to provide the user with a deeper interaction experience without leaving the page. 
>>>>>>> 3eb1c57621054a06d3ea41452266fb5c457760d1

## Usage

### Dos and dont's

| Do | Don’t |
|------------------------|-------------------|
| Use to display additional or supplemental information to the user about an element or item. | Use for critical interactions, such as confirming a deletion event. |
| Use for complex creation, edit, or management experiences. | Use when to display large tables, data sets or metrics that are better suited to a larger view. | 
| Trigger the drawer after a user has taken action on an item. | Surprise the user by opening a drawer unexpectedly. |
| Include one focusable element within the drawer. | Close the drawer unless the user has taken action to do so. |
| Layout content based on the pajamas layout and spacing guidelines. |   | 
| Use an icon as the primary trigger when an element or item's main action is different than opening a drawer. |
<<<<<<< HEAD
| Include a descriptive [tooltip](https://design.gitlab.com/components/tooltip) when using an icon to trigger drawer interaction. | |
=======
| Include a descriptive [tooltip](/components/tooltip) when using an icon to toggle the drawer. | |
>>>>>>> 3eb1c57621054a06d3ea41452266fb5c457760d1

### Example use cases 

* Show more information about an issue without taking the user to a new page.
* Show more information about a feature without taking the user to the documentation.
<<<<<<< HEAD
* Show more information about a vulnerability instead of using a modal.
=======
* Show more information about a vulnerability instead of using a [modal](/components/modals).
>>>>>>> 3eb1c57621054a06d3ea41452266fb5c457760d1

## Specifications

### Sections 

#### Header 

<<<<<<< HEAD
* The header appears at the top of the drawer and is defined by the use of a full width horizontal break line. 

##### Title

* Size and style can vary depending on use case. By default the drawer uses a `19px-bold weight font`.
=======
The header appears at the top of the drawer with a full width horizontal break line below it, separating the header from the content. It always has a title and a close icon, and it can also include actions related to the drawer's content.

##### Title

* Size and style can vary depending on the use case. By default, the drawer uses a `19px-bold weight font`.
>>>>>>> 3eb1c57621054a06d3ea41452266fb5c457760d1
* The title should truncate **after 3 lines** to avoid pushing content too far down in the drawer.

##### Actions

* Actions are not required and the type of actionvary depending on use case. 
* When used, actions are always left-aligned and placed below the title.

##### Close icon

<<<<<<< HEAD
* The close icon is always present, right-aligned in the header, and center aligned vertically with the first line of the title. 

#### Content 

Content selection should be based on the experience you intend to promote. Content should be structured according to our [layout](https://design.gitlab.com/layout/spacing) guidelines. 
=======
* The close icon is always present, right-aligned in the header, and center-aligned vertically with the first line of the title. 

#### Content 

Content selection should be based on the experience you intend to promote. Content should be structured according to our [layout](/layout/spacing) guidelines. 
>>>>>>> 3eb1c57621054a06d3ea41452266fb5c457760d1

#### Container

* The container can either be set in `#ffffff` or `#fafafa` depending on the use case. 

### Interaction 

<<<<<<< HEAD
The drawer will appear following the [motion guidelines](https://design.gitlab.com/product-foundations/motion). 
=======
The drawer will appear following the [motion guidelines](/product-foundations/motion). 
>>>>>>> 3eb1c57621054a06d3ea41452266fb5c457760d1

* 200ms with an ease-in animation.
* By default, the drawer overflows all page content. 
* If full-width elements exist on the page and you do not want the drawer to cover them then you may specify the drawer to be embedded in the page and push all or some of the content rather than overflowing it. 

#### Opening 
<<<<<<< HEAD
- Like [modals](https://design.gitlab.com/components/modals), drawers should never take the user by surprise when they open. Let a user’s action, such as using a button, a link or selecting an option, trigger the drawer.

#### Closing 
- There is one primary way to close the drawer, by using the close icon in the actions section. All drawers should have this action available to users. 

- The second way to close the drawer is by using the `esc` key. This is primarily meant to help with accessibility.  

##### Scrolling

The drawer is designed to allow for scrolling content. When scrolling begins, the drawer content scrolls below the header. 
=======
Like [modals](/components/modals), drawers should never take the user by surprise when they open. Let a user’s action, such as using a button, a link or selecting an option, trigger the drawer.

#### Closing 
- The primary way to close the drawer is by using the close icon in the header. All drawers should have this action.
- The second way to close the drawer is by using the <kbd>esc</kbd> key. This is primarily meant to help with accessibility.  

#### Scrolling

The drawer allows for scrolling content. When scrolling happens, the content scrolls below the header.
>>>>>>> 3eb1c57621054a06d3ea41452266fb5c457760d1

### States

#### Loading

<<<<<<< HEAD
The drawer should utilize the [skeleton loading](https://design.gitlab.com/components/skeleton-loader/) pattern when possible. 

#### Empty 

IF an empty state is required, please follow the [empty-state](https://design.gitlab.com/regions/empty-states) guidelines while being mindful of illustration size. 

#### Small screens and mobile 

The drawer maintains the same behavior all the way down to the small breakpoint, at which point it begins taking up 100% of the viewport width.

#### Accessibility 

* Drawer states (expanded/collapsed) should be announced by screen reader (SR).
* Focus moves within the drawer when expanded.
* Intentional keyboard trap keeps tab order (looped) within the drawer until it is collapsed. This is so a user cannot focus on anything hidden under the drawer.
* `esc` key should collapse the drawer along with the close button.
=======
The drawer should utilize the [skeleton loader](/components/skeleton-loader/) pattern when possible. 

#### Empty 

I an empty state is required, please follow the [empty-state](/regions/empty-states) guidelines while being mindful of illustration size. 

### Small screens and mobile 

The drawer maintains its behavior down to the smallest breakpoint, at which point it takes up the full viewport width.

### Accessibility 

* Drawer states (expanded/collapsed) should be announced by screen reader (SR).
* Focus moves within the drawer when expanded.
* An intentional keyboard trap keeps tab order (looped) within the drawer until it is closed. This is so a user cannot focus on anything outside the drawer.
* The <kbd>esc</kbd> key should closed the drawer along with the close icon.
>>>>>>> 3eb1c57621054a06d3ea41452266fb5c457760d1

## Demo

[[Example:drawer]]

## Design Specifications

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch measure preview for the drawer](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/drawer-spec-previews/)
