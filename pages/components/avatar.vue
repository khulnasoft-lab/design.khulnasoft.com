<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <div class="page-header p-b-5 m-b-6">
        <h1>Avatars</h1>
      </div>
      <p>Avatars provide value to the user by representing a unique entity, be it a person, a group, or a project.</p>
      <h2>Usage</h2>
      <p>Avatars are displayed in a circular shape and come in a variety of sizes. Size depends on the element and view it resides in.</p>
      <p>They preferably display an image as it makes use of the ability of the human brain to quickly recognize patterns, faces, etc, and offers a way of personalisation.</p>
      <p>They will have a fallback to display up to two letters based on the name field of that entity if an image is not available. Personal avatars have a <a href="https://gravatar.com">Gravatar</a> fall back which provides either a configured image or a randomly generated image.</p>
      <p>On hover, a tooltip shows up to reveal the entity name. In the case of a user avatar, the tooltip will contain the user's avatar, the user's name, and the user's username.</p>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Component type</th>
            <th>Purpose</th>
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
      <h5>Displaying multiple avatars</h5>
      <p>Some features require displaying multiple avatars side by side. If there is enough space, they should be displayed in a grid pattern, side by side. In tighter places, avatars may be displayed overlapping each other. Tooltips might contain different content too in those circumstances.</p>
      <p class="todo">An example of a live component to add related to a usage guideline</p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/tooltips">Tooltips</a></li>
      </ul>
    </div>
  </div>
</template>
