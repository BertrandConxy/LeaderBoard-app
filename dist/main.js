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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n const displayData = (player, display) => {\r\n    const apiData = player.sort((a,b) => parseFloat(b.score) - parseFloat(a.score));\r\n    apiData.forEach((play) => {\r\n        const leaderboard = document.querySelector('.score-list');\r\n        display.innerHTML = `<p class='rank'>${play.user} : ${play.score} </p>`;\r\n        leaderboard.appendChild(display);\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayData);\n\n//# sourceURL=webpack://leaderboard-app/./src/js/displayData.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _interact_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interact-api */ \"./src/js/interact-api.js\");\n\r\n\r\n\r\nconst leaderboard = document.querySelector('.score-list');\r\nconst refreshBtn =document.getElementById('refresh');\r\nconst form = document.querySelector('form');\r\nconst name = document.getElementById('name');\r\nconst score = document.getElementById('score');\r\nlet players;\r\n\r\nwindow.addEventListener('DOMContentLoaded', ()=>{\r\n    (0,_interact_api__WEBPACK_IMPORTED_MODULE_1__.refreshData)(players,leaderboard);\r\n} );\r\n\r\nrefreshBtn.addEventListener('click', ()=>{\r\n    (0,_interact_api__WEBPACK_IMPORTED_MODULE_1__.refreshData)(players, leaderboard);\r\n});\r\n\r\nform.addEventListener('submit', async (e) =>{\r\n    e.preventDefault();\r\n    await (0,_interact_api__WEBPACK_IMPORTED_MODULE_1__.addPlayer)(name,score);\r\n    refreshBtn(players, leaderboard);\r\n    form.reset();\r\n});\n\n//# sourceURL=webpack://leaderboard-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/interact-api.js":
/*!********************************!*\
  !*** ./src/js/interact-api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGame\": () => (/* binding */ createGame),\n/* harmony export */   \"refreshData\": () => (/* binding */ refreshData),\n/* harmony export */   \"addPlayer\": () => (/* binding */ addPlayer)\n/* harmony export */ });\n/* harmony import */ var _displayData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayData */ \"./src/js/displayData.js\");\n\r\n\r\n// game code is A9GgGr2ZTgKdQScdJRGi\r\nconst createGame = () => {\r\n    const game = {\r\n        name: 'NBA Live',\r\n    };\r\n    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {\r\n        method: 'POST',\r\n        body: JSON.stringify(game),\r\n        headers: {\r\n            'Content-type': 'application/json; charset= UTF-8', \r\n        },\r\n    })\r\n    .then((response)=> response.json())\r\n};\r\n\r\nconst refreshData = (players, leaderboard) => {\r\n\r\n    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/A9GgGr2ZTgKdQScdJRGi/scores')\r\n    .then((response)=> response.json())\r\n    .then((data)=> {\r\n        players = data.result;\r\n        (0,_displayData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(players, leaderboard)\r\n    })\r\n}\r\n\r\nconst addPlayer = async(name,score) =>{\r\n    const obj = {\r\n        user: name.value,\r\n        score: score.value\r\n    }\r\n\r\n    const response = await fetch ('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/A9GgGr2ZTgKdQScdJRGi/scores', {\r\n        method: 'POST',\r\n        body: JSON.stringify(obj),\r\n        headers: {\r\n            'Content-type': 'application/json; UTF-8',\r\n        },\r\n    });\r\n\r\n    return response.result;\r\n};\n\n//# sourceURL=webpack://leaderboard-app/./src/js/interact-api.js?");

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