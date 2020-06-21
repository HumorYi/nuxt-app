export const actions = {
  /**
   * nuxt 服务初始化方法，适用于将服务端的⼀些数据传到客户端
   * @param {Object} state
   * @param {Object} context app => Koa instance
   */
  nuxtServerInit({ commit }, { app }) {
    // 获取请求 cookie 携带的 token
    const token = app.$cookies.get('token')

    if (token) {
      console.log('nuxtServerInit: token:' + token)
      // 如果有 token，则将 token 添加到 store 中，避免用户刷新后重新登录
      commit('user/init', token)
    }
  },
}
