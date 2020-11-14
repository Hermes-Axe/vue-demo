<template>
  <div>
    <div v-for="(item, index) in shopList" :key="index">
      <shop-item :shop="item"></shop-item>
    </div>
  </div>
</template>

<script>
import ShopItem from '@components/ShopItem'
export default {
  components: {
    'shop-item': ShopItem
  },
  data () {
    return {
      shopList: [
        {
          shopName: '华莱士·全鸡汉堡(仓前杭师大店)',
          shopImgUrl: 'https://i0.hdslb.com/bfs/bangumi/1d703634cd3ee35b625bf882f27289db301cae63.jpg@87w_88h_1c_100q.webp',
          score: 4.9,
          monthData: 100,
          time: 356,
          distance: 666,
          isNight: false,
          tag: 'lalala'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
