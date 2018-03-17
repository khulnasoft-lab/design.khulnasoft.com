<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <div class="page-header p-b-5 m-b-6">
        <h1>Toasts</h1>
      </div>
      <p>Toasts are used to display system messages. The messages are short and straightforward. It may contain a dismiss button, and an action button depending on the situation. </p>
      <h2>Usage</h2>
      <p>Toasts appear with an ease-in animation from the bottom and display at the left-bottom of the screen. Users can exit the toast by clicking the “Dismiss” button. If left alone, toasts automatically disappear with ease-out animation after a specific length of time.</p>
      <h5>Dos and Dont's</h5>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Show only one toast at a time.</td>
            <td>Show a second toast before the first has timed out or been dismissed.</td>
          </tr>
          <tr>
            <td>Add a "Dismiss" button and an additional action button if appropriate.</td>
            <td>Add more than one extra button other than a "Dismiss" button.</td>
          </tr>
          <tr>
            <td>Always show a dismiss button.</td>
            <td>Remove a user's ability to manually dismiss the message.</td>
          </tr>
          <tr>
            <td>Avoid using for irreversible actions.</td>
            <td>Use for actions that will result in permanent deletion.</td>
          </tr>
        </tbody>
      </table>
      <h5>Toast Types</h5>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Type</th>
            <th>Visual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single line message.</td>
            <td><p class="todo">Todo: Add live component for a visual</p></td>
          </tr>
          <tr>
            <td>Single line message with an action.</td>
            <td><p class="todo">Todo: Add live component for a visual</p></td>
          </tr>
          <tr>
            <td>Two lines message with a custom action.</td>
            <td><p class="todo">Todo: Add live component for a visual</p></td>
          </tr>
          <tr>
            <td>Two lines message with an action.</td>
            <td><p class="todo">Todo: Add live component for a visual</p></td>
          </tr>
        </tbody>
      </table>
      <h5>Mobile</h5>
      <ul>
          <li>The width of the toast is full (100%).</li> 
          <li>The toast does not have rounded corners.</li>
          <li>If the message has only one line and the only action is to dismiss, the toasts retain the dismiss icon.</li>
          <li>If the message wraps onto another line:
              <ul>
                  <li>If there's a dismiss and a custom action, put them below the message, aligned to the right, with the “Dismiss” action first.</li>
                  <li>If there is only a custom action (no dismiss action) and the text wraps into another line, put the action below the message.</li>
              </ul>
          </li>
      </ul>
      <h2>Dimensions</h2>
      <p>The dimensions of a toast are dependent on its contents with a max-width of 568px.</p>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/modals">Modals</a></li>
      </ul>
    </div>
  </div>
</template>
