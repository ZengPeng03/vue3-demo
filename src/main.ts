/*
 * @Author: zengpeng zengpeng@tenorshare.cn
 * @Date: 2022-07-28 15:26:17
 * @LastEditors: zengpeng zengpeng@tenorshare.cn
 * @LastEditTime: 2022-07-29 09:54:47
 * @FilePath: \vue3app\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import i18n from "./language/index";

const app = createApp(App);
app.use(store).use(router).use(i18n).use(ElementPlus).mount("#app");
