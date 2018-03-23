<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Voice and tone</h1>
      <p>The copy for GitLab is clear and direct. We strike a clear balance between professional and friendly. We can empathize with users (such as celebrating completing all Todos) and remain respectful of the importance of the work. We are a trusted and friendly coworker, helpful and understanding.</p>
      <p>The copy and messaging is a core part of the experience of GitLab and the conversation with our users. Follow the below conventions throughout GitLab.</p>
      <p>Portions of this page are inspired by work found in the <a href="https://material.io/guidelines/">Material Design guidelines.</a></p>
      <h2>Brevity</h2>
      <p>Users will skim content, rather than read the text carefully. When familiar with a web app, users rely on muscle memory and may read even less when moving quickly. A good experience should quickly orient a user, regardless of their experience, to the purpose of the current screen. Understanding should happen without the user having to read long strings of text consciously.</p>
      <p>In general, text is burdensome and adds cognitive load. This load is even more pronounced in a powerful productivity tool such as GitLab. We should not rely on words as a crutch to explain the purpose of a screen. The current navigation and composition of the elements on the screen should get the user 95% there, with the remaining 5% being specific elements such as text. Copy should be very concise and short whenever possible. A long message or label is a red flag hinting at a design that needs improvement.</p>
      <p><strong>Example:</strong> Use <strong><em>Add</em></strong> instead of <strong><em>Add issue</em></strong> as a button label. Preferably use context and placement of controls to make it obvious what clicking on them will do.</p>
      <h2>Terminology</h2>
      <p>The following are common terms you will find throughout GitLab. For clear and consistent communication, it is important to use the correct terms.</p>
      <h3>Nouns</h3>
      <h4>Projects and Groups</h4>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
            <th>Use</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Members</td>
            <td>When discussing the people who are a part of a project or a group.</td>
            <td>Don't use <em>users</em>.</td>
          </tr>
        </tbody>
      </table>
      <h3>Comments &amp; Discussions</h3>
      <h4>Comment</h4>
      <p>A comment is a written piece of text that users of GitLab can create. Comments have the meta data of author and timestamp. Comments can be added in a variety of contexts, such as issues, merge requests, and discussions.</p>
      <h4>Discussion</h4>
      <p>A discussion is a group of 1 or more comments. A discussion can include subdiscussions. Some discussions have the special capability of being able to be resolved. Both the comments in the discussion and the discussion itself can be resolved.</p>
      <h3>Verbs and Adjectives</h3>
      <p>When using verbs or adjectives:</p>
      <ul>
        <li>If the context clearly refers to the object, use them alone. <strong>Example:</strong> Edit or Closed</li>
        <li>If the context isn’t clear enough, use them with the object. <strong>Example:</strong> Edit issue or Closed issues</li>
        <li>Destruction buttons should be clear and always say what they are destroying. <strong>Example:</strong> Delete page instead of just Delete.</li>
      </ul>
      <h4>Search</h4>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
            <th>Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Search</td>
            <td>When using all metadata to add criteria that match/don't match. Search can also affect ordering, by ranking best results.</td>
          </tr>
          <tr>
            <td>Filter</td>
            <td>When taking a single criteria that removes items within a list that match/don't match. Filters do not affect ordering.</td>
          </tr>
          <tr>
            <td>Sort</td>
            <td>Orders a list based on a single or grouped criteria</td>
          </tr>
        </tbody>
      </table>
      <h4>Issues</h4>
      <h5>Adjectives (states)</h5>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
            <th>Don’t</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Open</td>
            <td>Don’t use <strong>Pending</strong> or <strong>Created</strong></td>
          </tr>
          <tr>
            <td>Closed</td>
            <td>Don’t use <strong>Archived</strong></td>
          </tr>
          <tr>
            <td>Deleted</td>
            <td>Don’t use <strong>Removed</strong> or <strong>Trashed</strong></td>
          </tr>
        </tbody>
      </table>
      <h5>Verbs (actions)</h5>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
            <th>Use</th>
            <th>Don’t</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New</td>
            <td>Although it’s not a verb, <em>New</em> is a common standard and used for entering the creation mode of a non-existent issue</td>
            <td>Don’t use <em>Create</em>, <em>Open</em>, or <em>Add</em></td>
          </tr>
          <tr>
            <td>Create</td>
            <td>Only to indicate when or who created an issue</td>
            <td></td>
          </tr>
          <tr>
            <td>Add</td>
            <td>Associate an existing issue with an item or a list of items</td>
            <td>Don’t use <em>New</em> or <em>Create</em></td>
          </tr>
          <tr>
            <td>View</td>
            <td>Open the detail page of an issue</td>
            <td>Don’t use <em>Open</em> or <em>See</em></td>
          </tr>
          <tr>
            <td>Edit</td>
            <td>Enter the editing mode of an issue</td>
            <td>Don’t use <em>Change</em>, <em>Modify</em> or <em>Update</em></td>
          </tr>
          <tr>
            <td>Submit</td>
            <td>Finalize the <em>creation</em> process of an issue</td>
            <td>Don’t use <em>Add</em>, <em>Create</em>, <em>New</em>, <em>Open</em>, <em>Save</em> or <em>Save changes</em>
            </td>
          </tr>
          <tr>
            <td>Save</td>
            <td>Finalize the <em>editing</em> process of an issue</td>
            <td>Don’t use <em>Edit</em>, <em>Modify</em>, <em>Update</em>, <em>Submit</em>, or <em>Save changes</em>
            </td>
          </tr>
          <tr>
            <td>Cancel</td>
            <td>Cancel the <em>creation</em> or <em>editing</em> process of an issue</td>
            <td>Don’t use <em>Back</em>, <em>Close</em>, or <em>Discard</em></td>
          </tr>
          <tr>
            <td>Close</td>
            <td>Close an open issue</td>
            <td>Don’t use <em>Archive</em></td>
          </tr>
          <tr>
            <td>Re-open</td>
            <td>Re-open a closed issue</td>
            <td>Don’t use <em>Open</em></td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>Permanently remove an issue from the system</td>
            <td>Don’t use <em>Remove</em></td>
          </tr>
          <tr>
            <td>Remove</td>
            <td>Remove the association an issue with an item or a list of items</td>
            <td>Don’t use <em>Delete</em></td>
          </tr>
        </tbody>
      </table>
      <h4>Merge Requests</h4>
      <h5>Adjectives (states)</h5>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Open</td>
          </tr>
          <tr>
            <td>Merged</td>
          </tr>
        </tbody>
      </table>
      <h5>Verbs (actions)</h5>
      <table class="m-b-6">
        <thead>
          <tr>
            <th>Term</th>
            <th>Use</th>
            <th>Don’t</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Add</td>
            <td>Add a merge request</td>
            <td>Do not use <em>create</em> or <em>new</em></td>
          </tr>
          <tr>
            <td>View</td>
            <td>View an open or merged merge request</td>
            <td></td>
          </tr>
          <tr>
            <td>Edit</td>
            <td>Edit an open or merged merge request</td>
            <td>Do not use <em>update</em></td>
          </tr>
          <tr>
            <td>Approve</td>
            <td>Approve an open merge request</td>
            <td></td>
          </tr>
          <tr>
            <td>Remove approval, unapproved</td>
            <td>Remove approval of an open merge request</td>
            <td>Do not use <em>unapprove</em> as that is not an English word</td>
          </tr>
          <tr>
            <td>Merge</td>
            <td>Merge an open merge request</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



