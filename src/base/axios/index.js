import los from '@commonJS/localStorage'
import {
  Message
} from 'element-ui'

let Axios = axios.create({})
/**
 *添加请求拦截器
 */
Axios.interceptors.request.use(function (config) {
  config.headers = {
    'Content-Type': 'application/json; charset=utf-8'
  }
  return config;
}, function (error) {
  // return alert("网络繁忙,请您稍后再试");
});
/**
 *直接返回数据层级 
 */
Axios.interceptors.response.use(data => {
  if (data.status && data.status == 200 && data.data.status == 'error') {
    Message.error({
      message: data.data.msg
    });
    return;
  }
  return data;
}, err => {
  if (err.response.status == 500 || err.response.status == 404) {
    Message.error({
      message: '服务器出现问题'
    });
  }
})

//Vue.use(axios)

export default Axios
