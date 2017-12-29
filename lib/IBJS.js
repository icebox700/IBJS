/***************************************
 * IBJS v.01 - Icebox Javascript
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 ***************************************/
var IBJS = (function () {
    function IBJS() {
    }
    // Add to DOM Element
    IBJS.prototype.DOM = function (els) {
        for (var i = 0; i < els.length; i++) {
            this[i] = els[i];
        }
        this.length = els.length;
    };
    // Get DOM Element
    IBJS.prototype.get = function (selector) {
        var els;
        if (typeof selector === "string") {
            els = document.querySelectorAll(selector);
        }
        else if (selector.length) {
            els = selector;
        }
        else {
            els = [selector];
        }
        return new this.DOM(els);
    };
    IBJS.prototype.map = function (callback) {
        var results = [], i = 0;
        for (; i < this.length; i++) {
            results.push(callback.call(this, this[i], i));
        }
        return results;
    };
    IBJS.prototype.forEach = function (callback) {
        this.map(callback);
        return this;
    };
    return IBJS;
}());
window.IBJS = new IBJS;
var IB = window.IBJS.get;
var Validate = (function () {
    function Validate() {
    }
    Validate.prototype.isEmail = function (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };
    Validate.prototype.isPhoneNumber = function (number) {
        var regex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
        return regex.test(number);
    };
    return Validate;
}());
window.IBJS.Validate = new Validate;
var Nav = (function () {
    function Nav() {
        this.backtrack = function () {
            window.history.back();
        };
    }
    return Nav;
}());
window.IBJS.Navigation = new Nav;
var UI = (function () {
    function UI() {
    }
    return UI;
}());
window.IBJS.UI = new UI;
var Cookies = (function () {
    function Cookies() {
        var _this = this;
        this.createCookie = function (name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value + expires) + "; path=/";
        };
        this.readCookie = function (name) {
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
        };
        this.eraseCookie = function (name) {
            _this.createCookie(name, "", -1);
        };
        this.getAllCookies = function () {
            return document.cookie.split(';');
        };
    }
    return Cookies;
}());
window.IBJS.Cookies = new Cookies;
var Access = (function () {
    function Access() {
        this.validateUser = function (email, pass) {
            if (window.IBJS.Validate.email(email) && pass !== '') {
                $.ajax({
                    url: "https://icebox-coolstuff.herokuapp.com/api/varify",
                    type: "POST",
                    crossDomain: true,
                    data: { email: email, site: 'site' },
                    dataType: "json",
                    success: function (response) {
                        if (response.success === true) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    },
                    error: function (xhr, status) {
                        alert(status);
                        return false;
                    }
                });
            }
            ;
        };
    }
    return Access;
}());
window.IBJS.Access = new Access;
