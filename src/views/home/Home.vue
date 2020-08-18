<template>
    <div id="home">
        <!-- navbar -->
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>

        <scroll
            class="contnet"
            ref="scroll"
            :prop-type="3"
            @scrollput="scrollcontnet"
            :pull-up-load="true"
            @pullingUpPut="loadMore"
        >
            <!-- swiper -->
            <home-swiper :banners="banners" />

            <!-- 推荐数据 -->
            <recommend-view :recommends="recommends" />

            <!-- 特色图片 -->
            <feature-view />

            <!-- controlBar -->
            <tab-control
                class="tab-control"
                :titles="['流行', '新款', '精选']"
                @tabClick="tabClick"
            ></tab-control>

            <!-- 商品列表 -->
            <goods-list :goods="showGoods" />
        </scroll>

        <!-- backtop -->
        <back-top @click.native="backCilck" v-show="isShowBackTop" />
    </div>
</template>

<script>
// 导入公共组件
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backtop/BackTop";

// 导入内部子组件
import HomeSwiper from "./childComps/HomeSwiper";
import recommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

// 导入自定义方法
import { getHmoeMultiData, getHmoeGoods } from "@/network/home";

export default {
    components: {
        NavBar,
        HomeSwiper,
        recommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                pop: { page: 0, list: [] },
                new: { page: 0, list: [] },
                sell: { page: 0, list: [] }
            },
            currentType: "pop",
            isShowBackTop: false
        };
    },
    created() {
        // 请求多个数据
        this.getHmoeMultiData();
        // 请求商品数据
        this.getHmoeGoods("pop");
        this.getHmoeGoods("new");
        this.getHmoeGoods("sell");
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list;
        }
    },
    methods: {
        /**
         * 事件监听相关的方法
         */
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = "pop";
                    break;
                case 1:
                    this.currentType = "new";
                    break;
                case 2:
                    this.currentType = "sell";
                    break;
            }
        },
        backCilck() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        scrollcontnet(position) {
            this.isShowBackTop = -position.y > 1000;
        },
        loadMore() {
            this.getHmoeGoods(this.currentType);
            this.$refs.scroll.finishPullUp();
        },
        /**
         * 网络请求相关的方法
         */
        getHmoeMultiData() {
            getHmoeMultiData().then(res => {
                (this.banners = res.data.banner.list),
                    (this.recommends = res.data.recommend.list);
            });
        },
        getHmoeGoods(type) {
            const page = this.goods[type].page + 1;
            getHmoeGoods(type, page).then(res => {
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page += 1;
            });
        }
    }
};
</script>

<style scoped>
#home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
}
.home-nav {
    background-color: #ff8198;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
}
.tab-control {
    /* position: sticky; */
    top: 44px;
    z-index: 9;
}
/* .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
} */
.contnet {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
}
</style>
