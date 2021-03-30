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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_top_view_fast_food_black_background_mock_up_23_2148321326_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/top-view-fast-food-black-background-mock-up_23-2148321326.jpg */ \"./src/assets/images/top-view-fast-food-black-background-mock-up_23-2148321326.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_top_view_fast_food_black_background_mock_up_23_2148321326_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: rgba(45, 210, 30, 0.185);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  height: 500px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.container::before {\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n.tab-area {\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n.tab-btn {\\r\\n  width: 100%;\\r\\n  height: 25%;\\r\\n  margin: auto 0;\\r\\n  background-color: #fff;\\r\\n  text-align: center;\\r\\n  padding-top: 40px;\\r\\n}\\r\\n\\r\\n.tab-btn:hover {\\r\\n  border-left: #ef534e 3px solid;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.fas {\\r\\n  color: #ef534e;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.main-div {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.image-style {\\r\\n  width: 450px;\\r\\n  height: 250px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.image-menu {\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n  margin: 5px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.image-menu:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Resturant-page/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Resturant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://Resturant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://Resturant-page/./src/assets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Resturant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/img.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/img.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13f5f14da29591f5876c.jpg\";\n\n//# sourceURL=webpack://Resturant-page/./src/assets/images/img.jpg?");

/***/ }),

/***/ "./src/assets/images/menu-1.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/menu-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c3bbc0e8a21a99a962ef.jpg\";\n\n//# sourceURL=webpack://Resturant-page/./src/assets/images/menu-1.jpg?");

/***/ }),

/***/ "./src/assets/images/menu-2.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/menu-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"08ba4da00a78ca121a7e.jpg\";\n\n//# sourceURL=webpack://Resturant-page/./src/assets/images/menu-2.jpg?");

/***/ }),

/***/ "./src/assets/images/menu-3.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/menu-3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a9692941ded444edb2f.jpg\";\n\n//# sourceURL=webpack://Resturant-page/./src/assets/images/menu-3.jpg?");

/***/ }),

/***/ "./src/assets/images/top-view-fast-food-black-background-mock-up_23-2148321326.jpg":
/*!*****************************************************************************************!*\
  !*** ./src/assets/images/top-view-fast-food-black-background-mock-up_23-2148321326.jpg ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"821a830599fd99a35b01.jpg\";\n\n//# sourceURL=webpack://Resturant-page/./src/assets/images/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _tabs_loadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/loadPage */ \"./src/tabs/loadPage.js\");\n/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/home */ \"./src/tabs/home.js\");\n/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/menu */ \"./src/tabs/menu.js\");\n/* harmony import */ var _tabs_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/contact */ \"./src/tabs/contact.js\");\n\n\n\n\n\n\n\n(0,_tabs_loadPage__WEBPACK_IMPORTED_MODULE_1__.default)();\n\nconst homeBtn = document.querySelector('.home-btn');\nhomeBtn.addEventListener('click', () => {\n  (0,_tabs_contact__WEBPACK_IMPORTED_MODULE_4__.hidecontactPage)();\n  (0,_tabs_menu__WEBPACK_IMPORTED_MODULE_3__.hideMenuPage)();\n  (0,_tabs_home__WEBPACK_IMPORTED_MODULE_2__.showHomePage)();\n});\n\nconst menuBtn = document.querySelector('.menu-btn');\nmenuBtn.addEventListener('click', () => {\n  (0,_tabs_contact__WEBPACK_IMPORTED_MODULE_4__.hidecontactPage)();\n  (0,_tabs_home__WEBPACK_IMPORTED_MODULE_2__.hideHomePage)();\n  (0,_tabs_menu__WEBPACK_IMPORTED_MODULE_3__.showMenuPage)();\n});\n\nconst contactBtn = document.querySelector('.contact-btn');\ncontactBtn.addEventListener('click', () => {\n  (0,_tabs_home__WEBPACK_IMPORTED_MODULE_2__.hideHomePage)();\n  (0,_tabs_menu__WEBPACK_IMPORTED_MODULE_3__.hideMenuPage)();\n  (0,_tabs_contact__WEBPACK_IMPORTED_MODULE_4__.showcontactPage)();\n});\n\n//# sourceURL=webpack://Resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/tabs/contact.js":
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showcontactPage\": () => (/* binding */ showcontactPage),\n/* harmony export */   \"hidecontactPage\": () => (/* binding */ hidecontactPage)\n/* harmony export */ });\n\n// Define main elements:\nconst content = document.querySelector('#content');\nconst conactDiv = document.createElement('div');\nconst title = document.createElement('h1');\nconst description = document.createElement('h2');\nconst image = document.createElement('img');\n\n// Main div:\nconactDiv.classList = 'hide col-10 m-auto main-div';\n\n// Title:\ntitle.innerText = 'Visit Us';\ntitle.classList = 'text-center text-dark';\n\n// Description:\ndescription.innerText = ' We are kidding ! It is Just an educational app , No place to visit :)';\ndescription.classList = 'text-warning bg-light p-2 text-center';\n\n// Image style:\nimage.classList = 'image-style';\n\n// Build the structure:\ncontent.appendChild(conactDiv);\nconactDiv.appendChild(title);\nconactDiv.appendChild(description);\n\n\nfunction showcontactPage() {\n  conactDiv.classList.remove('hide');\n  content.classList.add('flex-row-reverse');\n}\n\nfunction hidecontactPage() {\n  content.classList.remove('flex-row-reverse');\n  conactDiv.classList.add('hide');\n}\n\n\n\n\n//# sourceURL=webpack://Resturant-page/./src/tabs/contact.js?");

/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHomePage\": () => (/* binding */ showHomePage),\n/* harmony export */   \"hideHomePage\": () => (/* binding */ hideHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_images_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/img.jpg */ \"./src/assets/images/img.jpg\");\n\n// Define main elements:\nconst content = document.querySelector('#content');\nconst mainDiv = document.createElement('div');\nconst title = document.createElement('h1');\nconst description = document.createElement('p');\nconst image = document.createElement('img');\n\n// Main div:\nmainDiv.classList = 'hide col-10 m-auto main-div';\n\n// Title:\ntitle.innerText = 'FRESH & DELECIOUS';\ntitle.classList = 'text-center text-dark';\n\n// Description:\ndescription.innerHTML = '<strong> Welcome To our Resturant </strong> <br> Traditional Oriental food With special Taste !';\ndescription.classList = 'text-dark text-center';\n\n// Image style:\nimage.classList = 'image-style';\n\n// Build the structure:\ncontent.appendChild(mainDiv);\nmainDiv.appendChild(title);\nmainDiv.appendChild(description);\nmainDiv.appendChild(image);\n\n// Add source of the image:\nimage.src = _assets_images_img_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n\nfunction showHomePage() {\n  mainDiv.classList.remove('hide');\n  content.classList.add('flex-row-reverse');\n}\n\nfunction hideHomePage() {\n  content.classList.remove('flex-row-reverse');\n  mainDiv.classList.add('hide');\n}\n\n\n\n\n//# sourceURL=webpack://Resturant-page/./src/tabs/home.js?");

/***/ }),

/***/ "./src/tabs/loadPage.js":
/*!******************************!*\
  !*** ./src/tabs/loadPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createTabArea() {\n  const content = document.querySelector('div');\n  content.classList = 'container border border-primary my-5 mx-auto d-flex row ';\n  const tabArea = document.createElement('div');\n  tabArea.setAttribute('id', 'tabarea');\n  tabArea.classList = 'd-flex flex-column tab-area flex-column col-2 ';\n  content.appendChild(tabArea);\n  const homeBtn = document.createElement('div');\n  homeBtn.setAttribute('class', 'tab-btn home-btn');\n  homeBtn.innerHTML = '<h5>Home <br> <i class=\"fas fa-home\"></i> </h5>';\n  tabArea.appendChild(homeBtn);\n  const menuBtn = document.createElement('div');\n  menuBtn.setAttribute('class', 'tab-btn menu-btn');\n  menuBtn.innerHTML = '<h5>Menu <br> <i class=\"fas fa-utensils\"></i> </h5>';\n  tabArea.appendChild(menuBtn);\n  const contactBtn = document.createElement('div');\n  contactBtn.setAttribute('class', 'tab-btn contact-btn');\n  contactBtn.innerHTML = '<h5>Contact <br> <i class=\"fas fa-address-card\"></i> </h5>';\n  tabArea.appendChild(contactBtn);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabArea);\n\n//# sourceURL=webpack://Resturant-page/./src/tabs/loadPage.js?");

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenuPage\": () => (/* binding */ showMenuPage),\n/* harmony export */   \"hideMenuPage\": () => (/* binding */ hideMenuPage)\n/* harmony export */ });\n/* harmony import */ var _assets_images_menu_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/menu-1.jpg */ \"./src/assets/images/menu-1.jpg\");\n/* harmony import */ var _assets_images_menu_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/menu-2.jpg */ \"./src/assets/images/menu-2.jpg\");\n/* harmony import */ var _assets_images_menu_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/menu-3.jpg */ \"./src/assets/images/menu-3.jpg\");\n\n\n\n\nconst content = document.querySelector('#content');\nconst menuDiv = document.createElement('div');\nconst title = document.createElement('h1');\nconst description = document.createElement('p');\nconst devImg = document.createElement('div');\nconst imageOne = document.createElement('img');\nconst imageTwo = document.createElement('img');\nconst imageThree = document.createElement('img');\n\n// Main div:\nmenuDiv.classList = 'hide col-10 m-auto main-div';\n\n// Title:\ntitle.innerText = 'Menu';\ntitle.classList = 'text-center text-dark';\n\n// Description:\ndescription.innerHTML = '<strong> Do not Miss Our Outstanding Taste !  </strong> ';\ndescription.classList = 'text-dark text-center';\n\n// Image dev:\ndevImg.classList = 'd-flex justify-content-around';\n\n// Build the structure:\ncontent.appendChild(menuDiv);\nmenuDiv.appendChild(title);\nmenuDiv.appendChild(description);\nmenuDiv.appendChild(devImg);\ndevImg.appendChild(imageOne);\n[imageOne, imageTwo, imageThree].forEach((image) => {\n  devImg.appendChild(image);\n  image.classList = 'image-menu';\n});\n\n\n// Add source of the image:\nimageOne.src = _assets_images_menu_1_jpg__WEBPACK_IMPORTED_MODULE_0__;\nimageTwo.src = _assets_images_menu_2_jpg__WEBPACK_IMPORTED_MODULE_1__;\nimageThree.src = _assets_images_menu_3_jpg__WEBPACK_IMPORTED_MODULE_2__;\n\n\nfunction showMenuPage() {\n  menuDiv.classList.remove('hide');\n  content.classList.add('flex-row-reverse');\n}\n\nfunction hideMenuPage() {\n  content.classList.remove('flex-row-reverse');\n  menuDiv.classList.add('hide');\n}\n\n\n\n//# sourceURL=webpack://Resturant-page/./src/tabs/menu.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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