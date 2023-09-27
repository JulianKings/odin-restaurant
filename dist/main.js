/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/contactLayout.js":
/*!**************************************!*\
  !*** ./src/scripts/contactLayout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printLayout: () => (/* binding */ printLayout)
/* harmony export */ });
const printLayout = (contentBox) => {

};



/***/ }),

/***/ "./src/scripts/homeLayout.js":
/*!***********************************!*\
  !*** ./src/scripts/homeLayout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printLayout: () => (/* binding */ printLayout)
/* harmony export */ });
const printLayout = (contentBox) => {

};



/***/ }),

/***/ "./src/scripts/layoutManager.js":
/*!**************************************!*\
  !*** ./src/scripts/layoutManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendContent: () => (/* binding */ appendContent),
/* harmony export */   printBasicLayout: () => (/* binding */ printBasicLayout)
/* harmony export */ });
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu.svg */ "./src/images/menu.svg");
/* harmony import */ var _homeLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeLayout */ "./src/scripts/homeLayout.js");
/* harmony import */ var _menuLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuLayout */ "./src/scripts/menuLayout.js");
/* harmony import */ var _contactLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactLayout */ "./src/scripts/contactLayout.js");





let sidebarObject = null;
let sidebarBackground = null;
let currentlySelected = "linkHome";

const printBasicLayout = () => {

    let contentBox = document.querySelector(".content");

    console.log(contentBox);

    let headerBox = document.createElement("div");
    headerBox.classList.add("header");

    let headerTitle = document.createElement("div");
    headerTitle.classList.add("header-title");
    headerTitle.textContent = "Il Ristorante";
    headerBox.appendChild(headerTitle);

    let headerMenu = document.createElement("div");
    headerMenu.classList.add("menu-holder");

    let headerMenuImage = document.createElement("div");
    headerMenuImage.classList.add("menu-image-holder");
    headerMenuImage.addEventListener("click", _clickHandler);

    let menuImage = new Image();
    menuImage.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_0__;
    headerMenuImage.appendChild(menuImage);
    headerMenu.appendChild(headerMenuImage);

    headerBox.appendChild(headerMenu);
    contentBox.appendChild(headerBox);

    let footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Site made for The Odin Project";
    contentBox.appendChild(footer);
}

const appendContent = (content) => {
    let contentBox = document.querySelector(".content");

    let previousContentBox = document.querySelector(".main-content");

    if(previousContentBox !== null)
    {
        previousContentBox.remove();
    }

    let mainContentBox = document.createElement("div");
    mainContentBox.classList.add("main-content");
    
    if(content === "linkHome")
    {
        (0,_homeLayout__WEBPACK_IMPORTED_MODULE_1__.printLayout)();
    } else if(content === "linkMenu")
    {
        (0,_menuLayout__WEBPACK_IMPORTED_MODULE_2__.printLayout)();
    } else if(content === "linkContact")
    {
        (0,_contactLayout__WEBPACK_IMPORTED_MODULE_3__.printLayout)();
    }

    contentBox.appendChild(mainContentBox);

}

const _clickHandler = (event) => {
    let contentBox = document.querySelector(".content");
    // id selectors
    if(event.target.id === "linkHome")
    {
        _menuSelected(event.target);
    } else if(event.target.id === "linkMenu")
    {
        _menuSelected(event.target);
    } else if(event.target.id === "linkContact")
    {
        _menuSelected(event.target);
    }

    // class selectors
    if(event.target.classList.contains("sidebarBackground"))
    {
        event.stopPropagation();
        event.target.remove();

        if(sidebarObject.classList.contains("slide-in"))
        {
            sidebarObject.classList.remove("slide-in");
        }
        sidebarObject.classList.add("slide-out");
        setTimeout(() => {
            sidebarObject.remove();     
            sidebarObject = null;       
        }, 375);

        return;
    }

    if(event.target.classList.contains("menu-image-holder") || event.target.parentElement.classList.contains("menu-image-holder"))
    {
        if(sidebarObject === null)
        {
            sidebarBackground = document.createElement("section");
            sidebarBackground.classList.add("sidebarBackground");
            sidebarBackground.addEventListener("click", _clickHandler);
            contentBox.appendChild(sidebarBackground);

            sidebarObject = document.createElement("section");
            sidebarObject.classList.add("sidebarMenu");
            sidebarObject.classList.add("slide-in");

            let sidebarMenu = document.createElement("div");
            sidebarMenu.classList.add("menuItem");
            if(currentlySelected === "linkHome")
            {
                sidebarMenu.classList.add("selected");
            }
            sidebarMenu.textContent = "Home";
            sidebarMenu.setAttribute("id", "linkHome");
            sidebarMenu.addEventListener("click", _clickHandler);
            sidebarObject.appendChild(sidebarMenu);

            sidebarMenu = document.createElement("div");
            sidebarMenu.classList.add("menuItem");
            if(currentlySelected === "linkMenu")
            {
                sidebarMenu.classList.add("selected");
            }
            sidebarMenu.textContent = "Menu";
            sidebarMenu.setAttribute("id", "linkMenu");
            sidebarMenu.addEventListener("click", _clickHandler);
            sidebarObject.appendChild(sidebarMenu);

            sidebarMenu = document.createElement("div");
            sidebarMenu.classList.add("menuItem");
            if(currentlySelected === "linkContact")
            {
                sidebarMenu.classList.add("selected");
            }
            sidebarMenu.textContent = "Contact Us";
            sidebarMenu.setAttribute("id", "linkContact");
            sidebarMenu.addEventListener("click", _clickHandler);
            sidebarObject.appendChild(sidebarMenu);

            contentBox.appendChild(sidebarObject);
        }
    }
}

const _menuSelected = (target) => {
    if(!target.classList.contains("selected"))
    {
        let allMenus = document.querySelectorAll(".menuItem");
        allMenus.forEach((menu) => {
            if(menu.classList.contains("selected"))
            {
                menu.classList.remove("selected");
            }
        });

        target.classList.add("selected");

        currentlySelected = target.id;
        // Handle layout modification logic
        appendContent(target.id);
    }
}



/***/ }),

/***/ "./src/scripts/menuLayout.js":
/*!***********************************!*\
  !*** ./src/scripts/menuLayout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printLayout: () => (/* binding */ printLayout)
/* harmony export */ });
const printLayout = (contentBox) => {

};



/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09d7f08a9f31ebd88842.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/layoutManager */ "./src/scripts/layoutManager.js");



// Load basic layout
(0,_scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__.printBasicLayout)();
(0,_scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__.appendContent)("linkHome");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMkM7QUFDbUI7QUFDQTtBQUNNOztBQUVwRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw2Q0FBUztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFlO0FBQ3ZCLE1BQU07QUFDTjtBQUNBLFFBQVEsd0RBQWU7QUFDdkIsTUFBTTtBQUNOO0FBQ0EsUUFBUSwyREFBa0I7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDbEI0QjtBQUM2Qzs7QUFFekU7QUFDQSx3RUFBZ0I7QUFDaEIscUVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz8yMzk0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2NvbnRhY3RMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvaG9tZUxheW91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9sYXlvdXRNYW5hZ2VyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL21lbnVMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBwcmludExheW91dCA9IChjb250ZW50Qm94KSA9PiB7XG5cbn07XG5cbmV4cG9ydCB7IHByaW50TGF5b3V0IH0iLCJjb25zdCBwcmludExheW91dCA9IChjb250ZW50Qm94KSA9PiB7XG5cbn07XG5cbmV4cG9ydCB7IHByaW50TGF5b3V0IH0iLCJpbXBvcnQgTWVudUltYWdlIGZyb20gJy4uL2ltYWdlcy9tZW51LnN2Zyc7XG5pbXBvcnQgeyBwcmludExheW91dCBhcyBwcmludEhvbWVMYXlvdXQgfSBmcm9tICcuL2hvbWVMYXlvdXQnO1xuaW1wb3J0IHsgcHJpbnRMYXlvdXQgYXMgcHJpbnRNZW51TGF5b3V0IH0gZnJvbSAnLi9tZW51TGF5b3V0JztcbmltcG9ydCB7IHByaW50TGF5b3V0IGFzIHByaW50Q29udGFjdExheW91dCB9IGZyb20gJy4vY29udGFjdExheW91dCc7XG5cbmxldCBzaWRlYmFyT2JqZWN0ID0gbnVsbDtcbmxldCBzaWRlYmFyQmFja2dyb3VuZCA9IG51bGw7XG5sZXQgY3VycmVudGx5U2VsZWN0ZWQgPSBcImxpbmtIb21lXCI7XG5cbmNvbnN0IHByaW50QmFzaWNMYXlvdXQgPSAoKSA9PiB7XG5cbiAgICBsZXQgY29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnRCb3gpO1xuXG4gICAgbGV0IGhlYWRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyQm94LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBsZXQgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItdGl0bGVcIik7XG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIklsIFJpc3RvcmFudGVcIjtcbiAgICBoZWFkZXJCb3guYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgbGV0IGhlYWRlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaG9sZGVyXCIpO1xuXG4gICAgbGV0IGhlYWRlck1lbnVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyTWVudUltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltYWdlLWhvbGRlclwiKTtcbiAgICBoZWFkZXJNZW51SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9jbGlja0hhbmRsZXIpO1xuXG4gICAgbGV0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1lbnVJbWFnZS5zcmMgPSBNZW51SW1hZ2U7XG4gICAgaGVhZGVyTWVudUltYWdlLmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XG4gICAgaGVhZGVyTWVudS5hcHBlbmRDaGlsZChoZWFkZXJNZW51SW1hZ2UpO1xuXG4gICAgaGVhZGVyQm94LmFwcGVuZENoaWxkKGhlYWRlck1lbnUpO1xuICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoaGVhZGVyQm94KTtcblxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiU2l0ZSBtYWRlIGZvciBUaGUgT2RpbiBQcm9qZWN0XCI7XG4gICAgY29udGVudEJveC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5jb25zdCBhcHBlbmRDb250ZW50ID0gKGNvbnRlbnQpID0+IHtcbiAgICBsZXQgY29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGxldCBwcmV2aW91c0NvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcblxuICAgIGlmKHByZXZpb3VzQ29udGVudEJveCAhPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHByZXZpb3VzQ29udGVudEJveC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgbWFpbkNvbnRlbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250ZW50Qm94LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gICAgXG4gICAgaWYoY29udGVudCA9PT0gXCJsaW5rSG9tZVwiKVxuICAgIHtcbiAgICAgICAgcHJpbnRIb21lTGF5b3V0KCk7XG4gICAgfSBlbHNlIGlmKGNvbnRlbnQgPT09IFwibGlua01lbnVcIilcbiAgICB7XG4gICAgICAgIHByaW50TWVudUxheW91dCgpO1xuICAgIH0gZWxzZSBpZihjb250ZW50ID09PSBcImxpbmtDb250YWN0XCIpXG4gICAge1xuICAgICAgICBwcmludENvbnRhY3RMYXlvdXQoKTtcbiAgICB9XG5cbiAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKG1haW5Db250ZW50Qm94KTtcblxufVxuXG5jb25zdCBfY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgLy8gaWQgc2VsZWN0b3JzXG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcImxpbmtIb21lXCIpXG4gICAge1xuICAgICAgICBfbWVudVNlbGVjdGVkKGV2ZW50LnRhcmdldCk7XG4gICAgfSBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJsaW5rTWVudVwiKVxuICAgIHtcbiAgICAgICAgX21lbnVTZWxlY3RlZChldmVudC50YXJnZXQpO1xuICAgIH0gZWxzZSBpZihldmVudC50YXJnZXQuaWQgPT09IFwibGlua0NvbnRhY3RcIilcbiAgICB7XG4gICAgICAgIF9tZW51U2VsZWN0ZWQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvLyBjbGFzcyBzZWxlY3RvcnNcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhckJhY2tncm91bmRcIikpXG4gICAge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuXG4gICAgICAgIGlmKHNpZGViYXJPYmplY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xpZGUtaW5cIikpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNpZGViYXJPYmplY3QuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNpZGViYXJPYmplY3QuY2xhc3NMaXN0LmFkZChcInNsaWRlLW91dFwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0LnJlbW92ZSgpOyAgICAgXG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0ID0gbnVsbDsgICAgICAgXG4gICAgICAgIH0sIDM3NSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LWltYWdlLWhvbGRlclwiKSB8fCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LWltYWdlLWhvbGRlclwiKSlcbiAgICB7XG4gICAgICAgIGlmKHNpZGViYXJPYmplY3QgPT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNpZGViYXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgICAgICBzaWRlYmFyQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhckJhY2tncm91bmRcIik7XG4gICAgICAgICAgICBzaWRlYmFyQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKHNpZGViYXJCYWNrZ3JvdW5kKTtcblxuICAgICAgICAgICAgc2lkZWJhck9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICAgICAgc2lkZWJhck9iamVjdC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhck1lbnVcIik7XG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1pblwiKTtcblxuICAgICAgICAgICAgbGV0IHNpZGViYXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRseVNlbGVjdGVkID09PSBcImxpbmtIb21lXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2lkZWJhck1lbnUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlua0hvbWVcIik7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0LmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcblxuICAgICAgICAgICAgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuICAgICAgICAgICAgaWYoY3VycmVudGx5U2VsZWN0ZWQgPT09IFwibGlua01lbnVcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWRlYmFyTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaW5rTWVudVwiKTtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIHNpZGViYXJPYmplY3QuYXBwZW5kQ2hpbGQoc2lkZWJhck1lbnUpO1xuXG4gICAgICAgICAgICBzaWRlYmFyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG4gICAgICAgICAgICBpZihjdXJyZW50bHlTZWxlY3RlZCA9PT0gXCJsaW5rQ29udGFjdFwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpZGViYXJNZW51LnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpbmtDb250YWN0XCIpO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9jbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgc2lkZWJhck9iamVjdC5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG5cbiAgICAgICAgICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoc2lkZWJhck9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IF9tZW51U2VsZWN0ZWQgPSAodGFyZ2V0KSA9PiB7XG4gICAgaWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSlcbiAgICB7XG4gICAgICAgIGxldCBhbGxNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudUl0ZW1cIik7XG4gICAgICAgIGFsbE1lbnVzLmZvckVhY2goKG1lbnUpID0+IHtcbiAgICAgICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgY3VycmVudGx5U2VsZWN0ZWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgIC8vIEhhbmRsZSBsYXlvdXQgbW9kaWZpY2F0aW9uIGxvZ2ljXG4gICAgICAgIGFwcGVuZENvbnRlbnQodGFyZ2V0LmlkKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHByaW50QmFzaWNMYXlvdXQsIGFwcGVuZENvbnRlbnQgfSIsImNvbnN0IHByaW50TGF5b3V0ID0gKGNvbnRlbnRCb3gpID0+IHtcblxufTtcblxuZXhwb3J0IHsgcHJpbnRMYXlvdXQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwcmludEJhc2ljTGF5b3V0LCBhcHBlbmRDb250ZW50IH0gZnJvbSAnLi9zY3JpcHRzL2xheW91dE1hbmFnZXInXG5cbi8vIExvYWQgYmFzaWMgbGF5b3V0XG5wcmludEJhc2ljTGF5b3V0KCk7XG5hcHBlbmRDb250ZW50KFwibGlua0hvbWVcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=