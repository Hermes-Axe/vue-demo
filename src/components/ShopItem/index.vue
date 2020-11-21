<template>
  <div id="shop-item">
    <div class="shop-item-left">
      <img :src="shop.shopImgUrl" :alt="shop.shopName+'-img'">
    </div>
    <div class="shop-item-right">
      <!-- 店名 -->
      <div class="shop-name">
        <span class="name">{{ shop.shopName }}</span>
        <i class="iconfont icon-ziyuan"></i>
      </div>
      <!-- 评分 -->
      <div class="score-salenumber-timedistance clearfix">
        <div>
          <span class="score">
            <span>{{ shop.score }}</span><span>分</span>
          </span>
          <span class="salenumber">月售{{ shop.monthData }}</span>
        </div>
        <div>
          <span class="timedistance">{{ shop.time }}分钟 {{ shop.distance }}m</span>
        </div>
      </div>
      <!-- 起送价 -->
      <div class="price">
        <div>
          <span class="start-price">起送价￥{{ shop.driver.cost }}</span>
          <span class="night-send-price" v-if="shop.driver.isNight">夜间配送￥{{ shop.driver.nightCost }}</span>
        </div>
        <div>
          <span class="driver" v-if="shop.driver.isBlueDriver">蓝骑士专送</span>
        </div>
      </div>
      <!-- 店铺标签 -->
      <div class="discription">
        <span>"{{ shop.tag }}"</span>
      </div>
      <!-- tag -->
      <div class="active-tags">
        <div class="tags">
          <span v-for="(item, index) in shop.activeTag" :key="index">{{ item }}</span>
        </div>
        <div>
          <i class="iconfont icon-jiantou9"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      required: true,

      // 配送费
      driver: {
        // 起送价
        cost: Number,
        // 是否是夜间
        isNight: Boolean,
        // 夜间配送费
        nightCost: Number,
        // 是否是蓝骑士专送
        isBlueDriver: { type: Boolean, default: true }
      },
      // 商店名称
      shopName: { type: String, required: true },
      // 商店图片连接
      shopImgUrl: { type: String, required: true },
      // 商店分数
      score: { type: Number, required: true },
      // 月售数量
      monthData: { type: Number },
      // 配送时间
      time: Number,
      // 配送距离
      distance: Number,
      // 商店特色标签
      tag: String,
      // 商店满减活动
      activeTag: Array
    }
  }
}
</script>

<style lang="scss">
#shop-item {
  display: flex;
  align-items: top;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
  flex-direction: row;
  .shop-item-left {
    // width: 36%;
    margin-right: 20px;
    img {
      display: block;
      width: 100px;
      height: 100px;
      border-radius: 6px;
    }
  }
  .shop-item-right {
    // width: 64%;
    flex: auto;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    // align-content: space-between;
    justify-content: space-between;
    .shop-name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name {
        display: block;
        max-width: 12em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .score-salenumber-timedistance {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: #444;
      .score {
        color: tomato;
        span:first-child {
          font-size: 16px;
        }
        span:last-child {
          font-size: 14px;
        }
      }
    }
    .price {
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #444;
      .driver {
        font-size: 12px;
        padding: 2px;
        box-sizing: border-box;
        border-radius: 2px;
        background-color: rgb(108, 179, 184);
        color: rgb(80, 123, 173);
      }
    }
    .discription {
      font-size: 12px;
      span {
        line-height: 14px;
        color: red;
        background: tomato;
        border-radius: 2px;
        padding: 2px;
      }
    }
    .active-tags {
      margin-top: 4px;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .tags {
        background-color: #fff;
        color: tomato;
        padding: 4px;
        border: 1px solid tomato;
        border-radius: 4px;
        span {
          border-right: 1px solid tomato;
          padding: 0 4px;
          &:first-child {
            padding-left: 0;
          }
          &:last-child {
            border: none;
            padding-right: 0;
          }
        }
      }
    }
  }
}
</style>
