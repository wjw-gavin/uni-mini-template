import Vue from 'vue'
import uView from 'uview-ui'
import App from './App'
import store from './store'
import './assets/style/index.scss'

//注册全局常用方法
import * as global from './utils/global'

Vue.use(uView)

Vue.config.productionTip = false
Object.keys(global).forEach((item) => {
  Vue.prototype[item] = global[item]
})

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})

// 引入请求封装，将app参数传递到配置中
require('./http/request.js')(app)

app.$mount()
