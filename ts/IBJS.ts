/***************************************
 * IBJS v.01 - Icebox Javascript
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 ***************************************/

class IBJS {
    public length;

    // Add to DOM Element
    DOM(els) {
        for(var i = 0; i < els.length; i++ ) {
            this[i] = els[i];
        }
        this.length = els.length;
    }

    // Get DOM Element
    get(selector) {
        var els;
        if (typeof selector === "string") {
            els = document.querySelectorAll(selector);
        } else if (selector.length) {
            els = selector;
        } else {
            els = [selector];
        }
        return new this.DOM(els);
    }
    
    map(callback) {
        var results = [], i = 0;
        for ( ; i < this.length; i++) {
            results.push(callback.call(this, this[i], i));
        }
        return results;
    }

    forEach(callback) {
        this.map(callback);
        return this;
    }
}
window.IBJS = new IBJS;
let IB = window.IBJS.get;

class Validate  {
    isEmail(email): boolean {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    isPhoneNumber(number): boolean {
        let regex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
        return regex.test(number);
    }
    
}
window.IBJS.Validate = new Validate;

class Nav {
    public backtrack = () => {
        window.history.back();
    }
}
window.IBJS.Navigation = new Nav;

class UI {
}
window.IBJS.UI = new UI;

class Cookies {

    public createCookie = (name: string, value, days: number): void => {
        let expires: string;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`
        }
        document.cookie = `${name}=${value + expires}; path=/`;
    }

    public readCookie = (name: string): string | null => {
        var nameEQ: string = `${name}=`;
        var ca: string[] = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    public eraseCookie = (name: string): void => {
        this.createCookie(name, "", -1);
    }

    public getAllCookies = (): string[] => {
        return document.cookie.split(';');
    }
}
window.IBJS.Cookies = new Cookies;

class Access {
    validateUser = (email, pass): boolean | void  => {
        if (window.IBJS.Validate.isEmail(email) && pass !== '') {
            $.ajax({
                url: "https://icebox-coolstuff.herokuapp.com/api/varify",
                type: "POST",
                crossDomain: true,
                data: { email: email, site: 'site' },
                dataType: "json",
                success: function(response) {
                    if (response.success === true) {
                        return true;
                    } else {
                        return false;
                    }
                },
                error: function(xhr, status) {
                    alert(status);
                    return false;
                }
            });
        };
    }
}
window.IBJS.Access = new Access;

    


