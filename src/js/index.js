import {tnsSingleMobile, tnsSingleDesktop, tnsSinglePrefooter} from './components/tns-slider';
import {topNav, modalLanguage} from './components/topNav';
import {galery} from './components/galery';
import {accordion} from './components/acordeon';
import {mdInner} from './components/md-compiler';
import {tabs} from './components/tabs';
import {modal} from './components/modal-sign-up';

(()=>{
	topNav();
	modalLanguage();
	tnsSinglePrefooter();
	if (document.body.classList.contains('home')) {
		// functions here
		tnsSingleDesktop();
		tnsSingleMobile();	
		galery();
	}else if (document.body.classList.contains('bonos')) {
		// functions here
		mdInner('./md', 'slidesDesktop','accordion-container__panel');
		accordion();
	}else if (document.body.classList.contains('banca')) {
		// functions here
		modal();
		tabs();
	}else if (document.body.classList.contains('casino')) {
		// functions here
		tabs();
		modal();
	}else if (document.body.classList.contains('poker')) {
		// functions here
		tabs();
		modal();
	}
})();
