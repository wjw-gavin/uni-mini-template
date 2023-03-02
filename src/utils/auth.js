export const TOKEN_KEY = 'X-TOKEN'

/**
 * @description: 设置 token
 */
export function setToken(token) {
  uni.setStorageSync(TOKEN_KEY, token)
}

/**
 * @description: 获取 token
 */
export function getToken() {
  return uni.getStorageSync(TOKEN_KEY)
}
