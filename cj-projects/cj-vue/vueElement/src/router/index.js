import Vue from "vue";
import Router from "vue-router";

// 页面路由跳转
// import HelloWorld from "@/components/HelloWorld";

import eltable from "@/router/module/eltable.js";

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

let router = new Router({
    routes: [{
            path: "/",
            name: "首页",
            component: () =>
                import ("@/layout/home")
        },
        eltable, // element表格页面
        {
            path: "",
            redirect: "/"
        }
    ]
});

// token设置
/* router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("token") ?
        localStorage.getItem("token") :
        "";
    if (token) {
        // 已登录
        if (to.path == "/Login") {
            next(false);
        } else {
            next();
        }
    } else {
        if (to.path == "/Login") {
            next();
        } else {
            next("/Login");
        }
    }
}); */

export default router;
