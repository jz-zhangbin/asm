import Vue from 'vue'
import los from '@commonJS/localStorage'
import Axios from 'axios'
import VueAxios from 'vue-axios' 

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
axios.interceptors.response.use(function (response) { 
    //console.log(response)
    return response;
}, function (error) {
    // return alert("网络繁忙,请您稍后再试");
})

Vue.use(VueAxios, axios)

export default axios
