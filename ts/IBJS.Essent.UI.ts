/***************************************
 * IBJS v.01 - Icebox Javascript 
 * Essent General UI
 * for use within Icebox Projects only
 * 
 * created by Brandons Simms
 ***************************************/

//For Dev Only! --- Remove and upload when going to prod.
$.getScript( "https://dl.dropbox.com/s/a50yxh39wsqwink/masterPage.js?dl=0" )
    .done(function( script, textStatus ) {
});

const Logged_Out_MiniCart: string = `
    <div class="cart-empty">
        <h3>Your cart is empty.</h3>
        <p>Something missing? <a href="/Login.html">Sign in</a> to see items you may have added from another computer or device.</p>
    </div>`;
const Logged_In_MiniCart: string = `
    <div class="cart-empty">
        <h3>Your cart is empty.</h3>
    </div>`;

$( document ).ready(function() {
    
    // Var
    let itemCount: number = 0;
    let ibLogin = $('.ib-account-signin');
    let essentLogin = $('.LoginLinks');
    let userName = $('span[id*="_lblWelcome"]').length > 0 ? $('span[id*="_lblWelcome"]')[0].innerText.slice(10).slice(0, -3).split(/\s+/) : false;
    let login_buttons = $('.LoginLinks a[id*="_lnkLogIn"]')
        .html('<i class="fa fa-sign-in" aria-hidden="true"></i>Login')
        .addClass('ib-btn ib-btn--action ib-btn--full js-header-sign-in');
    let logout_button = $('.LoginLinks a[id*="_lnkNewAccount"]')
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
        $('#ib-empty-cart').css('display','block');
    }
 
    // Login ---------------------------------
    if (userName) {
        $('span[id*="_lblWelcome"]').hide();
        $('span[id*="_lblDivider"]').hide();
        $('.top-nav-account').addClass('account-logged');
        $('.top-nav-username').html(`Hi, ${userName[0]}`);
        login_buttons.hide();

        itemCount || $('#minicart').html(Logged_In_MiniCart);
    } else { 
        itemCount || $('#minicart').html(Logged_Out_MiniCart);
    }
    ibLogin.length && ibLogin.append(essentLogin);

    // SearchBar ------------------------------
    $('#header-searchform').append($('.productSearchInput'));
    $('.productSearchInput .formField').attr('placeholder','Find cool stuff...').addClass('nav-search-field');
    // $('input[id*="_ibtnSearchSubmit"').attr('src','https://dl.dropbox.com/s/vn7ctzvskaosk2c/Search.svg?dl=0').attr('class','search-submit');

    // Navigation -----------------------------
    $('.nav-drop').on("mouseover", function() {
        $(this).addClass('is-active');
        $(this).find('.ib-drop').css('display', 'block');
    });

    $('.nav-drop').on("mouseout", function() {
        $(this).removeClass('is-active');
        $(this).find('.ib-drop').css('display', 'none');
    });

    $('.trigger-menu').on("mouseover", function() {
        $(this).addClass('nav-is-open');
        $('.nav-drop-main .ib-drop').css('display', 'block');
    });



});

console.log('IBJS Essent UI loaded...');