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
/// <reference path="./modules/browser.ts" />

let phone: number = 480;
let tablet: number = 820;
let desktop: number = 1280;

// Set/Update Body Class
const device_adj = (win) => {
    if (win.width() <= phone && win.width() > 0) { $('body').attr('class', 'bd-home is-phone'); }
    if (win.width() <= tablet && win.width() > phone) { $('body').attr('class', 'bd-home is-tablet'); }
    if (win.width() >= desktop) { $('body').attr('class', 'bd-home is-desktop'); }
    return win;
}
device_adj($(window)).on('resize', function(){
    device_adj($(this));
});

// Browser Check
const browser: {name: string, version: number} = Browser.get_browser();
console.log(browser);
console.log(Browser.check_browser(browser));


//  Remove Essent Footer
$('document').ready(function() {
    $('a[href="http://www.essent.com"]').parent().remove();
});

 console.log('IBJS Essent loaded...');