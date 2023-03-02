import { $loading } from '@/utils/global'
import { TOKEN_KEY } from '@/utils'
import { baseURL } from './config'

module.exports = () => {
  // 初始化请求配置
  uni.$u.http.setConfig((config) => {
    /* config 为默认全局配置*/
    config.baseURL = baseURL
    config.custom = {
      catch: true,
      loading: true
    }

    return config
  })

  // 请求拦截
  uni.$u.http.interceptors.request.use(
    (config) => {
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {}

      // 根据custom参数中配置的是否需要token，添加对应的请求头
      const token = uni.getStorageSync(TOKEN_KEY)

      if (token) {
        config.header[TOKEN_KEY] = token
      }

      // 如果没有显式定义custom的loading参数为false的话，默认对请求加载提示
      if (config.custom.loading) {
        $loading()
      }

      return config
    },

    (config) => {
      return Promise.reject(config)
    }
  )

  // 响应拦截
  uni.$u.http.interceptors.response.use(
    (response) => {
      $loading(false)

      /* 对响应成功做点什么 */
      const data = response.data
      // 自定义参数
      const custom = response.config.custom

      if (data.status.code !== 0) {
        // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
        if (custom.toast !== false) {
          uni.$u.toast(data.status.message || '调用失败')
        }

        // 如果需要catch返回，则进行reject
        if (custom.catch) {
          return Promise.reject(data)
        } else {
          // 否则返回一个pending中的promise，请求不会进入catch中
          return new Promise()
        }
      }

      return data.data ? data.data : {}
    },
    (response) => {
      // 对响应错误做点什么
      $loading(false)
      uni.showToast({
        title: '响应失败，请稍后重试',
        icon: 'none',
        duration: 3000
      })

      return Promise.reject(response)
    }
  )
}
