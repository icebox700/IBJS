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

$('document').ready(function() {
    $('a[href="http://www.essent.com"]').parent().remove();
});

 console.log('IBJS Essent loaded...');