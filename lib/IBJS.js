var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/***************************************
 * IBJS v.01 - Icebox Javascript
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 ***************************************/
var IBJS = (function () {
    function IBJS() {
    }
    IBJS.prototype.dom = function (els) {
        for (var i = 0; i < els.length; i++) {
            this[i] = els[i];
        }
        this.length = els.length;
    };
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
        return new this.dom(els);
    };
    return IBJS;
}());
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        _super.apply(this, arguments);
        this.backtrack = function () {
            window.history.back();
        };
    }
    return Navigation;
}(IBJS));
var UI = (function (_super) {
    __extends(UI, _super);
    function UI() {
        _super.apply(this, arguments);
    }
    return UI;
}(IBJS));
var Cookies = (function (_super) {
    __extends(Cookies, _super);
    function Cookies() {
        var _this = this;
        _super.apply(this, arguments);
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
}(IBJS));
// Instantiate 
window.IBJS = new IBJS;
window.IBJS.UI = new UI;
window.IBJS.Navigation = new Navigation;
window.IBJS.Cookies = new Cookies;
