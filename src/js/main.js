import '../assets/scss/index.scss';
//import '../index.html';
if (process.env.NODE_ENV === 'development') {
	//require('../index.html');
	require('../index.pug');
}

import getData from './getdata/getdata';
import  DashBoardItem  from './getdata/dashboard';

console.log('Heloy pug');


