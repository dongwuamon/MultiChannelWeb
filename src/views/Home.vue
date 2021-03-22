<template>
  <div class="home">
    <h1>{{ channel }}</h1>
    <img alt="Vue logo" :src=logoUrl>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      logoUrl: require('../assets/img/yasuo/logo.png')
    }
  },
  computed: {
    channel () {
      console.log(process.env)
      console.log(process.env.VUE_APP_CHANNEL_NAME === 'jin')
      return process.env.VUE_APP_CHANNEL_NAME
    }
  }
}
</script>
