<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Feedback</h1>
      <p>Giving appropriate and timely feedback for user-made changes is vital to making GitLab user-friendly. <a href="#saving-progress">Saving progress</a> can be broken down into two main categories: <a href="#manual">manual</a> where the user saves changes manually by clicking on a button, and <a href="#autosave">auto save</a> where changes are saved automatically with a short delay after the user action.</p>

      <p><a href="#instant-feedback">Instant feedback</a>, on the other hand, is giving user immediate positive feedback without waiting for the return of data from the server, expecting that the change they made will be successfully saved. It has a positive effect on perceived speed of the application.</p>

      <h2 id="saving-progress">Saving progress</h2>
      <p>The guideline for choosing between the two methods of saving changes is: introduce automatic saving of changes if you believe that it will improve the user’s experience in the given case, if you think it may add confusion to the process, default to saving manually. Automaticly saving changes can be sensitive and comes with its own set of guidelines. Consider those guidelines when deciding between the two methods.</p>

      <h3 id="manual">Manual</h3>
      <p>Manually saving changes should happen after the user confirms the changes (clicks on a button), ideally without reloading the page, and a toast message saying “Changes saved” should appear in the bottom left corner of the screen to confirm the changes were saved successfully.</p>

      <h4 id="safety-measure">Safety measure</h4>
      <p>As we move towards using both methods for saving changes, it makes sense to add a safety measure when using the manual method. The user might just experience auto-saving on another page but on the current page they need to manually save their changes. The users can’t know  which of the two methods is being used as there are no indicators in the UI, so it's possible that they make changes and try to navigate off the page (expecting that the changes were saved automatically). In such cases we should track the changes made and wether they were saved or not. If they weren’t saved, a modal should appear asking: “Your changes are not saved. Do you want to save them now?”</p>

      <h3 id="autosave">Auto save</h3>
      <p>Usually works best for long settings pages where the “Save changes” button isn’t visible (pushed below the fold by the content). Auto-saving changes made by the user removes the need for looking for that button. Auto-saving should be applied to each input individually and not to forms as a whole.</p>
      <p>If the change is triggered by a click event, we auto-save immediately after it happens, if it’s triggered by typing, the auto-save should happen on the blur event of that input field but also 3 seconds after the last key is pressed.</p>
      <p>To inform the user that the change has been saved, a toast message appears in the bottom left corner of the screen. The message should be “Change saved” if a single change was saved and “x changes saved” when more than one change was saved (instead of stacking messages up). The toast message should always have the option to undo the recent changes.</p>
      <p>If a change fails to auto-save, we need to: </p>
      <ol>
        <li>Keep re-trying until successful.</li>
        <li>Inform the user with a toast message saying “Saving x changes failed” with the option to retry manually. This message should remain visible until the changes are successfully saved.</li>
      </ol>	
      <p><em>Guidelines</em></p>
      <p>Never apply to whole forms (example: adding a personal access token needs a name, expiration date, and access scope; it doesn’t make sense to auto-save the token name field individually). The auto save method should ideally be only used for data that affects the user editing it. Auto-saving shouldn’t  be applied to data that might have financial, security, or privacy impacts, example: changing password or changing the confidentiality of an issue.</p>

      <h4 id="saving-drafts">Saving drafts</h4>
      <p>Saving drafts is a form of auto-saving changes. It’s best used for saving progress in cases when users are expected to spend longer time inputting data (example: editing issue description). Automatic saving of progress should be indicated by two states:</p>
      <ul>
        <li>Saving: the user made changes and there’s background activity in progress to save a draft of these changes. Should be combined with a spinner to indicate background activity.</li>
        <li>Saved: no recent changes made, all changes are successfully saved as a draft. Should be combined with a timestamp (example: “Saved just now” or “Saved 1 min ago”).</li>
      </ul>
      <p>Indicating the current status reassures the users that their progress won’t be lost. In some cases it might be necessary to clearly state that a “Draft” is being saved to avoid confusion (“Draft saved 1 min ago”).</p>
      <p><em>Guidelines</em></p>
      <p>Think twice before applying to data that might have financial, security, or privacy impacts (example: we wouldn't save a draft of the user's new password). Think about how helpful saving drafts is in every case individually. Try to limit this approach for cases when expected content is long and losing any progress would really hurt user's experience.</p>

      <h2 id="instant-feedback">Instant feedback</h2>
      <p>Instant feedback simply means that we show the expected result of a successfully saved change even before that change has actually been saved—we anticipate that the change will be saved successfully so we show it in the UI immediately. This has a positive impact on the perceived speed of the application. An example of a case when a successful result is expected is changing the assignee on an issue.</p>
      <p>The new information should be reflected in the UI immediately but we should also indicate that there's background activity for actually saving the change. To do that, we should combine a change in opacity (50% opacity until successfully saved) and the use of a spinner.</p>
      <p>Once the change is successfully saved, the opacity changes to 100% and the spinner disappears. There is no way of handling errors for such cases, we keep persisting until it gets successfully saved. To avoid loss of progress and changes, this method can be complemented with a <a href="#safety-measure">safety measure</a> similar to the one described above: if changes aren’t successfully changed when the user tries to close the page, show a warning.</p>
      
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/components/buttons">Buttons</a></li>
        <li><a href="/components/forms">Forms</a></li>
        <li><a href="/components/spinner">Spinner</a></li>
        <li><a href="/components/toasts">Toasts</a></li>
      </ul>
    </div>
  </div>
</template>
