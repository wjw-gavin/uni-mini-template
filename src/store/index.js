import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 自动导入Modules/ 模块
const customModules = {}
const customModuleFiles = require.context('./modules', true, /\.js$/)
customModuleFiles.keys().forEach((key) => {
  const keys = key.replace(/(\.\/|\.js)/g, '')
  const arr = keys.split('/')
  const moduleName = arr[arr.length - 1]
  customModules[moduleName] = customModuleFiles(key).default
})

const store = new Vuex.Store({
  modules: {
    ...customModules
  }
})

export default store
