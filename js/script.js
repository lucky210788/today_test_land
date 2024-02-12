$(document).ready(function () {
    $('a').each(function (e) {
        $(this).attr('href', "#");
    });

    // --------------SCROLL-------------------
    $('a[href="#"]').on("touchend, click", function (e) {
        e.preventDefault();
        $("body,html").animate(
            {scrollTop: $(".toscroll").offset().top - 50},
            400
        );
    });

    $(".to-comments").on("touchend, click", function (e) {
        e.preventDefault();
        $("body,html").animate(
            {scrollTop: $(".scroll-to-comments").offset().top - 100},
            400
        );
    });
});
