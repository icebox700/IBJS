/***************************************
 * IBJS v.01 - Icebox Javascript
 * Essent General UI
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 ***************************************/
$(document).ready(function () {
    var ibLogin = $('.ib-account-signin');
    var essentLogin = $('.LoginLinks').css('display', 'none');
    var userName = $('span[id*="_lblWelcome"]').length > 0 ? $('span[id*="_lblWelcome"]')[0].innerText.slice(10).slice(0, -3) : false;
    var loginStr = userName ? '<a href="/login.html?logout"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>' : '<a href="/login.html" class="cw-btn cw-btn--action cw-btn--full js-header-sign-in"><i class="fa fa-sign-in" aria-hidden="true"></i>Login</a>';
    ibLogin.length && ibLogin.html(loginStr).append(essentLogin);
    $('.nav-drop').on("mouseover", function () {
        $(this).addClass('is-active');
        $(this).find('.ib-drop').css('display', 'block');
    });
    $('.nav-drop').on("mouseout", function () {
        $(this).removeClass('is-active');
        $(this).find('.ib-drop').css('display', 'none');
    });
});
console.log('IBJS Essent UI loaded...');
