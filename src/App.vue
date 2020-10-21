<template>
  <div id="app">
    <router-view></router-view>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from '@components/FooterBar'

export default {
  name: 'App',
  components: {
    FooterBar
  }
}
</script>

<style lang="scss">
#app {
  /*display: block;*/
  width: 100%;
  background-color: #666;
}
</style>
