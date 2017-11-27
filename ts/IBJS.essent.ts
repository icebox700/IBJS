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

$( document ).ready(function() {

    var ibLogin = $('.ib-login');
    var essentLogin = $('.LoginLinks');
    var userName = $('span[id*="_lblWelcome"]').length > 0 ? $('span[id*="_lblWelcome"]')[0].innerText.slice(10).slice(0, -3) : false;
    var loginStr = userName ? '<a href="/login.html?logout"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a><br><span id="userName">Hi,' + userName + '!</span>' : '<a href="/login.html"><i class="fa fa-sign-in" aria-hidden="true"></i>Login</a>';
    ibLogin.length && ibLogin.html(loginStr).append(essentLogin.addClass('ib-drop').css('display', 'none'));

    $('.nav-drop').on("mouseover", function() {
        $(this).addClass('is-active');
        $(this).find('.ib-drop').css('display', 'block');
    });

    $('.nav-drop').on("mouseout", function() {
        $(this).removeClass('is-active');
        $(this).find('.ib-drop').css('display', 'none');
    });
});

 console.log('IBJS Essent loaded...');