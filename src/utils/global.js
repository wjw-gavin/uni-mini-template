// 全局函数，注意这里全局函数不能直接在模板中使用

/**
 * @Description: 主题颜色
 * 这里导出变量是方便用于修改模板组件或者类似于 showModal 中 confirmColor 的颜色
 */
export const $primary = '#0052CC'

/**
 * @Description: 获取上一页 页面栈的实例
 *
 * let prePage = this.$getPrePage()
 * if (prePage) {
 *   prePage.$vm.data = 'someData'
 *  }
 */
export function $getPrePage(delta = 1) {
  const num = delta + 1
  const currentPage = getCurrentPages()
  const prePage = currentPage[currentPage.length - num]
  return prePage
}

/**
 * @Description: 二次封装 uni.showLoading
 * @example:
 * 显示：this.$loading()
 * 隐藏：this.$loading(false)
 */
export function $loading(flag = true, title = '加载中...') {
  if (flag) {
    uni.showLoading({
      title,
      mask: true
    })
  } else {
    uni.hideLoading()
  }
}

/**
 * @description: 二次封装 uni.showModal
 * @example:
 * this.$modal({
 *   title: 'xx',
 *   confirm: () => {},
 *   cancel: () => {}
 * })
 */
export function $modal(option = {}) {
  uni.showModal({
    title: option.title || '提示',
    content: option.content,
    confirmText: option.confirmText || '确定',
    confirmColor: option.confirmColor || $primary,
    showCancel: option.showCancel,
    cancelText: option.cancelText || '取消',
    cancelColor: option.cancelColor || '#9B9B9B',
    success: (res) => {
      if (res.confirm && option.confirm) {
        option.confirm()
      } else if (res.cancel && option.cancel) {
        option.cancel()
      }
    }
  })
}
