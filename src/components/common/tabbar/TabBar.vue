<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 10px rgba(100, 100, 100, 0.3);
    background-color: #f2f2f2;
}
</style>
