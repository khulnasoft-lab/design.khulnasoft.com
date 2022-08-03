<script>
import iconSprite from '@gitlab/svgs/dist/icons.svg';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    iconSrc: {
      type: String,
      required: false,
      default: iconSprite,
    },
  },
  computed: {
    spritePath() {
      return `${this.iconSrc}#${this.icon}`;
    },
  },
};
</script>

<template>
  <svg>
    <use v-bind="{ href: spritePath }" />
  </svg>
</template>
