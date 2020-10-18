<template>
  <div id="app">
    <router-view></router-view>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterSideBar'

export default {
  name: 'App',
  components: {
    FooterBar
  }
}
</script>

<style lang="scss">
</style>
