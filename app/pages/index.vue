<template>
  <div>
    <div>
      <section
        style="background-color: #FAF5F5;">
        <div
          class="sectionContainer"
          style="transform: translateY(-20px);"
        >
          <h2>Next Event <small>開催予定のイベント</small></h2>
          <div class="reports">
            <report-item
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
          <report-item
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
  </div>
</template>

<script>
import ReportItem from '~/components/ReportItem.vue'

export default {
  components: {
    ReportItem
  },
  asyncData() {
    return {
      events: [
        {
          date: '2018.12.27',
          title: 'エンジニアの登壇を応援する忘年LT大会',
          description:
            '今年も残すところあとわずかとなりました！やはり年末といえば忘年会ですよね！ ということで、今年1年を締めくくるイベントとして、私たちエンジニアが「今年どんなアウトプットをしたか？」「来年どんな目標を掲げるか？」を日本酒の肴テーマにして振り返りを行うような忘年LT大会を実施します。',
          url: 'https://engineers.connpass.com/event/107351/',
          imageUrl:
            'https://connpass-tokyo.s3.amazonaws.com/thumbs/ff/86/ff86ebfe8d7b1dfc1f17baef99154802.png'
        }
      ],
      reports: [
        {
          date: '2018.12.15',
          title: '読書の技術を勉強する会#1 開催レポート',
          description:
            'エンジニアにとって学びとはなんでしょうか？ 私たちは、たくさんのアイデアをもとに新しい世界を作り上げていく仕事をしています。 しかしそこに到達するまでには多くの困難が待ち構え、技術的な視点から乗り越えていかなければなりません。',
          url: 'https://ariaki.qrunch.io/entries/f8kLExGpSNWdoFUu',
          imageUrl: 'https://s3.qrunch.io/X35puVxoVLw6mQUCrDssvt0C1jkyNtNO.png'
        },
        {
          date: '2018.10.30',
          title: '執筆の技術を勉強する会を開催しました',
          description:
            '私たちのコミュニティは『執筆の技術を勉強する会 #1』を2018年10月26日に開催しました。このエントリーでは、主催者としての主観を交えた感想をまとめています。各登壇者の発表資料や当日の内容についてはイベントレポートを是非ご覧下さい。また当日はTwitterでトレンド入りするほど活発にコメントされていましたのでTogetterも併せてご覧下さい。',
          url: 'https://ariaki.qrunch.io/entries/aB2vW1enRf9g8cga',
          imageUrl: 'https://s3.qrunch.io/U0kZ6k4DlMSjwYfE2HIP0q2DphmPm7jG.png'
        },
        {
          date: '2018.10.24',
          title: 'イベントのリハーサル会をしました',
          description:
            '本日は10月26日に私たちが主催するイベント『執筆の技術を勉強する会 #1』のスピーカーが集まり、リハーサル会を行いました。 このリハーサル会では、本番と同じスライドを使い、本番と同じトークをするのが特徴です。',
          url: 'https://ariaki.qrunch.io/entries/8tA8g1mhqwoQvvrI',
          imageUrl: 'https://s3.qrunch.io/VxnqBs7mqIfMbYBOIcc5pu9ildK1EI0d.png'
        },
        {
          date: '2018.10.14',
          title: 'コミュニティの行動指針をまとめました',
          description:
            '組織を運営するにはみんなが同じ方向を目指す必要があると思い、以下のような行動指針をまとめました。 初志を忘れないように胸に刻み、そして迷った時は見返せるような指針になればと願っています。',
          url: 'https://ariaki.qrunch.io/entries/9bjkzvDGnKd8Z5yZ',
          imageUrl: 'https://s3.qrunch.io/53xkH9M7Emdfq9tTaqrTvWcvxIGnqGAs.png'
        }
      ]
    }
  }
}
</script>

<style>
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
  color: #eb011e;
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
