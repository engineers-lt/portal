<template>
  <div class="base">
    <div
      class="image"
      style="background-image: url(https://dummyimage.com/360x240/aaa/fff)"
    />
    <div class="contents">
      <div class="date">2018.11.22</div>
      <h3 class="title">秋の夜長の自由研究LT大会</h3>
      <p class="description">
        秋が深まり、夜が長くなってきましたね。<br>
        エンジニアの皆さんはそんな夜に何をされていますか？<br>
        コードを書いたり技術書を読んだりもいいですが、やっぱり自由なテーマでLTをするのが楽しいですよね。...
      </p>
      <div class="button">
        イベントページへ
      </div>
    </div>
  </div>
</template>

<style>
.base {
  display: flex;
}

.image {
  width: 380px;
  height: 0;
  padding-bottom: 25%;
  background-position: center center;
  background-repeat: no-repeat;
  margin-right: 20px;
}

.date {
  font-size: 24px;
  color: #eb011e;
  font-weight: 600;
}

.title {
  font-size: 32px;
  font-weight: 600;
}

.description {
  font-size: 14px;
  margin-top: 8px;
}

.button {
  background-color: #eb011e;
  display: inline-block;
  padding: 12px 48px;
  border-radius: 36px;
  font-weight: 600;
  color: white;
  margin-top: 12px;
  font-size: 14px;
  margin-top: 16px;
}
</style>
