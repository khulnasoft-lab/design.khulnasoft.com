<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <div class="page-header p-b-5 m-b-6">
        <h1>Tooltips</h1>
      </div>
      <p>Tooltips identify elements or provide additional, useful information about the referring elements. Tooltips are different from ALT-attributes, which are intended primarily for static images.</p>
      <p>Tooltips fade in upon hover or touch of its trigger element. They fade out upon interacting with an area or element outside of the tooltip or its trigger, or on a delay of the cursor moving outside the tooltip or its trigger element.</p>
      <h2>Usage</h2>
      <p>Tooltips shouldn’t repeat information that is shown near the referring element. However, they can show the same data in a different format (e.g. date or timestamps). Information provided in a tooltip should be short and concise. If you need to add more than a single line of information, consider using a <a href="/components/popovers">popover</a> instead. The text will wrap when the content is wider than the max-width.</p>
      <h2>Placement</h2>
      <p>By default, popovers are placed below the referring element. However, when there isn’t enough space in the viewport, the popover is moved to the side or above as needed. If it blocks related content, the preferred popover placement can be manually set.</p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/tooltips-spec-previews/">Sketch Measure Preview for avatars</a></p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/popovers">Popovers</a></li>
      </ul>
    </div>
  </div>
</template>
