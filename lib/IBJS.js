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
    return IBJS;
}());
window.IBJS = new IBJS;
var IB = window.IBJS.get();
var Validate = (function (_super) {
    __extends(Validate, _super);
    function Validate() {
        _super.apply(this, arguments);
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
}(IBJS));
window.IBJS.Validate = new Validate;
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
window.IBJS.Navigation = new Navigation;
var UI = (function (_super) {
    __extends(UI, _super);
    function UI() {
        _super.apply(this, arguments);
    }
    return UI;
}(IBJS));
window.IBJS.UI = new UI;
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
window.IBJS.Cookies = new Cookies;
var Access = (function (_super) {
    __extends(Access, _super);
    function Access() {
        _super.apply(this, arguments);
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
}(IBJS));
window.IBJS.Access = new Access;
