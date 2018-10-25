<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Feedback</h1>
      <p>Giving appropriate and timely feedback for user-made changes is vital to making GitLab user-friendly. <a href="#saving-progress">Saving progress</a> can be broken down into two main categories: manual (the user saves changes manually by clicking on a button), and automatic (changes are saved automatically with a short delay after the user action).</p>

      <p><a href="#instant-feedback">Instant feedback</a>, on the other hand, is giving user immediate positive feedback without waiting for the return of data from the server, expecting that the change they made will be successfully saved.</p>

      <h2 id="saving-progress">Saving progress</h2>

      <h3 id="manual">Manual</h3>
      <p>Should remain the default option (The other two approaches should be used if they contribute to improving the user's experience, if you think it would add confusion to the process, default to saving manually.) Currently no feedback message, should we change this? Add a toast message?</p>

      <h4>Safety measure</h4>
      <p>As we move towards using all three approaches, it makes sense to add a safety measure when using the manual save approach. The user might just experience auto saving on another page but on the current page we use manual save approach. So it's possible that the user makes changes and tries to navigate off the page (expecting that the changes are automatically saved). In such cases we should track the changes made and wether they were saved or not. If they're not, a modal should appear asking: 'Your changes are not saved. Do you want to save them now?' Similar to how Chrome warns users when they want to close a tab where some content has not been submitted yet.</p>

      <h3 id="autosave">Auto save</h3>
      <p>is best for saving changes in individual fields
- if the field is a text field, we can automatically save x seconds after the user stops typing and on blur event
- we communicate that the change is saved with a toast message at the bottom left of the screen
- in the toast message we provide the option to undo the change
- we only show one toast message at a time, we don't stack them up
- when more than one change is saved we need to count the number of changes and tell the user that 'x number of changes were saved'.
- if a change fials to save for some reason, we need to inform the user that 'saving x change(s) failed' with a link to retry. Clicking on the toast should reveal which changes failed to save</p>
      <p>On mobile, we could display toast messages below the nav bar so we avoid the case where they would be hidden behind the keyboard.</p>
      <p>Guidelines</p>
      <p>Never apply to whole forms. Example: Adding a personal access token needs a name, expiration date, and access scope.
      - Apply to data that only affects the user editing it. Example: user preferences
      - If the data affects other users, make sure that the user is conscious of entering/leaving the editing mode and saving the data. Example: Editing issue fields
      - Never apply to data that might have financial, security, or privacy impacts. Example: Changing password or changing an issue's confidentiality</p>

      <h3 id="saving-drafts">Saving drafts</h3>
      <p>should only be used in certain cases: issue comments and descriptions (as is now) and other cases when long texts are expected. 
- we should show the background activity of saving with a spinner
- when the draft is successfully save we need to communicate that. A simple 'Draft saved' or 'Saved just now', 'Saved x - minutes ago' is enough to reassure users that their progress won't be lost.</p>
      <p>Guidelines</p>
      <p>Think twice before applying to data that might have financial, security, or privacy impacts. Example: We wouldn't save a draft of the user's new password.
- Think about how helpful saving drafts is in every case individually. Try to limit this approach for cases when expected content is long and losing any progress would really hurt user's experience.</p>

      <h2 id="instant-feedback">Instant feedback</h2>
      <p>what is it and why (positive effect on perceived speed)</p>
      <p>We should use instant feedback in cases when successful result is expected, examples: changing an assignee on an issue, changing the milestone, due date, time tracking, epic, weight etc.</p>
      <p>The new information should be added imediately but we should indicate that there's background activity for saving the change. To do that, we should combine opacity and using a spinner. I recommend we use 50% opacity and the dark spinner for such cases</p>
      <p>Once the change is successfully saved, the opacity changes to 100% and the spinner disappears. Afaik, we don't have a way of handling errors for such cases atm. We keep persisting until it gets successfully saved. Should we have a safety measure, similar to the one I described in the 'Manual save' section? The message could be 'Something went wrong with saving changes to the assignee. Retry?'</p>
      
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/buttons">Buttons</a></li>
        <li><a href="/components/forms">Forms</a></li>
        <li><a href="/components/toasts">Toasts</a></li>
      </ul>
    </div>
  </div>
</template>
