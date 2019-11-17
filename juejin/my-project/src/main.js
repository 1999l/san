// import Vue from 'vue'
// import App from './App.vue'
// import axios from 'axios'
// import store from './store'
// import vueResource from 'vue-resource'
// import router from './routers'

// Vue.use(vueResource);
// Vue.prototype.$axios = axios
// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './routers'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.use(Vuex)

Vue.config.productionTip = false;
const store = new Vuex.Store({
  state: {
    start: false,//登录状态
    offset1: false,//跳转登录页面
    offset2: false,//注册
    offset3: true,//是否登录显示的页面

    nicheng: ''
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
