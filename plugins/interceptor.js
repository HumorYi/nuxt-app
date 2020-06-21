export default ({ $axios, store }) => {
  // onRequest 在请求时可做拦截，是 @nuxt/axios 模块提供的帮助方法
  $axios.onRequest((config) => {
    const token = store.state.user.token
    // 如果有令牌，则把令牌添加到请求头中
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }

    return config
  })
}
