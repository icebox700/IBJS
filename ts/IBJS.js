/***************************************
 * IBJS v.01 - Icebox Javascript
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 *
 ***************************************/
//  import * as cookieFunc from "./modules/cookies"
/// <reference path="./modules/cookies.ts" />
var body = $('body');
var $site = window.location.host;
// =  Functions  ======================//
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
console.log(cookieFunc.test);
console.log('IBJS loaded...');