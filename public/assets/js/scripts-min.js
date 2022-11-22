(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var accordion = function accordion() {
    var d = document,
        acc = document.getElementsByClassName("accordion-container__btn-acc");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
};

exports.accordion = accordion;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function mdInnerJson(data, rutaMd, nameObjJson, classDiv) {
	var _loop = function _loop(i) {

		var d = document,
		    $main = d.querySelectorAll("div." + classDiv)[i];

		fetch("assets/" + rutaMd + "/" + data[nameObjJson][i].md + ".md").then(function (res) {
			return res.ok ? res.text() : Promise.reject(res);
		}).then(function (text) {
			var div = document.createElement("div");
			div.innerHTML = new showdown.Converter().makeHtml(text);
			$main.appendChild(div);
		}).catch(function (err) {
			console.log(err);
			var message = err.statusText || "Ocurrio un error";
			$main.innerHTML = "Error " + err.status + ":" + message;
		});
	};

	for (var i = 0; i < data[nameObjJson].length; i++) {
		_loop(i);
	}
}

var mdInner = exports.mdInner = function mdInner(rutaMd, nameObjJson, classDiv) {
	function md() {
		fetch("./example.json").then(function (response) {
			return response.json();
		}).then(function (data) {
			return mdInnerJson(data, rutaMd, nameObjJson, classDiv);
		});
	}

	var funcion = md();
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.modal = modal;
function modal() {
	var d = document,
	    open = d.querySelectorAll('.btn-modal'),
	    close = d.getElementById('close'),
	    modal = d.getElementById('modal-container');

	for (var i = 0; i < open.length; i++) {
		open[i].addEventListener('click', function () {
			modal.classList.add('active');
		});
	}

	close.addEventListener('click', function () {
		modal.classList.remove('active');
	});
}

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var tabs = function tabs() {
    var d = document,
        tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab')),
        panels = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__panel'));

    d.getElementById('tabs').addEventListener('click', function (e) {
        if (e.target.classList.contains('tabs-container__tab')) {
            var i = tabs.indexOf(e.target);
            tabs.map(function (tab) {
                return tab.classList.remove('is-active');
            });
            tabs[i].classList.add('is-active');
            panels.map(function (tab) {
                return tab.classList.remove('is-active');
            });
            panels[i].classList.add('is-active');
        }
    });
};

exports.tabs = tabs;

},{}],6:[function(require,module,exports){
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
								autoplay: true,
								autoplayButton: "#customize-toggle1",
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
								autoplay: true,
								autoplayButton: "#customize-toggle2",
								mouseDrag: true,
								controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
				});
};

var tnsSinglePrefooter = function tnsSinglePrefooter() {
				var slider = tns({
								container: '#tnsSinglePrefooter',
								slideBy: 2,
								speed: 300,
								autoplay: true,
								autoplayButton: "#customize-toggle3",
								mode: 'gallery',
								mouseDrag: true,
								controls: false,
								nav: false,
								responsive: {
												320: {
																items: 2
												},
												480: {
																items: 4
												},
												640: {
																items: 4
												},
												800: {
																items: 4
												},
												960: {
																items: 4
												},
												1120: {
																items: 4
												},
												1280: {
																items: 4
												}
								}
				});
};

exports.tnsSingleMobile = tnsSingleMobile;
exports.tnsSingleDesktop = tnsSingleDesktop;
exports.tnsSinglePrefooter = tnsSinglePrefooter;

},{}],7:[function(require,module,exports){
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
		console.log(button);
		modal.classList.toggle('show');
	});

	for (var i = 0; i < language.length; i++) {
		language[i].addEventListener('click', function (e) {
			e.preventDefault();
			modal.classList.toggle('show');
		});
	}
};

},{}],8:[function(require,module,exports){
'use strict';

var _tnsSlider = require('./components/tns-slider');

var _topNav = require('./components/topNav');

var _galery = require('./components/galery');

var _acordeon = require('./components/acordeon');

var _mdCompiler = require('./components/md-compiler');

var _tabs = require('./components/tabs');

var _modalSignUp = require('./components/modal-sign-up');

(function () {
	(0, _topNav.topNav)();
	(0, _topNav.modalLanguage)();
	(0, _tnsSlider.tnsSinglePrefooter)();
	if (document.body.classList.contains('home')) {
		// functions here
		(0, _tnsSlider.tnsSingleDesktop)();
		(0, _tnsSlider.tnsSingleMobile)();
		(0, _galery.galery)();
	} else if (document.body.classList.contains('bonos')) {
		// functions here
		(0, _mdCompiler.mdInner)('./md', 'slidesDesktop', 'accordion-container__panel');
		(0, _acordeon.accordion)();
	} else if (document.body.classList.contains('banca')) {
		// functions here
		(0, _modalSignUp.modal)();
		(0, _tabs.tabs)();
	} else if (document.body.classList.contains('casino')) {
		// functions here
		(0, _tabs.tabs)();
		(0, _modalSignUp.modal)();
	} else if (document.body.classList.contains('poker')) {
		// functions here
		(0, _tabs.tabs)();
		(0, _modalSignUp.modal)();
	}
})();

},{"./components/acordeon":1,"./components/galery":2,"./components/md-compiler":3,"./components/modal-sign-up":4,"./components/tabs":5,"./components/tns-slider":6,"./components/topNav":7}]},{},[8]);

//# sourceMappingURL=scripts-min.js.map
