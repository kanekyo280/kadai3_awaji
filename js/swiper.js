const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = swiperWrapper.innerHTML;
swiperWrapper.innerHTML = slides + slides;


$('a[href^="#"]').click(function() {
    let href = $(this).attr('href');
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;

    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
});