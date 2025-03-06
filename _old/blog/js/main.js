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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/js/common/common_parts.js */ \"./src/modules/js/common/common_parts.js\");\n/*=============================================================================\r\njavascriptのモジュール\r\n=============================================================================*/\r\n//テスト\r\n//import dev from \"./modules/js/main.js\";\r\n//dev();\r\n\r\n//共通部分の呼び出し\r\n\r\n\r\n_modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__.header();\r\n_modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__.footer();\r\n_modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__.toTopBtn();\r\n_modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__.chengeLang();\r\n_modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__.menuBtn();\r\n\r\n/*=============================================================================\r\ncssのモジュール（scssはgulpでコンパイルのためコメントアウト）\r\n=============================================================================*/\r\n\r\n// import \"./modules/css/style.scss\";\r\n\n\n//# sourceURL=webpack://site-monphy/./src/index.js?");

/***/ }),

/***/ "./src/modules/js/common/common_parts.js":
/*!***********************************************!*\
  !*** ./src/modules/js/common/common_parts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"toTopBtn\": () => (/* binding */ toTopBtn),\n/* harmony export */   \"menuBtn\": () => (/* binding */ menuBtn),\n/* harmony export */   \"chengeLang\": () => (/* binding */ chengeLang)\n/* harmony export */ });\n//==================================================\r\n//ヘッダーの共通部分を呼び出す\r\n//==================================================\r\n\r\n//=============\r\n//ヘッダー\r\n//=============\r\nfunction header() {\r\n  $.ajax({\r\n    url: \"/site-MYF/includes/mod_header.html\",\r\n    cache: false,\r\n    dataType: \"html\",\r\n    success: function (data) {\r\n      $(\"#header\").html(data);\r\n    },\r\n    // error: function (data) {\r\n    //   $(\"#header\").text(\"えらー\");\r\n    // },\r\n  });\r\n}\r\n\r\n//=============\r\n//フッダー\r\n//=============\r\nfunction footer() {\r\n  $.ajax({\r\n    url: \"/site-MYF/includes/mod_footer.html\",\r\n    cache: false,\r\n    dataType: \"html\",\r\n    success: function (data) {\r\n      $(\"#footer\").html(data);\r\n    },\r\n    // error: function (data) {\r\n    //   $(\"#footer\").text(\"えらー\");\r\n    // },\r\n  });\r\n}\r\n\r\n//=============\r\n//トップへ戻るボタン\r\n//=============\r\nfunction toTopBtn() {\r\n  $(function () {\r\n    var toPageTopBtn = $(\"#toPageTop\");\r\n    toPageTopBtn.hide();\r\n\r\n    $(window).scroll(function () {\r\n      if ($(this).scrollTop() > 100) {\r\n        toPageTopBtn.fadeIn();\r\n      } else {\r\n        toPageTopBtn.fadeOut();\r\n      }\r\n    });\r\n\r\n    toPageTopBtn.click(function () {\r\n      $(\"body,html\").animate(\r\n        {\r\n          scrollTop: 0,\r\n        },\r\n        500\r\n      );\r\n    });\r\n  });\r\n}\r\n\r\n//=============\r\n//menuボタン\r\n//=============\r\nfunction menuBtn() {\r\n  $(function () {\r\n    $(document).on(\"click\", \"#menu__btn\", function () {\r\n      // console.log(\"クリックはされている\");\r\n\r\n      // #menu_btnに.activeがあるかどうか;\r\n      if ($(this).hasClass(\"active\")) {\r\n        // .activeがあるときの処理\r\n        $(this).removeClass(\"active\");\r\n        $(this).text(\"MENU\");\r\n        $(\"#menu\").removeClass(\"open\");\r\n        $(\".menu__background\").removeClass(\"open\");\r\n      } else {\r\n        // .activeがないときの処理\r\n        $(this).addClass(\"active\");\r\n        $(this).text(\"CLOSE\");\r\n        $(\"#menu\").addClass(\"open\");\r\n        $(\".menu__background\").addClass(\"open\");\r\n      }\r\n    });\r\n\r\n    // メニューの背景がクリックされたときの処理\r\n    $(document).on(\"click\", \".menu__background\", function () {\r\n      // .menu-backgroundに.openがあるかどうか\r\n      if ($(this).hasClass(\"open\")) {\r\n        // .openがあるときの処理\r\n        $(this).removeClass(\"open\");\r\n        $(\"#menu__btn\").removeClass(\"active\").text(\"MENU\");\r\n        $(\"#menu\").removeClass(\"open\");\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\n//=============\r\n//menuボタン\r\n//=============\r\nfunction chengeLang() {\r\n  $(document).on(\"mouseover\", \"#ch-Lang\", function () {\r\n    // console.log(\"のったぜ\");\r\n    $(\"ul:not(:animated)\", this).slideDown();\r\n  });\r\n  $(document).on(\"mouseleave\", \"#ch-Lang\", function () {\r\n    // console.log(\"おろしたぜ\");\r\n    $(\"ul.l-navi--chengeLang__list-item__wrap\", this).slideUp();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://site-monphy/./src/modules/js/common/common_parts.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;