# Headers

Headers provide a consistent, recognizable, and functional way of presenting page-level information. Headers are critical in helping users develop a mental model of the platform, making it easier for them to navigate. Navigation and Headers are the backbone patterns that compose a page.

## Structure

Headers are placed at the top of the page, below the navigation. Headers provide all the information needed to understand the content of a page, including the page title, relevant metadata (eg. date, author, status...), and primary actions. Headers should be structured as follow:

### Breadcrumb

A [breadcrumb](/components/breadcrumb) indicates the current location and provides access to parent and ancestor pages.

### Title
 
The page title (`<h1>` heading) is placed below the breadcrumb. A page title should reflect the currently active element of the breadcrumb as much as possible (eg. A `Gitlab.org > Gitlab > Environments` breadcrumb should translate to an `Environments` page title). Titles should be styled following the [UI typography](/product-foundations/layout#ui-typography) guidelines. 

### Metadata (optional) 

Relevant metadata, such as user-generated content creation date, author, and statuses, should form a row, placed below the page title. This metadata can be a combination of multiple components: [Labels](/components/label), [badges](/components/badge), [avatars](/components/avatar), [links](/components/link). 

### Buttons (optional) 

Buttons are used to provide quick access to the page's primary actions. Buttons should always be placed in the top right corner and vertically aligned with the page title baseline.

### Page description (optional)

A short paragraph can be used to introduce users to the page's purpose. When creating a new page, consider using a page description to improve learnability. Ensure your description is clear, concise, and easy to understand.

TODO: [ADD HEADER ILLUSTRATION]

## Behavior

### Sticky Position 

The header can have a sticky position to remain visible at the top of the screen as the user scrolls down the page. Setting a sticky position helps the user quickly access the breadcrumb and the main page actions, even when they are scrolled further down the page. This is especially useful for pages with a lot of content. Style a sticky header according to the [elevation](/product-foundations/elevation) guidelines and consider using a smaller font size for the title to reduce the header height. Avoid using a sticky position for headers on short pages where the header could entirely cover the content. In these cases, the header should remain at the top of the page.

TODO: [ADD STICKY GIF]

### Right-to-Left

As some languages are written to be read from right to left, the header should adapt to match the directionality of the U.I. 

#### Title & Page description

All textual elements should be aligned to the right. 

#### Buttons 

Buttons should always be placed in the top left corner and vertically aligned with the page title baseline. In this setup, buttons are displayed in reverse order (see [button alignment](/components/button#alignment))

TODO: [ADD RTL HEADER ILLUSTRATION]

### Responsiveness

#### Breakpoints 

These breakpoints define specifications for different screens, devices, and orientations.

- sm: `≤768px` The metadata and textual elements (Page title, page description) can reflow and break into multiple lines. Buttons can be housed under a common dropdown.
- md: `≥768px` 

## Accessibility

Include semantic elements such as `<header>` and `<h1>` in the DOM to create a logical structure for the page, making it easier for assistive technologies to understand and interpret the content.

