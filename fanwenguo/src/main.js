import Vue from "vue";
import shopcar from './components/shopcar';
import ajax from "./tool/ajax";
import mock from '../mock/mock';
Vue.prototype.$ajax = ajax

var vm = new Vue({
    el: "#app",
    template: "<div class='wrap'><shopcar/></div>",
    components: {
        shopcar: shopcar
    }
})