/***************************************
 * IBJS v.01 - Icebox Javascript 
 * for use within Icebox Projects only
 * 
 * created by Brandons Simms
 ***************************************/

/// <reference path="./modules/cookies.ts" />
/// <reference path="./modules/validation.ts" />
/// <reference path="./modules/access.ts" />

$( document ).ready(function() {
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