Date.prototype.Format = function (fmt) { //author: zhengsh 2016-9-5 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export function date(date){
  return new Date(date).Format("yyyy-MM-dd hh:mm:ss")
};

export function dateUtc(date) {
    let arr = date.split('-') 
    var nd = new Date();
    let h = nd.getHours()*60*60*1000
    let f = nd.getMinutes()*60*1000
    let s = nd.getSeconds()*1000
    let time = new Date(arr[0],arr[1],arr[2])
    let timenum = time.getTime()  
    timenum = timenum + h + f + s
    time = new Date(timenum)
    let y = time.getUTCFullYear()
    if( y < 10) {
        y = '0'+ y
    }
    let m = time.getUTCMonth()
    if( m < 10) {
        m = '0'+ m
    }
    let d = time.getUTCDate()
    if( d < 10) {
        d = '0'+ d
    }
    return (y+'-'+m+'-'+d) 
}