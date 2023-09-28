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
    let contentHolder = document.createElement("div");
    contentHolder.classList.add("main-content-contact");

    let paragraph = document.createElement("p");
    paragraph.textContent = "📞 (+99) 987 654 321";
    contentHolder.appendChild(paragraph);

    paragraph = document.createElement("p");
    paragraph.textContent = "🏠 C/ Luis De Morales 2, 41018, Sevilla, Spain";
    contentHolder.appendChild(paragraph);

    let mapElement = document.createElement("div");
    mapElement.setAttribute("id", "map");
    mapElement.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.532981647481!2d-5.973415623968875!3d37.386712230686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126ea355335b6f%3A0xb4749b86315ebdd4!2sRestaurante%20La%20Tagliatella%20%7C%20Nervi%C3%B3n%2C%20Sevilla!5e0!3m2!1sen!2ses!4v1695844081460!5m2!1sen!2ses" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    contentHolder.appendChild(mapElement);

    contentBox.appendChild(contentHolder);

};



/***/ }),

/***/ "./src/scripts/homeLayout.js":
/*!***********************************!*\
  !*** ./src/scripts/homeLayout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListeners: () => (/* binding */ addListeners),
/* harmony export */   printLayout: () => (/* binding */ printLayout)
/* harmony export */ });
/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/chef.png */ "./src/images/chef.png");


let menuButton = null;

const printLayout = (contentBox) => {

    let contentHolder = document.createElement("div");
    contentHolder.classList.add("main-content-index");

    let chefImage = new Image();
    chefImage.src = _images_chef_png__WEBPACK_IMPORTED_MODULE_0__;
    contentHolder.appendChild(chefImage);

    let paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Order online or visit us!";
    contentHolder.appendChild(paragraph);

    paragraph = document.createElement("p");
    paragraph.innerHTML = "Come and try our food in <em>il Ristorante</em>, serving you the best italian food since 1893";
    contentHolder.appendChild(paragraph);

    menuButton = document.createElement("button");
    menuButton.textContent = "Check the menu";
    menuButton.setAttribute("id", "secondaryLinkMenu");
    contentHolder.appendChild(menuButton);

    paragraph = document.createElement("p");
    paragraph.classList.add("timetable")
    paragraph.innerHTML = "<strong>We service at</strong> <br />" +
    "<span class='restDay'>Mon-Thurs:</span> 11am-9pm<br/>" +
    "<span class='restDay'>Fri-Sun:</span> 10am-11pm";
    contentHolder.appendChild(paragraph);

    contentBox.appendChild(contentHolder);

};

const addListeners = (clickHandler) => {
    if(menuButton != null)
    {
        menuButton.addEventListener("click", clickHandler);
    }
}



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
        (0,_homeLayout__WEBPACK_IMPORTED_MODULE_1__.printLayout)(mainContentBox);
        (0,_homeLayout__WEBPACK_IMPORTED_MODULE_1__.addListeners)(_clickHandler);
    } else if(content === "linkMenu")
    {
        (0,_menuLayout__WEBPACK_IMPORTED_MODULE_2__.printLayout)(mainContentBox);
    } else if(content === "linkContact")
    {
        (0,_contactLayout__WEBPACK_IMPORTED_MODULE_3__.printLayout)(mainContentBox);
    }

    contentBox.appendChild(mainContentBox);

}

const _clickHandler = (event) => {
    let contentBox = document.querySelector(".content");
    // id selectors
    if(event.target.id === "linkHome")
    {
        _menuSelected(event.target);
    } else if(event.target.id === "secondaryLinkMenu")
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
        if(sidebarBackground !== null)
        {
            sidebarBackground = null;
        }

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
    if(target.id === "secondaryLinkMenu")
    {
        currentlySelected = "linkMenu";
        // Handle layout modification logic
        appendContent("linkMenu");

    } else {
        if(sidebarObject != null)
        {
            if(sidebarBackground != null)
            {
                sidebarBackground.remove();
                sidebarBackground = null;
            }

            if(sidebarObject.classList.contains("slide-in"))
            {
                sidebarObject.classList.remove("slide-in");
            }
            sidebarObject.classList.add("slide-out");
            setTimeout(() => {
                sidebarObject.remove();     
                sidebarObject = null;       
            }, 375);
            }

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
/* harmony import */ var _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pizza-menu.png */ "./src/images/pizza-menu.png");


const printLayout = (contentBox) => {
    let contentHolder = document.createElement("div");
    contentHolder.classList.add("main-content-menu");

    let pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;

    let menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    let paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Tartufi e funghi";
    let span = document.createElement("span");
    span.innerText = "Crema de tòfona negra, variat de formatges i xampinyons.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "4 Stagioni";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, xampinyons, gambes, guanciale i pernil dolç.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Tagliatella";
    span = document.createElement("span");
    span.innerText = "Salsa de tomàquet confitat groc, mozzarella, Mortadel·la di Bologna IGP, stracciatella, festuc, ruca i oli de mandarina.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Al parmigiano";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, Parmigiano Reggiano DOP, bacó, formatge Taleggio DOP i alfàbrega.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "7 Formaggi";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, Taleggio DOP, Pecorino Romano DOP, Gorgonzola DOP, Mozzarella de Búfala DOP, Parmigiano Reggiano DOP i formatge Montasio DOP.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Bismark";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, pernil dolç i ou.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    contentBox.appendChild(contentHolder);
};



/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21658c309ea0b1ed4408.png";

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09d7f08a9f31ebd88842.svg";

/***/ }),

/***/ "./src/images/pizza-menu.png":
/*!***********************************!*\
  !*** ./src/images/pizza-menu.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0def33ff8ce71554e03.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOFlBQThZO0FBQzlZOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjJDOztBQUUzQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDZDQUFTO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQzJDO0FBQ21CO0FBQ0U7QUFDRjtBQUNNOztBQUVwRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw2Q0FBUztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFlO0FBQ3ZCLFFBQVEseURBQWdCO0FBQ3hCLE1BQU07QUFDTjtBQUNBLFFBQVEsd0RBQWU7QUFDdkIsTUFBTTtBQUNOO0FBQ0EsUUFBUSwyREFBa0I7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTWlEOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsbURBQVM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDbEI0QjtBQUM2Qzs7QUFFekU7QUFDQSx3RUFBZ0I7QUFDaEIscUVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz8yMzk0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2NvbnRhY3RMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvaG9tZUxheW91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9sYXlvdXRNYW5hZ2VyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL21lbnVMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBwcmludExheW91dCA9IChjb250ZW50Qm94KSA9PiB7XG4gICAgbGV0IGNvbnRlbnRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnRIb2xkZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1jb250YWN0XCIpO1xuXG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwi8J+TniAoKzk5KSA5ODcgNjU0IDMyMVwiO1xuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwi8J+PoCBDLyBMdWlzIERlIE1vcmFsZXMgMiwgNDEwMTgsIFNldmlsbGEsIFNwYWluXCI7XG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgbGV0IG1hcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hcEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYXBcIik7XG4gICAgbWFwRWxlbWVudC5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ3OTIuNTMyOTgxNjQ3NDgxITJkLTUuOTczNDE1NjIzOTY4ODc1ITNkMzcuMzg2NzEyMjMwNjg2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHhkMTI2ZWEzNTUzMzViNmYlM0EweGI0NzQ5Yjg2MzE1ZWJkZDQhMnNSZXN0YXVyYW50ZSUyMExhJTIwVGFnbGlhdGVsbGElMjAlN0MlMjBOZXJ2aSVDMyVCM24lMkMlMjBTZXZpbGxhITVlMCEzbTIhMXNlbiEyc2VzITR2MTY5NTg0NDA4MTQ2MCE1bTIhMXNlbiEyc2VzXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNDAwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5gO1xuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQobWFwRWxlbWVudCk7XG5cbiAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGNvbnRlbnRIb2xkZXIpO1xuXG59O1xuXG5leHBvcnQgeyBwcmludExheW91dCB9IiwiaW1wb3J0IENoZWZJbWFnZSBmcm9tICcuLi9pbWFnZXMvY2hlZi5wbmcnO1xuXG5sZXQgbWVudUJ1dHRvbiA9IG51bGw7XG5cbmNvbnN0IHByaW50TGF5b3V0ID0gKGNvbnRlbnRCb3gpID0+IHtcblxuICAgIGxldCBjb250ZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtaW5kZXhcIik7XG5cbiAgICBsZXQgY2hlZkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgY2hlZkltYWdlLnNyYyA9IENoZWZJbWFnZTtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGNoZWZJbWFnZSk7XG5cbiAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyFcIjtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gXCJDb21lIGFuZCB0cnkgb3VyIGZvb2QgaW4gPGVtPmlsIFJpc3RvcmFudGU8L2VtPiwgc2VydmluZyB5b3UgdGhlIGJlc3QgaXRhbGlhbiBmb29kIHNpbmNlIDE4OTNcIjtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJDaGVjayB0aGUgbWVudVwiO1xuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWNvbmRhcnlMaW5rTWVudVwiKTtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gICAgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJ0aW1ldGFibGVcIilcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gXCI8c3Ryb25nPldlIHNlcnZpY2UgYXQ8L3N0cm9uZz4gPGJyIC8+XCIgK1xuICAgIFwiPHNwYW4gY2xhc3M9J3Jlc3REYXknPk1vbi1UaHVyczo8L3NwYW4+IDExYW0tOXBtPGJyLz5cIiArXG4gICAgXCI8c3BhbiBjbGFzcz0ncmVzdERheSc+RnJpLVN1bjo8L3NwYW4+IDEwYW0tMTFwbVwiO1xuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoY29udGVudEhvbGRlcik7XG5cbn07XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9IChjbGlja0hhbmRsZXIpID0+IHtcbiAgICBpZihtZW51QnV0dG9uICE9IG51bGwpXG4gICAge1xuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgcHJpbnRMYXlvdXQsIGFkZExpc3RlbmVycyB9IiwiaW1wb3J0IE1lbnVJbWFnZSBmcm9tICcuLi9pbWFnZXMvbWVudS5zdmcnO1xuaW1wb3J0IHsgcHJpbnRMYXlvdXQgYXMgcHJpbnRIb21lTGF5b3V0IH0gZnJvbSAnLi9ob21lTGF5b3V0JztcbmltcG9ydCB7IGFkZExpc3RlbmVycyBhcyBhZGRIb21lTGlzdGVuZXJzIH0gZnJvbSAnLi9ob21lTGF5b3V0JztcbmltcG9ydCB7IHByaW50TGF5b3V0IGFzIHByaW50TWVudUxheW91dCB9IGZyb20gJy4vbWVudUxheW91dCc7XG5pbXBvcnQgeyBwcmludExheW91dCBhcyBwcmludENvbnRhY3RMYXlvdXQgfSBmcm9tICcuL2NvbnRhY3RMYXlvdXQnO1xuXG5sZXQgc2lkZWJhck9iamVjdCA9IG51bGw7XG5sZXQgc2lkZWJhckJhY2tncm91bmQgPSBudWxsO1xubGV0IGN1cnJlbnRseVNlbGVjdGVkID0gXCJsaW5rSG9tZVwiO1xuXG5jb25zdCBwcmludEJhc2ljTGF5b3V0ID0gKCkgPT4ge1xuXG4gICAgbGV0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICBsZXQgaGVhZGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJCb3guY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGxldCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlci10aXRsZVwiKTtcbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiSWwgUmlzdG9yYW50ZVwiO1xuICAgIGhlYWRlckJveC5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbiAgICBsZXQgaGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS1ob2xkZXJcIik7XG5cbiAgICBsZXQgaGVhZGVyTWVudUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJNZW51SW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2UtaG9sZGVyXCIpO1xuICAgIGhlYWRlck1lbnVJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG5cbiAgICBsZXQgbWVudUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbWVudUltYWdlLnNyYyA9IE1lbnVJbWFnZTtcbiAgICBoZWFkZXJNZW51SW1hZ2UuYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcbiAgICBoZWFkZXJNZW51LmFwcGVuZENoaWxkKGhlYWRlck1lbnVJbWFnZSk7XG5cbiAgICBoZWFkZXJCb3guYXBwZW5kQ2hpbGQoaGVhZGVyTWVudSk7XG4gICAgY29udGVudEJveC5hcHBlbmRDaGlsZChoZWFkZXJCb3gpO1xuXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJTaXRlIG1hZGUgZm9yIFRoZSBPZGluIFByb2plY3RcIjtcbiAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmNvbnN0IGFwcGVuZENvbnRlbnQgPSAoY29udGVudCkgPT4ge1xuICAgIGxldCBjb250ZW50Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgbGV0IHByZXZpb3VzQ29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuXG4gICAgaWYocHJldmlvdXNDb250ZW50Qm94ICE9PSBudWxsKVxuICAgIHtcbiAgICAgICAgcHJldmlvdXNDb250ZW50Qm94LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGxldCBtYWluQ29udGVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRlbnRCb3guY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcbiAgICBcbiAgICBpZihjb250ZW50ID09PSBcImxpbmtIb21lXCIpXG4gICAge1xuICAgICAgICBwcmludEhvbWVMYXlvdXQobWFpbkNvbnRlbnRCb3gpO1xuICAgICAgICBhZGRIb21lTGlzdGVuZXJzKF9jbGlja0hhbmRsZXIpO1xuICAgIH0gZWxzZSBpZihjb250ZW50ID09PSBcImxpbmtNZW51XCIpXG4gICAge1xuICAgICAgICBwcmludE1lbnVMYXlvdXQobWFpbkNvbnRlbnRCb3gpO1xuICAgIH0gZWxzZSBpZihjb250ZW50ID09PSBcImxpbmtDb250YWN0XCIpXG4gICAge1xuICAgICAgICBwcmludENvbnRhY3RMYXlvdXQobWFpbkNvbnRlbnRCb3gpO1xuICAgIH1cblxuICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnRCb3gpO1xuXG59XG5cbmNvbnN0IF9jbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgY29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAvLyBpZCBzZWxlY3RvcnNcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT09IFwibGlua0hvbWVcIilcbiAgICB7XG4gICAgICAgIF9tZW51U2VsZWN0ZWQoZXZlbnQudGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcInNlY29uZGFyeUxpbmtNZW51XCIpXG4gICAge1xuICAgICAgICBfbWVudVNlbGVjdGVkKGV2ZW50LnRhcmdldCk7XG4gICAgfSBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJsaW5rTWVudVwiKVxuICAgIHtcbiAgICAgICAgX21lbnVTZWxlY3RlZChldmVudC50YXJnZXQpO1xuICAgIH0gZWxzZSBpZihldmVudC50YXJnZXQuaWQgPT09IFwibGlua0NvbnRhY3RcIilcbiAgICB7XG4gICAgICAgIF9tZW51U2VsZWN0ZWQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvLyBjbGFzcyBzZWxlY3RvcnNcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhckJhY2tncm91bmRcIikpXG4gICAge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICBpZihzaWRlYmFyQmFja2dyb3VuZCAhPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgc2lkZWJhckJhY2tncm91bmQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoc2lkZWJhck9iamVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbGlkZS1pblwiKSlcbiAgICAgICAge1xuICAgICAgICAgICAgc2lkZWJhck9iamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc2lkZWJhck9iamVjdC5jbGFzc0xpc3QuYWRkKFwic2xpZGUtb3V0XCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNpZGViYXJPYmplY3QucmVtb3ZlKCk7ICAgICBcbiAgICAgICAgICAgIHNpZGViYXJPYmplY3QgPSBudWxsOyAgICAgICBcbiAgICAgICAgfSwgMzc1KTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtaW1hZ2UtaG9sZGVyXCIpIHx8IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtaW1hZ2UtaG9sZGVyXCIpKVxuICAgIHtcbiAgICAgICAgaWYoc2lkZWJhck9iamVjdCA9PT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgc2lkZWJhckJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgICAgIHNpZGViYXJCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyQmFja2dyb3VuZFwiKTtcbiAgICAgICAgICAgIHNpZGViYXJCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoc2lkZWJhckJhY2tncm91bmQpO1xuXG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyTWVudVwiKTtcbiAgICAgICAgICAgIHNpZGViYXJPYmplY3QuY2xhc3NMaXN0LmFkZChcInNsaWRlLWluXCIpO1xuXG4gICAgICAgICAgICBsZXQgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuICAgICAgICAgICAgaWYoY3VycmVudGx5U2VsZWN0ZWQgPT09IFwibGlua0hvbWVcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWRlYmFyTWVudS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaW5rSG9tZVwiKTtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIHNpZGViYXJPYmplY3QuYXBwZW5kQ2hpbGQoc2lkZWJhck1lbnUpO1xuXG4gICAgICAgICAgICBzaWRlYmFyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG4gICAgICAgICAgICBpZihjdXJyZW50bHlTZWxlY3RlZCA9PT0gXCJsaW5rTWVudVwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpZGViYXJNZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpbmtNZW51XCIpO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9jbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgc2lkZWJhck9iamVjdC5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG5cbiAgICAgICAgICAgIHNpZGViYXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRseVNlbGVjdGVkID09PSBcImxpbmtDb250YWN0XCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2lkZWJhck1lbnUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlua0NvbnRhY3RcIik7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0LmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcblxuICAgICAgICAgICAgY29udGVudEJveC5hcHBlbmRDaGlsZChzaWRlYmFyT2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgX21lbnVTZWxlY3RlZCA9ICh0YXJnZXQpID0+IHtcbiAgICBpZih0YXJnZXQuaWQgPT09IFwic2Vjb25kYXJ5TGlua01lbnVcIilcbiAgICB7XG4gICAgICAgIGN1cnJlbnRseVNlbGVjdGVkID0gXCJsaW5rTWVudVwiO1xuICAgICAgICAvLyBIYW5kbGUgbGF5b3V0IG1vZGlmaWNhdGlvbiBsb2dpY1xuICAgICAgICBhcHBlbmRDb250ZW50KFwibGlua01lbnVcIik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZihzaWRlYmFyT2JqZWN0ICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHNpZGViYXJCYWNrZ3JvdW5kICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2lkZWJhckJhY2tncm91bmQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgc2lkZWJhckJhY2tncm91bmQgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihzaWRlYmFyT2JqZWN0LmNsYXNzTGlzdC5jb250YWlucyhcInNsaWRlLWluXCIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNpZGViYXJPYmplY3QuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2lkZWJhck9iamVjdC5jbGFzc0xpc3QuYWRkKFwic2xpZGUtb3V0XCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2lkZWJhck9iamVjdC5yZW1vdmUoKTsgICAgIFxuICAgICAgICAgICAgICAgIHNpZGViYXJPYmplY3QgPSBudWxsOyAgICAgICBcbiAgICAgICAgICAgIH0sIDM3NSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSlcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGFsbE1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51SXRlbVwiKTtcbiAgICAgICAgICAgIGFsbE1lbnVzLmZvckVhY2goKG1lbnUpID0+IHtcbiAgICAgICAgICAgICAgICBpZihtZW51LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgICAgIGN1cnJlbnRseVNlbGVjdGVkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgLy8gSGFuZGxlIGxheW91dCBtb2RpZmljYXRpb24gbG9naWNcbiAgICAgICAgICAgIGFwcGVuZENvbnRlbnQodGFyZ2V0LmlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgcHJpbnRCYXNpY0xheW91dCwgYXBwZW5kQ29udGVudCB9IiwiaW1wb3J0IFBpenphTWVudSBmcm9tICcuLi9pbWFnZXMvcGl6emEtbWVudS5wbmcnO1xuXG5jb25zdCBwcmludExheW91dCA9IChjb250ZW50Qm94KSA9PiB7XG4gICAgbGV0IGNvbnRlbnRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnRIb2xkZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1tZW51XCIpO1xuXG4gICAgbGV0IHBpenphSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwaXp6YUltYWdlLnNyYyA9IFBpenphTWVudTtcblxuICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgcGl6emFJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphSW1hZ2Uuc3JjID0gUGl6emFNZW51O1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHBpenphSW1hZ2UpO1xuICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiVGFydHVmaSBlIGZ1bmdoaVwiO1xuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5pbm5lclRleHQgPSBcIkNyZW1hIGRlIHTDsmZvbmEgbmVncmEsIHZhcmlhdCBkZSBmb3JtYXRnZXMgaSB4YW1waW55b25zLlwiO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSlcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIHBpenphSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwaXp6YUltYWdlLnNyYyA9IFBpenphTWVudTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChwaXp6YUltYWdlKTtcbiAgICBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiNCBTdGFnaW9uaVwiO1xuICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IFwiVG9tw6BxdWV0LCBtb3p6YXJlbGxhLCB4YW1waW55b25zLCBnYW1iZXMsIGd1YW5jaWFsZSBpIHBlcm5pbCBkb2zDpy5cIjtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xuICAgIHBhcmFncmFwaC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpXG4gICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICAgIG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBwaXp6YUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgcGl6emFJbWFnZS5zcmMgPSBQaXp6YU1lbnU7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocGl6emFJbWFnZSk7XG4gICAgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIlRhZ2xpYXRlbGxhXCI7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJTYWxzYSBkZSB0b23DoHF1ZXQgY29uZml0YXQgZ3JvYywgbW96emFyZWxsYSwgTW9ydGFkZWzCt2xhIGRpIEJvbG9nbmEgSUdQLCBzdHJhY2NpYXRlbGxhLCBmZXN0dWMsIHJ1Y2EgaSBvbGkgZGUgbWFuZGFyaW5hLlwiO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSlcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIHBpenphSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwaXp6YUltYWdlLnNyYyA9IFBpenphTWVudTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChwaXp6YUltYWdlKTtcbiAgICBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiQWwgcGFybWlnaWFub1wiO1xuICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IFwiVG9tw6BxdWV0LCBtb3p6YXJlbGxhLCBQYXJtaWdpYW5vIFJlZ2dpYW5vIERPUCwgYmFjw7MsIGZvcm1hdGdlIFRhbGVnZ2lvIERPUCBpIGFsZsOgYnJlZ2EuXCI7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKVxuICAgIHBhcmFncmFwaC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgICBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgcGl6emFJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphSW1hZ2Uuc3JjID0gUGl6emFNZW51O1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHBpenphSW1hZ2UpO1xuICAgIHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCI3IEZvcm1hZ2dpXCI7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJUb23DoHF1ZXQsIG1venphcmVsbGEsIFRhbGVnZ2lvIERPUCwgUGVjb3Jpbm8gUm9tYW5vIERPUCwgR29yZ29uem9sYSBET1AsIE1venphcmVsbGEgZGUgQsO6ZmFsYSBET1AsIFBhcm1pZ2lhbm8gUmVnZ2lhbm8gRE9QIGkgZm9ybWF0Z2UgTW9udGFzaW8gRE9QLlwiO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSlcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIHBpenphSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwaXp6YUltYWdlLnNyYyA9IFBpenphTWVudTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChwaXp6YUltYWdlKTtcbiAgICBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiQmlzbWFya1wiO1xuICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IFwiVG9tw6BxdWV0LCBtb3p6YXJlbGxhLCBwZXJuaWwgZG9sw6cgaSBvdS5cIjtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xuICAgIHBhcmFncmFwaC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpXG4gICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoY29udGVudEhvbGRlcik7XG59O1xuXG5leHBvcnQgeyBwcmludExheW91dCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCB7IHByaW50QmFzaWNMYXlvdXQsIGFwcGVuZENvbnRlbnQgfSBmcm9tICcuL3NjcmlwdHMvbGF5b3V0TWFuYWdlcidcblxuLy8gTG9hZCBiYXNpYyBsYXlvdXRcbnByaW50QmFzaWNMYXlvdXQoKTtcbmFwcGVuZENvbnRlbnQoXCJsaW5rSG9tZVwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==