/***************************************
 * IBJS v.01 - Icebox Javascript
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 ***************************************/

class IBJS {
    constructor() {
        console.log('testing')
      };
    public body: JQuery = $('body');
    public site: String = window.location.host;
}

class Navigation extends IBJS {
    public backtrack = () => {
        window.history.back();
    }
}

class Cookies extends IBJS {

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

// //
// $( document ).ready(function() {

// });