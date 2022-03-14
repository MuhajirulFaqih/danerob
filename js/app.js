(function ($) {
    "use strict";

    $('.navbar-toggle').click(function() {
        $('.navbar').toggleClass('active')
    })
    $('.navbar-closer').click(function() {
        $('.navbar').toggleClass('active')
    })
    ACTparallax();
    AOS.init({offset: 0, duration: 800});

})(window.jQuery);