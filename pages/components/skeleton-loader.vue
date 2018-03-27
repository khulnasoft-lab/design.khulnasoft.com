<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <div class="page-header p-b-5 m-b-6">
        <h1>Skeleton Loader</h1>
      </div>
      <p>A skeleton loader is used to let users know what kind of content is currently loading. The content can be loaded independently and asynchronously, while still adhering to the structure and look of the complete view.</p>
      <h2>Usage</h2>
      <p>A skeleton loader can replace any existing UI elements for the period in which they are being loaded and should aim for maintaining a similar structure visually.</p>
      <ul>
        <li>A skeleton should represent an organism recognizably.</li>
        <li>Atom elements within organisms (for reference see this article on <a href="http://atomicdesign.bradfrost.com/chapter-2/">atomic design methodology</a>) may be represented in a maximum of 3 repetitions, if applicable.</li>
        <li>Skeletons should only be presented in grayscale.</li>
        <li>Animate the grey atoms in a pulsating way to show motion, as if "loading." The pulse animation transitions color horizontally from left to right, starting with #f2f2f2 to #fafafa.</li>
      </ul>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <p class="todo">Todo: Add link to spec preview</p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/">Spinner</a></li>
      </ul>
    </div>
  </div>
</template>
