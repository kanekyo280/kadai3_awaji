const breakpoint = window.matchMedia('(min-width: 768px)');
const swiperWrapper = document.querySelector('.swiper-wrapper');
let mySwiper = null;
let duplicated = false;

function setupPC() {
    if (duplicated) return;
    const slides = swiperWrapper.innerHTML;
    swiperWrapper.innerHTML = slides + slides;
    duplicated = true;
}

function setupSP() {
    if (mySwiper) return;
    mySwiper = new Swiper('.swiper', {
        loop: true,
        allowTouchMove: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function breakpointChecker() {
    if (breakpoint.matches) {
    if (mySwiper) {
        mySwiper.destroy(true, true);
        mySwiper = null;
    }
    setupPC();
    } else {
        setupSP();
    }
}

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();


$('a[href^="#"]').click(function() {
    let href = $(this).attr('href');
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;

    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
});