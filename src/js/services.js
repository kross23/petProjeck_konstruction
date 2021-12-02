import '../assets/scss/services.scss';
// import  'swiper/css';
// import './components/portfolioSlider';
// import './components/testimonialSlider';
//import '../index.html';
require('../services.pug');
if (process.env.NODE_ENV === 'development') {
	//require('../index.html');
	require('../services.pug');
}

;

console.log('Heloy pug- services');
