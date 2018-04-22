<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="typography md">
      <h1>Iconography</h1>
      <p>One of our values is to create a distinguished GitLab personality that is strong and consistent. Iconography is a powerful visual cue to the user and should reflect our particular sense of style. Within GitLab Elements, we utilize symbols for our icons to take advantage of interchangeable overrides.</p>
      <h2>Icon Viewer</h2>
      <p>You can view all of the current icons in GitLab at the following link: <a href="http://gitlab-org.gitlab.io/gitlab-svgs/" target="_blank">GitLab SVGs</a></p>
      <h2>Usage</h2>
      <p>Icons are used to stress the visual weight for the elements with the high priority on a screen or to explain the universal knowledge in a simple way.</p>
      <p>The level of visual weight from heavy to light is: <strong>Icon + label > Icon > label.</strong><br>Make sure the icons balance the visual weight in the particular usage.</p>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <p>Follow these guidleines when developing icons:</p>
      <p>Icons should be simple and use as few points as possible. The default bounding box size of icons is <strong>16x16px</strong>. Inside of that bounding box, some icons are larger, others are smaller, depending on their design. It's possible to enlarge or shrink the icons (i.e. their bounding box) according to our measure’s scale: 8px, 16px, 24px, 32px, etc.</p>
      <ul>
        <li>Default size: 16px * 16px with a minimum size of 8px * 8px allowed</li>
        <li>Border thickness: 2px</li>
        <li>Border radius: 3px</li>
      </ul>
      <p>Icons should be masked with symbol that allows designers to easily change the color of the icon via an override.</p>
      <h2>Exporting icons as SVG</h2>
      <p>When exporting SVGs, be sure to follow the following guidelines:</p>
      <ol>
        <li>Convert all strokes to outlines.</li>
        <li>Use pathfinder tools to combine overlapping paths and create compound paths.</li>
        <li>SVGs that are limited to one color should be exported without a fill color so the color can be set using CSS.</li>
        <li>Ensure that exported SVGs have been run through an <a href="https://github.com/RazrFalcon/SVGCleaner" target="_blank">SVG cleaner</a> to remove unused elements and attributes.</li>
      </ol>
      <p>You can open your svg in a text editor to ensure that it is clean. Incorrect files will look like this:</p>
      <p class="todo">Todo: Add SVG code example</p>
      <p>Correct file will look like this:</p>
      <p class="todo">Todo: Add SVG code example</p>
      
      <h2>Dos and Dont's</h2>
      <p>Don't use one icon to refer to different meanings.</p>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p class="todo">Todo: Add example</p></td>
            <td><p class="todo">Todo: Add example</p></td>
          </tr>
        </tbody>
      </table>
      <p>Don't use different icons to refer to one specific meaning.</p>
       <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p class="todo">Todo: Add example</p></td>
            <td><p class="todo">Todo: Add example</p></td>
          </tr>
        </tbody>
      </table>
      <p>Don't frequently use the combination of an icon and a label.<br>Use the combination only for the elements with high priority. For instance, we use an icon + a label for the contextual navigation.</p>
       <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p class="todo">Todo: Add example</p></td>
            <td><p class="todo">Todo: Add example</p></td>
          </tr>
        </tbody>
      </table>
      <p>Don't use an icon to explain a meaning which is not straight-forward.<br>If it is inevitable, providing a quick explanation for users in a tooltip.</p>
       <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p class="todo">Todo: Add example</p></td>
            <td><p class="todo">Todo: Add example</p></td>
          </tr>
        </tbody>
      </table>
      <p>Use the whole pixel to create icons to align to measurement correctly.</p>
       <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p class="todo">Todo: Add example</p></td>
            <td><p class="todo">Todo: Add example</p></td>
          </tr>
        </tbody>
      </table>
      <p>Use rounded strokes.</p>
       <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p class="todo">Todo: Add example</p></td>
            <td><p class="todo">Todo: Add example</p></td>
          </tr>
        </tbody>
      </table>
      <p>Simplify icons for clarity and legibility.</p>
       <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p class="todo">Todo: Add example</p></td>
            <td><p class="todo">Todo: Add example</p></td>
          </tr>
        </tbody>
      </table>
      <p>Make the icons front-face instead of different dimensions.</p>
       <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p class="todo">Todo: Add example</p></td>
            <td><p class="todo">Todo: Add example</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
