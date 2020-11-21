<template>
  <div id="app">
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@components/FooterBar'

export default {
  name: 'App',
  components: {
    'footer-bar': FooterBar
  }
}
</script>

<style lang="scss">
#app {
  /*display: block;*/
  width: 100%;
  background-color: #eee;
}
</style>
