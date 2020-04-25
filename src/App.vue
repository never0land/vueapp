<template>
  <div id="app">
    <div class="header">
      <mt-header fixed title="NEVERLAND"></mt-header>
    </div>
    <div id="container">
      <transition >
        <router-view></router-view>
      </transition>
    </div>
    <div class="footer">
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopcar">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge">9</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
#app {
  padding-top 40px;
	overflow-x hidden
}
.v-leave-to
	opacity 0
	position absolute
	transform  translateX(-100%)
.v-enter
	opacity 0
	transform translateX(100%)

.v-enter-active,.v-leave-active{
	transition:all 0.5s ease
}
</style>
