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

let phone: number = 480;
let tablet: number = 820;
let desktop: number = 1280;


$('body').addClass('bd-home');
$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() <= phone && win.width() > 0) { $('body').attr('class', 'bd-home is-phone'); }
    if (win.width() <= tablet && win.width() > phone) { $('body').attr('class', 'bd-home is-tablet'); }
    if (win.width() >= desktop) { $('body').attr('class', 'bd-home is-desktop'); }
});

//  Remove Essent Footer
$('document').ready(function() {
    $('a[href="http://www.essent.com"]').parent().remove();
});

 console.log('IBJS Essent loaded...');