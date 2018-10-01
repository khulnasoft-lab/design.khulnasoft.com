<template>
  <div>
    <h1>TODO</h1>
    <replacement-comparison-table column="1"></replacement-comparison-table>
  </div>
</template>


<script>
import ReplacementComparisonTable from '~/components/ReplacementComparisonTable.vue'

export default {
  components: {
    ReplacementComparisonTable
  }
}
</script>