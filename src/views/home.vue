<template>
  <div>
    <div class="content">
      <div class="swipe">
        <mt-swipe :auto="114000">
          <mt-swipe-item v-for="item in swiperImage" :key="item.id">
            <img :src="item.image" alt class="swipe-img">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="grid">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
              <span class="mui-icon mui-icon-email">
                <span class="mui-badge">5</span>
              </span>
              <div class="mui-media-body">Email</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
              <span class="mui-icon mui-icon-chatbubble"></span>
              <div class="mui-media-body">Chat</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
              <span class="mui-icon mui-icon-search"></span>
              <div class="mui-media-body">Search</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
              <span class="mui-icon mui-icon-phone"></span>
              <div class="mui-media-body">Phone</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
              <span class="mui-icon mui-icon-info"></span>
              <div class="mui-media-body">about</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
              <span class="mui-icon mui-icon-more"></span>
              <div class="mui-media-body">more</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
//import {Toast} from 'mint-ui'

export default {
  data() {
    return {
      swiperImage: [
        { id: 1, image: require("../../public/image/swiper1.jpg") },
        { id: 2, image: require("../../public/image/swiper2.jpg") },
        { id: 3, image: require("../../public/image/swiper3.jpg") },
        { id: 4, image: require("../../public/image/swiper4.jpg") },
        { id: 5, image: require("../../public/image/swiper5.jpg") }
      ]
    };
  },
  created() {
    this.getswiper();
  },
  methods: {
    getswiper() {
      this.$axios.get("/api/user/test").then(result => {
        console.log(result);
        /*
          ****现在放的只是测试接口，空的没数据
          if(result.length){
            this.swiperImage = result.body.swiperImage
          }else{
            Toast('建议检查网络，加载轮播图失败，请稍后再试')
          }
           */
        console.log("迟一点再换接口");
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.mui-media-body
  font-size 12px
.mui-grid-view.mui-grid-9
    background-color #fff
    border 0
  .mui-grid-view.mui-grid-9 .mui-table-view-cell
    border 0
.mint-swipe 
  height 200px
  width 100%
  .mint-swipe-item 
    background-color #666
  .swipe-img 
    width: 100%
    height: 100%
    min-width: 100%
    min-width: 100%
    max-width: 100%
    max-height: 100%
    display: block
    margin: 0 auto

</style>
