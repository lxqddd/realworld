const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    user: {}
  }
}
export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = {}
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  }
}
