import axios from 'axios'
import jsonp from 'jsonp'
import Vue from 'vue'

const tools = {
    install() {
        Object.defineProperty(Vue.prototype, "$http", {
            value: axios
        })
        Object.defineProperty(Vue.prototype, "$jsonp", {
            value: jsonp
        })
    }
}
export default tools