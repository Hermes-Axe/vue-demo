<template>
  <div id="footer-bar">
    <ul>
      <li :class="{tabOn: activeTab==='home'}" @click="changeTabHandler('home')">
        <i class="iconfont icon-geren1"></i>
        <span>主页</span>
      </li>
      <li :class="{tabOn: activeTab==='shop'}" @click="changeTabHandler('shop')">
        <i class="iconfont icon-shangjia"></i>
        <span>商家</span>
      </li>
      <li :class="{tabOn: activeTab==='order'}" @click="changeTabHandler('order')">
        <i class="iconfont icon-dingdan"></i>
        <span>订单</span>
      </li>
      <li :class="{tabOn: activeTab==='my'}" @click="changeTabHandler('my')">
        <i class="iconfont icon-wodedangxuan"></i>
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'home'
    }
  },
  methods: {
    changeTabHandler (activeTab) {
      this.activeTab = activeTab
      this.$router.push('/' + activeTab)
    }
  }
}
</script>

<style lang="scss">
#footer-bar {
  position: fixed;
  width: 100%;
  height: 60px;
  border-top: 1px solid #ddd;
  color: #444;
  background-color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    // padding: 10px 5px;
    padding: 0 30px;
    li {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 20px;
      height: 100%;
      i {
        font-size: 26px;
      }
      span {
        margin-top: 6px;
        font-size: 12px;
        font-weight: 400;
      }
    }
    // li {
    //   cursor: pointer;
    //   box-sizing: border-box;
    //   margin: 0 24px;
    //   transform: all .6s;
    //   span, i {
    //     display: block;
    //   }
    //   span {
    //     font-size: 16px;
    //     font-weight: 400;
    //   }
    //   i {
    //     padding-bottom: 2px;
    //     font-size: 26px;
    //     font-weight: 600;
    //   }
    // }
    li.tabOn {
      i {
        color: #1a94bc;
      }
      span {
        font-weight: 900;
      }
    }
  }
}
</style>
