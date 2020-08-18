<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null,
            message: "aa"
        };
    },
    mounted() {
        // 1.创建BScorll对象
        this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: 2,
            pullUpLoad: this.pullUpLoad,
            click: true
        });
        // 2.监听滚动位置
        this.scroll.on("scroll", position => {
            this.$emit("scrollput", position);
        });
        // 3.监听上拉事件
        this.scroll.on("pullingUp", () => {
            this.$emit("pullingUpPut");
        });
    },
    methods: {
        scrollTo(x, y, time = 500) {
            this.scroll.scrollTo(x, y, time);
        },
        finishPullUp() {
          this.scroll.finishPullUp()
        }
    }
};
</script>

<style scoped></style>
