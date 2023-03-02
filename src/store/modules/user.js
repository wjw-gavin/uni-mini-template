const state = {
  userInfo: {}
}

const mutations = {
  updateUserInfo(state, payload) {
    state.userInfo = Object.assign({}, state.userInfo, payload)
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
