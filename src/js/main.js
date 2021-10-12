import '../assets/scss/index.scss';
//import '../index.html';
if (process.env.NODE_ENV === 'development') {
	//require('../index.html');
	require('../index.pug');
}

import getData from './getdata/getdata';
import  DashBoardItem  from './getdata/dashboard';

console.log('Heloy pug');



// document.addEventListener('DOMContentLoaded', () => {
// 	getData()
// 		.then(data => {
// 			const activities = data.map(activite => new DashBoardItem(activite));
// 			const selectors = document.querySelectorAll('.wiev__selector-item');
// 			selectors.forEach(item => {
// 				item.addEventListener('click', ()  => {
// 					selectors.forEach(it => it.classList.remove('wiev__selector-item--active'));
// 					item.classList.add('wiev__selector-item--active');
// 					const curentView = item.innerText.trim().toLowerCase();
// 					activities.forEach(activ => activ.changeView(curentView));
// 				});
// 			});
// 		});

// });
