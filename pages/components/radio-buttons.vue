<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Radio buttons</h1>
      <p>A radio button is an input which includes two mutually exclusive states - either selected or unselected - one is active by default.</p>
      <p>A group of radio buttons is a select list which can only have one radio button selected at any time - one is active by default.</p>
      <!-- Usage -->
      <h2>Usage</h2>
      <p>Radio buttons can never be used alone and must always be used in group form. Use a group of radio buttons when there is an choice between two or multiple selections, it has a default state, the results are <strong>not</strong> effective or noticable immediately, and there is the need for a user to click a submit button.</p>
			<p>Radio buttons may replace a segmented control, a list of checkboxes, or a toggle to allow users to choose between two or multiple options. In order to help choosing the right solution follow the table below.</p>
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
						<td class="highlighted">Multiple</td>
						<td>Multiple</td>
						<td>Multiple</td>
						<td>2 (on/off)</td>
						<td>2 (on/off)</td>
					</tr>
					<tr>
						<th>How many selections can the user make?</th>
						<td class="highlighted">1</td>
						<td>1</td>
						<td>0 – all</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<th>Is there a default state?</th>
						<td class="highlighted">Yes</td>
						<td>Yes</td>
						<td>No</td>
						<td>Yes</td>
						<td>Yes</td>
					</tr>
					<tr>
						<th>How would you describe the choices?</th>
						<td class="highlighted">Mutually exclusive</td>
						<td>Mutually exclusive</td>
						<td>Independent of each other</td>
						<td>Mutually exclusive</td>
						<td>Mutually exclusive</td>
					</tr>
					<tr>
						<th>When does the selection take effect?</th>
						<td class="highlighted">After a user clicks a submit button</td>
						<td>Immediately</td>
						<td>After a user clicks a submit button</td>
						<td>After a user clicks a submit button</td>
						<td>Immediately</td>
					</tr>
				</tbody>
			</table>
			<h3>Labels</h3>
			<p>Checkbox labels are set in regular font weight, positioned right from the element, and should be as short as possible. If more, explanatory text is required, it should be added and styled as <a href="/components/forms#help-text">Help text</a> below the label.</p>
			<h3>Visual Design</h3>
			<p>Checkboxes should use high-contrast colors and a dot icon to indicate the states - selected and unselected.</p>

			<h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>

			<h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/radiobuttons-spec-previews/">Sketch Measure Preview for radio buttons</a></p>

			<h2>Related patterns</h2>
			<ul>
				<li><a href="/components/segmented-control">Segmented control</a></li>
        <li><a href="/components/checkboxes">Checkboxes</a></li>
        <li><a href="/components/toggles">Toggles</a></li>
			</ul>
    </div>
   </div>
</template>
