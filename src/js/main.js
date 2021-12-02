import '../assets/scss/index.scss';
import  'swiper/css';
import './components/portfolioSlider';
import './components/testimonialSlider';
require('../index.pug');
//import '../index.html';
if (process.env.NODE_ENV === 'development') {
	//require('../index.html');
	require('../index.pug');
};

console.log('Heloy pug');


