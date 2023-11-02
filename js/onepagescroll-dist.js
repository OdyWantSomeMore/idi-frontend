function onePageScroll(e,a){var d=Object.extend({},{sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!1,keyboard:!0,beforeMove:null,afterMove:null,loop:!1,responsiveFallback:!1},a),l=document.querySelector(e),c=document.querySelectorAll(d.sectionContainer),s=c.length,o=0,u="",m=document.querySelector("body");this.init=function(){_addClass(l,"onepage-wrapper"),l.style.position="relative";for(var e=0;e<c.length;e++)_addClass(c[e],"ops-section"),c[e].dataset.index=e+1,100,1==d.pagination&&(u+="<li><a data-index='"+(e+1)+"' href='#"+(e+1)+"'></a></li>");if(_swipeEvents(l),document.addEventListener("swipeDown",function(e){_hasClass(m,"disabled-onepage-scroll")||e.preventDefault(),moveUp(l)}),document.addEventListener("swipeUp",function(e){_hasClass(m,"disabled-onepage-scroll")||e.preventDefault(),moveDown(l)}),1==d.pagination){var a=document.createElement("ul");a.setAttribute("class","onepage-pagination"),m.appendChild(a),a.innerHTML=u;var t=document.querySelector(".onepage-pagination").offsetHeight/2*-1;document.querySelector(".onepage-pagination").style.marginTop=t}if(""!=window.location.hash&&"#1"!=window.location.hash){var n=window.location.hash.replace("#",""),o=document.querySelector(d.sectionContainer+"[data-index='"+n+"']"),i=o.dataset.index;if(_addClass(document.querySelector(d.sectionContainer+"[data-index='"+n+"']"),"active"),_addClass(m,"viewing-page-"+n),1==d.pagination&&_addClass(document.querySelector(".onepage-pagination li a[data-index='"+n+"']"),"active"),o&&(_addClass(o,"active"),1==d.pagination&&_addClass(document.querySelector(".onepage-pagination li a[data-index='"+n+"']"),"active"),m.className=m.className.replace(/\bviewing-page-\d.*?\b/g,""),_addClass(m,"viewing-page-"+i),history.replaceState&&1==d.updateURL)){var s=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+n;history.pushState({},document.title,s)}_transformPage(l,d,100*(n-1)*-1,n)}else _addClass(document.querySelector(d.sectionContainer+"[data-index='1']"),"active"),_addClass(m,"viewing-page-1"),1==d.pagination&&_addClass(document.querySelector(".onepage-pagination li a[data-index='1']"),"active");if(_paginationHandler=function(){var e=this.dataset.index;moveTo(l,e)},1==d.pagination){var r=document.querySelectorAll(".onepage-pagination li a");for(e=0;e<r.length;e++)r[e].addEventListener("click",_paginationHandler)}return _mouseWheelHandler=function(e){e.preventDefault();var a=e.wheelDelta||-e.detail;_hasClass(m,"disabled-onepage-scroll")||_init_scroll(e,a)},document.addEventListener("mousewheel",_mouseWheelHandler),document.addEventListener("DOMMouseScroll",_mouseWheelHandler),0!=d.responsiveFallback&&(window.onresize=function(){_responsive()},_responsive()),_keydownHandler=function(e){var a=e.target.tagName.toLowerCase();if(!_hasClass(m,"disabled-onepage-scroll"))switch(e.which){case 38:"input"!=a&&"textarea"!=a&&moveUp(l);break;case 40:"input"!=a&&"textarea"!=a&&moveDown(l);break;default:return}return!1},1==d.keyboard&&(document.onkeydown=_keydownHandler),!1},_swipeEvents=function(e){function o(e){var a=e.touches;if(a&&a.length){e.preventDefault();var t=i-a[0].pageX,n=s-a[0].pageY;if(50<=t){e=new Event("swipeLeft");document.dispatchEvent(e)}if(t<=-50){e=new Event("swipeRight");document.dispatchEvent(e)}if(50<=n){e=new Event("swipeUp");document.dispatchEvent(e)}if(n<=-50){e=new Event("swipeDown");document.dispatchEvent(e)}(50<=Math.abs(t)||50<=Math.abs(n))&&document.removeEventListener("touchmove",o)}}var i,s;document.addEventListener("touchstart",function(e){var a=e.touches;a&&a.length&&(i=a[0].pageX,s=a[0].pageY,document.addEventListener("touchmove",o))})},_trim=function(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},_hasClass=function(e,a){return e.className?e.className.match(new RegExp("(\\s|^)"+a+"(\\s|$)")):e.className=a},_addClass=function(e,a){_hasClass(e,a)||(e.className+=" "+a),e.className=_trim(e.className)},_removeClass=function(e,a){if(_hasClass(e,a)){var t=new RegExp("(\\s|^)"+a+"(\\s|$)");e.className=e.className.replace(t," ")}e.className=_trim(e.className)},_whichTransitionEvent=function(){var e,a=document.createElement("fakeelement"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in t)if(void 0!==a.style[e])return t[e]},_scrollTo=function(e,a,t){if(!(t<0)){var n=(a-e.scrollTop)/t*10;setTimeout(function(){e.scrollTop=e.scrollTop+n,e.scrollTop!=a&&_scrollTo(e,a,t-10)},10)}},_transformPage=function(a,t,e,n,o){"function"==typeof t.beforeMove&&t.beforeMove(n,o);var i="-webkit-transform: translate3d(0, "+e+"%, 0); -webkit-transition: -webkit-transform "+t.animationTime+"ms "+t.easing+"; -moz-transform: translate3d(0, "+e+"%, 0); -moz-transition: -moz-transform "+t.animationTime+"ms "+t.easing+"; -ms-transform: translate3d(0, "+e+"%, 0); -ms-transition: -ms-transform "+t.animationTime+"ms "+t.easing+"; transform: translate3d(0, "+e+"%, 0); transition: transform "+t.animationTime+"ms "+t.easing+";";a.style.cssText=i;var s=_whichTransitionEvent();a.addEventListener(s,function e(){"function"==typeof t.afterMove&&t.afterMove(n,o),a.removeEventListener(s,e)},!1)},_responsive=function(){document.body.clientWidth<d.responsiveFallback?(_addClass(m,"disabled-onepage-scroll"),document.removeEventListener("mousewheel",_mouseWheelHandler),document.removeEventListener("DOMMouseScroll",_mouseWheelHandler),_swipeEvents(l),document.removeEventListener("swipeDown"),document.removeEventListener("swipeUp")):(_hasClass(m,"disabled-onepage-scroll")&&(_removeClass(m,"disabled-onepage-scroll"),_scrollTo(document.documentElement,0,2e3)),_swipeEvents(l),document.addEventListener("swipeDown",function(e){_hasClass(m,"disabled-onepage-scroll")||e.preventDefault(),moveUp(l)}),document.addEventListener("swipeUp",function(e){_hasClass(m,"disabled-onepage-scroll")||e.preventDefault(),moveDown(l)}),document.addEventListener("mousewheel",_mouseWheelHandler),document.addEventListener("DOMMouseScroll",_mouseWheelHandler))},_init_scroll=function(e,a){var t=a,n=(new Date).getTime();n-o<500+d.animationTime?e.preventDefault():(t<0?moveDown(l):moveUp(l),o=n)},this.moveDown=function(e){"string"==typeof e&&(e=document.querySelector(e));var a=document.querySelector(d.sectionContainer+".active").dataset.index,t=document.querySelector(d.sectionContainer+"[data-index='"+a+"']"),n=document.querySelector(d.sectionContainer+"[data-index='"+(parseInt(a)+1)+"']");if(n)pos=100*a*-1;else{if(1!=d.loop)return;pos=0,n=document.querySelector(d.sectionContainer+"[data-index='1']")}var o=n.dataset.index;if(_removeClass(t,"active"),_addClass(n,"active"),1==d.pagination&&(_removeClass(document.querySelector(".onepage-pagination li a[data-index='"+a+"']"),"active"),_addClass(document.querySelector(".onepage-pagination li a[data-index='"+o+"']"),"active")),m.className=m.className.replace(/\bviewing-page-\d.*?\b/g,""),_addClass(m,"viewing-page-"+o),history.replaceState&&1==d.updateURL){var i=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(parseInt(a)+1);history.pushState({},document.title,i)}_transformPage(e,d,pos,o,n)},this.moveUp=function(e){"string"==typeof e&&(e=document.querySelector(e));var a=document.querySelector(d.sectionContainer+".active").dataset.index,t=document.querySelector(d.sectionContainer+"[data-index='"+a+"']"),n=document.querySelector(d.sectionContainer+"[data-index='"+(parseInt(a)-1)+"']");if(n)pos=100*(n.dataset.index-1)*-1;else{if(1!=d.loop)return;pos=100*(s-1)*-1,n=document.querySelector(d.sectionContainer+"[data-index='"+s+"']")}var o=n.dataset.index;if(_removeClass(t,"active"),_addClass(n,"active"),1==d.pagination&&(_removeClass(document.querySelector(".onepage-pagination li a[data-index='"+a+"']"),"active"),_addClass(document.querySelector(".onepage-pagination li a[data-index='"+o+"']"),"active")),m.className=m.className.replace(/\bviewing-page-\d.*?\b/g,""),_addClass(m,"viewing-page-"+o),history.replaceState&&1==d.updateURL){var i=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(parseInt(a)-1);history.pushState({},document.title,i)}_transformPage(e,d,pos,o,n)},this.moveTo=function(e,a){"string"==typeof e&&(e=document.querySelector(e));var t=document.querySelector(d.sectionContainer+".active"),n=document.querySelector(d.sectionContainer+"[data-index='"+a+"']");if(n){var o=n.dataset.index;if(_removeClass(t,"active"),_addClass(n,"active"),_removeClass(document.querySelector(".onepage-pagination li a.active"),"active"),_addClass(document.querySelector(".onepage-pagination li a[data-index='"+a+"']"),"active"),m.className=m.className.replace(/\bviewing-page-\d.*?\b/g,""),_addClass(m,"viewing-page-"+o),pos=100*(a-1)*-1,history.replaceState&&1==d.updateURL){var i=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(parseInt(a)-1);history.pushState({},document.title,i)}_transformPage(e,d,pos,a,n)}},this.init()}Object.extend=function(e){if(null==e)return e;for(var a=1;a<arguments.length;a++){var t=arguments[a];if(null!=t)for(var n in t){var o=t.__lookupGetter__(n),i=t.__lookupSetter__(n);o||i?(o&&e.__defineGetter__(n,o),i&&e.__defineSetter__(n,i)):e[n]=t[n]}}return e};