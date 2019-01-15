<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.pageMarkdown.title }}</h1>
      <div class="content" v-html="$page.pageMarkdown.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.pageMarkdown.title
    }
  }
}
</script>

<page-query>
  query PageMarkdown ($path: String!) {
    pageMarkdown (path: $path) {
      title
      slug
      content
    }
  }
</page-query>

<style scoped>

  h1 {
    font-family: 'Poppins', sans-serif;
    color: #30A192;
    font-weight: 600;
    font-size: 50px;
  }

  h1 .emoji {
    width: 36px;
    height: 36px;
  }

  h1 a {
    color: #0a9b94;
  }

  h1 a:hover {
    color: #08837d;
  }

  .content {
    line-height: 1.68;
  }

  .content >>> h2 {
    font-size: 160%;
    margin: 30px 0;
    margin-bottom: 10px;
    font-weight: 900;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
    position: relative;
    &:before {
      position: absolute;
      content: " ";
      width: 100px;
      bottom: -3px;
      height: 3px;
      background-color: #4d9abf;
    }
  }

  .content >>> h3 {
    margin: 30px 0;
    margin-bottom: 10px;
    font-size: 130%;
    font-weight: 900;
  }

  .content >>> h4 {
    font-size: 120%;
    font-weight: 900;
  }

  .content >>> ul,
  .content >>> ol {
    padding-left: 40px;
  }

  .content >>> li {
    list-style-type: circle;
    margin: 10px 0;
  }

  .content >>> li > p {
    margin: 0;
  }

  .content >>> dt {
    margin-top: 14px;
    margin-bottom: 4px;
  }

  .content >>> dd {
    padding: 0 14px;
    margin-bottom: 4px;
  }

  .content >>> p {
    margin: 20px 0;
  }

  .content >>> p img {
    margin-bottom: 0;
  }

  .content >>> blockquote {
    font-size: 100%;
    color: rgba(60, 74, 96, 0.7);
    border-left: 5px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    padding: 0 20px;
  }

  .content >>> blockquote p {
    margin: 10px 0 !important;
  }

  .content >>> code {
    color: #3c4a60;
    white-space: pre-wrap;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .content >>> pre {
    border: none;
  }

  pre code {
    background: #f6f6f6;
  }
</style>
