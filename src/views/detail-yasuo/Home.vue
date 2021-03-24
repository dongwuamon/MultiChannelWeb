<template>
  <div class="home">
    <h1>yasuo</h1>
    <h1>{{ channel }}</h1>
    <img alt="Vue logo" :src=logoUrl>
  </div>
</template>

<script>
import resource from '@/resource'
export default {
  name: 'Home',
  data () {
    return {
      logoUrl: ''
    }
  },
  mounted () {
    this.logoUrl = resource.logo
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
