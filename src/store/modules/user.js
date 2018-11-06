import firebase from 'firebase'

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
  setUser: (state, userSet, passSet) => {
    state.user = userSet
    state.password = passSet
  }
}

const actions = {
  signIn: ({commit}, payload) => {
    const dbRefObject = firebase.database().ref().child('User')
    const dbReflist = dbRefObject.child(payload.username)
    dbReflist.on('child_added', snap => {
      state.profile = snap.val()
      console.log(state.profile)
      if (state.profile != null) {
        console.log(state.profile.username, state.profile.password)
        if (state.profile.username === payload.username && state.profile.password === payload.password) {
          const userSet = state.profile.username
          const passSet = state.profile.password
          commit('setUser', userSet, passSet)
          alert('Successfully sign in')
        } else alert('Username Or Password incorrect')
      } else alert('Username Or Password incorrect null')
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
