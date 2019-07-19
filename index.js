$(document).ready(function () {
    //Animate gallery
    $(".card-gallery").mouseover(function (e) {
        $(".card-gallery").not(this).stop().animate({ opacity: 0.4 }, 300);
        $(this).stop().animate({ opacity: 1.0 }, 300)
    });
    $(".card-gallery").mouseout(function (e) {
        $(".card-gallery").stop().animate({ opacity: 1.0 }, 300)
    });

    //Animate chevron-arrow
    var btn = $('#btn-upwards');
    $(window).scroll(function () {
        $(window).scrollTop() > 300;
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    // $('.parallax-window').parallax({imageSrc: './assets/images/blue.jpg'});
    
});
