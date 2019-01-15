
<template>
  <header class="header">
    <div class="container">
      <g-link class="logo" to='/'><img src="/logo.png" width="216" height="58" :alt="$static.metaData.siteName"  /></g-link>
      <nav class="headerNav">
        <g-link to='/about'>About</g-link>
        <g-link to='/guideline'>Guideline</g-link>
      </nav>
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

<style scoped>
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