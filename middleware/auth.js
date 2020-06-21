export default function ({ route, redirect, store }) {
  // getters.isLogin
  if (!store.state.user.token) {
    redirect('/login?redirect=' + route.path)
  }
}
