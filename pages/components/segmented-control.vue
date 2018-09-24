<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Segmented control</h1>
      <p>A segmented control is an input which includes a linear set of two or more segments. Each of which functions as a mutually exclusive button with two mutually exclusive states - either selected or unselected. One segment is active by default.</p>
      <h2>Usage</h2>
      <p>A segmented control is commonly used as an alternative to dropdowns, radio button selections, or toggles, but it comes with its own limitations. Because it takes up more space, a segmented control should only be used for up to 5 options but is ideal when there are 2 or 3 as it exposes options in a more visible way. A segmented control should be used instead of a dropdown when there are only a few options and enough room to fit within the UI. It requires fewer interactions and is easier to use on mobile devices, thus having a smaller effect on the user’s cognitive load. Results are effective and visible immediately similar to <a href="/components/toggles">toggles</a>.</p>
      <p>A segmented control is not a group of individual buttons that can be interacted with independently from each other. A segmented control is a group of equal options where only one can be selected and active. There’s no case where none of the options is active.</p>
      <p>A segmented control may replace a group of radio buttons or a toggle to allow users to choose between two or multiple options. In order to help choosing the right solution follow the table below.</p>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Radio buttons</th>
            <th>Segmented control</th>
            <th>Checkboxes</th>
            <th>Single checkbox</th>
            <th>Toggle switches</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>How many states are available?</th>
            <td>Multiple</td>
            <td class="highlighted">Multiple</td>
            <td>Multiple</td>
            <td>2 (on/off)</td>
            <td>2 (on/off)</td>
          </tr>
          <tr>
            <th>How many selections can the user make?</th>
            <td>1</td>
            <td class="highlighted">1</td>
            <td>0 – all</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <th>Is there a default state?</th>
            <td>Yes</td>
            <td class="highlighted">Yes</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th>How would you describe the choices?</th>
            <td>Mutually exclusive</td>
            <td class="highlighted">Mutually exclusive</td>
            <td>Independent of each other</td>
            <td>Mutually exclusive</td>
            <td>Mutually exclusive</td>
          </tr>
          <tr>
            <th>When does the selection take effect?</th>
            <td>After a user clicks a submit button</td>
            <td class="highlighted">Immediately</td>
            <td>After a user clicks a submit button</td>
            <td>After a user clicks a submit button</td>
            <td>Immediately</td>
          </tr>
        </tbody>
      </table>
      <h3>Labels</h3>
      <p>Label positioning rules are the same as they are for <a href="/components/forms">forms</a>. They can be placed to the left of segmented control when there’s a lack of vertical space. But by default, the label comes above the segmented control.</p>
      <p>The label can be omitted in cases when it’s clear what the segmented control is referring to from the UI (for example, switching between a day, week or month view in a calendar UI).</p>
      <p class="todo">Todo: Add live component block with code example (whitespace exmple)</p>
      <p>Button labels need to be as short as possible and should ideally be only one word. Sometimes, that can be done by removing the repeating word and using it as a label (above the segmented control). For example, instead of having button labels “Show whitespace” and “Hide whitespace” use “Whitespace” as a label and only “Show” and “Hide” as button labels.</p>
      <p>Alternatively icons can be used to replace button labels.</p>
      <h3>Sizing</h3>
      <p>The options must be equal in width and prominence. If there are 3 options, each of them should take 33% of the total width of segmented control.</p>
      <h2>Design specification</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/segmented-control-spec-previews/">Sketch Measure Preview for the Segmented control</a>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/buttons">Buttons</a></li>
        <li><a href="/components/dropdowns">Dropdowns</a></li>
        <li><a href="/components/radio-buttons">Radio buttons</a></li>
        <li><a href="/components/toggles">Toggles</a></li>
      </ul>
    </div>
  </div>
</template>
