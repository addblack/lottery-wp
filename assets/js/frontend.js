/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/front/front-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/front/components/modal.js":
/*!***************************************!*\
  !*** ./src/front/components/modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modal = document.getElementById(\"myModal\");\nvar close = document.getElementsByClassName(\"close\")[0];\n\nclose.onclick = function () {\n  modal.style.display = \"none\";\n};\n\nwindow.onclick = function (event) {\n  if (event.target == modal) {\n    modal.style.display = \"none\";\n  }\n}; // module.exports = modal;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack:///./src/front/components/modal.js?");

/***/ }),

/***/ "./src/front/components/wheel.js":
/*!***************************************!*\
  !*** ./src/front/components/wheel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/front/components/modal.js\");\n// const modal = require('./modal');\n\nvar res = document.querySelector(\"#result\");\nvar discountInput = document.querySelector(\"#discount-input\");\nvar discountWord = \"miblfriday\";\nvar wheel = new Wheel({\n  el: document.getElementById('wheel'),\n  radius: 300,\n  theme: 'dark',\n  buttonText: 'WIN',\n  fontSize: 25,\n  buttonWidth: 60,\n  data: [{\n    text: '15%',\n    chance: 20\n  }, {\n    text: '20%',\n    chance: 2\n  }, {\n    text: '25%',\n    chance: 1\n  }, {\n    text: '30%',\n    chance: 2\n  }, {\n    text: '35%',\n    chance: 3\n  }, {\n    text: '40%',\n    chance: 90\n  }, {\n    text: '45%',\n    chance: 100\n  }, {\n    text: '50%',\n    chance: 100\n  }],\n  color: {\n    border: '#00FA9A',\n    prize: '#30a984',\n    button: 'darkorange',\n    line: '#00FA9A',\n    prizeFont: 'white',\n    buttonFont: 'white'\n  },\n  onSuccess: function onSuccess(data) {\n    _modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].style.display = \"block\";\n    res.innerHTML = data.text;\n    var discountCode = \"\".concat(discountWord).concat(data.text);\n    discountInput.setAttribute('value', discountCode);\n  },\n  onFail: function onFail() {\n    var newText = document.createElement(\"div\");\n    newText.classList.add('red-big-text');\n    newText.innerHTML = \"<span>You’ve already won your discount</span>\";\n    document.querySelector(\".entry-content\").appendChild(newText);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wheel);\n\n//# sourceURL=webpack:///./src/front/components/wheel.js?");

/***/ }),

/***/ "./src/front/front-index.js":
/*!**********************************!*\
  !*** ./src/front/front-index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Frontend entry point.\n *\n * src/front/front-index.js\n */\nvar wheel = __webpack_require__(/*! ./components/wheel */ \"./src/front/components/wheel.js\"); // front.log('Here is a message for the front!');\n\n//# sourceURL=webpack:///./src/front/front-index.js?");

/***/ })

/******/ });