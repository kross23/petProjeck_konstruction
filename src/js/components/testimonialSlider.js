import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const bodyStayles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStayles.getPropertyValue('--grid-gap'));
const testSlider = document.querySelector('.testimonials__items');

const testimonials = new Swiper(testSlider, {
    loop: true,
    slidesPerView:1,
    spaceBetween: gap*10,
    navigation: {
        nextEl: '.testimonials__prev',
        prevEl: '.testimonials__next',
    },

  });