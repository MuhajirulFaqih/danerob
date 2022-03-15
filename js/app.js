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

    $('#video-modal').on('hide.bs.modal', function() {
        var memory = $(this).html();
        $(this).html(memory);
   });

})(window.jQuery);