!function(){return function e(t,n,o){function s(r,c){if(!n[r]){if(!t[r]){var a="function"==typeof require&&require;if(!c&&a)return a(r,!0);if(i)return i(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){return s(t[r][1][e]||e)},u,u.exports,e,t,n,o)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<o.length;r++)s(o[r]);return s}}()({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.accordion=function(){for(var e=document.getElementsByClassName("accordion-container__btn-acc"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.galery=function(){for(var e=document,t=e.getElementById("video-galery"),n=e.querySelectorAll(".gallery-image"),o=function(e){n[e].addEventListener("click",function(o){var s=n[e].children[0].children[0].getAttribute("value");o.preventDefault(),t.setAttribute("src",s)})},s=0;s<n.length;s++)o(s)}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.tnsSingleMobile=function(){tns({container:"#tnsSingleMobile",items:1,slideBy:1,speed:1e3,mode:"gallery",mouseDrag:!0,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']})},n.tnsSingleDesktop=function(){tns({container:"#tnsSingleDesktop",items:1,slideBy:1,speed:1e3,mode:"gallery",mouseDrag:!0,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']})},n.tnsSinglePrefooter=function(){tns({container:"#tnsSinglePrefooter",items:2,slideBy:1,speed:1e3,mode:"gallery",mouseDrag:!0,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']})}},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.topNav=function(){var e=document,t=e.querySelector(".hamburger"),n=e.querySelector(".top-nav__menu");t.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("is-active"),n.classList.toggle("is-active")})},n.modalLanguage=function(){var e=document,t=e.getElementById("language"),n=e.querySelector(".top-nav__language"),o=e.querySelectorAll(".modal-language");n.addEventListener("click",function(e){e.preventDefault(),console.log(n),t.classList.toggle("show")});for(var s=0;s<o.length;s++)o[s].addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("show")})}},{}],5:[function(e,t,n){"use strict";var o=e("./components/tns-slider"),s=e("./components/topNav"),i=e("./components/galery"),r=e("./components/acordeon");(0,s.topNav)(),(0,s.modalLanguage)(),document.body.classList.contains("home")?((0,o.tnsSingleDesktop)(),(0,o.tnsSingleMobile)(),(0,o.tnsSinglePrefooter)(),(0,i.galery)()):document.body.classList.contains("bonos")?((0,r.accordion)(),(0,o.tnsSinglePrefooter)()):document.body.classList.contains("page3")?(tabs(),(0,r.accordion)()):document.body.classList.contains("page4")},{"./components/acordeon":1,"./components/galery":2,"./components/tns-slider":3,"./components/topNav":4}]},{},[5]);
//# sourceMappingURL=scripts.js.map
