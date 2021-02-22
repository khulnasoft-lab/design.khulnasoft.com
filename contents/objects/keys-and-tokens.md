---
name: Keys & Tokens
docs: in-progress
---

Keys and Tokens are objects that are used by users and systems to authenticate, encrypt, or verify actions. 

## Usability guidance 
---

### Creation

**Use a [modal](https://design.gitlab.com/components/modal#usage).** Critical information can be revealed to users and its important that they stay on task while creating a new key or token. This action requires a user's input to accomplish the task.

**Write concise copy.** Creating these objects often requires multiple steps. Keep actionable text in the modal, and provide clarify information with links to documentation.

<div class="row">
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Copy token in modal">
      <img class="figure-img" src="/img/Add-SSH-Key.png" alt="Concise modal" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Creation step is clear and concise</figcaption>
    </figure>
  </div>
</div>

**Make the primary action useful.** Some keys will only be generated once, so help users reduce the likelihood that they will miss this step.

<div class="row">
  <div class="col col-50">
    <figure class="figure" role="figure" aria-label="Copy token in modal">
      <img class="figure-img" src="/img/Copy-Token.png" alt="Copy the token" role="img" style="width:100%; max-width:332px; height:auto" />
      <figcaption class="figure-caption">Primary action is to copy</figcaption>
    </figure>
  </div>
</div>

### Managing

**Do not use just the remove icon.** Use the exact term that matches common user terminology (Revoke, Remove, etc.) 

### Layout

**Table.** When dedicating a page outside of settings.

**Card.** When managing keys and tokens inside a settings page.
