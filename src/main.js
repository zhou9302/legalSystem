import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.scss'

Vue.config.productionTip = false
Vue.use(elementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
