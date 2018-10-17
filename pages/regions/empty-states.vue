<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="typography md">
      <h1>Empty states</h1>
      <p>Empty states should be considered during the implentation of new features. They are vital to helping onboard new users, making the experience feel more approachable and understandable.</p>
      <h2>Usage</h2>
      <p>An empty state is our way to communicate to the user that there is no content to load and what action they should take next. They should tell users: what it’s for, why they are seeing it and what they need to do next.</p>
      <p>Empty states are composed of 3 elements, the illustration, message, and call to action. The illustration is optional but strongly recommended as it adds personality and aides the user in understanding the situation.</p>
      <ol>
        <strong>1. Illustration</strong>
        <p>The illustration should compliment the need for the empty state and help the user understand the situation.</p>
      </ol>
      <ol>
        <strong>2. Description</strong>
        <p>The title and message should be clear concise and explain why the user is seeing this screen.</p>
      </ol>
      <ol>
        <strong>3. Call to action</strong>
        <p>Taking the form of a primary button with the option to add a secondary button, the text within should be direct and actionable.</p>
      </ol>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <h3>Illustration Style</h3>
      <p><a href="/foundations/illustration">See illustration guidelines</a></p>
      <h3>Size</h3>
      <p>Max size on empty state illustrations is <strong>425px wide by 375px tall</strong>. Do not scale smaller illustrations up to this size as they will look too large. Instead use the original size of the illustration if it has already been drawn.</p>
      <h3>Fonts</h3>
      <ul>
        <li>Header title: H4 primary style</li>
        <li>Description: Primary paragraph style</li>
      </ul>
      <h3>Description</h3>
      <ul>
        <li>If the description needs to wrap on desktop, align it to the left.</li>
        <li>If the title needs to wrap on desktop, align both the title and description to the left.</li>
        <li>If the title and description do not wrap on desktop, center them horizontally.</li>
      </ul>
      <h3>Call to action</h3>
      <ul>
        <li>The Call to action button in the empty state should be a primary button.</li>
        <li>There is only one primary button since there can only be one primary button per form. If there is a need for more than one button, the other should be a secondary button.</li>
      </ul>
      <h3>Mobile</h3>
      <p>On mobile, the layout is same to the one on desktop. It only scales down the illustrations and changes the width of paragraph.</p>
      <p><a href="#">To Do: Sketch Measure Preview for empty states</a></p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/foundations/illustration">Illustration</a></li>
      </ul>
    </div>
  </div>
</template>
