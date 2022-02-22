<template>
  <div id="popovercontainer">
    <gl-button id="popover-no-title-close">Popover Button</gl-button>
    <gl-popover
      target="popover-no-title-close"
      container="popovercontainer"
      placement="top"
      triggers="hover focus"
      content="Popover content with no title and a close button"
      show-close-button="true"
    />
  </div>
</template>
