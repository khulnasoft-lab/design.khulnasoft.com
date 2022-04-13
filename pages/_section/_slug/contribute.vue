<script>
import ContributeToComponent from '../../../components/contribute_to_component.vue';

export default {
  components: {
    ContributeToComponent,
  },
  props: {
    page: {
      type: Object,
      required: true,
    },
    componentLabel: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <contribute-to-component :component-label="componentLabel" class="p-t-3" />
</template>
