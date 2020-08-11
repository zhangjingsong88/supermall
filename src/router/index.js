import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("@/views/home/Home");
const Category = () => import("@/views/category/Category");
const Profile = () => import("@/views/profile/Profile");
const ShopCart = () => import("@/views/shopcart/ShopCart");

Vue.use(VueRouter);

const routes = [
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/Category",
        component: Category
    },
    {
        path: "/Profile",
        component: Profile
    },
    {
        path: "/ShopCart",
        component: ShopCart
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

// 解决重复点击路由报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export default router;
