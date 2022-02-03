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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://leaderboard-app/./src/style.css?");

/***/ }),

/***/ "./src/js/displayData.js":
/*!*******************************!*\
  !*** ./src/js/displayData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayData = (player, display) => {\n  const apiData = player.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));\n  display.innerHTML = '';\n  apiData.forEach((play) => {\n    display.innerHTML += `<p class='rank'>${play.user} : ${play.score} </p>`;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayData);\n\n//# sourceURL=webpack://leaderboard-app/./src/js/displayData.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _interact_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interact-api.js */ \"./src/js/interact-api.js\");\n\n\n\n\nconst leaderboard = document.querySelector('.score-list');\nconst refreshBtn = document.getElementById('refresh');\nconst form = document.querySelector('form');\nconst names = document.getElementById('name');\nconst scores = document.getElementById('score');\nlet players;\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_interact_api_js__WEBPACK_IMPORTED_MODULE_1__.refreshData)(players, leaderboard);\n});\n\nrefreshBtn.addEventListener('click', () => {\n  (0,_interact_api_js__WEBPACK_IMPORTED_MODULE_1__.refreshData)(players, leaderboard);\n});\n\nform.addEventListener('submit', async (e) => {\n  const obj = {\n    user: names.value,\n    score: scores.value,\n  };\n  e.preventDefault();\n  await (0,_interact_api_js__WEBPACK_IMPORTED_MODULE_1__.addPlayer)(obj);\n  form.reset();\n});\n\n//# sourceURL=webpack://leaderboard-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/interact-api.js":
/*!********************************!*\
  !*** ./src/js/interact-api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGame\": () => (/* binding */ createGame),\n/* harmony export */   \"refreshData\": () => (/* binding */ refreshData),\n/* harmony export */   \"addPlayer\": () => (/* binding */ addPlayer)\n/* harmony export */ });\n/* harmony import */ var _displayData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayData.js */ \"./src/js/displayData.js\");\n\n\nconst url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/A9GgGr2ZTgKdQScdJRGi/scores/';\n\nconst createGame = () => {\n  const game = {\n    name: 'NBA Live',\n  };\n  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {\n    method: 'POST',\n    body: JSON.stringify(game),\n    headers: {\n      'Content-type': 'application/json; charset= UTF-8',\n    },\n  });\n};\n\nconst refreshData = (players, leaderboard) => {\n  fetch(url)\n    .then((response) => response.json())\n    .then((json) => {\n      players = json.result;\n      (0,_displayData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(players, leaderboard);\n    });\n};\n\nconst addPlayer = async (data) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-type': 'application/json',\n    },\n  });\n\n  const { result } = await response.json();\n  return result;\n};\n\n//# sourceURL=webpack://leaderboard-app/./src/js/interact-api.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;