<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.memberProfile.screenName }} <small>@{{ $page.memberProfile.accountName }}</small></h1>
      <img :src="$page.memberProfile.avatarUrl.src"/>
      <p>{{ $page.memberProfile.description }}</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.memberProfile.memberProfile
    }
  }
}
</script>

<page-query>
  query profileQuery ($path: String!) {
    memberProfile(path: $path) {
      description
      avatarUrl
      screenName
      accountName
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
</style>
