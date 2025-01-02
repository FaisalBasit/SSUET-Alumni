// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.min.css';
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        loop: true,                  // Enable infinite loop
        autoplay: {                  // Enable auto-slide
            delay: 3500,             // Delay between slides
            disableOnInteraction: false, // Continue autoplay after interaction
        },
        pagination: {
            el: '.swiper-pagination', // Enable pagination dots
            clickable: true,         // Make dots clickable
        },
        navigation: {                // Enable navigation arrows
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,            // Display one slide at a time
        spaceBetween: 0,             // No space between slides
    });
});
