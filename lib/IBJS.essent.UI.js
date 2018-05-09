/***************************************
 * IBJS v.01 - Icebox Javascript
 * Essent General UI
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 ***************************************/
//For Dev Only! --- Remove and upload when going to prod.
$.getScript("https://dl.dropbox.com/s/a50yxh39wsqwink/masterPage.js?dl=0")
    .done(function (script, textStatus) {
});
var Logged_Out_MiniCart = "\n    <div class=\"cart-empty\">\n        <h3>Your cart is empty.</h3>\n        <p>Something missing? <a href=\"/Login.html\">Sign in</a> to see items you may have added from another computer or device.</p>\n    </div>";
var Logged_In_MiniCart = "\n    <div class=\"cart-empty\">\n        <h3>Your cart is empty.</h3>\n    </div>";
$(document).ready(function () {
    // Var
    var itemCount = 0;
    var ibLogin = $('.ib-account-signin');
    var essentLogin = $('.LoginLinks');
    var userName = $('span[id*="_lblWelcome"]').length > 0 ? $('span[id*="_lblWelcome"]')[0].innerText.slice(10).slice(0, -3).split(/\s+/) : false;
    var login_buttons = $('.LoginLinks a[id*="_lnkLogIn"]')
        .html('<i class="fa fa-sign-in" aria-hidden="true"></i>Login')
        .addClass('ib-btn ib-btn--action ib-btn--full js-header-sign-in');
    var logout_button = $('.LoginLinks a[id*="_lnkNewAccount"]')
        .html('<i class="fa fa-sign-out" aria-hidden="true"></i>Logout')
        .addClass('ib-btn ib-btn--action ib-btn--full js-header-sign-in');
    // Mini Cart ----------------------------
    $('.cartItemGroup .ItemQty span').each(function () {
        itemCount = itemCount + Number(this.value);
    });
    itemCount ? $('#minicart .cart-empty').replaceWith($('.CartInformation')) : $('.CartInformation').css('display', 'none');
    $('.quantity').html(itemCount.toString());
    // if (window.location.pathname.indexOf('Cart.html') > 0 && itemCount === 0) {
    //     $('.ShoppingCart').hide();
    //     $('.cart-header').hide();
    //     $('#ib-empty-cart').css('display','block');
    //     $('.ib-back').addClass('empty');
    // }
    // Login ---------------------------------
    if (userName) {
        $('span[id*="_lblWelcome"]').hide();
        $('span[id*="_lblDivider"]').hide();
        $('.top-nav-account').addClass('account-logged');
        $('.top-nav-username').html("" + userName[0]);
        login_buttons.hide();
        itemCount || $('#minicart').html(Logged_In_MiniCart);
    }
    else {
        itemCount || $('#minicart').html(Logged_Out_MiniCart);
    }
    ibLogin.length && ibLogin.append(essentLogin);
    // SearchBar ------------------------------
    $('#header-searchform').append($('.productSearchInput'));
    $('.productSearchInput .formField').attr('placeholder', 'Find cool stuff...').addClass('nav-search-field');
    // $('input[id*="_ibtnSearchSubmit"').attr('src','https://dl.dropbox.com/s/vn7ctzvskaosk2c/Search.svg?dl=0').attr('class','search-submit');
    // Navigation -----------------------------
    $('.nav-drop').on("mouseover", function () {
        $(this).addClass('is-active');
        $(this).find('.ib-drop').css('display', 'block');
    });
    $('.nav-drop').on("mouseout", function () {
        $(this).removeClass('is-active');
        $(this).find('.ib-drop').css('display', 'none');
    });
    $('.toggle-menu').on("click", function () {
        $(this).children('.menu-item').children('.fa').toggleClass('fa-times').toggleClass('fa-bars');
        $(this).children('.ib-drop').toggleClass('active');
    });
    $('.trigger-menu').on("mouseover", function () {
        $(this).addClass('nav-is-open');
        $('.nav-drop-main .ib-drop').css('display', 'block');
    });
});
console.log('IBJS Essent UI loaded...');
