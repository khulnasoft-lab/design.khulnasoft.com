<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="typography md">
      <h1>Iconography</h1>
      <p>One of our values is to create a distinguished GitLab personality that is strong and consistent. Iconography is a powerful visual cue to the user and should reflect our particular sense of style. Within GitLab Elements, we utilize symbols for our icons to take advantage of interchangeable overrides.</p>
      <h2>Usage</h2>
      <p>Icons are used to stress the visual weight for the elements with the high priority on a screen or to explain the universal knowledge in a simple way.</p>
      <p>The level of visual weight from heavy to light is: <strong>Icon + label > Icon > label.</strong> Make sure the icons balance the visual weight in the particular usage.</p>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Developing icons</h2>
      <p>Follow these guidleines when developing icons:</p>
      <ol>
        <li>Icons should be simple and use as few points as possible.</li>
        <li>All strokes should be converted to outlines.</li>
        <li>Use pathfinder tools to combine overlapping paths and create compound paths.</li>
        <li>The default bounding box size of icons is <strong>16x16px</strong>. Inside of that bounding box, some icons are larger, others are smaller, depending on their design. It's possible to enlarge or shrink the icons (i.e. their bounding box) according to our measure’s scale: 8px, 16px, 24px, 32px, etc.</li>
        <li>Icons should be masked with symbol that allows designers to easily change the color of the icon via an override.</li>
      </ol>
      <ul>
        <li>Standard size: 16px * 16px</li>
        <li>Border thickness: 2px</li>
        <li>Border radius: 3px</li>
      </ul>
      <h2>Dos and Dont's</h2>
      <p>Don't use an icon to refer to different meanings.</p>
      <p>Don't use different icons to refer to a specific meaning.</p>
      <p>Don't frequently use the combination of an icon and a label.Using the combination only for the elements with high priority. For instance, we only use a icon + a label for the contextual navigation.</p>
      <p class="todo">Todo: Add live component block with code example</p>
      <p>Don't use an icon to explain a meaning which is not straight-forward. If it is inevitable, providing a quick explanation for users in a tooltip.</p>
      <p class="todo">Todo: Add live component block with code example</p>
      <p>Use the whole pixel to create icons to align to measurement correctly</p>
      <p class="todo">Todo: Add live component block with code example</p>
      <p>Use rounded strokes</p>
      <p class="todo">Todo: Add live component block with code example</p>
      <p>Simplify icons for clarity and legibility</p>
      <p class="todo">Todo: Add live component block with code example</p>
      <p>Make the icons front-face instead of different dimensions.</p>
      <p class="todo">Todo: Add live component block with code example</p>
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
          <tr>
            <td>Secondary button</td>
            <td>Secondary actions on the page.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
