<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.index" :goodsItem="item" />
    </div>
</template>

<script>
import goodsListItem from './GoodsListItem'
export default {
  components: {
    goodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    },
  },
}
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
}
</style>