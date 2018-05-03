export  function datefn () {
    let timerNum1 = new Date().getTime()
    let timerNum2 = 60*60*24*7*1000 
    let timerNum3 = new Date(timerNum1+timerNum2) 
    function fn (date1) {
        let date = new Date(date1)
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    }
    return fn(timerNum1) + ' 至 ' + fn(timerNum3)
};