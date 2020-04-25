import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Header,Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'//执行双框架堆叠，启动mintuI，副框架是mui
import '../public/mui/css/mui.min.css'
import '../public/mui/css/icons-extra.css'
import axios from './http'
Vue.config.productionTip = false
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
