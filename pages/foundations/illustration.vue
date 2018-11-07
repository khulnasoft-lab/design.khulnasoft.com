<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Modals</h1>
      <p>Modals are used to reveal critical information, show information without losing context, or when the system needs a user response.</p>
      <h2>Usage</h2>
      <p>Use modals sparingly because they interrupt the user's workflow. When designing an experience that incorporates the need for a modal consider one of the following before reverting to a modal:</p>
      <p><strong>Inline content:</strong> Present your content inline to avoid disruption to the user's flow.</p>
      <p><strong>Expanding elements:</strong> Utilize elements such as <a href="/component/accordions">accordions</a>, <a href="/component/tooltips">tooltips</a>, or other non-modal patterns to convey your information.</p>
      <p><strong>New page:</strong> Take the user to a different page so that the interaction may be isolated without losing access to core navigational elements within the application.</p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <h3>Placement</h3>
      <p>Modals should be pinned <strong>64px</strong> from the top of the window.</p>
      <h3>Sizes</h3>
      <p>There are 4 sizes for the modals based on our grid structure:</p>
      <p><strong>Small:</strong> 512px wide</p>
      <p class="todo">Todo: Add live component block of small modal with code example</p>
      <p><strong>Medium:</strong> 768px wide</p>
      <p class="todo">Todo: Add live component block of medium modal with code example</p>
      <p><strong>Large:</strong> 990px max-width</p>
      <p class="todo">Todo: Add live component block of large modal with code example</p>
      <p><strong>Mobile:</strong> Viewport width</p>
      <p class="todo">Todo: Add live component block of mobile modal with code example</p>
      <h3>Elements</h3>
      <p>There are three main elements of a modal:</p>
        <ul>
          <li><strong>Header:</strong> The header is either a question, descriptive phrase, or title. The header also contains the close icon in every instance and the title uses the h3 style.</li>
          <li><strong>Body:</strong> The content in the body should never be ambiguous and unclear. It provides specific information.</li>
            <ul>
              <li>Content should conform to our design guidelines, there is no default style for certain elements within modals.</li>
            </ul>
          <li><strong>Actions:</strong> There should be no more than 3 actions and no fewer than 1. Actions should always be placed within an action bar at the bottom of the modal.</li>
          <ul>
            <li>Dismissive actions are always left aligned and affirmative actions are always right aligned. In cases where there are 2 affirmative actions the order should be, from left to right, secondary action -> primary action.</li>
            <li>There will be some cases where no affirmative actions are designated for the modal. In these cases, an action bar should be used with a dismissive action. There should always be two ways to close/dismiss a modal. This is important to remember because some modals can be tall and we want to avoid making the user scroll to close a modal.</li>
          </ul>
        </ul>
      <h3>Behavior</h3>
      <p><strong>Autofocus:</strong> The first focusable item should be auto-focused within the modal dialog so that the user can tab in the modal and not become stuck behind the overlay. This behavior follows the <a href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html">accessibility guidelines</a> for modals.</p>
      <p><strong>Scrolling:</strong> The height of the modal is determined by the content. Some users have smaller screens, so for these instances where the content requires scrolling, it's best practice to extend the height of the modal below the window to avoid double scrolling.</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/andy/ce-187-modal-spec-previews/">Sketch Measure Preview for Modals</a></p>
      <h2>Related patterns</h2>
        <ul>
         <li><a href="/components/accordions">Accordions</a></li>
         <li><a href="/components/buttons">Buttons</a></li>
         <li><a href="/components/popovers">Popovers</a></li>
         <li><a href="/component/tooltips">Tooltips</a></li>
       </ul>
      <h2>Resources</h2>
      <p><a href="/https://modalzmodalzmodalz.com/">modalzmodalzmodalz</a></p>
    </div>
  </div>
</template>

