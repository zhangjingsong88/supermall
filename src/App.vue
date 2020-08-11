<template>
    <div id="app">
        <router-view />
        <main-tab-bar />
    </div>
</template>

<script>
import MainTabBar from "./components/content/maintabbar/MainTabBar";
export default {
    components: {
        MainTabBar
    }
};
</script>

<style lang="sass">
@import "/src/assets/css/base.css"
</style>
