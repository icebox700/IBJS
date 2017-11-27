var IBCookies;
(function (IBCookies) {
    function createCookie(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value + expires) + "; path=/";
    }
    IBCookies.createCookie = createCookie;
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
    IBCookies.readCookie = readCookie;
    function eraseCookie(name) {
        this.createCookie(name, "", -1);
    }
    IBCookies.eraseCookie = eraseCookie;
    function getAllCookies() {
        return document.cookie.split(';');
    }
    IBCookies.getAllCookies = getAllCookies;
})(IBCookies || (IBCookies = {}));
var Validation;
(function (Validation) {
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    Validation.isEmail = isEmail;
    function isPhoneNumber(number) {
        var regex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
        return regex.test(number);
    }
    Validation.isPhoneNumber = isPhoneNumber;
})(Validation || (Validation = {}));
var Access;
(function (Access) {
    function validateUser(event, email, pass) {
        $.ajax({
            url: "https://icebox-coolstuff.herokuapp.com/sw/varify",
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
    Access.validateUser = validateUser;
})(Access || (Access = {}));
/***************************************
 * IBJS v.01 - Icebox Javascript
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 ***************************************/
/// <reference path="./modules/cookies.ts" />
/// <reference path="./modules/validation.ts" />
/// <reference path="./modules/access.ts" />
/// <reference path="./modules/errors.ts" />
/// <reference path="./modules/notifications.ts" />
//  Remove Essent Footer
$('a[href="http://www.essent.com"]').parent().remove();
console.log('IBJS Essent loaded...');
