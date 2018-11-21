<template>
  <div>
    <section class="container">
      <div>
        <logo/>
      </div>
    </section>
    <section class="container">
      <h2>Reports</h2>
      <div>
        <report-item/>
      </div>
    </section>
  </div>
</template>

<script>
import ReportItem from '~/components/ReportItem.vue'

export default {
  components: {
    ReportItem
  }
}
</script>

<style>
.container {
  max-width: 980px;
  margin: 0 auto;
}
</style>
