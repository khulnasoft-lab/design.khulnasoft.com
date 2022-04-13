<script>
import ContributeToComponent from '../../../components/contribute_to_component.vue';

const componentNameToLabelMap = {
  dropdowns: 'dropdown',
  forms: 'form',
  labels: 'label',
  modals: 'modal',
  'radio-button': 'radio',
  tables: 'table',
  tabs: 'tab',
  toggles: 'toggle',
};

export default {
  components: {
    ContributeToComponent,
  },
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  computed: {
    componentLabel() {
      const { section, slug } = this.$route.params;
      if (section !== 'components') {
        return null;
      }
      return componentNameToLabelMap[slug] || slug;
    },
  },
};
</script>

<template>
  <contribute-to-component v-if="componentLabel" :component-label="componentLabel" class="p-t-3" />
</template>
