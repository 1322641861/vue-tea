import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// 淘宝无限适配
import "assets/js/flexible"
// 基础公共样式
import "assets/css/base.css"
import "assets/font/iconfont.css"
// 顶部导航小组件(全局注册)
import LyTab from 'ly-tab'
import lazyLoad from "vue-lazyload"

Vue.config.productionTip = false
Vue.use(LyTab)
Vue.use(lazyLoad, {
	loading: require("assets/images/common/loading.gif")
})
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
