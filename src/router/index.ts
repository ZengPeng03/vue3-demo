/*
 * @Author: zengpeng zengpeng@tenorshare.cn
 * @Date: 2022-07-28 15:26:17
 * @LastEditors: zengpeng zengpeng@tenorshare.cn
 * @LastEditTime: 2022-07-29 10:01:50
 * @FilePath: \vue3app\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () =>
      import(/* webpackChunkName: "chat" */ "../views/ChatView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
