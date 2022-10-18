import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    auth: false
  },
  getters: {
    getUser: state => state.user,
    getAuth: state => state.auth
  },
  mutations: {
    setUser(state, user) {
      state.user = user

      if (user != {}) {
        state.auth = true
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
