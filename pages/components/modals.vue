<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Modals</h1>
      <p>Modals are used to reveal critical information, show information without losing context, fragment a complex workflow into simpler steps or when the system requires a user response. Modals should serve a single purpose dedicated to completing user's task.</p>
      <h2>Usage</h2>
      <p>Don’t surprise users by popping up a modal. Let a user’s action, such as a button click, following a link or selecting an option, trigger the modal. Uninvited modals may surprise the user and result in a quick dismissal of the window. Use modals sparingly because they interrupt the user's workflow. When designing an experience that incorporates the need for a modal consider one of the following before reverting to a modal:</p>
      <p><strong>Inline content:</strong> Present your content inline to avoid disruption to the user's flow.</p>
      <p><strong>Expanding elements:</strong> Utilize elements such as <a href="/components/accordions">accordions</a>, <a href="/components/tooltips">tooltips</a>, or other expanding non-modal patterns to convey your information.</p>
      <p><strong>Toasts:</strong> Present your content using <a href="/components/toasts">toasts,</a> a brief, auto-expiring message for the user to consume while staying focused their task.</p>
      <p><strong>New page:</strong> Take the user to a different page so that the interaction may be isolated without losing access to core navigational elements within the application.</p>
      <p><strong>Other non-modal patterns:</strong> Consider alternative patterns such as non-modal dialogs or undo patterns to continue the system-user conversation while keeping the user focused on their task.</p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <h3>Placement</h3>
      <p>Modals should be pinned <strong>32px</strong> from the top of the viewport.</p>
      <h3>Sizes</h3>
      <p>There are 3 max-width sizes for the modals. All should be responsive and scale to full width for mobile viewports.</p>
      <p><strong>Small:</strong> 512px wide</p>
      <p class="todo">Todo: Add live component block of small modal with code example</p>
      <p><strong>Medium:</strong> 768px wide</p>
      <p class="todo">Todo: Add live component block of medium modal with code example</p>
      <p><strong>Large:</strong> 990px max-width</p>
      <p class="todo">Todo: Add live component block of large modal with code example</p>
      <h3>Sections</h3>
      <p>There are three main sections of a modal:</p>
      <p><strong>Header:</strong> The header is either a question, descriptive phrase, or title. The header also contains the close icon in every instance.</p>
      <p><strong>Body:</strong> The content in the body should never be ambiguous and unclear. Strive to be as concise as possible and provide the user with specific information in regards to their task. Do not ask Are you sure you want to do this? Instead, explain what this is, in user-centric terms that are easy to understand and make it likely that the user would recognize a mistake.</p>
      <p><strong>Actions:</strong> There should be no more than 3 actions and no fewer than 1. Actions should always be placed within an action bar at the bottom of the modal.</p>
      <ul>
        <li>Dismissive actions are always left aligned and affirmative actions are always right aligned. In cases where there are 2 affirmative actions the order should be, from left to right, secondary action -> primary action.</li>
        <li>There will be some cases where no affirmative actions are designated for the modal. In these cases, an action bar should be used with a dismissive action. There should always be multiple ways to close/dismiss this type of modal, including allowing the user to click outside of the modal area or use the escape key. This is important to remember because some modals can be tall and we want to avoid making the user scroll up to close a modal.</li>
      </ul>
      <h3>Behavior</h3>
      <p><strong>User focus:</strong> When you open a modal use a lightbox effect (darken the background). This draws attention to the modal and indicates that the user cannot interact with the parent page.</p>
      <p><strong>Autofocus:</strong> The first focusable item should be auto-focused within the modal dialog so that the user can tab in the modal and not become stuck behind the overlay. This behavior follows the <a href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html" target="_blank">accessibility guidelines</a> for modals.</p>
      <p><strong>Scrolling:</strong> The height of the modal is determined by the content. Some users have smaller screens, so for these instances where the content requires scrolling, it's best practice to extend the height of the modal below the window to avoid double scrolling. Alternatively, consider taking the user to another page in instances where a tall modal requires the user to scroll more than a few times to consume all the content.</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/andy/ce%23187-modal-documentation-spec-previews/">Sketch Measure Preview for Modals</a></p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/accordions">Accordions</a></li>
        <li><a href="/components/buttons">Buttons</a></li>
        <li><a href="/components/popovers">Popovers</a></li>
        <li><a href="/components/toasts">Toasts</a></li>
        <li><a href="/components/tooltips">Tooltips</a></li>
      <h2>Resources</h2>
      <p><a href="https://modalzmodalzmodalz.com/" target="_blank">modalzmodalzmodalz</a></p>
      <p><a href="https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c" target="_blank">Best Practices for Modals / Overlays / Dialog Windows</a></p>
      <p><a href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Modal & Nonmodal Dialogs: When (& When Not) to Use Them</a></p>
    </div>
  </div>
</template>
