<script>
export default {
  name: 'DiffBanner',
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      op_internal: 75,
    };
  },
  computed: {
    opacity: {
      get() {
        return this.op_internal;
      },
      set(val) {
        this.op_internal = val;
        this.updateOpacity({ opacity: val });
      },
    },
    sideBySide: {
      get() {
        return this.value.sideBySide;
      },
      set(val) {
        this.$emit('input', { ...this.value, sideBySide: val });
        this.updateOpacity({ sideBySide: val });
      },
    },
    showUnchanged: {
      get() {
        return this.value.showUnchanged;
      },
      set(val) {
        this.$emit('input', { ...this.value, showUnchanged: val });
      },
    },
  },
  beforeDestroy() {
    this.style.remove();
  },
  async mounted() {
    try {
      // const data = JSON.parse(localStorage.getItem('svg-review'));

      const style = document.createElement('style');
      document.body.appendChild(style);
      this.style = style;
      this.updateOpacity();
    } catch {
      //
    }
  },
  methods: {
    updateOpacity({ opacity = this.opacity, sideBySide = this.sideBySide } = {}) {
      this.style.innerHTML = sideBySide
        ? ''
        : `
      .diff-before { opacity: ${(100 - opacity + 25) / 100} }
      .diff-after { opacity: ${opacity / 100} }
      `;
    },
  },
};
</script>
<template>
  <div class="diff-banner gl-mt-4 gl-p-4 gl-mb-4">
    <div>You are reviewing <a href="">MR !828</a>.</div>
    <label> <input v-model="showUnchanged" type="checkbox" /> Show unchanged files </label>
    <br />
    <label> <input v-model="sideBySide" type="checkbox" /> Side-by-side </label>
    <label v-if="!sideBySide">
      Before
      <input v-model="opacity" type="range" name="cowbell" min="0" max="100" step="1" />
      After
    </label>
  </div>
</template>
