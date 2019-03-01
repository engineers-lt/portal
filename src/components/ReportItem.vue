<template>
  <a :href="item.url" class="base">
    <img :src="`${item.imageUrl}`" class="image" width="360" height="240" />
    <div class="contents">
      <div class="date">{{ item.date }}</div>
      <h3 class="title">{{ item.title }}</h3>
      <p class="description">{{ item.description }}</p>
      <!-- <div class="button">
        イベントページへ
      </div> -->
    </div>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
.base {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12px;
  width: calc(33% - 24px);
  text-decoration: none;
  color: inherit;
}

@media screen and (max-width: 980px) {
  .base {
    width: calc(50% - 24px);
  }
}

@media screen and (max-width: 480px) {
  .base {
    width: 100%;
  }
}

.image {
  object-fit: cover;
  height: 164px;
  border-radius: 3px;
}

.date {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: #eb011e;
  font-weight: 600;
  line-height: 1;
  margin-top: 12px;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin-top: 2px;
}

.description {
  font-size: 13px;
  margin-top: 2px;
  opacity: 0.8;

  -webkit-box-orient: vertical;
  line-height: 1.6;
  max-height: 62.4px;
  overflow-y: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
}

/* .button {
  background-color: #eb011e;
  display: inline-block;
  padding: 12px 48px;
  border-radius: 36px;
  font-weight: 600;
  color: white;
  margin-top: 12px;
  font-size: 14px;
  margin-top: 8px;
} */

@media screen and (max-width: 668px) {
}
</style>
