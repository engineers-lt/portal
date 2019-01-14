<template>
  <Layout>
    <div>
      <section style="background-color: #FAF5F5;">
        <div class="sectionContainer" style="transform: translateY(-20px);">
          <h2>Next Event <small>開催予定のイベント</small></h2>
          <div class="reports">
            <ReportItem
              v-for="(report, key, index) in events"
              :key="index"
              :item="report"
            />
          </div>
        </div>
      </section>
      <section class="sectionContainer">
        <h2>Reports <small>活動報告</small></h2>
        <div class="reports">
          <ReportItem
            v-for="(report, key, index) in reports"
            :key="index"
            :item="report"
          />
        </div>
      </section>
    </div>
    <!-- <section
      style="background-color: red;">
      <div class="sectionContainer">
        <h2 style="color: white;">Join our Slack <small>参加はこちら</small></h2>
      </div>
    </section> -->
  </Layout>
</template>

<script>
// import axios from 'axios'
import ReportItem from '~/components/ReportItem.vue'

export default {
  components: {
    ReportItem
  },
  data() {
    return {
      events: [],
      reports: [],
    }
  }
}
</script>

<style scope>
.heroImage {
  max-width: 60%;
  position: absolute;
  right: 0;
  bottom: 0;
}

.sectionContainer {
  max-width: calc(980px + 24px);
  width: 100%;
  margin: 32px auto 0 auto;
}

section h2 {
  font-family: 'Poppins', sans-serif;
  color: #30A192;
  font-weight: 600;
  font-size: 50px;
  line-height: 1;
  padding: 0 12px;
}

section h2 small {
  color: #222;
  font-size: 16px;
}

.reports {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  padding: 0 12px;
}

@media screen and (max-width: 1000px) {
  .sectionContainer {
    max-width: 668px;
  }
}

@media screen and (max-width: 668px) {
  .sectionContainer {
    max-width: 334px;
  }

  section h2 small {
    display: block;
  }
}
</style>
