/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index-page/index.js":
/*!************************************!*\
  !*** ./src/js/index-page/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_observers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observers/index */ "./src/js/utils/observers/index.js");
/* harmony import */ var _js_level_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-level-scale */ "./src/js/index-page/js-level-scale.js");
/* harmony import */ var _js_level_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-level-counter */ "./src/js/index-page/js-level-counter.js");
/* harmony import */ var _info_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-inputs */ "./src/js/index-page/info-inputs.js");
/* harmony import */ var _info_stamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-stamp */ "./src/js/index-page/info-stamp.js");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills */ "./src/js/index-page/skills.js");






$(document).ready(function () {
  var $window = $(window);
  var resizeObserver = new _utils_observers_index__WEBPACK_IMPORTED_MODULE_0__["ResizeObserver"]($window);
  var scrollRevealObserver = new _utils_observers_index__WEBPACK_IMPORTED_MODULE_0__["ScrollRevealObserver"]($window);
  Object(_info_inputs__WEBPACK_IMPORTED_MODULE_3__["default"])($window, resizeObserver, scrollRevealObserver);
  Object(_info_stamp__WEBPACK_IMPORTED_MODULE_4__["default"])($window, resizeObserver, scrollRevealObserver);
  Object(_js_level_scale__WEBPACK_IMPORTED_MODULE_1__["default"])($window, resizeObserver, scrollRevealObserver);
  Object(_js_level_counter__WEBPACK_IMPORTED_MODULE_2__["default"])($window, resizeObserver, scrollRevealObserver);
  Object(_skills__WEBPACK_IMPORTED_MODULE_5__["default"])($window, resizeObserver, scrollRevealObserver);
});

/***/ }),

/***/ "./src/js/index-page/info-inputs.js":
/*!******************************************!*\
  !*** ./src/js/index-page/info-inputs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_0__);
 // параметры скрипта

var offsetReveal = 50; // отступ от счетчика в скроле при котором запускается анимация

var typeSpeed = 25; // скорость автонабора в инпутах

var name = 'Тимофей';
var dob = '30.01.1995';
var city = 'Пятигорск';
var contacts = '+7 (989) 748 93 17';
/* harmony default export */ __webpack_exports__["default"] = (function ($window, resizeObserver, scrollRevealObserver) {
  var $infoInputs = $('#infoInputs');
  var startAnimation = false; // тут eslint выключаю что бы сохранить последовательность элементов так же как в верстке
  // так легче воспринимать код

  var nameOptions = {
    strings: [name],
    typeSpeed: typeSpeed,
    onComplete: function onComplete() {
      return new typed_js__WEBPACK_IMPORTED_MODULE_0___default.a('#infoDob', dobOptions);
    } // eslint-disable-line

  };
  var dobOptions = {
    strings: [dob],
    typeSpeed: typeSpeed,
    onComplete: function onComplete() {
      return new typed_js__WEBPACK_IMPORTED_MODULE_0___default.a('#infoCity', cityOptions);
    } // eslint-disable-line

  };
  var cityOptions = {
    strings: [city],
    typeSpeed: typeSpeed,
    onComplete: function onComplete() {
      return new typed_js__WEBPACK_IMPORTED_MODULE_0___default.a('#infoContacts', contactsOptions);
    } // eslint-disable-line

  };
  var contactsOptions = {
    strings: [contacts],
    typeSpeed: typeSpeed
  };

  var startAutoFill = function startAutoFill() {
    if (!startAnimation) {
      startAnimation = true; // по документации нужно создавать экзепляр но eslint ругается (как правильно поступить не знаю)

      var typedName = new typed_js__WEBPACK_IMPORTED_MODULE_0___default.a('#infoName', nameOptions); // eslint-disable-line
    }
  };

  var checkOffset = scrollRevealObserver.createCheckOffset(offsetReveal, $infoInputs, startAutoFill);
  resizeObserver.subscribe(checkOffset);
  scrollRevealObserver.subscribe(offsetReveal, $infoInputs, startAutoFill);
  checkOffset();
});

/***/ }),

/***/ "./src/js/index-page/info-stamp.js":
/*!*****************************************!*\
  !*** ./src/js/index-page/info-stamp.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/TweenMax */ "./node_modules/gsap/TweenMax.js");
 // параметры скрипта

var offsetReveal = 50; // отступ от печати в скроле при котором запускается анимация

/* harmony default export */ __webpack_exports__["default"] = (function ($window, resizeObserver, scrollRevealObserver) {
  var $stamp = $('#infoStamp');

  var stampAnimation = function stampAnimation() {
    gsap_TweenMax__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to($stamp, 0.5, {
      css: {
        opacity: 1,
        scale: '1'
      },
      ease: gsap_TweenMax__WEBPACK_IMPORTED_MODULE_0__["Bounce"].easeOut,
      delay: 2
    });
  };

  var checkOffset = scrollRevealObserver.createCheckOffset(offsetReveal, $stamp, stampAnimation);
  resizeObserver.subscribe(checkOffset);
  scrollRevealObserver.subscribe(offsetReveal, $stamp, stampAnimation);
  checkOffset();
});

/***/ }),

/***/ "./src/js/index-page/js-level-counter.js":
/*!***********************************************!*\
  !*** ./src/js/index-page/js-level-counter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom-utils */ "./src/js/utils/dom-utils.js");
/* harmony import */ var _js_level_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-level-scale */ "./src/js/index-page/js-level-scale.js");

 // параметры скрипта

var minValue = 0; // со скольки начинается рассчет

var maxValue = 999; // максимальное значение счетчика

var endValue = 650; // если указано - конечное значение после анимации стрелки

/* harmony default export */ __webpack_exports__["default"] = (function ($window, resizeObserver, scrollRevealObserver) {
  var $counter = $('#jsLevelCount');
  var $arrow = $('#jsScaleArrow');
  var timerIdCounter;
  var timerIdStop;
  var isStopCounter = false;

  var stopCounter = function stopCounter() {
    isStopCounter = true;

    if (typeof endValue !== 'undefined') {
      $counter.text(endValue);
    }
  };

  var counter = function counter(value) {
    if (!timerIdStop) {
      timerIdStop = setTimeout(stopCounter, _js_level_scale__WEBPACK_IMPORTED_MODULE_1__["firstAnimateDuration"]);
    }

    clearTimeout(timerIdCounter);

    if (!isStopCounter) {
      $counter.text(Math.round(Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_0__["getRotationDegrees"])($arrow) * (maxValue / 180)));
      setTimeout(function () {
        return counter(value + 1);
      }, 100);
    }
  };

  var startCounter = function startCounter() {
    return counter(minValue);
  };

  var checkOffset = scrollRevealObserver.createCheckOffset(_js_level_scale__WEBPACK_IMPORTED_MODULE_1__["offsetReveal"], $arrow, startCounter);
  resizeObserver.subscribe(checkOffset);
  scrollRevealObserver.subscribe(_js_level_scale__WEBPACK_IMPORTED_MODULE_1__["offsetReveal"], $arrow, startCounter);
  setTimeout(checkOffset, _js_level_scale__WEBPACK_IMPORTED_MODULE_1__["delay"]);
});

/***/ }),

/***/ "./src/js/index-page/js-level-scale.js":
/*!*********************************************!*\
  !*** ./src/js/index-page/js-level-scale.js ***!
  \*********************************************/
/*! exports provided: offsetReveal, firstAnimateDuration, delay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetReveal", function() { return offsetReveal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstAnimateDuration", function() { return firstAnimateDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
// параметры скрипта
var offsetReveal = 50; // отступ от стрелки в скроле при котором запускается анимация

var firstAnimateDuration = 3300; // кол-во ms при первой анимации стрелки

var delay = 4000; // задержка если элемент с самого начала в пределах видимости

var firstArrowGoal = 25; // куда полетит стрелка в первый раз (мин = -90 макс = 90)

/* harmony default export */ __webpack_exports__["default"] = (function ($window, resizeObserver, scrollRevealObserver) {
  var timerIdFirstAnimate;
  var startAnimation = false;
  var $arrow = $('#jsScaleArrow');
  $arrow.css({
    transitionDuration: "".concat(firstAnimateDuration, "ms")
  });

  var animation = function animation() {
    if (!startAnimation) {
      startAnimation = true;
      $arrow.css({
        transform: "rotateZ(".concat(firstArrowGoal, "deg)")
      });
      clearTimeout(timerIdFirstAnimate);
      timerIdFirstAnimate = setTimeout(function () {
        $arrow.css({
          animationName: 'wobble'
        });
      }, firstAnimateDuration);
    }
  };

  var checkOffset = scrollRevealObserver.createCheckOffset(offsetReveal, $arrow, animation);
  resizeObserver.subscribe(checkOffset);
  scrollRevealObserver.subscribe(offsetReveal, $arrow, animation);
  setTimeout(checkOffset, delay);
});

/***/ }),

/***/ "./src/js/index-page/skills.js":
/*!*************************************!*\
  !*** ./src/js/index-page/skills.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// параметры скрипта
var checkboxes = [// чекбоксы которые будут выбраны автоматически
'html5', 'css3', 'БЭМ', 'SASS', 'LESS', 'gulp', 'vanillaJS', 'react', 'jquery', 'git', 'foundation', 'bootstrap'];
var delaySelect = 150; // интервал между автовыбором чекбоксов

var delay = 2300; // задержка если элемент с самого начала в пределах видимости

var offsetReveal = 100; // отступ от блока skills в скроле при котором запускается анимация

/* harmony default export */ __webpack_exports__["default"] = (function ($window, resizeObserver, scrollRevealObserver) {
  var $skillsBlock = $('#skills');
  var isStartAutoSelect = false;

  var startAutoSelect = function startAutoSelect() {
    if (!isStartAutoSelect) {
      isStartAutoSelect = true;
      checkboxes.forEach(function (checkboxId, i) {
        setTimeout(function () {
          return $("#".concat(checkboxId)).click();
        }, i * delaySelect);
      });
    }
  };

  var checkOffset = scrollRevealObserver.createCheckOffset(offsetReveal, $skillsBlock, startAutoSelect);
  resizeObserver.subscribe(checkOffset);
  scrollRevealObserver.subscribe(offsetReveal, $skillsBlock, startAutoSelect);
  setTimeout(checkOffset, delay);
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _index_page_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-page/index */ "./src/js/index-page/index.js");



/***/ }),

/***/ "./src/js/utils/dom-utils.js":
/*!***********************************!*\
  !*** ./src/js/utils/dom-utils.js ***!
  \***********************************/
/*! exports provided: getRotationDegrees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotationDegrees", function() { return getRotationDegrees; });
function getRotationDegrees(obj) {
  var matrix = obj.css('-webkit-transform') || obj.css('-moz-transform') || obj.css('-ms-transform') || obj.css('-o-transform') || obj.css('transform');
  var angle;

  if (matrix !== 'none') {
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var a = +values[0];
    var b = +values[1];
    angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  } else {
    angle = 0;
  }

  return Math.round(angle + 90);
}

/***/ }),

/***/ "./src/js/utils/observers/base-observer.js":
/*!*************************************************!*\
  !*** ./src/js/utils/observers/base-observer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function BaseObserver() {
  this.listeners = [];
}

function subscribe(handler) {
  if (typeof handler === 'function') {
    this.listeners.push(handler);
  }
}

function unsubscribe(handler) {
  this.listeners = this.listeners.filter(function (listener) {
    return handler !== listener;
  });
}

function callHandlers(event) {
  this.listeners.forEach(function (listener) {
    return listener(event);
  });
}

function forceCallHandler(handler) {
  var method = this.listeners.find(function (listener) {
    return listener === handler;
  });

  if (typeof method === 'function') {
    method();
  }
}

BaseObserver.prototype.subscribe = subscribe;
BaseObserver.prototype.unsubscribe = unsubscribe;
BaseObserver.prototype.callHandlers = callHandlers;
BaseObserver.prototype.forceCallHandler = forceCallHandler;
/* harmony default export */ __webpack_exports__["default"] = (BaseObserver);

/***/ }),

/***/ "./src/js/utils/observers/index.js":
/*!*****************************************!*\
  !*** ./src/js/utils/observers/index.js ***!
  \*****************************************/
/*! exports provided: ResizeObserver, ScrollRevealObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resize_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize-observer */ "./src/js/utils/observers/resize-observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizeObserver", function() { return _resize_observer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _scroll_reveal_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-reveal-observer */ "./src/js/utils/observers/scroll-reveal-observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollRevealObserver", function() { return _scroll_reveal_observer__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/js/utils/observers/resize-observer.js":
/*!***************************************************!*\
  !*** ./src/js/utils/observers/resize-observer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-observer */ "./src/js/utils/observers/base-observer.js");


function ResizeObserver($window) {
  var _this = this;

  _base_observer__WEBPACK_IMPORTED_MODULE_0__["default"].apply(this);
  var timerIdScroll;

  var onResize = function onResize(e) {
    clearTimeout(timerIdScroll);
    timerIdScroll = setTimeout(function () {
      _this.callHandlers(e);
    }, 300);
  };

  $window.resize(onResize);
}

ResizeObserver.prototype = Object.create(_base_observer__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
ResizeObserver.constructor = ResizeObserver;
/* harmony default export */ __webpack_exports__["default"] = (ResizeObserver);

/***/ }),

/***/ "./src/js/utils/observers/scroll-reveal-observer.js":
/*!**********************************************************!*\
  !*** ./src/js/utils/observers/scroll-reveal-observer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-observer */ "./src/js/utils/observers/base-observer.js");


function ScrollRevealObserver($window) {
  _base_observer__WEBPACK_IMPORTED_MODULE_0__["default"].apply(this);
  this.$window = $window;
  $window.scroll(this.callHandlers.bind(this));
}

ScrollRevealObserver.prototype = Object.create(_base_observer__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
ScrollRevealObserver.constructor = ScrollRevealObserver;
/**
 * Создает функцию для проверки достигнул ли элемент при скроле.
 * @param offset Расстояние до элемента перед срабатыванием callback.
 * @param $element Элемент за которым нужно следить.
 * @param callback Срабатывает при достижении скрола.
 * @return function Проверяет достигнут ли объект при текущем скроле и вызывает callback.
 */

function createCheckOffset(offset, $element, callback) {
  function check() {
    var triggerOffset = this.$window.scrollTop() + this.$window.height() - offset;
    var elementOffset = $element.offset().top;

    if (elementOffset < triggerOffset) {
      callback();
    }
  }

  return check.bind(this);
}
/**
 * Добавляет подписку на достижение элемента при скроле.
 * @param offset Расстояние до элемента перед срабатыванием handler.
 * @param $element Элемент за которым нужно следить.
 * @param handler Срабатывает при достижении скрола.
 */


function subscribe(offset, $element, handler) {
  if (typeof handler === 'function') {
    this.listeners.push(this.createCheckOffset(offset, $element, handler));
  }
}

ScrollRevealObserver.prototype.createCheckOffset = createCheckOffset;
ScrollRevealObserver.prototype.subscribe = subscribe;
/* harmony default export */ __webpack_exports__["default"] = (ScrollRevealObserver);

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map