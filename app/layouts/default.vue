<template>
  <div>
    <div class="container">
      <img
        src="/logo.png"
        width="148"
        height="48"
        style="height: 48px;">
    </div>
    <nuxt/>
    <footer>
      <div class="container">
        &copy; 2018 エンジニアの登壇を応援する会. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<style>
@import 'minireset.css';
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600');

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

footer {
  margin-top: 48px;
  padding: 16px 0;
  background-color: #333;
  text-align: center;
  color: white;
  font-size: 12px;
}

.container {
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
}

@media screen and (max-width: 1000px) {
  .container {
    max-width: 668px;
    padding-left: 12px;
    padding-right: 12px;
  }
}

@media screen and (max-width: 668px) {
  .container {
    max-width: 334px;
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
