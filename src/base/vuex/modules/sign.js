import cookie from '@commonJS/cookie'
import reduceCookie from '@commonJS/reduceCookie'
import qs from 'qs'

import {
  CountryInit,
  UserSignType
} from './homeserver'


const sign = {
  state: {
    userType: true,
    userName: '',
    userCookie: ''
  },
  mutations: {
    SET_USERTYPE(state) {
      state.userType = false
      state.userName = ''
      cookie.remove('Adjuz_UserInfoNEW')
    },
    GET_USERTYPE(state) {
      if (cookie.get('Adjuz_UserInfoNEW') != null && cookie.get('Adjuz_UserInfoNEW') != undefined) {
        state.userType = true
        state.userCookie = reduceCookie(cookie.get('Adjuz_UserInfoNEW'))
        state.userName = reduceCookie(cookie.get('Adjuz_UserInfoNEW')).useremail
      } else {
        state.userType = false
      }
    }
  },
  actions: {}
}

export default sign
