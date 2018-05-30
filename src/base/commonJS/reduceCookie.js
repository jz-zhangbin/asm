function reduceCookie(cookie) {
        var cookies = cookie.split('&');
        var cookieObj = cookies.reduce((pre, next) => {
            const key = next.split('=')[0];
            const val = next.split('=')[1];
            pre[key] = val;
            return pre;  
    }, {}) 
    return cookieObj
}

export default reduceCookie