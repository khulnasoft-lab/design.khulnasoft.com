<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Toggle</h1>
      <p>A toggle is a digital visual switch which includes two mutually exclusive states - either On or Off - one is active by default.</p>
      <!-- Usage -->
      <h2>Usage</h2>
      <p>Use toggles when there is a choice between two selections, it has a default state, the results are effective and noticable immediately, and there is no need for a user to click a submit button.</p>
			<p>Avoid using toggles in for example <a href="/components/forms">forms</a> where a submit button is needed in order to confirm the user's input. This would confuse the user and dillute the expected experience of producing instant results for any toggle throughout the interface.
			<p>Toggles may replace two radio buttons or a single checkbox to allow users to choose between two opposing states. In order to help choosing between toggles, radio buttons, and checkboxes in order to find the right solution follow the table below.</p>

			<table>
				<thead>
					<tr>
						<th>&nbsp;</th>
						<th>Radio Buttons</th>
						<th>Checkboxes</th>
						<th>Single Checkbox</th>
						<th>Toggle Switches</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>How many states are available?</th>
						<td>Multiple</td>
						<td>Multiple</td>
						<td>2 (on/off)</td>
						<td>2 (on/off)</td>
					</tr>
					<tr>
						<th>How many selections can the user make?</th>
						<td>1</td>
						<td>0 – all</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<th>Is there a default state?</th>
						<td>Yes</td>
						<td>No</td>
						<td>Yes</td>
						<td>Yes</td>
					</tr>
					<tr>
						<th>How would you describe the choices?</th>
						<td>Mutually exclusive</td>
						<td>Independent of each other</td>
						<td>Mutually exclusive</td>
						<td>Mutually exclusive</td>
					</tr>
					<tr>
						<th>When does the selection take effect?</th>
						<td>After a user clicks a submit button</td>
						<td>After a user clicks a submit button</td>
						<td>After a user clicks a submit button</td>
						<td>Immediately</td>
					</tr>
				</tbody>
			</table>

			Labels for checkboxes and radios are set in regular font weight.

			In rare cases and exceptions, the label can be placed to the left of the input field. Examples include single input fields (e.g. "Sort by" dropdowns) and horizontally distributed forms.



When a user toggles switch, the response should take effect immediately.
The labels should be concise, direct, and short. Keep the label scannable. Also, it should describe the result when the user turn on the option.
Toggles should use high-contrast colors to indicate the states - On and Off.


			<h3>When to use checkboxes</h3>
      <ul>
        <li><p>Use checkboxes when the user is allowed to select one or more items from a list.</p></li>
        <li><p>Use radio buttons when the user is allowed to make only one choice from a list and needs to see all available options. </p></li>
      </ul>
      <h3>Visual Design</h3>
      <ul>
        <li><p>For "on" state, the track should present in `$blue-500`, and the thumb should present in `$white` with checkmark icon.</p></li>
        <li><p>For "off" state, the track should present in `$grey-600`, and the thumb should present in `$white` with close icon.</p></li>
      </ul>
      <h3>Position</h3>
      <p>The toggle should be inline with the label and at the right side.</p>
      <!-- Dos and Dont's -->
      <h3>Dos and Dont's</h3>



			<p class="todo">Todo: Add the example of dos and dont's.</p>

    </div>
   </div>
</template>
