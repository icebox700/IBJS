var IBJS;
(function (IBJS) {
    IBJS.test = 740;
    function createCookie(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value + expires) + "; path=/";
    }
    IBJS.createCookie = createCookie;
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    IBJS.readCookie = readCookie;
    function eraseCookie(name) {
        this.createCookie(name, "", -1);
    }
    IBJS.eraseCookie = eraseCookie;
    function getAllCookies() {
        return document.cookie.split(';');
    }
    IBJS.getAllCookies = getAllCookies;
})(IBJS || (IBJS = {}));
