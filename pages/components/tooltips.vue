<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <div class="page-header p-b-5 m-b-6">
        <h1>Tooltips</h1>
      </div>
      <p>Tooltips identify elements or provide additional, useful information about the referring elements. Tooltips are different from ALT-attributes, which are intended primarily for static images. Tooltips are summoned by:</p>
      <ul>
        <li>Hovering over an element with a cursor</li>
        <li>Focusing on an element with a keyboard (usually the tab key)</li>
        <li>Upon touch</li>
      </ul>
      <h2>Usage</h2>
      <p>Tooltips shouldn’t repeat information that is shown near the referring element. However, they can show the same data in a different format (e.g. date or timestamps). Information provided in a tooltip should be short and concise. If you need to add more than a single line of information, consider using a <a href="/components/popovers">popover</a> instead. The text will wrap when the content is wider than the max-width.</p>
      <h2>Dimensions</h2>
      <p>The dimensions of a tooltip are dependent on its contents with a max-width of 200px.</p>
      <h2>Layout</h2>
      <p>Tooltips contain 8px padding on both the top and bottom and 12px padding on both the left and right.</p>
      <h2>Placement</h2>
      <p>By default, tooltips should be placed below the referring element. However, if there isn’t enough space in the viewport, the tooltip should be moved to the side as needed.</p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/popovers">Popovers</a></li>
      </ul>
    </div>
  </div>
</template>
