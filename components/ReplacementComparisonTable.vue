<script>
/**
 * Renders a table which compares checkboxes with segmented control, toggles, and radio buttons
 *
 * @example
 * <replacement-comparison-table 
 *   column="1">
 * />
 */
export default {
  props: {
    column: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div>
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
            <td :class="{'highlighted': column === '1'}">Multiple</td>
            <td :class="{'highlighted': column === '2'}">Multiple</td>
            <td :class="{'highlighted': column === '3'}">Multiple</td>
            <td :class="{'highlighted': column === '4'}">Boolean</td>
            <td :class="{'highlighted': column === '5'}">Boolean</td>
          </tr>
          <tr>
            <th>How many selections can the user make?</th>
            <td :class="{'highlighted': column === '1'}">1</td>
            <td :class="{'highlighted': column === '2'}">1</td>
            <td :class="{'highlighted': column === '3'}">0 – all</td>
            <td :class="{'highlighted': column === '4'}">1</td>
            <td :class="{'highlighted': column === '5'}">1</td>
          </tr>
          <tr>
            <th>Is there a default state?</th>
            <td :class="{'highlighted': column === '1'}">Yes</td>
            <td :class="{'highlighted': column === '2'}">Yes</td>
            <td :class="{'highlighted': column === '3'}">No</td>
            <td :class="{'highlighted': column === '4'}">Yes</td>
            <td :class="{'highlighted': column === '5'}">Yes</td>
          </tr>
          <tr>
            <th>How would you describe the choices?</th>
            <td :class="{'highlighted': column === '1'}">Mutually exclusive</td>
            <td :class="{'highlighted': column === '2'}">Mutually exclusive</td>
            <td :class="{'highlighted': column === '3'}">Independent of each other</td>
            <td :class="{'highlighted': column === '4'}">Mutually exclusive</td>
            <td :class="{'highlighted': column === '5'}">Mutually exclusive</td>
          </tr>
          <tr>
            <th>When does the selection take effect?</th>
            <td :class="{'highlighted': column === '1'}">After a user clicks a submit button</td>
            <td :class="{'highlighted': column === '2'}">Immediately</td>
            <td :class="{'highlighted': column === '3'}">After a user clicks a submit button</td>
            <td :class="{'highlighted': column === '4'}">After a user clicks a submit button</td>
            <td :class="{'highlighted': column === '5'}">Immediately</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
