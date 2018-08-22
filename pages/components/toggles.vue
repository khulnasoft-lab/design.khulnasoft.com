<template>
	<div class="content limited m-t-7 m-b-7">
		<div class="component md">
			<h1>Toggle</h1>
			<p>A toggle is a digital visual switch which includes two mutually exclusive states - either On or Off.</p>
			<!-- Usage -->
			<h2>Usage</h2>
			<p>Use toggles when there is only one available option and users can make an choice between two selections. The result of the toggle should be delivered immediately.</p>
			<h3>Checkboxes and radio buttons</h3>
			<ul>
			 <li><p>Use checkboxes when the user is allowed to select one or more items from a list. Use radio buttons when the user is allowed to make only one choice from a list and needs to see all available options.</p></li>
			 <li><p>Use radio buttons when the user is allowed to make only one choice from a list and needs to see all available options. </p></li>
			</ul>
			<h3>Visual Design</h3>
			<p>For on state, the track should present in `$blue-500`, and the thumb should present in `$white` with checkmark icon. For off state, the track should present in `$grey-600`, and the thumb should present in `$white` with close icon.</p>
			<h3>Position</h3>
			<p>The toggle should be inline with the label and at the right side.</p>
			<!-- Dos and Dont's -->
			<h3>Dos and Dont's</h3>
			<p class="todo">Todo: Add the example of dos and dont's.</p>
			<table class="do-dont m-b-6">
				<thead>
				  <tr>
				    <th>Do</th>
				    <th>Don't</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
				    <td>When a user toggles switch, the response should take effect immediately.</td>
				    <td>Ask users to click Save or Submit to apply the new state.</td>
				  </tr>
				  <tr>
				    <td>The labels should be concise, direct, and short. Keep the label scannable. Also, it should describe the result when the user turn on the option.</td>
				    <td>Asking questions and adding a description for the value of a switch.</td>
				  </tr>
				  <tr>
				    <td>Toggles should use high-contrast colors to indicate the states - On and Off. </td>
				    <td>Applying the similar colors for the states.</td>
				  </tr>
				</tbody>
			</table>
		</div>
	 </div>
</template>
