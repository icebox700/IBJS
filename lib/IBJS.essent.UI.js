/***************************************
 * IBJS v.01 - Icebox Javascript
 * Essent General UI
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 ***************************************/
$(document).ready(function () {
    // Login ----------------------------------
    var ibLogin = $('.ib-account-signin');
    var essentLogin = $('.LoginLinks');
    $('.LoginLinks a[id*="_lnkLogIn"]').html('<i class="fa fa-sign-in" aria-hidden="true"></i>Login').addClass('ib-btn ib-btn--action ib-btn--full js-header-sign-in');
    var userName = $('span[id*="_lblWelcome"]').length > 0 ? $('span[id*="_lblWelcome"]')[0].innerText.slice(10).slice(0, -3) : false;
    userName ? $('.LoginLinks').html('<a href="/Login.html?action=logout"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>').addClass('ib-btn ib-btn--action ib-btn--full js-header-sign-in')
        : $('.LoginLinks a[id*="_lnkLogIn"]').html('<i class="fa fa-sign-in" aria-hidden="true"></i>Login').addClass('ib-btn ib-btn--action ib-btn--full js-header-sign-in');
    ibLogin.length && ibLogin.append(essentLogin);
    // SearchBar ------------------------------
    $('#header-searchform').append($('.productSearchInput'));
    // Mini Cart ----------------------------
    var itemCount = 0;
    $('.CartInformation .CartTable .DisplayTextBox').each(function () {
        itemCount = itemCount + Number(this.value);
    });
    itemCount ? $('#minicart').append($('.CartInformation')) : $('.CartInformation').css('display', 'none');
    $('.quantity').html(itemCount.toString());
    // Navigation -----------------------------
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
