
const state = {
  user: null,
  password: null,
  profile: null,
  getuser: null,
  selectShop: null,
  added: []
}

const getters = {
  user: state => state.user,
  isLoggedIn: state => (state.user !== null)
}

const mutations = {
  setUser: (state, userSet) => {
    state.user = userSet
  }
}

const actions = {
  signIn: ({commit}, payload) => {
    commit('setUser', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
