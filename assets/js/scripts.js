import getScrollbarWidth from "get-scrollbar-width";
import $ from 'jquery'
import {disablePageScroll, enablePageScroll} from 'scroll-lock';

global.jQuery = $
global.$ = $

// Set dynamic 100vh / 100 css variable
function setVhCSSVariable() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// Set scrollbar width css variable
function setScrollbarWidthCSSVariable() {
    if (document.documentElement.clientHeight < document.querySelector('body').clientHeight) {
        document.documentElement.style.setProperty('--scroll-width', getScrollbarWidth() + 'px');
    } else {
        document.documentElement.style.setProperty('--scroll-width', '0px');
    }
}

// Update Browser Windows Sizes
["resize", "orientationchange", "popstate", "hashchange"].forEach(event => {
    window.addEventListener(event, () => {
        setVhCSSVariable()
        setScrollbarWidthCSSVariable()
    });
});

// Init Variables first time
setVhCSSVariable()
setScrollbarWidthCSSVariable();

jQuery(document).ready(function ($) {
    "use strict"


});

document.addEventListener("DOMContentLoaded", function (event) {
    "use strict";

    /* ----------------------------------- Mobile Navigation ------------------------------------ */
    {
        $(document).on('click', '.nav-main__toggle', function (e) {
            e.preventDefault();
            $('.nav-side').addClass('active');
            disablePageScroll();
        });

        // Close
        $(document).on('click', '.nav-side__close', function (e) {
            e.preventDefault();
            $('.nav-side').removeClass('active');
            enablePageScroll();
        });

        $('.nav-side .menu li a').on('click', function (e) {
            if ($(this).siblings('.sub-menu').length) {
                e.preventDefault();

                $(this).parents('li').toggleClass('active');
                $(this).siblings('.sub-menu').slideToggle('fast');
            }
        })

    }

    /* ----------------------------------- Fixed Navigation ------------------------------------ */
    {
        if (document.documentElement.clientWidth <= 660) {
            const nav = $('.nav-main');
            const navFixed = nav.clone().addClass('fixed').insertAfter(nav);
            let lastScroll = 0;
            $(window).on('scroll', function () {
                const scroll = $(this).scrollTop();
                if (scroll >= 450) {
                    navFixed.addClass('active');
                } else {
                    navFixed.removeClass('active');
                    navFixed.find('.lang-list').removeClass('active');
                }
                lastScroll = scroll;
            });
        }
    }


});


/* Example of async import

async function loadMyModule() {
  const myModule = await import('./myModule.js');
  // ... use myModule
}

loadMyModule();

import("choices.js").then((Choices) => {

});

import("gsap").then(({default: gsap}) => {

});

*/

