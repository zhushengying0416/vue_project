import Vue from "vue";
import App from "./App.vue";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
//导入mui样式
import "./lib/mui/css/mui.css";
import { Header } from "mint-ui";
Vue.component(Header.name, Header);
Vue.use(MintUI);
const vm = new Vue({
  el: "#app",
  render: function(createElement) {
    return createElement(App);
  }
});
