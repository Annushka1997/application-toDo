/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const ui = __webpack_require__(/*! ./modules/ui */ \"./src/js/modules/ui.js\");\r\nconst post = __webpack_require__(/*! ./modules/post */ \"./src/js/modules/post.js\");\r\nconst get = __webpack_require__(/*! ./modules/get */ \"./src/js/modules/get.js\");\r\n\r\nui.UI.start();\r\n\r\npost();\r\nget();\r\n\r\n\n\n//# sourceURL=webpack://crud/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/delete.js":
/*!**********************************!*\
  !*** ./src/js/modules/delete.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const url = __webpack_require__(/*! ./url */ \"./src/js/modules/url.js\");\r\n\r\nmodule.exports = function DELETE (removeBtn) {\r\n\tremoveBtn.forEach(btn => {\r\n\t\tbtn.addEventListener(\"click\", async () => {\r\n\t\t\tconst fakeID = btn.parentElement.previousElementSibling.firstElementChild.textContent;\r\n\t\t\tbtn.parentElement.parentElement.remove();\r\n\r\n\t\t\tawait fetch(`${url}/${parseInt(fakeID)}`, {\r\n\t\t\t\tmethod: \"DELETE\"\r\n\t\t\t});\r\n\t\t})\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/delete.js?");

/***/ }),

/***/ "./src/js/modules/get.js":
/*!*******************************!*\
  !*** ./src/js/modules/get.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ui = __webpack_require__(/*! ./ui */ \"./src/js/modules/ui.js\");\r\nconst url = __webpack_require__(/*! ./url */ \"./src/js/modules/url.js\");\r\nconst put = __webpack_require__(/*! ./put */ \"./src/js/modules/put.js\");\r\nconst del = __webpack_require__(/*! ./delete */ \"./src/js/modules/delete.js\");\r\n\r\nmodule.exports = async function GET () {\r\n\treturn await fetch(url)\r\n\t.then(data => data.json())\r\n\t.then(data => data.forEach(obj => {\r\n\t\tui.UI.toHTML(obj.id, obj.title, obj.isComplete);\r\n\t}))\r\n\t.then(() => {\r\n\t\tput(\r\n\t\t\tdocument.querySelectorAll(\".editBtn\"),\r\n\t\t\tdocument.querySelectorAll(\".saveBtn\"),\r\n\t\t\tdocument.querySelectorAll(\".listsBlockItemContent\"),\r\n\t\t\tdocument.querySelectorAll(\".done\")\r\n\t\t);\r\n\t\tdel(document.querySelectorAll(\".removeBtn\"));\r\n\t})\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/get.js?");

/***/ }),

/***/ "./src/js/modules/post.js":
/*!********************************!*\
  !*** ./src/js/modules/post.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ui = __webpack_require__(/*! ./ui */ \"./src/js/modules/ui.js\");\r\nconst url = __webpack_require__(/*! ./url */ \"./src/js/modules/url.js\");\r\nconst { form, screenInput } = ui.UI;\r\n\r\nmodule.exports = function POST () {\r\n\tform.addEventListener(\"submit\", async (e) => {\r\n\t\te.preventDefault();\r\n\r\n\t\tif (screenInput.value.trim() !== \"\") {\r\n\t\t\tawait fetch (url, {\r\n\t\t\t\tmethod: \"POST\",\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify({title: screenInput.value.trim(), isComplete: false})\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\te.target.reset();\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/post.js?");

/***/ }),

/***/ "./src/js/modules/put.js":
/*!*******************************!*\
  !*** ./src/js/modules/put.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const url = __webpack_require__(/*! ./url */ \"./src/js/modules/url.js\");\r\n\r\nmodule.exports = function PUT (editBtnArray, saveBtnArray, content, isCompleted) {\r\n\teditBtnArray.forEach((editBtn, index) => {\r\n\t\tlet isComp = isCompleted[index];\r\n\t\tconst fakeID = parseInt(content[index].children[0].textContent);\r\n\t\tconst input = content[index].children[1];\r\n\t\t\r\n\t\teditBtn.addEventListener(\"click\", () => {\t\t\t\r\n\t\t\teditBtn.style.display = \"none\";\r\n\t\t\tsaveBtnArray[index].style.display = \"inline-block\";\r\n\t\t\tinput.classList.add(\"edit\");\r\n\t\t\tinput.removeAttribute(\"readonly\");\t\t\t\r\n\r\n\t\t\tsaveBtnArray[index].addEventListener(\"click\", async () => {\r\n\t\t\t\tupdatePut(input, isComp, fakeID);\r\n\t\t\t})\t\t\t\r\n\t\t});\r\n\r\n\t\tisCompleted[index].addEventListener(\"change\", async () => {\r\n\t\t\tupdatePut(input, isComp, fakeID);\r\n\t\t});\r\n\r\n\t\tasync function updatePut(input, isComp, fakeID) {\r\n\t\t\tawait fetch(`${url}/${fakeID}`, {\r\n\t\t\t\tmethod: \"PUT\",\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify({title: input.value.trim(), isComplete: isComp.checked ? true : false })\r\n\t\t\t})\r\n\t\t}\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/put.js?");

/***/ }),

/***/ "./src/js/modules/ui.js":
/*!******************************!*\
  !*** ./src/js/modules/ui.js ***!
  \******************************/
/***/ ((module) => {

eval("const root = document.querySelector(\"#root\");\r\n\r\nconst UI = {\r\n\ttitle: document.createElement(\"h1\"),\r\n\tsubTitle: document.createElement(\"p\"),\r\n\tform: document.createElement(\"form\"),\r\n\tscreenBlock: document.createElement(\"div\"),\r\n\tscreenInput: document.createElement(\"input\"),\r\n\tscreenAddBtn: document.createElement(\"button\"),\r\n\tlistsBlock: document.createElement(\"div\"),\r\n\r\n\telementOptions() {\r\n\t\tthis.title.textContent = \"CRUD\";\r\n\t\tthis.subTitle.textContent = \"Asyn Application\"\r\n\r\n\t\tthis.form.id = \"app-form\";\r\n\t\tthis.screenBlock.id = \"screenBlock\";\r\n\t\tthis.screenInput.type = \"text\";\r\n\t\tthis.screenInput.placeholder = \"Type here...\";\r\n\t\tthis.screenAddBtn.textContent = \"ADD\";\r\n\t\tthis.screenAddBtn.id = \"screenAddBtn\";\r\n\t\tthis.listsBlock.id = \"listBlock\";\r\n\t},\r\n\r\n\tappendElements() {\r\n\t\troot.append(this.title, this.subTitle, this.form, this.listsBlock);\r\n\t\tthis.form.append(this.screenBlock);\r\n\t\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\r\n\t},\r\n\r\n\ttoHTML(id, value, state = false) {\r\n\t\tthis.listsBlock.innerHTML += `\r\n\t\t\t<div class=\"listsBlockItem\">\r\n\t\t\t\t<div class=\"listsBlockItemContent\">\r\n\t\t\t\t\t<span>${id}</span>\r\n\t\t\t\t\t<input type=\"text\" value=\"${value}\" ${state ? \"\" : \"readonly\"}>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"buttons\">\r\n\t\t\t\t\t<button class=\"removeBtn\">Remove</button>\r\n\t\t\t\t\t<button class=\"editBtn\">Edit</button>\r\n\t\t\t\t\t<button class=\"saveBtn\">Save</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<input type=\"checkbox\" id=\"done\" name=\"done\" class=\"done\" ${state ? \"checked\" : \"\"}>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t`;\r\n\t},\r\n\r\n\tstart() {\r\n\t\tthis.elementOptions();\r\n\t\tthis.appendElements();\r\n\t}\r\n};\r\n\r\nmodule.exports = {\r\n    UI\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/ui.js?");

/***/ }),

/***/ "./src/js/modules/url.js":
/*!*******************************!*\
  !*** ./src/js/modules/url.js ***!
  \*******************************/
/***/ ((module) => {

eval("const url = \"http://localhost:8888/todos\";\r\n\r\nmodule.exports = {\r\n    url\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/url.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;