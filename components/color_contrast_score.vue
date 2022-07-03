<script>
export default {
  props: {
    bgColorHex: {
      type: String,
      required: true,
      validator: (value) => /^#[a-f\d]{3,6}$/i.test(value),
    },
    name: {
      type: String,
      required: true,
    },
    withWhiteText: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    textRGB() {
      const colorValue = this.withWhiteText ? 255 : 0;
      return Array(3).fill(colorValue);
    },
    bgRGB() {
      return (
        this.bgColorHex
          // Normalize the HEX code to pairs
          .replace(/^#([a-f\d])([a-f\d])([a-f\d])$/i, '$1$1$2$2$3$3')
          // Add a comma between pairs
          .replace(/#(.{2})(.{2})(.{2})/, '$1,$2,$3')
          // Split into an array
          .split(',')
          // Convert to decimal (RBG) values
          .map((number) => parseInt(number, 16))
      );
    },
    contrast() {
      // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
      const textLuminance = this.getLuminance(this.textRGB) + 0.05;
      const bgLuminance = this.getLuminance(this.bgRGB) + 0.05;
      let score = textLuminance / bgLuminance;

      if (bgLuminance > textLuminance) {
        score = 1 / score;
      }

      let grade = 'F';
      if (score >= 3 && score < 4.5) {
        grade = 'AA+';
      } else if (score >= 4.5 && score < 7) {
        grade = 'AA';
      } else if (score >= 7) {
        grade = 'AAA';
      }

      return {
        score: Math.round(score * 10) / 10,
        grade,
        class: grade === 'F' ? 'fail' : 'pass',
      };
    },
  },
  methods: {
    getLuminance(rgb) {
      // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      const colorWeights = [0.2126, 0.7152, 0.0722];
      return rgb.reduce((acc, color8bit, index) => {
        const color = color8bit / 255;
        const computedColor = color < 0.03928 ? color / 12.92 : ((color + 0.055) / 1.055) ** 2.4;
        return acc + computedColor * colorWeights[index];
      }, 0);
    },
  },
};
</script>

<template>
  <div class="d-inline-block">
    <div
      class="d-inline-block p-t-2 p-r-3 p-b-2 p-l-3"
      :class="[`c-border-${name}`, `c-background-${name}`, withWhiteText ? 'f-inverted' : '']"
    >
      Text
    </div>
    <div
      class="d-inline-block p-t-2 p-r-3 p-b-2 p-l-3 pass"
      :class="[`c-border-${name}`, contrast.class]"
    >
      {{ contrast.grade }} ({{ contrast.score }})
    </div>
  </div>
</template>
