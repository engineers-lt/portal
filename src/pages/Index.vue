<template>
  <Layout>
    <div>
      <section style="background-color: #fafafa;">
        <div class="container">
          <h2>Next Event <small>開催予定のイベント</small></h2>
          <div class="reports">
            <ReportItem
              v-for="(report, key, index) in $page.events.data"
              :key="index"
              :item="report"
            />
          </div>
        </div>
      </section>
      <section class="container">
        <h2>Reports <small>活動報告</small></h2>
        <div class="reports">
          <ReportItem
            v-for="(report, key, index) in $page.reports.data"
            :key="index"
            :item="report"
          />
        </div>
      </section>
    </div>
    <section class="container">
      <h2>Members <small>運営メンバー</small></h2>
      <div class="reports">
        <div v-for="(profileEdge) in $page.profiles.edges">
          <h3>{{ profileEdge.node.screenName }} <small>@{{ profileEdge.node.accountName }}</small></h3>
          <img :src="profileEdge.node.avatarUrl.src"/>
          <p>{{ profileEdge.node.description }}</p>
        </div>
      </div>
    </section>
    <!-- <section
      style="background-color: red;">
      <div class="sectionContainer">
        <h2 style="color: white;">Join our Slack <small>参加はこちら</small></h2>
      </div>
    </section> -->
  </Layout>
</template>

<page-query>
query {
  reports: report(path: "/data/reports") {
    data {
      date
      title
      description
      url
      imageUrl
    }
  }
  events: event(path: "/data/events") {
    data {
      date
      title
      description
      url
      imageUrl
    }
  }
  profiles: allMemberProfile {
    edges {
      node {
        screenName
        accountName
        avatarUrl
        description
      }
    }
  }

}
</page-query>

<script>
// import axios from 'axios'
import ReportItem from '~/components/ReportItem.vue'

export default {
  components: {
    ReportItem
  },
}
</script>

<style scoped>
.heroImage {
  max-width: 60%;
  position: absolute;
  right: 0;
  bottom: 0;
}

section h2 {
  font-family: 'Poppins', sans-serif;
  color: #30A192;
  font-weight: 600;
  font-size: 50px;
}

section h2 small {
  color: #222;
  font-size: 16px;
}

.reports {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
}

@media screen and (max-width: 668px) {
  section h2 small {
    display: block;
  }
}
</style>
