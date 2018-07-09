import {date} from './date'
export function excelCheckout(url,Ajaxobj) {
  let Data = new Date()
  var xhr = new XMLHttpRequest(); //创建新的XHR对象
  xhr.open("post", url); //指定获取数据的方式和url地址
  xhr.setRequestHeader(
    "Content-Type",
    "application/json; charset=UTF-8"
  );
  xhr.responseType = "blob"; //以blob的形式接收数据，一般文件内容比较大
  xhr.onload = function (e) {
    var blob = this.response;
    var reader = new FileReader();
    reader.readAsDataURL(blob); // 转换为base64，可以直接放入a表情href
    reader.onload = function (e) {
      // 转换完成，创建一个a标签用于下载
      var a = document.createElement("a");
      a.download = date(Data)+".xlsx";
      a.href = e.target.result;
      $("body").append(a); // 修复firefox中无法触发click
      a.click();
      $(a).remove();
    };
  };
  xhr.send(JSON.stringify(Ajaxobj)); //post请求传的参数
}
