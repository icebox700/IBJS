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

let Logged_Out_MiniCart = `<div class="cart-empty">
<h3>Your cart is empty.</h3>
<p>Something missing? <a href="/Chewy/Login.html">Sign in</a> to see items you may have added from another computer or device.</p>
</div>`;
let Logged_In_MiniCart = `<div class="cart-empty">
<h3>Your cart is empty.</h3>
</div>`;

$( document ).ready(function() {

    // Mini Cart ----------------------------
    var itemCount: number = 0;
    $('.CartInformation .CartTable .DisplayTextBox').each(function() {
        itemCount = itemCount + Number(this.value);
    });
    itemCount ? $('#minicart .cart-empty').replaceWith($('.CartInformation')) : $('.CartInformation').css('display', 'none');
    $('.quantity').html(itemCount.toString());
 
    // Login ----------------------------------
    var ibLogin = $('.ib-account-signin');
    var essentLogin = $('.LoginLinks');
    $('.LoginLinks a[id*="_lnkLogIn"]').html('<i class="fa fa-sign-in" aria-hidden="true"></i>Login').addClass('ib-btn ib-btn--action ib-btn--full js-header-sign-in');

    var userName = $('span[id*="_lblWelcome"]').length > 0 ? $('span[id*="_lblWelcome"]')[0].innerText.slice(10).slice(0, -3).split(/\s+/) : false;
    if (userName) {
        $('.top-nav-account').addClass('account-logged');
        $('.top-nav-username').html(`Hi, ${userName[0]}`);
        $('.LoginLinks a[id*="_lnkLogIn"]').html('<a href="/Login.html?action=logout"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>')
            .addClass('ib-btn ib-btn--action ib-btn--full js-header-sign-in');
        itemCount || $('#minicart').html(Logged_In_MiniCart);
    } else { 
        itemCount || $('#minicart').html(Logged_Out_MiniCart);
        $('.LoginLinks a[id*="_lnkLogIn"]').html('<i class="fa fa-sign-in" aria-hidden="true"></i>Login')
            .addClass('ib-btn ib-btn--action ib-btn--full js-header-sign-in');
    }
    ibLogin.length && ibLogin.append(essentLogin);

    // SearchBar ------------------------------
    $('#header-searchform').append($('.productSearchInput'));

    // Navigation -----------------------------
    $('.nav-drop').on("mouseover", function() {
        $(this).addClass('is-active');
        $(this).find('.ib-drop').css('display', 'block');
    });

    $('.nav-drop').on("mouseout", function() {
        $(this).removeClass('is-active');
        $(this).find('.ib-drop').css('display', 'none');
    });
});
    
     console.log('IBJS Essent UI loaded...');