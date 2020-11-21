<template>
  <div id="shop-list-page">
    <div v-for="(item, index) in shopList" :key="index" class="shop-item">
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
          shopName: '14265235225222232214265235222232222',
          shopImgUrl: '../../../static/images/shop01.jpg',
          score: 4.9,
          monthData: 100,
          time: 356,
          distance: 666,
          tag: 'lalalaaaa',
          driver: {
            isNight: true,
            cost: 20,
            nightCost: 100,
            isBlueDriver: true
          },
          activeTag: [
            '20减19',
            '100减99'
          ]
        },
        {
          shopName: '111121',
          shopImgUrl: '../../../static/images/shop02.png',
          score: 0.6,
          monthData: 465,
          time: 14,
          distance: 5,
          tag: 'frchanch',
          driver: {
            isNight: true,
            cost: 2.5,
            nightCost: 5,
            isBlueDriver: false
          },
          activeTag: [
            '45减23'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#shop-list-page {
  padding: 10px;
  .shop-item {
    padding-bottom: 10px;
    &:last-child {
      padding-bottom: 0;
    }
  }
}
</style>
