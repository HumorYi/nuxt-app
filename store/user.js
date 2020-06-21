export const state = () => ({
  token: '',
})

export const mutations = {
  init(state, token) {
    state.token = token
  },
}

export const getters = {
  isLogin(state) {
    return !!state.token
  },
}

export const actions = {
  login({ commit, getters }, user) {
    return this.$login(user).then(({ data: token }) => {
      if (token) {
        commit('init', token)
      }
      return getters.isLogin
    })
  },
}
