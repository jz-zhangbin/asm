import cookie from '@commonJS/cookie'
import reduceCookie from '@commonJS/reduceCookie'
import Vip from '@commonJS/Vip'
import qs from 'qs'

import {
  CountryInit,
  UserSignType,
  IsManager
} from './homeserver'


const sign = {
  state: {
    userType: true,
    userName: '',
    userCookie: '',
    IsManager: null,
    vipShow: false
  },
  mutations: {
    SET_USERTYPE(state) {
      state.userType = false
      state.userName = ''
      state.vipShow = false
      cookie.remove('Adjuz_UserInfoNEW')
      cookie.remove('Adjuz_Vip')
    },
    GET_USERTYPE(state) {
      if (cookie.get('Adjuz_UserInfoNEW') != null && cookie.get('Adjuz_UserInfoNEW') != undefined) {
        state.userType = true
        state.userCookie = reduceCookie(cookie.get('Adjuz_UserInfoNEW'))
        state.userName = reduceCookie(cookie.get('Adjuz_UserInfoNEW')).useremail
        if(Vip.indexOf(state.userName) != -1) {
          cookie.set('Adjuz_Vip','true')
          state.vipShow = true
        }else{
          cookie.set('Adjuz_Vip','false')
          state.vipShow = false
        }
        //reduceCookie(cookie.get('Adjuz_UserInfoNEW')).vip == 'true' ? state.vipShow = true : state.vipShow = false
      } else {
        state.vipShow = false
        state.userType = false
      }
    } 
  },
  actions: {
    GET_ISMANAGER({commit,state}) {
      if(state.IsManager == null) {
        IsManager().then(res=>{
          state.IsManager = res.data.data
          //state.IsManager = false
        })
      } 
    }
  }
}

export default sign
