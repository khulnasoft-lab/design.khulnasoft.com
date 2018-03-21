<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <div class="page-header p-b-5 m-b-6">
        <h1>Tabs</h1>
      </div>
      <p>Tabs are used as a pattern when there is a need or possible need for initial filtering of content on a view and the perimeters for those filters are few and static. Tabs allow for a counter to be included so a person get's a bird's eye view of each filtered state on how many items are involved.</p>
      <h2>Usage</h2>
      <p>There can only be one tab active at a time, for which the content will be made visible. Tabs can be nested, with a maximum of two levels deep. Note that this should be considered a last resort method. 
      <h5>Tabs with counter badges</h5>
      <p>If tabs contain counter badges, the value of "All" should be the addition of the rest of the tabs. A badged tab should not be included if it breaks this pattern.</p>
      <p>For example, for the merge request list view, there should not be "Open" and "WIP" tabs. As a merge request can be both "Open" and "WIP", this will cause the addition of all badges to not match the number of "All" merge requests anymore. An alternative would be to have a separate sorting function within the tab's content which filters open merge requests by "WIP".</p>
      <h5>Fitted tabs</h5>
      <p>When tabs are used in a narrow column or space, the tabs may be fitted to the entire width.</p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link: <a href="#">Sketch Measure Preview for tabs</a></p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/lists">Lists</a></li>
        <li><a href="/pagination">Pagination</a></li>
        <li><a href="/dropdowns">Drop downs</a></li>
      </ul>
    </div>
  </div>
</template>
