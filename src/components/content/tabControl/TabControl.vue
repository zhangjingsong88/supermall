<template>
  <div class="TabControl">
    <div
      v-for="(item, index) in titles"
      :key="item.index"
      class="tab-control-item"
      :class="{active: currentIndex === index}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    },
  },
}
</script>

<style>
.TabControl {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
  background-color: #fff;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: #ff8198;
}
.active span {
  border-bottom: 3px solid #ff8198;
}
</style>