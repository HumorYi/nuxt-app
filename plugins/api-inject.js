/**
 * @param {Object} context
 * @param {Function} inject
 * @returns void
 */
export default ({ $axios }, inject) => {
  /**
   * 往上下文中注入成员
   *
   * 注意：注入成员 login
   * 使用：在成员前面加 $ => $login
   */
  inject('login', (user) => $axios.post('/api/login', user))
}
