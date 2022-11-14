import {tnsSingleMobile, tnsSingleDesktop, tnsSinglePrefooter} from './components/tns-slider';
import {topNav, modalLanguage} from './components/topNav';
import {galery} from './components/galery';
import {accordion} from './components/acordeon';

(()=>{
	topNav();
	modalLanguage();
	if (document.body.classList.contains('home')) {
		// functions here
		tnsSingleDesktop();
		tnsSingleMobile();	
		tnsSinglePrefooter();
		galery();
	}else if (document.body.classList.contains('bonos')) {
		// functions here
		accordion();
		tnsSinglePrefooter();
	}else if (document.body.classList.contains('page3')) {
		// functions here
		tabs();
		accordion();
	}else if (document.body.classList.contains('page4')) {
		// functions here
	}
})();
