var Cookie = { 
    get: function (name, options) {
        validateCookieName(name);

        if (typeof options === 'function') {
            options = {converter: options};
        }
        else {
            options = options || {};
        }

        var cookies = parseCookieString(document.cookie, !options['raw']);
        return (options.converter || same)(cookies[name]);
    }, 
    set: function (name, value, options) {
        validateCookieName(name);

        options = options || {};
        var expires = options['expires'];
        if (typeof expires === 'undefined') {
            // 默认30天有效期
            expires = 30;
        }
        var domain = options['domain'] || document.domain;
        var path = options['path'] || '/';

        if (!options['raw']) {
            value = String(value);
        }

        var text = name + '=' + value;

        // expires
        var date = expires;
        if (typeof date === 'number') {
            date = new Date();
            date.setDate(date.getDate() + expires);
        }
        if (date instanceof Date) {
            text += '; expires=' + date.toUTCString();
        }

        // domain
        if (isNonEmptyString(domain)) {
            text += '; domain=' + domain;
        }

        // path
        if (isNonEmptyString(path)) {
            text += '; path=' + path;
        }

        // secure
        if (options['secure']) {
            text += '; secure';
        }

        document.cookie = text;
        return text;
    }, 
    remove: function (name, options) {
        options = options || {};
        options['expires'] = new Date(0);
        return this.set(name, '', options);
    }
};
var decode = decodeURIComponent;
//var encode = encodeURIComponent;

// Helpers
function isString(o) {
    return typeof o === 'string';
}

function isNonEmptyString(s) {
    return isString(s) && s !== '';
}

function validateCookieName(name) {
    if (!isNonEmptyString(name)) {
        throw new TypeError('Cookie name must be a non-empty string');
    }
}

function same(s) {
    return s;
}

function parseCookieString(text, shouldDecode) {
    var cookies = {};

    if (isString(text) && text.length > 0) {

        var decodeValue = shouldDecode ? decode : same;
        var cookieParts = text.split(/;\s/g);
        var cookieName;
        var cookieValue;
        var cookieNameValue;

        for (var i = 0, len = cookieParts.length; i < len; i++) {

            // Check for normally-formatted cookie (name-value)
            cookieNameValue = cookieParts[i].match(/([^=]+)=/i);
            if (cookieNameValue instanceof Array) {
                try {
                    cookieName = decode(cookieNameValue[1]);
                    cookieValue = decodeValue(cookieParts[i]
                        .substring(cookieNameValue[1].length + 1));
                } catch (ex) {
                    // Intentionally ignore the cookie -
                    // the encoding is wrong
                }
            } else {
                // Means the cookie does not have an "=", so treat it as
                // a boolean flag
                cookieName = decode(cookieParts[i]);
                cookieValue = '';
            }

            if (cookieName) {
                cookies[cookieName] = cookieValue;
            }
        }

    } 
    return cookies;
}

export default Cookie