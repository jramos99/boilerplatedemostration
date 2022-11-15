import {tnsSingleMobile, tnsSingleDesktop, tnsSinglePrefooter} from './components/tns-slider';
import {topNav, modalLanguage} from './components/topNav';
import {galery} from './components/galery';
import {accordion} from './components/acordeon';
import {mdInner} from './components/md-compiler';
import {tabs} from './components/tabs';

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
		mdInner('./md', 'slidesDesktop','accordion-container__panel');
		accordion();
		tnsSinglePrefooter();
	}else if (document.body.classList.contains('banca')) {
		// functions here
		tnsSinglePrefooter();
		tabs();
		accordion();
	}else if (document.body.classList.contains('page4')) {
		// functions here
	}
})();
