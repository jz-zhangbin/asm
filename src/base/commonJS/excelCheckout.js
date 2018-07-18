import {
  date
} from './date'
import axios from '@axios'
export function excelCheckout(url, Ajaxobj , textName) {
  return new Promise((success, error) => {
    axios({
      method: 'post',
      url: url,
      data: Ajaxobj,
      timeout: 0,
      responseType: "blob"
    }).then(res => {
      let Data = new Date()
      let content = res.data
      const blob = new Blob([content])
      let fileName
      if(textName) {
         fileName = textName + ".xls";
      }else{
         fileName = date(Data) + ".xls";
      } 
      if ('download' in document.createElement('a')) { // 非IE下载
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
      } else { // IE10+下载
        navigator.msSaveBlob(blob, fileName)
      }
      success()
    })
    .catch(()=>{
      success()
    })
  })  
 } 
