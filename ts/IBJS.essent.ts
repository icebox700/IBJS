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

let phone: number = 480, tablet: number = 820, desktop: number = 1280;

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
const current_browser: {name: string, version: Number} = Browser.get_browser();
Browser.check_browser(current_browser);

const backtrack = () => {// Go back function to be added to the navigation class
    window.history.back();
}

//  Remove Essent Footer
$('document').ready(function() {
    $('a[href="http://www.essent.com"]').parent().remove();
});

console.log('IBJS Essent loaded...');