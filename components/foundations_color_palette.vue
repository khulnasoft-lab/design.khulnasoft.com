<script>
import ColorContrastScore from './color_contrast_score.vue';

export default {
  components: {
    ColorContrastScore,
  },
  props: {
    colorId: {
      type: String,
      required: false,
      default: '',
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    shades: {
      type: Array,
      required: true,
    },
    showContrastScores: {
      type: Boolean,
      required: false,
      default: false,
    },
    backgroundClassPrefix: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    getShadeId({ id, value }) {
      if (id) {
        return id;
      }
      let shadeId = this.colorId;
      if (value) {
        shadeId += `-${value}`;
      }
      return shadeId;
    },
  },
};
</script>

<template>
  <div>
    <slot name="header">
      <h3 v-if="name">{{ name }}</h3>
    </slot>
    <div class="distributed palette">
      <div v-for="shade in shades" :key="shade.value" class="color">
        <div
          class="color-overview p-t-3 p-r-5 p-b-3 p-l-5"
          :class="[`${backgroundClassPrefix}${getShadeId(shade)}`, ...shade.class]"
        >
          <span class="variable">${{ getShadeId(shade) }}</span>
          <span class="hex f-small">{{ shade.code }}</span>
        </div>
        <div
          v-if="showContrastScores"
          class="color-details p-t-6 p-r-5 p-b-6 p-l-5"
          :class="`c-border-${getShadeId(shade)}`"
        >
          <div class="color-details--section">
            <div class="f-bold gl-mb-2">Passing level and contrast ratio</div>
            <color-contrast-score :bg-color-hex="shade.code" :name="getShadeId(shade)" />
            <color-contrast-score
              :bg-color-hex="shade.code"
              :name="getShadeId(shade)"
              with-white-text
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
