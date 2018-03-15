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
      <p>Tooltips shouldn’t repeat information that is shown near the referring element. However, they can show the same data in a different format (e.g. date or timestamps).</p>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary button</td>
            <td>The primary call to action on the page.</td>
          </tr>
        </tbody>
      </table>
      <h2>Placement</h2>
      <p>By default, tooltips should be placed below the referring element. However, if there isn’t enough space in the viewport, the tooltip should be moved to the side as needed.</p>
    </div>
  </div>
</template>
