export default {
  name: 'my-button',

  template: `
    <button class="btn" @click="onClick">
      <slot></slot>
    </button>
  `,

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
