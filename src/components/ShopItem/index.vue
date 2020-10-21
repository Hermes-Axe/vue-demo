<template>
  <div id="shop-item">
    <div class="shop-item-left">
      <!-- https://i0.hdslb.com/bfs/bangumi/1d703634cd3ee35b625bf882f27289db301cae63.jpg@87w_88h_1c_100q.webp -->
      <img :src="shopImgUrl" :alt="shopName">
    </div>
    <div class="shop-item-right">
      <!-- 店名 -->
      <!-- <div class="shop-name">华莱士·全鸡汉堡(仓前杭师大店)</div> -->
      <div class="shop-name">{{ shopName }}</div>
      <!-- 评分 -->
      <div class="score-salenumber-timedistance clearfix">
        <span class="score">4.6分</span>
        <span class="salenumber">月售4845</span>
        <span class="timedistance">30分钟 695m</span>
      </div>
      <!-- 起送价 -->
      <div class="price clearfix">
        <span class="start-price">起送价￥20</span>
        <span class="night-send-price">夜间配送￥1</span>
        <span class="driver">蓝骑士专送</span>
      </div>
      <!-- 店铺标签 -->
      <div class="discription">"香辣鸡腿堡棒棒哒"</div>
      <br>
      <!-- tag -->
      <div class="active-tags">49减34 | 69减44</div>
      <i class="iconfont icon-ziyuan"></i>
      <i class="iconfont icon-jiantou9"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopName: {type: String, required: true},
    shopImgUrl: {type: String, required: true}
  }
}
</script>

<style lang="scss">
#shop-item {
  width: 100%;
  height: 160px;
  font-size: 14px;
  line-height: 20px;
  color: #444;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  box-sizing: border-box;
  // border: 1px solid #000;
  padding: 16px 20px;
  position: relative;
  div {
    margin-bottom: 4px;
  }
  .shop-item-left {
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    margin-bottom: 0;
    width: 30%;
    img {
      width: 100%;
      // height: 100%;
      border-radius: 6px;
      transform: translateY(50%);
    }
  }
  .shop-item-right {
    width: 70%;
    padding-left: 10px;
    .shop-name {
      max-width: 80%;
      font-size: 16px;
      line-height: 22px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .score-salenumber-timedistance {
      color: #444;
      line-height: 20px;
      vertical-align: bottom;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .score {
        float: left;
        font-size: 16px;
        margin-right: 6px;
        color: brown;
      }
      .salenumber {
        float: left;
      }
      .timedistance {
        float: right;
        max-width: 20%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .price {
      font-size: 0;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      .start-price {
        font-size: 14px;
        margin-right: 6px;
        float: left;
      }
      .night-send-price {
        font-size: 14px;
        float: left;
        max-width: 10%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .driver {
        font-size: 14px;
        float: right;
        color: blue;
        background-color: skyblue;
        box-sizing: border-box;
        padding: 0 4px;
        border-radius: 3px;
      }
    }
    .discription {
      display: inline-block;
      border-radius: 3px;
      padding: 2px 3px;
      color: brown;
      background-color: rgb(185, 139, 100);
    }
    .active-tags {
      display: inline-block;
      color: brown;
      border-radius: 3px;
      border: 1px solid brown;
      margin-bottom: 0;
    }
    .iconfont {
      position: absolute;
      font-size: 20px;
      &.icon-ziyuan {
        top: 12px;
        right: 20px;
      }
      &.icon-jiantou9 {
        bottom: 20px;
        right: 20px;
      }
    }
  }
  .clearfix {
    zoom: 1;
    &::after {
      content: '';
      display: block;
      height: 0;
      clear: both;
    }
  }
}
</style>
