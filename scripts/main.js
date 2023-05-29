/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/categories/categories.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/categories/categories.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://gulp-start/./src/blocks/modules/categories/categories.js?");

/***/ }),

/***/ "./src/blocks/modules/contacts/contacts.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/contacts/contacts.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://gulp-start/./src/blocks/modules/contacts/contacts.js?");

/***/ }),

/***/ "./src/blocks/modules/description/description.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/description/description.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://gulp-start/./src/blocks/modules/description/description.js?");

/***/ }),

/***/ "./src/blocks/modules/example/example.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/example/example.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst rangeBar = document.querySelector('.results__range');\nconst beforeImg = document.querySelector('.slider__before');\nconst afterImg = document.querySelector('.slider__after');\nconst clientWidth = document.documentElement.clientWidth;\nrangeBar.addEventListener('input', () => {\n  afterImg.style.width = `${+rangeBar.value}%`;\n  beforeImg.style.width = `${100 - rangeBar.value}%`;\n});\n\n//# sourceURL=webpack://gulp-start/./src/blocks/modules/example/example.js?");

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconsole.log('hello Footer');\n\n//# sourceURL=webpack://gulp-start/./src/blocks/modules/footer/footer.js?");

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/*BURGER menu in header*/\nconst iconHeaderMenu = document.querySelector('.icon-menu');\nconst menuHeaderBody = document.querySelector('.navigation__menu');\nconst body = document.querySelector('body');\nconst section = document.querySelectorAll('section');\niconHeaderMenu.addEventListener('click', openHeaderMenuBurger);\n\n// function open burger menu\nfunction openHeaderMenuBurger() {\n  iconHeaderMenu.classList.toggle('active');\n  menuHeaderBody.classList.toggle('active');\n  body.classList.toggle('lock');\n  section.forEach(item => item.classList.toggle('hidden'));\n}\n\n//# sourceURL=webpack://gulp-start/./src/blocks/modules/header/header.js?");

/***/ }),

/***/ "./src/blocks/modules/hero/hero.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/hero/hero.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://gulp-start/./src/blocks/modules/hero/hero.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modules.js */ \"./src/scripts/modules/modules.js\");\n/* harmony import */ var _modules_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/components.js */ \"./src/scripts/modules/components.js\");\n\n\n\n//# sourceURL=webpack://gulp-start/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/modules/components.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/components.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://gulp-start/./src/scripts/modules/components.js?");

/***/ }),

/***/ "./src/scripts/modules/modules.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/modules.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header.js */ \"./src/blocks/modules/header/header.js\");\n/* harmony import */ var _modules_footer_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer.js */ \"./src/blocks/modules/footer/footer.js\");\n/* harmony import */ var _modules_hero_hero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/hero/hero.js */ \"./src/blocks/modules/hero/hero.js\");\n/* harmony import */ var _modules_categories_categories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/categories/categories.js */ \"./src/blocks/modules/categories/categories.js\");\n/* harmony import */ var _modules_description_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/description/description.js */ \"./src/blocks/modules/description/description.js\");\n/* harmony import */ var _modules_example_example_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/example/example.js */ \"./src/blocks/modules/example/example.js\");\n/* harmony import */ var _modules_contacts_contacts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/contacts/contacts.js */ \"./src/blocks/modules/contacts/contacts.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://gulp-start/./src/scripts/modules/modules.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;