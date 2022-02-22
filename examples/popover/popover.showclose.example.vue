<template>
  <div id="popovercontainer">
    <gl-button id="popover-close">Popover Button</gl-button>
    <gl-popover
      target="popover-close"
      container="popovercontainer"
      placement="top"
      title="This is a Popover"
      triggers="hover focus"
      content="With a placement of top and a close button"
      show-close-button="true"
    />
  </div>
</template>
