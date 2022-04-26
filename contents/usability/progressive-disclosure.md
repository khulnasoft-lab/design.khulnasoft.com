---
name: Progressive disclosure
---

"Progressive disclosure defers advanced or rarely used features to a secondary screen, making applications easier to learn and less error-prone." –Jakob Nielsen, Nielsen Norman Group

Progressive disclosure defers information across several screens to prevent the user from becoming overwhelmed. The most important actions should be displayed, where more specialized, less used actions may be shown upon request. Progressive disclosure is a manner to simplify the complexity of an interface by not burdening the user with too much information. Keeping the UI simple allows the user to focus their attention and helps learnability, which is especially helpful for new users.

### How it works

In order to simplify the UI with progressive disclosure, it's important to distinguish between are the primary versus secondary features. Determine which features are the most important with user research and, if the feature already exists, usage data. It's important not to prioritize too many features as primary, as it defeats the purpose of progressive disclosure. Prioritize the most important content to keep the UI simple.

Make the entry point into the secondary features clear. Use an established call to action, such as links or [buttons](/components/button) with copy that sets the expectation of what will happen.

Limit the levels of disclosure to prevent users from getting lost. If an has three or more levels of progressive disclosure, it could be a sign that the feature is too complex.

### Examples of progressive disclosure

Adding items to the table by filling out a form in a [modal](/components/modal) or new page reduces complexity of the page that displays the data:

<figure class="figure" role="figure" aria-label="Table with add button on top right">
  <img class="figure-img" src="/img/add-data-to-list-table.svg" alt="Table with add button on top right" role="img" />
  <figcaption class="figure-caption"></figcaption>
</figure>

Display information in accordions, where the user can expand the accordion that they're interested in:

<figure class="figure" role="figure" aria-label="Table with add button on top right">
  <img class="figure-img" src="/img/progressive-disclosure-accordion.png" alt="Table with add button on top right" role="img" />
  <figcaption class="figure-caption"></figcaption>
</figure>

Other common examples of progressive disclosure include step-by-step wizards, expanding navigation menus, and pagination.

### Resources

- <a href="https://www.nngroup.com/articles/progressive-disclosure/">Nielsen Norman Group: Progressive disclosure</a>
