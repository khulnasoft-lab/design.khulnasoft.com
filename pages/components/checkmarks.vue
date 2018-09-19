<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Checkmarks</h1>
      <p>A checkmark is an input which communicates that an option is true, false or indeterminate - one is active by default.</p>
      <!-- Usage -->
      <h2>Usage</h2>


      single

      Multiple

      <p>Use checkmarks when there is a choice between two or more selections.  it has a default state, the results are effective and noticable immediately, and there is no need for a user to click a submit button.</p>

      between two opposite states
      allow people to select a number of options

      used when there is a list of options and the user may select multiple options, including all or none.


			<p>Avoid using toggles in for example <a href="/components/forms">forms</a> where a submit button is needed in order to confirm the user's input. This would confuse the user and dillute the expected experience of producing instant results for any toggle throughout the interface.
			<p>Toggles may replace a secgmented control, two radio buttons, or a single checkbox to allow users to choose between two opposing states. In order to help choosing the right solution follow the table below.</p>

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
						<td>Multiple</td>
						<td>2 (on/off)</td>
						<td>2 (on/off)</td>
					</tr>
					<tr>
						<th>How many selections can the user make?</th>
						<td>1</td>
						<td>1</td>
						<td>0 – all</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<th>Is there a default state?</th>
						<td>Yes</td>
						<td>Yes</td>
						<td>No</td>
						<td>Yes</td>
						<td>Yes</td>
					</tr>
					<tr>
						<th>How would you describe the choices?</th>
						<td>Mutually exclusive</td>
						<td>Mutually exclusive</td>
						<td>Independent of each other</td>
						<td>Mutually exclusive</td>
						<td>Mutually exclusive</td>
					</tr>
					<tr>
						<th>When does the selection take effect?</th>
						<td>After a user clicks a submit button</td>
						<td>Immediately</td>
						<td>After a user clicks a submit button</td>
						<td>After a user clicks a submit button</td>
						<td>Immediately</td>
					</tr>
				</tbody>
			</table>

			<h3>Labels</h3>
				<p>Toggle labels are set in bold, positioned above the element by default, and should describe what the control will do when the switch is on in a concise, direct, and short way.</p>
			<h3>Visual Design</h3>
			<p>Toggles should use high-contrast colors to indicate the states - On and Off.</p>

			<h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>

			<h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/toggles-spec-previews/">Sketch Measure Preview for toggles</a></p>

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
