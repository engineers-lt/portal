
<template>
  <header class="header">
    <div class="container">
      <g-link class="logo" to='/'><img src="/logo.png" width="216" height="58" :alt="$static.metaData.siteName"  /></g-link>
      <nav class="headerNav">
        <g-link to='/about'>About</g-link>
        <g-link to='/guideline'>Guideline</g-link>
      </nav>
      <div class='shares'>
        <a href="https://twitter.com/engineers_lt" class="share twitter">
          <twitter/>
        </a>
        <a href="http://bit.ly/elt-slack" class="share slack">
          <slack/>
          <span>Join our slack</span>
        </a>
      </div>
    </div>
  </header>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Slack from '~/assets/images/slack.svg'
import Twitter from '~/assets/images/twitter.svg'

export default {
  components: {
    Twitter,
    Slack
  },
}
</script>

<style scoped>
.shares {
  display: flex;
  align-items: center;
  margin-left: auto;
}
/* TODO */
@media screen and (max-width: 668px) {
  .shares {
    display: none;
  }
}

.share {
  display: inline-block;
  line-height: 36px;
  height: 36px;
  min-width: 36px;
  padding: 0 6px;
  text-align: center;
  border-radius: 18px;
  color: white;
  text-decoration: none;
  position: relative;
  margin-left: 6px;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12);
  transition: box-shadow .15s;
}

.share:hover {
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
}

.share svg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 7px;
}

.share span {
  margin-left: 34px;
  line-height: 24px;
  margin-right: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  top: -1px;
}

.slack {
  background-color: #2AB27B;
}

.slack svg {
  left: 8px;
}

.twitter {
  background-color: #0096E2;
}

.logo {
  height: 58px;
}

.logo img {
  display: block;
}

.header .container {
  display: flex;
  align-items: center;
}

.headerNav {
  margin-left: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

/* TODO */
@media screen and (max-width: 668px) {
  .headerNav {
    display: none;
  }
}

.headerNav a {
  color: #444;
  text-decoration: none;
  padding: 12px 12px;
  font-size: 15px;
}

.headerNav a:hover {
  color: #30A192;
}
</style>