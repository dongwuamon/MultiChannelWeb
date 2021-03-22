<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/channeltwo/logo.png">
    <HelloWorld msg="channelone"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
