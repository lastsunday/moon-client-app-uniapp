import Vue from "vue";
import App from "./App";
//i18n
import i18n from "@/components/i18n/index.js";
//uView
import uView from "uview-ui";
Vue.use(uView);
//i18n
// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n;
//i18n

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
	i18n,
	...App,
});
app.$mount();
