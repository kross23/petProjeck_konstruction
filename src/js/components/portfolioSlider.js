import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const bodyStayles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStayles.getPropertyValue('--grid-gap'));
const portSlider = document.querySelector('.section-portfolio__items');

const portfolioSlider = new Swiper(portSlider, {
    loop: true,
    slidesPerView:3,
    spaceBetween: gap*10,
    //centeredSlides: true,
    navigation: {
        nextEl: '.section-portfolio__next',
        prevEl: '.section-portfolio__prev',
    },

  });
  portfolioSlider.on('slideChange', function () {
      console.log('change');
    const activeSlide = portSlider.querySelector('.swiper-slide-prev');
    console.log('activeSlide: ', activeSlide);
    
  });

//slide-prev
//swiper-slide-prev"