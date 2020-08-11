<template>
  <div id="home">
    
      <!-- navbar -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swiper :banners="banners" />

    <!-- 推荐数据 -->
    <recommend-view :recommends="recommends"/>

    
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import recommendView from './RecommendView'

import { getHmoeMultiData } from '@/network/home'

export default {
  components: {
    NavBar,
    HomeSwiper,
    recommendView
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
//   请求主页数据
  created() {
    getHmoeMultiData().then((res) => {
      ;(this.banners = res.data.banner.list),
        (this.recommends = res.data.recommend.list)
    })
  },
}
</script>

<style>
.home-nav {
  background-color: #ff8198;
  color: white;
}
</style>
