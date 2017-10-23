export default {
  name: 'my-button',

  props: {
    buttonClass: {
      type: String,
    },
  },

  template: `
    <button type="button" class="btn" :class="buttonClass" @click="onClick">
      <slot></slot>
    </button>
  `,

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
