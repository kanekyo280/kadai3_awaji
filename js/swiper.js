


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