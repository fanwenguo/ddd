// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import tools from './tools'

let bus = new Vue();

Vue.prototype.bus = bus;

Vue.use(tools)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})