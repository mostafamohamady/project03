/* global $ */

$(function () {
    'use strict';
    $('.innformation__list li').click(function () {
        $(this).addClass('innformation__list--selected').siblings('li').removeClass('innformation__list--selected');  
        // window.console.log($(this).data('class'));
        $('.information__content>div').hide();
        $('.'+$(this).data('class')).fadeIn();

    });
});
