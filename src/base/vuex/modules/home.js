import {
  CountryInit,
  UserSignType
} from './homeserver'


const home = {
  state: {
    countryList: []
  },
  mutations: {
    SET_COUNTRYLIST(state, data) {
      state.countryList = data
    }
  },
  actions: {
    GET_COUNTRYLIST({
      state,
      commit
    }) {
      return new Promise((secces, error) => {
        if (state.countryList.length == 0) {
          CountryInit()
            .then(res => {
              commit('SET_COUNTRYLIST', res.data.data)
              secces()
            })
        } else {
          secces()
        }
      })
    }
  }
}

export default home
