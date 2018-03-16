<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <div class="page-header p-b-5 m-b-6">
        <h1>Popovers</h1>
      </div>
      <p>Popovers are used to provide supplemental, useful, unique information about an element, including one or multiple actionable elements. They inform the user of additional information within the context of their original view, but without forcing the user to act upon it like a modal. Popovers are different from tooltips, which do not provide rich markup and actionable items. Additionally, a popover can contain a header section with a different background color and images if needed.</p>
      <p>Popovers are summoned upon hover or touch on an element, which means popovers fade away by clicking on a link inside, or on a delay of the cursor moving outside the popover or its trigger element bounding box.</p>
      <h2>Usage</h2>
      <p>A popover should be used:</p>
      <ol>
        <li>When you don't want to let the user lose context, but still want to provide additional useful unique information about referring elements.
        <li>When it isn’t critical for the user to act upon the information.</li>
        <li>When you want to give a user a summary of extended information and the option to switch context if they want to dive in deeper.</li>
      </ol>
      <h2>Dimensions</h2>
      <p>The dimensions of a tooltip are dependent on its contents with a max-width of 276px.</p>
      <h2>Layout</h2>
      <p>8px top and bottom should be applied to the content of every popover.</p>
      <p>If a header is used, the header content should also have 8px applied to both the top and bottom.</p>
      <h2>Placement</h2>
      <p>By default, popovers should be placed below the referring element. However, if there isn’t enough space in the viewport or it blocks related content, the popover should be moved to the side or above as needed.</p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/tooltips">Tooltips</a></li>
      </ul>
    </div>
  </div>
</template>

