<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Checkboxes</h1>
      <p>A checkbox is an input which communicates that an option is true, false or indeterminate - one is active by default.</p>
      <p>The last state represents a situation where a list of sub-options is grouped under a parent option and sub-options are in both selected and unselected states.</p>
      <!-- Usage -->
      <h2>Usage</h2>
      <p>Use a single checkbox when there is a choice between two selections, it has a default state, the results are <strong>not</strong> effective or noticable immediately, and there is a need for a user to click a submit button.</p>
      <p>Use multiple checkboxes to allow users to select multiple from a list of options, including all or none.</p>
			<p>Checkboxes may replace toggles, segmented control, or radio buttons to allow users to select one, two or multiple options. In order to help choosing the right solution follow the table below.</p>
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
						<td>Multiple</td>
						<td class="highlighted">Multiple</td>
						<td class="highlighted">2 (on/off)</td>
						<td>2 (on/off)</td>
					</tr>
					<tr>
						<th>How many selections can the user make?</th>
						<td>1</td>
						<td>1</td>
						<td class="highlighted">0 – all</td>
						<td class="highlighted">1</td>
						<td>1</td>
					</tr>
					<tr>
						<th>Is there a default state?</th>
						<td>Yes</td>
						<td>Yes</td>
						<td class="highlighted">No</td>
						<td class="highlighted">Yes</td>
						<td>Yes</td>
					</tr>
					<tr>
						<th>How would you describe the choices?</th>
						<td>Mutually exclusive</td>
						<td>Mutually exclusive</td>
						<td class="highlighted">Independent of each other</td>
						<td class="highlighted">Mutually exclusive</td>
						<td>Mutually exclusive</td>
					</tr>
					<tr>
						<th>When does the selection take effect?</th>
						<td>After a user clicks a submit button</td>
						<td>Immediately</td>
						<td class="highlighted">After a user clicks a submit button</td>
						<td class="highlighted">After a user clicks a submit button</td>
						<td>Immediately</td>
					</tr>
				</tbody>
			</table>
			<h3>Labels</h3>
			<p>Checkbox labels are set in regular font weight, positioned right from the element, and should be as short as possible. If more, explanatory text is required, it should be added and styled as <a href="/components/forms#help-text">Help text</a> below the label.</p>
			<h3>Visual Design</h3>
			<p>Checkboxes should use aside from high-contrast colors to indicate the states - true or false, a checkmark and hyphen icon to differentiate between true or indeterminate .</p>
			<h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
			<h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/checkboxes-spec-previews/">Sketch Measure Preview for checkboxes</a></p>

			<h2>Related patterns</h2>
			<ul>
				<li><a href="/components/segmented-control">Segmented control</a></li>
        <li><a href="/components/dropdowns">Dropdowns</a></li>
        <li><a href="/components/toggles">Toggles</a></li>
        <li><a href="/components/radio-buttons">Radio buttons</a></li>
			</ul>
    </div>
   </div>
</template>
