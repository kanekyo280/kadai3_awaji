


$('a[href^="#"]').click(function() {
    let href = $(this).attr('href');
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;

    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
});


const swiper = new Swiper(".sns-mobile", {
    loop: true,
    centeredSlides: true,     // ★中央のスライドを常に真ん中に配置
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(function() {
    $('.nav-smp').on('click', function() {
        console.log('clicked')
        $(this).toggleClass('open');
        $('.nav-content').toggleClass('open');
        $('body').toggleClass('scroll-lock');
    });

    $('.nav-content a').on('click', function() {
        $('.nav-smp').removeClass('open');
        $('.nav-content').removeClass('open');
        $('body').removeClass('scroll-lock');
    });
});