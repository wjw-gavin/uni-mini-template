let ENV = 'h5'

// #ifdef MP
// 获取当前帐号信息
const accountInfo = uni.getAccountInfoSync()

// env类型
ENV = accountInfo.miniProgram.envVersion
// #endif

// 不同环境的域名
const map = {
  h5: '', // 开发版
  develop: 'http://example.tech', // 开发版
  trial: 'http://example.tech', // 体验版
  release: 'https://example.net' // 正式版
}

export const baseURL = map[ENV]
