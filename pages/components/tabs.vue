<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Tabs</h1>
      <p>Tabs are used to divide content into meaningful, related sections. Tabs allow users to focus on one specific view at a time while maintaining sight of all the relevant content options available. Each tab, when active, will reveal it's own unique content.</p>
      <p>Tabs may include a counter. This counter enables users to understand how many items that particular view contains.</p>
      <h2>Usage</h2>
      <p>There can only be one tab active at a given time.  Tabs may be nested, with a maximum nesting of two levels. Please note that this should be considered only as a last resort.</p> 
      <h3>Tabs with counter badges</h3>
      <p>If tabs containa a counter badge, the value of "All" should be the sum of the rest of the tabs. A badged tab should not be included if it breaks this pattern.</p>
      <p>For example in the merge request list view, there should not be "Open" and "WIP" tabs. As a merge request can be both "Open" and "WIP," this will cause the sum of all badges not to match the number of "All" merge requests. An alternative would be to have a separate sorting function within the tab's content which filters open merge requests by "WIP."</p>
      <h3>Fitted tabs</h3>
      <p>When tabs are used in a narrow container, column, or space, the tabs themselves may be fitted to the entire width instead of remaining left aligned.</p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p> 
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/tabs-spec-previews/">Sketch Measure Preview for tabs</a></p>
      <p class="todo">Todo: Add Sketch Measure Preview for fitted tabs</p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="../regions/navigation">Navigation</a></li>
      </ul>
    </div>
  </div>
</template>
