/***************************************
 * IBJS v.01 - Icebox Javascript
 * Essent General UI
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 ***************************************/

//For Dev Only! --- Remove and upload when going to prod.
$.getScript("https://dl.dropbox.com/s/a50yxh39wsqwink/masterPage.js?dl=0")
    .done(function(script, textStatus) {});

var Logged_Out_MiniCart = "\n    <div class=\"cart-empty\">\n        <h3>Your cart is empty.</h3>\n        <p>Something missing? <a href=\"/Login.html\">Sign in</a> to see items you may have added from another computer or device.</p>\n    </div>";
var Logged_In_MiniCart = "\n    <div class=\"cart-empty\">\n        <h3>Your cart is empty.</h3>\n    </div>";
$(document).ready(function() {
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
    $('.CartInformation .CartTable .DisplayTextBox').each(function() {
        itemCount = itemCount + Number(this.value);
    });
    itemCount ? $('#minicart .cart-empty').replaceWith($('.CartInformation')) : $('.CartInformation').css('display', 'none');
    $('.quantity').html(itemCount.toString());
    if (window.location.pathname.indexOf('Cart.html') > 0 && itemCount === 0) {
        $('.ShoppingCart').hide();
        $('.cart-header').hide();
        $('#ib-empty-cart').css('display', 'block');
        $('.ib-back').addClass('empty');
    }
    // Login ---------------------------------
    if (userName) {
        $('span[id*="_lblWelcome"]').hide();
        $('span[id*="_lblDivider"]').hide();
        $('.top-nav-account').addClass('account-logged');
        $('.top-nav-username').html("" + userName[0]);
        login_buttons.hide();
        itemCount || $('#minicart').html(Logged_In_MiniCart);
    } else {
        itemCount || $('#minicart').html(Logged_Out_MiniCart);
    }
    ibLogin.length && ibLogin.html(essentLogin);
    // SearchBar ------------------------------
    $('#header-searchform').append($('.productSearchInput'));
    $('.productSearchInput .formField').attr('placeholder', 'Find cool stuff...').addClass('nav-search-field');
    // $('input[id*="_ibtnSearchSubmit"').attr('src','https://dl.dropbox.com/s/vn7ctzvskaosk2c/Search.svg?dl=0').attr('class','search-submit');


    // Navigation -----------------------------
    $('.nav-drop').on("mouseover", function() {
        $(this).addClass('is-active');
        $(this).children('.ib-drop').css('display', 'block');
    });
    $('.nav-drop').on("mouseout", function() {
        $(this).removeClass('is-active');
        $(this).children('.ib-drop').css('display', 'none');
    });
    $('.trigger-menu').on("click", function() {
        $(this).children('.menu-item').children('.fa').toggleClass('fa-times fa-bars nav-is-open');
        $(this).children('.ib-drop').css('display', 'none');
    });

    // scroll listen
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.scroll-adjust').attr('class', 'scroll-adjust small')
        } else {
            $('.scroll-adjust').attr('class', 'scroll-adjust')
        }
    })

    // Fixing Essents duumb-ass errors. - replacing the edit button on the
    if (window.location.pathname.indexOf('Address-Management.html') > 0) {
        $('img[alt="Edit"]').each(function(obj) {
            $(this).attr('src', "https://dl.dropbox.com/s/xwm3ogh4utvvwsi/Edit%402x.png?dl=0");
        })
    }

});





console.log('IBJS Essent UI loaded...');