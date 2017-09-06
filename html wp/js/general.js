jQuery(document).ready(function() {

    var vp = $('.media-test').width();

    // Show mobile menu
    $('.show-menu').click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.top-menu').slideUp();
        } else {
            $(this).addClass('open');
            $('.top-menu').slideDown();
        }
        return false;
    });

    // Show sub-menu
    $('.has-menu').on('mouseover',function () {
        $(this).addClass('open');
        //$(this).find('ul').show();
    });

    $('.has-menu').on('mouseout',function () {
        $(this).removeClass('open');
        //$(this).find('ul').hide();
    });

    // FAQs
    $('.faqs h3').click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next('div').slideUp();
        } else {
            $(this).addClass('open');
            $(this).next('div').slideDown();
        }
        return false;
    });

    function check_difference(a, b) { return Math.abs(a - b); }

    function check_window_size() {
        var new_vp = $('.media-test').width();
        var x = check_difference(new_vp, vp);
        if (x === 100) {
            if (new_vp === 200) {
                location.reload();
            }
            if (new_vp === 100) {
                location.reload();
            }
            vp = new_vp;
        }
    }

    var resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(check_window_size, 100);
    });

});