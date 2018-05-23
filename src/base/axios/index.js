import Vue from 'vue'
import los from '@commonJS/localStorage'
import Axios from 'axios'
import VueAxios from 'vue-axios' 
import {Message} from 'element-ui'

let axios = Axios.create({
    
    // //baseURL: baseURL, 
    // transformRequest: function (data) {  
    // }
   
})
/**
 *添加请求拦截器
 */
axios.interceptors.request.use(function (config) {
    config.headers = {'Content-Type': 'application/json; charset=utf-8'}
    return config; 
}, function (error) {
    // return alert("网络繁忙,请您稍后再试");
});
/**
 *直接返回数据层级 
 */
axios.interceptors.response.use(data=> {
    if (data.status && data.status == 200 && data.data.status == 'error') {
      Message.error({message: data.data.msg});
      return;
    }
    return data;
  }, err=> {
      console.log(err.responses.data.error)
    if (err.response.status == 500||err.response.status == 404) {
      Message.error({message: '服务器被吃了⊙﹏⊙∥'});
    } else if (err.response.status == 403) {
      Message.error({message: '权限不足,请联系管理员!'});
    }else {
      Message.error({message: '未知错误!'});
    }
    return Promise.resolve(err);
  })

Vue.use(VueAxios, axios)

export default axios
