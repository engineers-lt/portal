<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <g-link to='/'><img src="/logo.png" width="216" height="58" :alt="$static.metaData.siteName"  /></g-link></div>
        <g-link to='/about'>About</g-link>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}img,embed,iframe,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}
</style>

<style>
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
