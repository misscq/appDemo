import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);
import Store from './store/index.js'
Vue.prototype.$store = Store

Vue.config.productionTip = false

Vue.prototype.$sHeight = () => uni.getSystemInfoSync().statusBarHeight

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
