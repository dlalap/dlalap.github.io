(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"950E":function(e,t,n){n("eM6i"),n("KKXr"),n("XfO3"),n("HEwt"),n("a1Th"),n("h7Nl"),n("LK8F"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Oyvg"),n("2Spj"),n("hHhE"),n("rE2o"),n("ioFf"),n("HAE/"),"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,function(e,t,n){(function(t){for(var r=n(11),o="undefined"==typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!s&&c<a.length;c++)s=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!s||!u){var l=0,p=0,f=[];s=function(e){if(0===f.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return f.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}}).call(this,n(4))},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(1),o=n.n(r),a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u="TYPE_CHARACTER",c="REMOVE_CHARACTER",l="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",d="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",y="CHANGE_CURSOR",E="PASTE_STRING",g="HTML_TAG";function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){function e(t,n){var w=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),A(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),A(this,"options",{strings:null,cursor:"|",delay:"natural",deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null}),A(this,"setupWrapperElement",(function(){w.state.elements.wrapper.className=w.options.wrapperClassName,w.state.elements.cursor.className=w.options.cursorClassName,w.state.elements.cursor.innerHTML=w.options.cursor,w.state.elements.container.innerHTML="",w.state.elements.container.appendChild(w.state.elements.wrapper),w.state.elements.container.appendChild(w.state.elements.cursor)})),A(this,"start",(function(){return w.state.eventLoopPaused=!1,w.runEventLoop(),w})),A(this,"pause",(function(){return w.state.eventLoopPaused=!0,w})),A(this,"stop",(function(){return w.state.eventLoop&&(Object(r.cancel)(w.state.eventLoop),w.state.eventLoop=null),w})),A(this,"pauseFor",(function(e){return w.addEventToQueue(f,{ms:e}),w})),A(this,"typeOutAllStrings",(function(){return"string"==typeof w.options.strings?(w.typeString(w.options.strings).pauseFor(1500),w):(w.options.strings.forEach((function(e){w.typeString(e).pauseFor(1500).deleteAll(w.options.deleteSpeed)})),w)})),A(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(e))return w.typeOutHTMLString(e,t);if(e){var n=w.options||{},r=n.stringSplitter,o="function"==typeof r?r(e):e.split("");w.typeCharacters(o,t)}return w})),A(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(e)?w.typeOutHTMLString(e,t,!0):(e&&w.addEventToQueue(E,{character:e,node:t}),w)})),A(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",w.addEventToQueue(v,{node:a,parentNode:t}),n?w.pasteString(s,a):w.typeString(s,a)):a.textContent&&(n?w.pasteString(a.textContent,t):w.typeString(a.textContent,t))}return w})),A(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return w.addEventToQueue(l,{speed:e}),w})),A(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return w.addEventToQueue(h,{speed:e}),w})),A(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return w.addEventToQueue(m,{delay:e}),w})),A(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return w.addEventToQueue(y,{cursor:e}),w})),A(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)w.addEventToQueue(c);return w})),A(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return w.addEventToQueue(d,{cb:e,thisArg:t}),w})),A(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){w.addEventToQueue(u,{character:e,node:t})})),w})),A(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){w.addEventToQueue(c)})),w})),A(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.addEventToStateProperty(e,t,n,"eventQueue")})),A(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=w.options.loop;return r?w.addEventToStateProperty(e,t,n,"reverseCalledEvents"):w})),A(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return w.state[r]=n?[o].concat(T(w.state[r])):[].concat(T(w.state[r]),[o]),w})),A(this,"runEventLoop",(function(){w.state.lastFrameTime||(w.state.lastFrameTime=Date.now());var e=Date.now(),t=e-w.state.lastFrameTime;if(!w.state.eventQueue.length){if(!w.options.loop)return;w.state.eventQueue=T(w.state.calledEvents),w.state.calledEvents=[],w.options=b({},w.state.initialOptions)}if(w.state.eventLoop=o()(w.runEventLoop),!w.state.eventLoopPaused){if(w.state.pauseUntil){if(e<w.state.pauseUntil)return;w.state.pauseUntil=null}var n,r=T(w.state.eventQueue),a=r.shift();if(!(t<=(n=a.eventName===p||a.eventName===c?"natural"===w.options.deleteSpeed?s(40,80):w.options.deleteSpeed:"natural"===w.options.delay?s(120,160):w.options.delay))){var i=a.eventName,S=a.eventArgs;switch(w.logInDevMode({currentEvent:a,state:w.state,delay:n}),i){case E:case u:var A=S.character,O=S.node,L=document.createTextNode(A);O?O.appendChild(L):w.state.elements.wrapper.appendChild(L),w.state.visibleNodes=[].concat(T(w.state.visibleNodes),[{type:"TEXT_NODE",node:L}]);break;case c:r.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case f:var N=a.eventArgs.ms;w.state.pauseUntil=Date.now()+parseInt(N);break;case d:var _=a.eventArgs,C=_.cb,M=_.thisArg;C.call(M,{elements:w.state.elements});break;case v:var j=a.eventArgs,P=j.node,k=j.parentNode;k?k.appendChild(P):w.state.elements.wrapper.appendChild(P),w.state.visibleNodes=[].concat(T(w.state.visibleNodes),[{type:g,node:P,parentNode:k||w.state.elements.wrapper}]);break;case l:var D=w.state.visibleNodes,x=S.speed,F=[];x&&F.push({eventName:h,eventArgs:{speed:x,temp:!0}});for(var R=0,H=D.length;R<H;R++)F.push({eventName:p,eventArgs:{removingCharacterNode:!1}});x&&F.push({eventName:h,eventArgs:{speed:w.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,F);break;case p:var Q=a.eventArgs.removingCharacterNode;if(w.state.visibleNodes.length){var I=w.state.visibleNodes.pop(),U=I.type,W=I.node;W.parentNode.removeChild(W),U===g&&Q&&r.unshift({eventName:p,eventArgs:{}})}break;case h:w.options.deleteSpeed=a.eventArgs.speed;break;case m:w.options.delay=a.eventArgs.delay;break;case y:w.options.cursor=a.eventArgs.cursor,w.state.elements.cursor.innerHTML=a.eventArgs.cursor}w.options.loop&&(a.eventName===p||a.eventArgs&&a.eventArgs.temp||(w.state.calledEvents=[].concat(T(w.state.calledEvents),[a]))),w.state.eventQueue=r,w.state.lastFrameTime=e}}})),!t)throw new Error("No container element was provided");if("string"==typeof t){var S=document.querySelector(t);if(!S)throw new Error("Could not find container element");this.state.elements.container=S}else this.state.elements.container=t;n&&(this.options=b({},this.options,{},n)),this.state.initialOptions=b({},this.options),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.setupWrapperElement(),this.addEventToQueue(y,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)}(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&S(t.prototype,n),e}()},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,,,function(e,t,n){(function(t){(function(){var n,r,o,a,i,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),i=a-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(12))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,c=[],l=!1,p=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):p=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++p<t;)u&&u[p].run();p=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||l||s(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]).default},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("Bl7J"),s=n("vrFN");n("950E");t.default=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],u=Object(r.useState)(!1),c=u[0],l=u[1],p=Object(r.useState)(!1),f=p[0],d=p[1];return o.a.createElement(i.a,null,o.a.createElement(s.a,{title:"Home"}),o.a.createElement("div",{className:"mainPageLayout"},o.a.createElement("h1",null,"Dean Lalap"),o.a.createElement("h3",{style:{color:"#999"}},"Software Engineer and Musician"),o.a.createElement("div",{className:"mainPageLinks"},o.a.createElement("a",{href:"https://www.ohnoibrokeit.com/",onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)}},"Blog"),o.a.createElement("a",{href:"https://www.github.com/dlalap/",onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},"GitHub"),o.a.createElement(a.Link,{to:"/projects/",onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)}},"Projects")),t?o.a.createElement("h4",null,"ohnoibrokeit"):c?o.a.createElement("h4",null,"github.com/dlalap"):f?o.a.createElement("h4",null,"masterpieces lol"):o.a.createElement("h4",{className:"invisibleText"},".")))}},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},jm62:function(e,t,n){var r=n("XKFU"),o=n("mQtv"),a=n("aCFj"),i=n("EemH"),s=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),u=i.f,c=o(r),l={},p=0;c.length>p;)void 0!==(n=u(r,t=c[p++]))&&s(l,t,n);return l}})},mQtv:function(e,t,n){var r=n("kJMx"),o=n("JiEa"),a=n("y3w9"),i=n("dyZX").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(a(e)),n=o.f;return n?t.concat(n(e)):t}}}]);
//# sourceMappingURL=component---src-pages-index-js-dec5432d4b94b24ae325.js.map