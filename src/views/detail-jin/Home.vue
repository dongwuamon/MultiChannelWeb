<template>
  <div class="home">
    <h1>jin</h1>
    <h1>{{ channel }}</h1>
    <img alt="Vue logo" :src=logoUrl>
  </div>
</template>

<script>
import photo from '@/resource'
export default {
  name: 'Home',
  data () {
    return {
      logoUrl: ''
    }
  },
  mounted () {
    this.logoUrl = photo.logo
  },
  computed: {
    channel () {
      console.log(process.env)
      console.log(process.env.VUE_APP_CHANNEL === 'jin')
      return process.env.VUE_APP_CHANNEL
    }
  }
}
</script>
