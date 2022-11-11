(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var galery = exports.galery = function galery() {
	var d = document,
	    video = d.getElementById('video-galery'),
	    galeryItem = d.querySelectorAll('.gallery-image');

	var _loop = function _loop(i) {
		galeryItem[i].addEventListener('click', function (e) {
			var newVideo = galeryItem[i].children[0].children[0].getAttribute('value');
			e.preventDefault();
			video.setAttribute('src', newVideo);
		});
	};

	for (var i = 0; i < galeryItem.length; i++) {
		_loop(i);
	}
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tnsSingleMobile = function tnsSingleMobile() {
	var slider = tns({
		container: '#tnsSingleMobile',
		items: 1,
		slideBy: 1,
		speed: 1000,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
	});
};

var tnsSingleDesktop = function tnsSingleDesktop() {
	var slider = tns({
		container: '#tnsSingleDesktop',
		items: 1,
		slideBy: 1,
		speed: 1000,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
	});
};

exports.tnsSingleMobile = tnsSingleMobile;
exports.tnsSingleDesktop = tnsSingleDesktop;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	// Aqui definimos las variables
	var d = document,
	    headerBtn = d.querySelector('.hamburger'),
	    menu = d.querySelector('.top-nav__menu');

	// aqui creamos la funcion que ejecuta el toogle del menu
	headerBtn.addEventListener('click', function (e) {
		e.preventDefault();
		headerBtn.classList.toggle('is-active'), menu.classList.toggle('is-active');
	});
};
var modalLanguage = exports.modalLanguage = function modalLanguage() {
	// Aqui definimos las variables
	var d = document,
	    modal = d.getElementById('language'),
	    button = d.querySelector('.top-nav__language'),
	    language = d.querySelectorAll('.modal-language');

	// aqui creamos la funcion que ejecuta el toogle del menu
	button.addEventListener('click', function (e) {
		e.preventDefault();
		modal.classList.toggle('show');
	});

	for (var i = 0; i < language.length; i++) {
		language[i].addEventListener('click', function (e) {
			e.preventDefault();
			modal.classList.toggle('show');
		});
	}
};

},{}],4:[function(require,module,exports){
'use strict';

var _tnsSlider = require('./components/tns-slider');

var _topNav = require('./components/topNav');

var _galery = require('./components/galery');

(0, _tnsSlider.tnsSingleDesktop)();
(0, _tnsSlider.tnsSingleMobile)();
(0, _topNav.topNav)();
(0, _topNav.modalLanguage)();
(0, _galery.galery)();

},{"./components/galery":1,"./components/tns-slider":2,"./components/topNav":3}]},{},[4]);

//# sourceMappingURL=scripts-min.js.map
