(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"navigation {{data.nav_scroll_state}}\">\n    <div class=\"burger {{state}}\">\n      <div class=\"burger__lines\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n      <div class=\"burger__cross\">\n        <span></span>\n        <span></span>\n      </div>\n    </div>\n    <app-navigation *ngIf=\"!data.nav_location\"></app-navigation>\n  </div>\n</header>\n\n<main>\n  <div class=\"sidebar {{state}}\" appDrawer>\n    <div class=\"sidebar__menu\">\n      <app-navigation *ngIf=\"data.nav_location\"></app-navigation>\n    </div>\n    <div class=\"socials\">\n      <app-socials></app-socials>\n    </div>\n  </div>\n\n  <div class=\"ap-background-top\">\n    <img src=\"assets/images/ap-corner.png\" alt=\"abstract-graphic\">\n  </div>\n\n  <div class=\"ap-container\">\n    <div class=\"ap-info\">\n      <div class=\"ap-info__title\">Hi, my name is Vlad Secrier</div>\n      <div class=\"ap-info__activity\">Web Designer & Developer</div>\n      <div class=\"ap-info__text\">\n        <p>I am a professional web developer, this is my bread, I develop responsive and optimized websites. I create pages mostly on a clean layout without garbage for already existing projects. The stack of technologies that I apply is extensive, but everything is related to web development. Design in Photoshop, illustrator or adobeXD, the frontend, of course, Html, CSS, javascript, also less/sass, BEM, React with Redux, Angular or jquery. When it comes to backend development, my most favourite is Laravel framework or vanilla php. In my spare time, I like to listen to funk or jazz music or simply visit the gym. I appreciate the mutual trust and long-term cooperation, so if you`re looking for an honest, hard-working partner, hit the button below and let`s get started.</p>\n      </div>\n      <div class=\"ap-info__button-wrapper\">\n        <button class=\"ap-info__button\" \n             libParticleEffectButton \n            [pHidden]=\"hidden\" \n            pColor='#6C52F8'\n             (click)=\"data.routeDelay(); hidden=!hidden\">\n             Lets get started\n        </button>\n      </div>\n    </div>\n    <div class=\"ap-image\">\n      <img src=\"assets/images/ap-vlad-secrier.png\" alt=\"vlad-secrier-photo\">\n    </div>\n  </div>\n\n</main>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Variables */\n/* Mixins */\n@font-face {\n  font-family: \"Fontello\";\n  src: url(\"/assets/fonts/fontello.eot\");\n  src: url(\"/assets/fonts/fontello.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/fontello.woff\") format(\"woff\"), url(\"/assets/fonts/fontello.ttf\") format(\"truetype\"), url(\"/assets/fonts/fontello.svg?#webfont\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: \"Arial-light\";\n  src: url(\"/assets/fonts/arial-light.eot\");\n  src: url(\"/assets/fonts/arial-light.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/arial-light.woff\") format(\"woff\"), url(\"/assets/fonts/arial-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/arial-light.svg?#webfont\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\nrouter-outlet ~ * {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\nbody {\n  overflow-x: hidden;\n  overflow-y: scroll; }\nhtml,\nbody,\ndiv,\nul,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nnav,\nbutton,\na,\ninput,\ntextarea {\n  margin: 0;\n  padding: 0;\n  color: #212c43;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  font-weight: normal;\n  list-style: none;\n  line-height: 30px;\n  text-decoration: none;\n  box-sizing: border-box;\n  font-family: \"Arial\", sans-serif; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan {\n  font-size: inherit;\n  color: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit; }\nmain {\n  padding-left: 76px; }\n@media screen and (max-width: 575px) {\n    main {\n      padding-left: 0; } }\n.navigation {\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  position: fixed;\n  padding-top: 90px;\n  transition: all 0.15s linear; }\n.navigation__container {\n    width: 100%;\n    margin: 0 auto;\n    max-width: 1920px;\n    padding-left: 140px; }\n.navigation__list {\n    width: 100%;\n    max-width: 533px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n.navigation__link {\n    color: #475850;\n    font-size: 18px;\n    line-height: 21px;\n    padding-bottom: 5px;\n    text-transform: uppercase;\n    transition: all 0.35s linear;\n    border-bottom: 2px solid transparent; }\n.navigation__link:hover {\n      border-bottom: 2px solid #fca92c; }\n.navigation__link--active {\n      border-bottom: 2px solid #fca92c; }\n.navigation__link--unique {\n      width: 213px;\n      height: 48px;\n      color: #fff;\n      border-radius: 25px;\n      display: inline-block;\n      background-color: #fca92c;\n      text-align: center;\n      line-height: 48px;\n      border-bottom: none; }\n.navigation__link--unique:hover {\n        border-bottom: none; }\n.navigation.active {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background-color: rgba(255, 255, 255, 0.9);\n    transition: all 0.15s linear; }\n@media screen and (max-width: 1899px) {\n    .navigation__container {\n      padding-right: 15px; } }\n@media screen and (max-width: 767px) {\n    .navigation__container {\n      padding-left: 96px; } }\n@media screen and (max-width: 575px) {\n    .navigation {\n      padding: 15px;\n      display: flex;\n      justify-content: flex-end; }\n      .navigation__container {\n        padding-left: 0;\n        padding-right: 0; }\n      .navigation__list {\n        flex-direction: column; }\n      .navigation__link {\n        margin-top: 15px;\n        margin-bottom: 15px;\n        display: inline-block; } }\n.sidebar {\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 76px;\n  height: 100%;\n  position: fixed;\n  background-color: #fffceb;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.sidebar__menu {\n    display: none; }\n@media screen and (max-width: 575px) {\n    .sidebar {\n      z-index: 2;\n      width: 230px;\n      left: -230px;\n      padding-top: 50px;\n      padding-bottom: 50px;\n      flex-direction: column;\n      justify-content: space-between;\n      transition: all 0.35s linear; }\n      .sidebar__menu {\n        display: block; }\n      .sidebar.active {\n        left: 0;\n        transition: all 0.35s linear; } }\n.socials__link {\n  width: 54px;\n  height: 54px;\n  margin: 20px 0;\n  line-height: 54px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.15); }\n.socials__link:hover .icon {\n    color: #212c43;\n    transition: all 0.15s linear; }\n@media screen and (max-width: 575px) {\n  .socials {\n    width: 80%; }\n    .socials__container {\n      display: flex;\n      justify-content: space-between; } }\n@media screen and (max-width: 575px) {\n  .burger {\n    width: 60px;\n    height: 60px;\n    border-radius: 5px;\n    background-color: #fca92c;\n    position: relative;\n    padding: 10px 12px;\n    cursor: pointer; }\n    .burger span {\n      display: block;\n      background: #fff;\n      border-radius: 2px; }\n    .burger * {\n      transition: 0.25s ease-in-out;\n      box-sizing: border-box; }\n    .burger__lines {\n      width: 60%;\n      height: 70%;\n      position: absolute;\n      pointer-events: none; }\n      .burger__lines span {\n        width: 100%;\n        height: 4px;\n        position: relative;\n        margin: 7px 0; }\n        .burger__lines span:nth-child(1) {\n          transition-delay: 0.5s; }\n        .burger__lines span:nth-child(2) {\n          transition-delay: 0.625s; }\n        .burger__lines span:nth-child(3) {\n          transition-delay: 0.75s; }\n    .burger__cross {\n      height: 70%;\n      width: 70%;\n      left: 3px;\n      right: 0;\n      margin: auto;\n      position: absolute;\n      pointer-events: none;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .burger__cross span:nth-child(1) {\n        height: 0%;\n        width: 4px;\n        position: absolute;\n        top: 10%;\n        left: 41%;\n        transition-delay: 0s; }\n      .burger__cross span:nth-child(2) {\n        width: 0%;\n        height: 4px;\n        position: absolute;\n        left: 7%;\n        top: 46%;\n        transition-delay: 0.25s; }\n    .burger.active .burger__lines span {\n      width: 0%; }\n      .burger.active .burger__lines span:nth-child(1) {\n        transition-delay: 0s; }\n      .burger.active .burger__lines span:nth-child(2) {\n        transition-delay: 0.125s; }\n      .burger.active .burger__lines span:nth-child(3) {\n        transition-delay: 0.25s; }\n    .burger.active .burger__cross span:nth-child(1) {\n      height: 80%;\n      transition-delay: 0.625s; }\n    .burger.active .burger__cross span:nth-child(2) {\n      width: 80%;\n      transition-delay: 0.375s; } }\n.icon {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  color: #e6e5e5;\n  text-decoration: inherit;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  transition: all 0.15s linear;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.body-portfolio .socials__link {\n  transition: all 0.35s linear; }\n.body-portfolio .socials__link:hover {\n    background-color: #fca92c;\n    transition: all 0.35s linear; }\n.body-portfolio .socials__link:hover .icon {\n      color: #ffffff; }\n@media screen and (max-width: 575px) {\n  .body-portfolio .navigation__link {\n    color: #ffffff; } }\n::-webkit-scrollbar {\n  width: 8px;\n  height: 14px; }\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px; }\n::-webkit-scrollbar-corner {\n  background: transparent; }\n::-webkit-scrollbar-track {\n  background: #fffceb;\n  border: 0px none #ffffff;\n  border-radius: 50px; }\n::-webkit-scrollbar-track:hover {\n  background: #fffceb; }\n::-webkit-scrollbar-track:active {\n  background: #fffceb; }\n::-webkit-scrollbar-thumb {\n  background: #fe6e49;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n  transition: all 0.15s linear; }\n::-webkit-scrollbar-thumb:hover {\n  background: #ff3c0e;\n  transition: all 0.15s linear; }\n::-webkit-scrollbar-thumb:active {\n  background: #ff3c0e;\n  transition: all 0.15s linear; }\n::-webkit-input-placeholder {\n  color: #9fa0bf; }\n::-moz-placeholder {\n  color: #9fa0bf; }\n:-ms-input-placeholder {\n  color: #9fa0bf; }\n.sidebar {\n  background-color: #F1F5FF; }\n.ap-background-top {\n  top: 0;\n  right: 0;\n  z-index: 0;\n  display: flex;\n  position: fixed;\n  align-items: flex-start; }\n.ap-background-top img {\n    width: 100%; }\n.ap-container {\n  z-index: 1;\n  display: flex;\n  position: relative;\n  margin: 200px auto 60px;\n  max-width: 1614px;\n  padding-left: 120px;\n  padding-right: 15px;\n  align-items: center;\n  justify-content: space-between; }\n.ap-info {\n  width: 100%;\n  max-width: 634px; }\n.ap-info__title {\n    font-size: 70px;\n    line-height: 80px;\n    font-weight: bold; }\n.ap-info__activity {\n    font-size: 40px;\n    margin-top: 17px;\n    line-height: 50px;\n    font-family: 'Arial-light', sans-serif; }\n.ap-info__text {\n    font-size: 18px;\n    margin-top: 40px;\n    line-height: 36px; }\n.ap-info__button {\n    width: 350px;\n    height: 80px;\n    color: #fff;\n    display: block;\n    font-size: 22px;\n    margin-top: 50px;\n    line-height: 80px;\n    text-align: center;\n    border-radius: 40px;\n    cursor: pointer;\n    background-color: #6C52F8;\n    text-transform: uppercase; }\n.ap-image {\n  width: 787px;\n  height: 750px; }\n@media screen and (max-width: 1899px) {\n  .ap-background-top {\n    width: calc(100px + 20.41666667vw); }\n  .ap-background-bottom {\n    width: calc(100px + 14.79166667vw); }\n  .ap-container {\n    margin: 260px auto 30px;\n    padding-left: calc(15px + 5.46875vw);\n    align-items: flex-start; }\n  .ap-info {\n    max-width: calc(100px + 27.8125vw); }\n    .ap-info__title {\n      font-size: calc(10px + 2.72727273vw);\n      line-height: calc(16px + 2.90909091vw); }\n    .ap-info__activity {\n      font-size: calc(10px + 1.36363636vw);\n      font-size: calc(12px + 1.72727273vw); }\n    .ap-info__text {\n      margin-top: calc(10px + 1.5625vw); }\n  .ap-image {\n    width: calc(100px + 35.78125vw);\n    height: calc(100px + 33.85416667vw); }\n    .ap-image img {\n      width: 100%; } }\n@media screen and (max-width: 991px) {\n  .ap-background-top {\n    width: 492px;\n    opacity: 0.8; }\n  .ap-background-bottom {\n    width: 260px;\n    opacity: 0.8; }\n  .ap-container {\n    padding-left: 15px;\n    flex-direction: column; }\n  .ap-info {\n    max-width: 100%; }\n    .ap-info__title {\n      font-size: 40px;\n      line-height: 50px; }\n    .ap-info__activity {\n      font-size: 30px;\n      font-size: 40px; }\n    .ap-info__text {\n      margin-top: 30px; }\n    .ap-info__button-wrapper {\n      display: flex;\n      justify-content: center; }\n    .ap-info__button {\n      width: 240px;\n      height: 70px;\n      font-size: 18px;\n      line-height: 70px;\n      margin: 50px auto 0; }\n  .ap-image {\n    width: 70%;\n    height: auto;\n    margin: 50px auto 0; } }\n@media screen and (max-width: 575px) {\n  .ap-background-bottom {\n    left: 0; }\n  .ap-container {\n    margin-top: 150px; } }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/general.service */ "./src/app/shared/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(data) {
        this.data = data;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.resizeMenuLocation();
        this.data.navigationStateOnScroll();
        this.data.current_state.subscribe(function (state) { return _this.state = state; });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (@routeAnimation.start)=\"animationStarted($event)\" [@routeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\r\n    <router-outlet #o=\"outlet\"></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    AppComponent.prototype.animationStarted = function () {
        var interval = setInterval(function () {
            window.pageYOffset <= 40 ? clearInterval(interval) : window.scrollBy(0, -40);
        }, 1);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("routeAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("* => *", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, zIndex: "4" })], {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({}), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.5s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({}))], {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(":enter", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ backgroundColor: "#fff" }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("1.0s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                        ], { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_particle_effect_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-particle-effect-button */ "./node_modules/angular-particle-effect-button/fesm5/angular-particle-effect-button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navigation/navigation.component */ "./src/app/shared/navigation/navigation.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _shared_socials_socials_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/socials/socials.component */ "./src/app/shared/socials/socials.component.ts");
/* harmony import */ var _shared_directives_drawer_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/directives/drawer.directive */ "./src/app/shared/directives/drawer.directive.ts");
/* harmony import */ var _shared_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/auth.interceptor */ "./src/app/shared/services/auth.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
    },
    { path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"]
    },
    { path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
    },
    { path: 'portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"]
    },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _shared_socials_socials_component__WEBPACK_IMPORTED_MODULE_14__["SocialsComponent"],
                _shared_directives_drawer_directive__WEBPACK_IMPORTED_MODULE_15__["DrawerDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                angular_particle_effect_button__WEBPACK_IMPORTED_MODULE_2__["ParticleEffectButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    onSameUrlNavigation: 'reload',
                    scrollPositionRestoration: 'disabled',
                    anchorScrolling: 'disabled',
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-CSRF-TOKEN'
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _shared_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"navigation {{data.nav_scroll_state}}\">\n    <div class=\"burger {{state}}\">\n      <div class=\"burger__lines\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n      <div class=\"burger__cross\">\n        <span></span>\n        <span></span>\n      </div>\n    </div>\n    <app-navigation *ngIf=\"!data.nav_location\"></app-navigation>\n  </div>\n</header>\n\n<main>\n  <div class=\"sidebar {{state}}\" appDrawer>\n    <div class=\"sidebar__menu\">\n      <app-navigation *ngIf=\"data.nav_location\"></app-navigation>\n    </div>\n    <div class=\"socials\">\n      <app-socials></app-socials>\n    </div>\n  </div>\n\n  <div class=\"cp-background\">\n    <img src=\"assets/images/cp-corner.png\" alt=\"abstract-graphic\">\n  </div>\n\n  <div class=\"cp-container\">\n    <div class=\"cp-image\">\n      <img src=\"assets/images/cp-phone.png\" alt=\"mpbile-phone\">\n    </div>\n    <div class=\"cp-info\">\n      <div class=\"cp-info__title\">Get in touch</div>\n      <div class=\"cp-info__text\">\n        <p><strong>Let`s talk about your project.</strong> I really appreciate you taking the time to get in touch. Please fill in the form below or contact me via email.</p>\n      </div>\n      <form class=\"cp-form\" name=\"form\" (ngSubmit)=\"contactForm.form.valid && onSubmit()\" #contactForm=\"ngForm\" novalidate>\n        <div class=\"cp-form__short\" [ngClass]=\"{ 'is-invalid': firstName.invalid && firstName.dirty }\" >\n          <input class=\"cp-form__input\" \n                  type=\"text\" \n                  required \n                  minlength=\"2\"\n                  name=\"firstName\" \n                  [(ngModel)]=\"model.firstName\" \n                  #firstName=\"ngModel\" \n                  placeholder=\"First Name\">\n          <div *ngIf=\"firstName.invalid && firstName.dirty\" class=\"cp-form__error\">\n            <p *ngIf=\"firstName.errors.required\">First name is required</p>\n            <p *ngIf=\"firstName.errors.minlength\"> First name must be at least 2 characters long.</p>\n          </div>\n        </div>\n        <div class=\"cp-form__short\" [ngClass]=\"{ 'is-invalid': lastName.invalid && lastName.dirty }\">\n          <input class=\"cp-form__input\" \n                  type=\"text\" \n                  required \n                  minlength=\"2\"\n                  name=\"lastName\" \n                  [(ngModel)]=\"model.lastName\" \n                  #lastName=\"ngModel\" \n                  placeholder=\"Last Name\">\n          <div *ngIf=\"lastName.invalid && lastName.dirty\" class=\"cp-form__error\">\n            <p *ngIf=\"lastName.errors.required\">Last name is required</p>\n            <p *ngIf=\"lastName.errors.minlength\"> Last name must be at least 2 characters long.</p>\n          </div>\n        </div>\n        <div class=\"cp-form__long\" [ngClass]=\"{ 'is-invalid': email.invalid && email.dirty }\">\n          <input class=\"cp-form__input\"\n                  type=\"email\" \n                  email \n                  required \n                  minlength=\"3\"\n                  name=\"email\" \n                  [(ngModel)]=\"model.email\" \n                  #email=\"ngModel\"\n                  placeholder=\"Email Address\">\n          <div *ngIf=\"email.invalid && email.dirty\" class=\"cp-form__error\">\n            <p *ngIf=\"email.errors.required\">Email is required</p>\n            <p *ngIf=\"email.errors.email\">Email must be a valid email address</p>\n            <p *ngIf=\"email.errors.minlength\"> Email must be at least 3 characters long.</p>\n          </div>\n        </div>\n        <div class=\"cp-form__long\" [ngClass]=\"{ 'is-invalid': message.invalid && message.dirty }\">\n          <textarea class=\"cp-form__textarea\" \n                    type=\"textarea\" \n                    placeholder=\"Your Message\" \n                    name=\"message\" \n                    minlength=\"10\"\n                    #message=\"ngModel\" \n                    [(ngModel)]=\"model.message\"\n                    required>\n          </textarea>\n          <div *ngIf=\"message.invalid && message.dirty\" class=\"cp-form__error cp-form__error--message\">\n            <p *ngIf=\"message.errors.required\">Message is required</p>\n            <p *ngIf=\"message.errors.minlength\"> Message must be at least 10 characters long.</p>\n          </div>\n        </div>\n        <button [disabled]=\"contactForm.invalid\" class=\"cp-form__button\" type=\"submit\">Submit</button>\n      </form>\n    </div>\n  </div>\n\n</main>\n\n<footer class=\"cp-footer\">\n  <div class=\"cp-footer__email\">Or get in touch via email:\n    <a class=\"cp-footer__link\" href=\"mailto:mymailboxmd@gmail.com\">mymailboxmd@gmail.com</a>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Variables */\n/* Mixins */\n@font-face {\n  font-family: \"Fontello\";\n  src: url(\"/assets/fonts/fontello.eot\");\n  src: url(\"/assets/fonts/fontello.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/fontello.woff\") format(\"woff\"), url(\"/assets/fonts/fontello.ttf\") format(\"truetype\"), url(\"/assets/fonts/fontello.svg?#webfont\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: \"Arial-light\";\n  src: url(\"/assets/fonts/arial-light.eot\");\n  src: url(\"/assets/fonts/arial-light.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/arial-light.woff\") format(\"woff\"), url(\"/assets/fonts/arial-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/arial-light.svg?#webfont\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\nrouter-outlet ~ * {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\nbody {\n  overflow-x: hidden;\n  overflow-y: scroll; }\nhtml,\nbody,\ndiv,\nul,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nnav,\nbutton,\na,\ninput,\ntextarea {\n  margin: 0;\n  padding: 0;\n  color: #212c43;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  font-weight: normal;\n  list-style: none;\n  line-height: 30px;\n  text-decoration: none;\n  box-sizing: border-box;\n  font-family: \"Arial\", sans-serif; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan {\n  font-size: inherit;\n  color: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit; }\nmain {\n  padding-left: 76px; }\n@media screen and (max-width: 575px) {\n    main {\n      padding-left: 0; } }\n.navigation {\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  position: fixed;\n  padding-top: 90px;\n  transition: all 0.15s linear; }\n.navigation__container {\n    width: 100%;\n    margin: 0 auto;\n    max-width: 1920px;\n    padding-left: 140px; }\n.navigation__list {\n    width: 100%;\n    max-width: 533px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n.navigation__link {\n    color: #475850;\n    font-size: 18px;\n    line-height: 21px;\n    padding-bottom: 5px;\n    text-transform: uppercase;\n    transition: all 0.35s linear;\n    border-bottom: 2px solid transparent; }\n.navigation__link:hover {\n      border-bottom: 2px solid #fca92c; }\n.navigation__link--active {\n      border-bottom: 2px solid #fca92c; }\n.navigation__link--unique {\n      width: 213px;\n      height: 48px;\n      color: #fff;\n      border-radius: 25px;\n      display: inline-block;\n      background-color: #fca92c;\n      text-align: center;\n      line-height: 48px;\n      border-bottom: none; }\n.navigation__link--unique:hover {\n        border-bottom: none; }\n.navigation.active {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background-color: rgba(255, 255, 255, 0.9);\n    transition: all 0.15s linear; }\n@media screen and (max-width: 1899px) {\n    .navigation__container {\n      padding-right: 15px; } }\n@media screen and (max-width: 767px) {\n    .navigation__container {\n      padding-left: 96px; } }\n@media screen and (max-width: 575px) {\n    .navigation {\n      padding: 15px;\n      display: flex;\n      justify-content: flex-end; }\n      .navigation__container {\n        padding-left: 0;\n        padding-right: 0; }\n      .navigation__list {\n        flex-direction: column; }\n      .navigation__link {\n        margin-top: 15px;\n        margin-bottom: 15px;\n        display: inline-block; } }\n.sidebar {\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 76px;\n  height: 100%;\n  position: fixed;\n  background-color: #fffceb;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.sidebar__menu {\n    display: none; }\n@media screen and (max-width: 575px) {\n    .sidebar {\n      z-index: 2;\n      width: 230px;\n      left: -230px;\n      padding-top: 50px;\n      padding-bottom: 50px;\n      flex-direction: column;\n      justify-content: space-between;\n      transition: all 0.35s linear; }\n      .sidebar__menu {\n        display: block; }\n      .sidebar.active {\n        left: 0;\n        transition: all 0.35s linear; } }\n.socials__link {\n  width: 54px;\n  height: 54px;\n  margin: 20px 0;\n  line-height: 54px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.15); }\n.socials__link:hover .icon {\n    color: #212c43;\n    transition: all 0.15s linear; }\n@media screen and (max-width: 575px) {\n  .socials {\n    width: 80%; }\n    .socials__container {\n      display: flex;\n      justify-content: space-between; } }\n@media screen and (max-width: 575px) {\n  .burger {\n    width: 60px;\n    height: 60px;\n    border-radius: 5px;\n    background-color: #fca92c;\n    position: relative;\n    padding: 10px 12px;\n    cursor: pointer; }\n    .burger span {\n      display: block;\n      background: #fff;\n      border-radius: 2px; }\n    .burger * {\n      transition: 0.25s ease-in-out;\n      box-sizing: border-box; }\n    .burger__lines {\n      width: 60%;\n      height: 70%;\n      position: absolute;\n      pointer-events: none; }\n      .burger__lines span {\n        width: 100%;\n        height: 4px;\n        position: relative;\n        margin: 7px 0; }\n        .burger__lines span:nth-child(1) {\n          transition-delay: 0.5s; }\n        .burger__lines span:nth-child(2) {\n          transition-delay: 0.625s; }\n        .burger__lines span:nth-child(3) {\n          transition-delay: 0.75s; }\n    .burger__cross {\n      height: 70%;\n      width: 70%;\n      left: 3px;\n      right: 0;\n      margin: auto;\n      position: absolute;\n      pointer-events: none;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .burger__cross span:nth-child(1) {\n        height: 0%;\n        width: 4px;\n        position: absolute;\n        top: 10%;\n        left: 41%;\n        transition-delay: 0s; }\n      .burger__cross span:nth-child(2) {\n        width: 0%;\n        height: 4px;\n        position: absolute;\n        left: 7%;\n        top: 46%;\n        transition-delay: 0.25s; }\n    .burger.active .burger__lines span {\n      width: 0%; }\n      .burger.active .burger__lines span:nth-child(1) {\n        transition-delay: 0s; }\n      .burger.active .burger__lines span:nth-child(2) {\n        transition-delay: 0.125s; }\n      .burger.active .burger__lines span:nth-child(3) {\n        transition-delay: 0.25s; }\n    .burger.active .burger__cross span:nth-child(1) {\n      height: 80%;\n      transition-delay: 0.625s; }\n    .burger.active .burger__cross span:nth-child(2) {\n      width: 80%;\n      transition-delay: 0.375s; } }\n.icon {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  color: #e6e5e5;\n  text-decoration: inherit;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  transition: all 0.15s linear;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.body-portfolio .socials__link {\n  transition: all 0.35s linear; }\n.body-portfolio .socials__link:hover {\n    background-color: #fca92c;\n    transition: all 0.35s linear; }\n.body-portfolio .socials__link:hover .icon {\n      color: #ffffff; }\n@media screen and (max-width: 575px) {\n  .body-portfolio .navigation__link {\n    color: #ffffff; } }\n::-webkit-scrollbar {\n  width: 8px;\n  height: 14px; }\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px; }\n::-webkit-scrollbar-corner {\n  background: transparent; }\n::-webkit-scrollbar-track {\n  background: #fffceb;\n  border: 0px none #ffffff;\n  border-radius: 50px; }\n::-webkit-scrollbar-track:hover {\n  background: #fffceb; }\n::-webkit-scrollbar-track:active {\n  background: #fffceb; }\n::-webkit-scrollbar-thumb {\n  background: #fe6e49;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n  transition: all 0.15s linear; }\n::-webkit-scrollbar-thumb:hover {\n  background: #ff3c0e;\n  transition: all 0.15s linear; }\n::-webkit-scrollbar-thumb:active {\n  background: #ff3c0e;\n  transition: all 0.15s linear; }\n::-webkit-input-placeholder {\n  color: #9fa0bf; }\n::-moz-placeholder {\n  color: #9fa0bf; }\n:-ms-input-placeholder {\n  color: #9fa0bf; }\n.sidebar {\n  background-color: #D4DBFE; }\n.cp-background {\n  top: 0;\n  right: 0;\n  z-index: 0;\n  position: absolute; }\n.cp-container {\n  max-width: 1510px;\n  padding-left: 15px;\n  padding-right: 165px;\n  margin: 208px auto 0;\n  display: flex;\n  z-index: 1;\n  position: relative;\n  justify-content: space-between; }\n.cp-image {\n  width: 633px;\n  height: 633px;\n  display: flex;\n  margin-top: 40px;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1ECFE; }\n.cp-image img {\n    width: 100%; }\n.cp-info {\n  width: 100%;\n  max-width: 624px; }\n.cp-info__title {\n    font-size: 70px;\n    line-height: 80px;\n    font-weight: bold; }\n.cp-info__text {\n    font-size: 18px;\n    margin-top: 20px;\n    line-height: 36px; }\n.cp-form {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n.cp-form__short {\n    width: 100%;\n    position: relative;\n    padding: 70px 20px 15px;\n    max-width: 280px;\n    transition: all 0.35s linear;\n    border-bottom: 2px solid #D7DFEE; }\n.cp-form__short.is-invalid {\n      transition: all 0.35s linear;\n      border-bottom: 2px solid #fc2c2c; }\n.cp-form__long {\n    width: 100%;\n    position: relative;\n    padding: 70px 20px 15px;\n    transition: all 0.35s linear;\n    border-bottom: 2px solid #D7DFEE; }\n.cp-form__long.is-invalid {\n      transition: all 0.35s linear;\n      border-bottom: 2px solid #fc2c2c; }\n.cp-form__input {\n    width: 100%;\n    transition: all 0.15s linear;\n    font-family: 'Arial-light', sans-serif; }\n.cp-form__input:focus {\n      padding-left: 15px;\n      transition: all 0.15s linear; }\n.cp-form__textarea {\n    width: 100%;\n    resize: none;\n    transition: all 0.15s linear;\n    font-family: 'Arial-light', sans-serif; }\n.cp-form__textarea:focus {\n      padding-left: 15px;\n      transition: all 0.15s linear; }\n.cp-form__button {\n    width: 300px;\n    height: 60px;\n    color: #fff;\n    display: block;\n    cursor: pointer;\n    font-size: 22px;\n    line-height: 60px;\n    text-align: center;\n    border-radius: 30px;\n    margin: 70px 0 0 auto;\n    background-color: #6C52F8;\n    text-transform: uppercase; }\n.cp-form__button:disabled {\n      cursor: not-allowed;\n      background-color: #ab9ff3; }\n.cp-form__error {\n    color: #fc2c2c;\n    top: 125px;\n    font-size: 14px;\n    position: absolute;\n    line-height: 22px; }\n.cp-form__error--message {\n      top: 158px; }\n.cp-form__error p {\n      display: block; }\n.cp-footer {\n  padding: 150px 65px 35px; }\n.cp-footer__email {\n    color: #C0C1D4;\n    text-align: right;\n    font-family: 'Arial-light', sans-serif; }\n.cp-footer__link {\n    color: #252D47;\n    font-family: 'Arial', sans-serif; }\n@media screen and (max-width: 1899px) {\n  .cp-container {\n    padding-right: 80px; }\n  .cp-image {\n    width: calc(200px + 22.55208333vw);\n    height: calc(200px + 22.55208333vw); }\n  .cp-info {\n    margin: 0 auto;\n    max-width: calc(300px + 16.875vw); }\n  .cp-form__short {\n    max-width: calc(100px + 9.375vw); } }\n@media screen and (max-width: 1199px) {\n  .cp-container {\n    padding-right: 15px;\n    flex-direction: column; }\n  .cp-image {\n    order: 2;\n    width: 633px;\n    height: 633px;\n    display: none; }\n  .cp-info {\n    order: 1;\n    max-width: 90%; }\n  .cp-form__short {\n    max-width: 48%; } }\n@media screen and (max-width: 991px) {\n  .cp-background {\n    opacity: 0.8; }\n  .cp-info {\n    max-width: 100%; } }\n@media screen and (max-width: 575px) {\n  .cp-info__title {\n    font-size: 40px; }\n  .cp-form__short {\n    max-width: 100%; }\n  .cp-form__button {\n    margin: 70px auto 0; }\n  .cp-footer {\n    padding: 50px 15px 35px; }\n    .cp-footer__email {\n      text-align: center; } }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(data, http) {
        this.data = data;
        this.http = http;
        this.model = {};
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.resizeMenuLocation();
        this.data.navigationStateOnScroll();
        this.data.current_state.subscribe(function (state) { return _this.state = state; });
    };
    ContactComponent.prototype.onSubmit = function () {
        // console.log("GET WITH HEADERS");
        var _this = this;
        this.http.post("http://askcoder.tech/external/store", this.model).subscribe(function (res) {
            _this.submitForm.reset();
            // console.log(res);
        }, function (msg) { return console.error("Error: " + msg.status + " " + msg.statusText); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("contactForm"),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "submitForm", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-contact",
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t<div class=\"navigation {{data.nav_scroll_state}}\">\n\t\t<div class=\"burger {{state}}\">\n\t\t\t<div class=\"burger__lines\">\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t</div>\n\t\t\t<div class=\"burger__cross\">\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-navigation *ngIf=\"!data.nav_location\"></app-navigation>\n\t</div>\n</header>\n\n<main>\n\t<div class=\"sidebar {{state}}\" appDrawer>\n\t\t<div class=\"sidebar__menu\">\n\t\t\t<app-navigation *ngIf=\"data.nav_location\"></app-navigation>\n\t\t</div>\n\t\t<div class=\"socials\">\n\t\t\t<app-socials></app-socials>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"hp-container\">\n\t\t<div class=\"hp-info\">\n\t\t\t<h1 class=\"hp-info__title\">Explore the\n\t\t\t\t<br> benefits of hiring a\n\t\t\t\t<br> pro developer</h1>\n\t\t\t<div class=\"hp-info__text\">\n\t\t\t\t<p>Web development is a mixture of art and technology, focused on capturing the audience's attention and establishing credibility. Today, the user experience is more important than ever, the user impression after visiting your page, the main question is whether the user will want to return to you or not. I'm here to offer my experience and knowledge obtained after spending countless hours of studying the industry and implementing projects. Just, click the button below and let`s get started.</p>\n\t\t\t</div>\n\t\t\t<button class=\"hp-info__button\" \n\t\t\t\t \tlibParticleEffectButton \n\t\t\t\t\t[pHidden]=\"hidden\" \n\t\t\t\t\tpColor='#A36DF3'\n\t\t\t\t \t(click)=\"data.routeDelay(); hidden=!hidden\">\n\t\t\t\t \tLets get started\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"hp-image\">\n\t\t\t<div class=\"hp-image__text\">Innovative & Effective\n\t\t\t\t<span>it solutions</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</main>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Variables */\n/* Mixins */\n@font-face {\n  font-family: \"Fontello\";\n  src: url(\"/assets/fonts/fontello.eot\");\n  src: url(\"/assets/fonts/fontello.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/fontello.woff\") format(\"woff\"), url(\"/assets/fonts/fontello.ttf\") format(\"truetype\"), url(\"/assets/fonts/fontello.svg?#webfont\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: \"Arial-light\";\n  src: url(\"/assets/fonts/arial-light.eot\");\n  src: url(\"/assets/fonts/arial-light.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/arial-light.woff\") format(\"woff\"), url(\"/assets/fonts/arial-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/arial-light.svg?#webfont\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\nrouter-outlet ~ * {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\nbody {\n  overflow-x: hidden;\n  overflow-y: scroll; }\nhtml,\nbody,\ndiv,\nul,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nnav,\nbutton,\na,\ninput,\ntextarea {\n  margin: 0;\n  padding: 0;\n  color: #212c43;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  font-weight: normal;\n  list-style: none;\n  line-height: 30px;\n  text-decoration: none;\n  box-sizing: border-box;\n  font-family: \"Arial\", sans-serif; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan {\n  font-size: inherit;\n  color: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit; }\nmain {\n  padding-left: 76px; }\n@media screen and (max-width: 575px) {\n    main {\n      padding-left: 0; } }\n.navigation {\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  position: fixed;\n  padding-top: 90px;\n  transition: all 0.15s linear; }\n.navigation__container {\n    width: 100%;\n    margin: 0 auto;\n    max-width: 1920px;\n    padding-left: 140px; }\n.navigation__list {\n    width: 100%;\n    max-width: 533px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n.navigation__link {\n    color: #475850;\n    font-size: 18px;\n    line-height: 21px;\n    padding-bottom: 5px;\n    text-transform: uppercase;\n    transition: all 0.35s linear;\n    border-bottom: 2px solid transparent; }\n.navigation__link:hover {\n      border-bottom: 2px solid #fca92c; }\n.navigation__link--active {\n      border-bottom: 2px solid #fca92c; }\n.navigation__link--unique {\n      width: 213px;\n      height: 48px;\n      color: #fff;\n      border-radius: 25px;\n      display: inline-block;\n      background-color: #fca92c;\n      text-align: center;\n      line-height: 48px;\n      border-bottom: none; }\n.navigation__link--unique:hover {\n        border-bottom: none; }\n.navigation.active {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background-color: rgba(255, 255, 255, 0.9);\n    transition: all 0.15s linear; }\n@media screen and (max-width: 1899px) {\n    .navigation__container {\n      padding-right: 15px; } }\n@media screen and (max-width: 767px) {\n    .navigation__container {\n      padding-left: 96px; } }\n@media screen and (max-width: 575px) {\n    .navigation {\n      padding: 15px;\n      display: flex;\n      justify-content: flex-end; }\n      .navigation__container {\n        padding-left: 0;\n        padding-right: 0; }\n      .navigation__list {\n        flex-direction: column; }\n      .navigation__link {\n        margin-top: 15px;\n        margin-bottom: 15px;\n        display: inline-block; } }\n.sidebar {\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 76px;\n  height: 100%;\n  position: fixed;\n  background-color: #fffceb;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.sidebar__menu {\n    display: none; }\n@media screen and (max-width: 575px) {\n    .sidebar {\n      z-index: 2;\n      width: 230px;\n      left: -230px;\n      padding-top: 50px;\n      padding-bottom: 50px;\n      flex-direction: column;\n      justify-content: space-between;\n      transition: all 0.35s linear; }\n      .sidebar__menu {\n        display: block; }\n      .sidebar.active {\n        left: 0;\n        transition: all 0.35s linear; } }\n.socials__link {\n  width: 54px;\n  height: 54px;\n  margin: 20px 0;\n  line-height: 54px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.15); }\n.socials__link:hover .icon {\n    color: #212c43;\n    transition: all 0.15s linear; }\n@media screen and (max-width: 575px) {\n  .socials {\n    width: 80%; }\n    .socials__container {\n      display: flex;\n      justify-content: space-between; } }\n@media screen and (max-width: 575px) {\n  .burger {\n    width: 60px;\n    height: 60px;\n    border-radius: 5px;\n    background-color: #fca92c;\n    position: relative;\n    padding: 10px 12px;\n    cursor: pointer; }\n    .burger span {\n      display: block;\n      background: #fff;\n      border-radius: 2px; }\n    .burger * {\n      transition: 0.25s ease-in-out;\n      box-sizing: border-box; }\n    .burger__lines {\n      width: 60%;\n      height: 70%;\n      position: absolute;\n      pointer-events: none; }\n      .burger__lines span {\n        width: 100%;\n        height: 4px;\n        position: relative;\n        margin: 7px 0; }\n        .burger__lines span:nth-child(1) {\n          transition-delay: 0.5s; }\n        .burger__lines span:nth-child(2) {\n          transition-delay: 0.625s; }\n        .burger__lines span:nth-child(3) {\n          transition-delay: 0.75s; }\n    .burger__cross {\n      height: 70%;\n      width: 70%;\n      left: 3px;\n      right: 0;\n      margin: auto;\n      position: absolute;\n      pointer-events: none;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .burger__cross span:nth-child(1) {\n        height: 0%;\n        width: 4px;\n        position: absolute;\n        top: 10%;\n        left: 41%;\n        transition-delay: 0s; }\n      .burger__cross span:nth-child(2) {\n        width: 0%;\n        height: 4px;\n        position: absolute;\n        left: 7%;\n        top: 46%;\n        transition-delay: 0.25s; }\n    .burger.active .burger__lines span {\n      width: 0%; }\n      .burger.active .burger__lines span:nth-child(1) {\n        transition-delay: 0s; }\n      .burger.active .burger__lines span:nth-child(2) {\n        transition-delay: 0.125s; }\n      .burger.active .burger__lines span:nth-child(3) {\n        transition-delay: 0.25s; }\n    .burger.active .burger__cross span:nth-child(1) {\n      height: 80%;\n      transition-delay: 0.625s; }\n    .burger.active .burger__cross span:nth-child(2) {\n      width: 80%;\n      transition-delay: 0.375s; } }\n.icon {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  color: #e6e5e5;\n  text-decoration: inherit;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  transition: all 0.15s linear;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.body-portfolio .socials__link {\n  transition: all 0.35s linear; }\n.body-portfolio .socials__link:hover {\n    background-color: #fca92c;\n    transition: all 0.35s linear; }\n.body-portfolio .socials__link:hover .icon {\n      color: #ffffff; }\n@media screen and (max-width: 575px) {\n  .body-portfolio .navigation__link {\n    color: #ffffff; } }\n::-webkit-scrollbar {\n  width: 8px;\n  height: 14px; }\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px; }\n::-webkit-scrollbar-corner {\n  background: transparent; }\n::-webkit-scrollbar-track {\n  background: #fffceb;\n  border: 0px none #ffffff;\n  border-radius: 50px; }\n::-webkit-scrollbar-track:hover {\n  background: #fffceb; }\n::-webkit-scrollbar-track:active {\n  background: #fffceb; }\n::-webkit-scrollbar-thumb {\n  background: #fe6e49;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n  transition: all 0.15s linear; }\n::-webkit-scrollbar-thumb:hover {\n  background: #ff3c0e;\n  transition: all 0.15s linear; }\n::-webkit-scrollbar-thumb:active {\n  background: #ff3c0e;\n  transition: all 0.15s linear; }\n::-webkit-input-placeholder {\n  color: #9fa0bf; }\n::-moz-placeholder {\n  color: #9fa0bf; }\n:-ms-input-placeholder {\n  color: #9fa0bf; }\n.hp-container {\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n  position: relative; }\n.hp-info {\n  z-index: 1;\n  margin-top: 270px;\n  margin-left: 96px;\n  position: relative; }\n.hp-info__title {\n    color: #212c43;\n    font-size: 60px;\n    line-height: 75px;\n    font-weight: bold;\n    text-transform: uppercase; }\n.hp-info__text {\n    width: 100%;\n    max-width: 635px;\n    margin-top: 35px;\n    font-size: 18px;\n    line-height: 36px; }\n.hp-info__button {\n    width: 350px;\n    height: 80px;\n    color: #fff;\n    display: block;\n    cursor: pointer;\n    font-size: 22px;\n    margin-top: 80px;\n    line-height: 80px;\n    text-align: center;\n    border-radius: 40px;\n    background-color: #A36DF3;\n    text-transform: uppercase; }\n.hp-image {\n  top: -100px;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n  margin: auto;\n  width: 931px;\n  height: 915px;\n  position: absolute;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url('home-bck.png');\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.hp-image__text {\n    color: #fff;\n    font-size: 25px;\n    line-height: 50px;\n    text-align: center;\n    padding-left: 20px; }\n.hp-image__text span {\n      font-size: 42px;\n      line-height: 50px;\n      display: block;\n      text-transform: uppercase; }\n.hp-body::-webkit-scrollbar {\n  width: 8px;\n  height: 14px; }\n.hp-body::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px; }\n.hp-body::-webkit-scrollbar-thumb {\n  background: #d6befa;\n  border: 0px none #ffffff;\n  border-radius: 50px; }\n.hp-body::-webkit-scrollbar-thumb:hover {\n  background: #a36df3; }\n.hp-body::-webkit-scrollbar-thumb:active {\n  background: #a36df3; }\n.hp-body::-webkit-scrollbar-track {\n  background: #fffceb;\n  border: 0px none #ffffff;\n  border-radius: 50px; }\n.hp-body::-webkit-scrollbar-track:hover {\n  background: #fffceb; }\n.hp-body::-webkit-scrollbar-track:active {\n  background: #fffceb; }\n.hp-body::-webkit-scrollbar-corner {\n  background: transparent; }\n@media screen and (max-width: 1899px) {\n  .hp-info {\n    margin-left: calc(5px + 3.03333333vw); }\n    .hp-info__title {\n      font-size: calc(10px + 2.5vw);\n      line-height: calc(15px + 3vw); }\n    .hp-info__text {\n      max-width: calc(200px + 22.65625vw); }\n    .hp-info__button {\n      margin-top: 40px; }\n  .hp-image {\n    width: calc(20px + 45.95454545vw);\n    height: calc(10px + 45.68181818vw); }\n    .hp-image__text {\n      font-size: calc(3px + 1.14583333vw);\n      line-height: calc(5px + 2.34375vw); }\n      .hp-image__text span {\n        font-size: calc(4px + 1.97916667vw);\n        line-height: calc(6px + 2.29166667vw); } }\n@media screen and (max-width: 991px) {\n  .hp-info {\n    margin-left: 0;\n    text-align: center;\n    padding-left: 15px;\n    padding-right: 15px; }\n    .hp-info__title {\n      font-size: 32px;\n      line-height: 46px; }\n      .hp-info__title br {\n        display: none; }\n    .hp-info__text {\n      max-width: 100%; }\n    .hp-info__button {\n      width: 240px;\n      height: 70px;\n      font-size: 18px;\n      line-height: 70px;\n      margin-left: auto;\n      margin-right: auto; }\n  .hp-image {\n    margin-top: 20px;\n    width: calc(100px + 55vw);\n    height: calc(100px + 55vw);\n    position: static; }\n    .hp-image__text {\n      padding-left: 7px; } }\n@media screen and (max-width: 575px) {\n  .hp-info {\n    margin-top: 125px; }\n    .hp-info__text {\n      font-size: 16px;\n      line-height: 30px; }\n    .hp-info__button {\n      width: 220px; } }\n.particles {\n  overflow: hidden;\n  position: relative;\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 1;\n  grid-area: 1 / 1 / 2 / 2;\n  display: inline-block;\n  padding-left: 30px;\n  padding-right: 30px; }\n@media screen and (max-width: 575px) {\n    .particles {\n      width: 100%;\n      padding-left: 0;\n      padding-right: 0; } }\n.particles-canvas {\n  position: absolute;\n  pointer-events: none;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0); }\n.particles-wrapper {\n  position: relative;\n  display: inline-block;\n  overflow: hidden; }\n.particles-button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative;\n  border-radius: 5px;\n  border-radius: var(--radius-button);\n  background: var(--color-button-bg);\n  color: var(--color-button-text);\n  border: 0;\n  border: var(--border-button);\n  margin: 0;\n  padding: 1.5rem 3rem;\n  padding: var(--button-padding); }\n.particles-button:focus {\n  outline: none; }\n.no-js .particles-button {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 1;\n  grid-area: 1 / 1 / 2 / 2; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.resizeMenuLocation();
        this.data.navigationStateOnScroll();
        this.data.current_state.subscribe(function (state) { return _this.state = state; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t<div class=\"navigation {{data.nav_scroll_state}}\">\n\t\t<div class=\"burger {{state}}\">\n\t\t\t<div class=\"burger__lines\">\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t</div>\n\t\t\t<div class=\"burger__cross\">\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-navigation *ngIf=\"!data.nav_location\"></app-navigation>\n\t</div>\n</header>\n\n<main>\n\t<div class=\"sidebar {{state}}\" appDrawer>\n\t\t<div class=\"sidebar__menu\">\n\t\t\t<app-navigation *ngIf=\"data.nav_location\"></app-navigation>\n\t\t</div>\n\t\t<div class=\"socials\">\n\t\t\t<app-socials></app-socials>\n\t\t</div>\n\t</div>\n\n\t<div class=\"preloader\" [class.active]=\"preloader\">\n\t\t<img src=\"assets/images/preloader.gif\" alt=\"\">\n\t</div>\n\n\t<div class=\"pp-background\">\n\t\t<img src=\"assets/images/pp-corner.png\" alt=\"abstract-graphic\">\n\t</div>\n\n\t<div class=\"pp-container\">\n\t\t\n\t\t<div class=\"pp-block\" *ngFor=\"let item of portfolioData$ | async\">\n\t\t\t<div class=\"pp-block__info\">\n\t\t\t\t<div class=\"pp-block__counter\">{{item.counter}}</div>\n\t\t\t\t<div class=\"pp-block__title\">{{item.title}}</div>\n\t\t\t\t<div class=\"pp-block__text\">\n\t\t\t\t\t<p>{{item.text}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pp-block__link\">\n\t\t\t\t\t<a href=\"{{item.link}}\" target=\"_blank\">View page</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"pp-block__image\">\n\t\t\t\t<img src=\"{{item.image}}\" alt=\"sample-page\">\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</main>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Variables */\n/* Mixins */\n@font-face {\n  font-family: \"Fontello\";\n  src: url(\"/assets/fonts/fontello.eot\");\n  src: url(\"/assets/fonts/fontello.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/fontello.woff\") format(\"woff\"), url(\"/assets/fonts/fontello.ttf\") format(\"truetype\"), url(\"/assets/fonts/fontello.svg?#webfont\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: \"Arial-light\";\n  src: url(\"/assets/fonts/arial-light.eot\");\n  src: url(\"/assets/fonts/arial-light.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/arial-light.woff\") format(\"woff\"), url(\"/assets/fonts/arial-light.ttf\") format(\"truetype\"), url(\"/assets/fonts/arial-light.svg?#webfont\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\nrouter-outlet ~ * {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\nbody {\n  overflow-x: hidden;\n  overflow-y: scroll; }\nhtml,\nbody,\ndiv,\nul,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nnav,\nbutton,\na,\ninput,\ntextarea {\n  margin: 0;\n  padding: 0;\n  color: #212c43;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  font-weight: normal;\n  list-style: none;\n  line-height: 30px;\n  text-decoration: none;\n  box-sizing: border-box;\n  font-family: \"Arial\", sans-serif; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan {\n  font-size: inherit;\n  color: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit; }\nmain {\n  padding-left: 76px; }\n@media screen and (max-width: 575px) {\n    main {\n      padding-left: 0; } }\n.navigation {\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  position: fixed;\n  padding-top: 90px;\n  transition: all 0.15s linear; }\n.navigation__container {\n    width: 100%;\n    margin: 0 auto;\n    max-width: 1920px;\n    padding-left: 140px; }\n.navigation__list {\n    width: 100%;\n    max-width: 533px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n.navigation__link {\n    color: #475850;\n    font-size: 18px;\n    line-height: 21px;\n    padding-bottom: 5px;\n    text-transform: uppercase;\n    transition: all 0.35s linear;\n    border-bottom: 2px solid transparent; }\n.navigation__link:hover {\n      border-bottom: 2px solid #fca92c; }\n.navigation__link--active {\n      border-bottom: 2px solid #fca92c; }\n.navigation__link--unique {\n      width: 213px;\n      height: 48px;\n      color: #fff;\n      border-radius: 25px;\n      display: inline-block;\n      background-color: #fca92c;\n      text-align: center;\n      line-height: 48px;\n      border-bottom: none; }\n.navigation__link--unique:hover {\n        border-bottom: none; }\n.navigation.active {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background-color: rgba(255, 255, 255, 0.9);\n    transition: all 0.15s linear; }\n@media screen and (max-width: 1899px) {\n    .navigation__container {\n      padding-right: 15px; } }\n@media screen and (max-width: 767px) {\n    .navigation__container {\n      padding-left: 96px; } }\n@media screen and (max-width: 575px) {\n    .navigation {\n      padding: 15px;\n      display: flex;\n      justify-content: flex-end; }\n      .navigation__container {\n        padding-left: 0;\n        padding-right: 0; }\n      .navigation__list {\n        flex-direction: column; }\n      .navigation__link {\n        margin-top: 15px;\n        margin-bottom: 15px;\n        display: inline-block; } }\n.sidebar {\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 76px;\n  height: 100%;\n  position: fixed;\n  background-color: #fffceb;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.sidebar__menu {\n    display: none; }\n@media screen and (max-width: 575px) {\n    .sidebar {\n      z-index: 2;\n      width: 230px;\n      left: -230px;\n      padding-top: 50px;\n      padding-bottom: 50px;\n      flex-direction: column;\n      justify-content: space-between;\n      transition: all 0.35s linear; }\n      .sidebar__menu {\n        display: block; }\n      .sidebar.active {\n        left: 0;\n        transition: all 0.35s linear; } }\n.socials__link {\n  width: 54px;\n  height: 54px;\n  margin: 20px 0;\n  line-height: 54px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.15); }\n.socials__link:hover .icon {\n    color: #212c43;\n    transition: all 0.15s linear; }\n@media screen and (max-width: 575px) {\n  .socials {\n    width: 80%; }\n    .socials__container {\n      display: flex;\n      justify-content: space-between; } }\n@media screen and (max-width: 575px) {\n  .burger {\n    width: 60px;\n    height: 60px;\n    border-radius: 5px;\n    background-color: #fca92c;\n    position: relative;\n    padding: 10px 12px;\n    cursor: pointer; }\n    .burger span {\n      display: block;\n      background: #fff;\n      border-radius: 2px; }\n    .burger * {\n      transition: 0.25s ease-in-out;\n      box-sizing: border-box; }\n    .burger__lines {\n      width: 60%;\n      height: 70%;\n      position: absolute;\n      pointer-events: none; }\n      .burger__lines span {\n        width: 100%;\n        height: 4px;\n        position: relative;\n        margin: 7px 0; }\n        .burger__lines span:nth-child(1) {\n          transition-delay: 0.5s; }\n        .burger__lines span:nth-child(2) {\n          transition-delay: 0.625s; }\n        .burger__lines span:nth-child(3) {\n          transition-delay: 0.75s; }\n    .burger__cross {\n      height: 70%;\n      width: 70%;\n      left: 3px;\n      right: 0;\n      margin: auto;\n      position: absolute;\n      pointer-events: none;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .burger__cross span:nth-child(1) {\n        height: 0%;\n        width: 4px;\n        position: absolute;\n        top: 10%;\n        left: 41%;\n        transition-delay: 0s; }\n      .burger__cross span:nth-child(2) {\n        width: 0%;\n        height: 4px;\n        position: absolute;\n        left: 7%;\n        top: 46%;\n        transition-delay: 0.25s; }\n    .burger.active .burger__lines span {\n      width: 0%; }\n      .burger.active .burger__lines span:nth-child(1) {\n        transition-delay: 0s; }\n      .burger.active .burger__lines span:nth-child(2) {\n        transition-delay: 0.125s; }\n      .burger.active .burger__lines span:nth-child(3) {\n        transition-delay: 0.25s; }\n    .burger.active .burger__cross span:nth-child(1) {\n      height: 80%;\n      transition-delay: 0.625s; }\n    .burger.active .burger__cross span:nth-child(2) {\n      width: 80%;\n      transition-delay: 0.375s; } }\n.icon {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  color: #e6e5e5;\n  text-decoration: inherit;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  transition: all 0.15s linear;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.body-portfolio .socials__link {\n  transition: all 0.35s linear; }\n.body-portfolio .socials__link:hover {\n    background-color: #fca92c;\n    transition: all 0.35s linear; }\n.body-portfolio .socials__link:hover .icon {\n      color: #ffffff; }\n@media screen and (max-width: 575px) {\n  .body-portfolio .navigation__link {\n    color: #ffffff; } }\n::-webkit-scrollbar {\n  width: 8px;\n  height: 14px; }\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px; }\n::-webkit-scrollbar-corner {\n  background: transparent; }\n::-webkit-scrollbar-track {\n  background: #fffceb;\n  border: 0px none #ffffff;\n  border-radius: 50px; }\n::-webkit-scrollbar-track:hover {\n  background: #fffceb; }\n::-webkit-scrollbar-track:active {\n  background: #fffceb; }\n::-webkit-scrollbar-thumb {\n  background: #fe6e49;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n  transition: all 0.15s linear; }\n::-webkit-scrollbar-thumb:hover {\n  background: #ff3c0e;\n  transition: all 0.15s linear; }\n::-webkit-scrollbar-thumb:active {\n  background: #ff3c0e;\n  transition: all 0.15s linear; }\n::-webkit-input-placeholder {\n  color: #9fa0bf; }\n::-moz-placeholder {\n  color: #9fa0bf; }\n:-ms-input-placeholder {\n  color: #9fa0bf; }\n.sidebar {\n  background-color: #fe6e49; }\n.preloader {\n  top: 0;\n  opacity: 0;\n  pointer-events: none;\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: initial;\n  background-color: #ffffff; }\n.preloader.active {\n    z-index: 2;\n    opacity: 1; }\n.pp-background {\n  top: 0;\n  right: 0;\n  z-index: 0;\n  position: absolute; }\n.pp-container {\n  width: 100%;\n  max-width: 1647px;\n  margin: 232px auto 0; }\n.pp-block {\n  position: relative;\n  margin-bottom: 160px; }\n.pp-block__info {\n    top: 152px;\n    width: 100%;\n    z-index: 1;\n    max-width: 557px;\n    position: absolute;\n    padding: 137px 55px 38px 66px;\n    box-shadow: 6px 8px 20px 0px rgba(0, 0, 0, 0.1);\n    background-color: rgba(255, 255, 255, 0.94); }\n.pp-block__image {\n    width: 100%;\n    height: 500px;\n    max-width: 1400px;\n    z-index: 0;\n    overflow: hidden;\n    position: relative;\n    margin: 0 0 0 auto; }\n.pp-block__image img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n.pp-block__counter {\n    top: 85px;\n    left: 0;\n    z-index: 0;\n    color: #f1f1f1;\n    font-size: 170px;\n    font-weight: 900;\n    position: absolute; }\n.pp-block__title {\n    z-index: 1;\n    font-size: 46px;\n    font-weight: 700;\n    line-height: 55px;\n    position: relative;\n    color: #212c43;\n    text-transform: uppercase; }\n.pp-block__text {\n    color: #212c43;\n    font-size: 18px;\n    margin-top: 30px;\n    line-height: 36px; }\n.pp-block__link {\n    margin-top: 40px;\n    text-align: right;\n    font-size: 18px;\n    color: #737e94;\n    text-transform: uppercase; }\n.pp-block__link a {\n      color: inherit;\n      font-size: inherit; }\n@media screen and (max-width: 1199px) {\n  .pp-block__counter {\n    top: 60px;\n    font-size: 130px; }\n  .pp-block__title {\n    font-size: 30px; }\n  .pp-block__text {\n    font-size: 16px;\n    margin-top: 10px;\n    line-height: 30px; }\n  .pp-block__info {\n    top: 220px;\n    max-width: 400px;\n    padding: 85px 25px 30px; }\n  .pp-block__link {\n    margin-top: 20px; } }\n@media screen and (max-width: 767px) {\n  .pp-block {\n    margin-bottom: 30px; }\n    .pp-block__counter {\n      display: none; }\n    .pp-block__info {\n      position: static;\n      max-width: 100%;\n      padding: 15px; }\n    .pp-block__image {\n      height: calc(150px + 18.22916667vw); } }\n@media screen and (max-width: 575px) {\n  .pp-block__image {\n    height: calc(150px + 18.22916667vw); } }\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(data, renderer, http) {
        this.data = data;
        this.renderer = renderer;
        this.http = http;
        this.preloader = true;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.resizeMenuLocation();
        this.data.navigationStateOnScroll();
        this.renderer.addClass(document.body, 'body-portfolio');
        this.portfolioData$ = this.http.get('http://askcoder.tech/external/portfolio');
        this.portfolioData$.subscribe(function () {
            _this.preloader = false;
        });
        this.data.current_state.subscribe(function (state) { return _this.state = state; });
    };
    PortfolioComponent.prototype.ngOnDestroy = function () {
        this.preloader = true;
        this.renderer.removeClass(document.body, 'body-portfolio');
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/drawer.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/drawer.directive.ts ***!
  \*******************************************************/
/*! exports provided: DrawerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerDirective", function() { return DrawerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/general.service */ "./src/app/shared/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrawerDirective = /** @class */ (function () {
    function DrawerDirective(el, data) {
        var _this = this;
        this.el = el;
        this.data = data;
        this.media_xs = false;
        this.data.current_state.subscribe(function (state) { return (_this.state = state); });
    }
    DrawerDirective.prototype.checkWindowSize = function () {
        var wmatch = window.matchMedia("(max-width: 575px)").matches;
        if (wmatch) {
            this.media_xs = true;
        }
        else {
            this.media_xs = false;
            this.data.changeBurgerState("false");
        }
    };
    DrawerDirective.prototype.onResize = function () {
        this.checkWindowSize();
    };
    DrawerDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        this.checkWindowSize();
        if (this.media_xs) {
            var clickedInside = this.el.nativeElement.contains(targetElement);
            var burger_element = targetElement.classList.contains("burger");
            var sidebar_element = targetElement.classList.contains("sidebar");
            if (burger_element || sidebar_element || clickedInside) {
                if (burger_element && this.state === "active") {
                    this.data.changeBurgerState("false");
                }
                else {
                    this.data.changeBurgerState("active");
                }
                if (sidebar_element) {
                    this.data.changeBurgerState("active");
                }
            }
            else {
                this.data.changeBurgerState("false");
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DrawerDirective.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("document:click", ["$event", "$event.target"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], DrawerDirective.prototype, "onClick", null);
    DrawerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[appDrawer]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"]])
    ], DrawerDirective);
    return DrawerDirective;
}());



/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navigation__container\">\n  <ul class=\"navigation__list\">\n    <li>\n      <a class=\"navigation__link\" \n         routerLink=\"/about\" \n         routerLinkActive=\"navigation__link--active\" \n         [routerLinkActiveOptions]=\"{exact: true}\">\n         About me\n      </a>\n    </li>\n    <li>\n      <a class=\"navigation__link\" \n         routerLink=\"/contact\" \n         routerLinkActive=\"navigation__link--active\" \n         [routerLinkActiveOptions]=\"{exact: true}\">\n      Contact\n      </a>\n    </li>\n    <li>\n      <a class=\"navigation__link navigation__link--unique\" \n         routerLink=\"/portfolio\" \n         routerLinkActive=\"navigation__link--active\" \n         [routerLinkActiveOptions]=\"{exact: true}\">\n         Portfolio\n      </a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/shared/navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/auth.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        var idToken = getCookie("XSRF-TOKEN");
        if (idToken) {
            var cloned = req.clone({
                headers: req.headers.set("X-CSRF-TOKEN", idToken)
            });
            // console.log(idToken);
            // console.log(document.cookie);
            return next.handle(cloned);
        }
        else {
            // console.log("return" + 0);
            // console.log("return", document.cookie);
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/services/general.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/general.service.ts ***!
  \****************************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralService = /** @class */ (function () {
    function GeneralService(router) {
        this.router = router;
        this.burger_state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('false');
        this.current_state = this.burger_state.asObservable();
    }
    GeneralService.prototype.ngOnInit = function () { };
    GeneralService.prototype.changeBurgerState = function (state) {
        this.burger_state.next(state);
    };
    GeneralService.prototype.resizeMenuLocation = function () {
        var resizeTimeout;
        var rootScope = this;
        window.addEventListener("resize", resizeThrottler, false);
        function resizeThrottler() {
            if (!resizeTimeout) {
                resizeTimeout = setTimeout(function () {
                    resizeTimeout = null;
                    move_menu();
                }, 200);
            }
        }
        function move_menu() {
            var mw = window.matchMedia("(max-width: 575px)");
            mw.matches
                ? (rootScope.nav_location = true)
                : (rootScope.nav_location = false);
        }
        move_menu();
    };
    GeneralService.prototype.navigationStateOnScroll = function () {
        var rootScope = this;
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                rootScope.nav_scroll_state = "active";
            }
            else if (window.scrollY <= 50) {
                rootScope.nav_scroll_state = "";
            }
        });
    };
    GeneralService.prototype.routeDelay = function () {
        var rootScope = this;
        setTimeout(function () {
            rootScope.router.navigateByUrl('/contact');
        }, 1500);
    };
    GeneralService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./src/app/shared/socials/socials.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/socials/socials.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"socials__container\">\n  <a class=\"socials__link\" target=\"_blank\" href=\"https://www.linkedin.com/in/vlad-secrier-39a3a6102\">\n    <i class=\"icon icon-linkedin\">&#xe800;</i>\n  </a>\n  <a class=\"socials__link\" target=\"_blank\" href=\"https://www.behance.net/mymailboxmb12f\">\n    <i class=\"icon icon-behance\">&#xe802;</i>\n  </a>\n  <a class=\"socials__link\" target=\"_blank\" href=\"https://www.upwork.com/ab/find-work/\">\n    <i class=\"icon icon-upwork\">&#xe801;</i>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/shared/socials/socials.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/socials/socials.component.ts ***!
  \*****************************************************/
/*! exports provided: SocialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsComponent", function() { return SocialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialsComponent = /** @class */ (function () {
    function SocialsComponent() {
    }
    SocialsComponent.prototype.ngOnInit = function () {
    };
    SocialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-socials',
            template: __webpack_require__(/*! ./socials.component.html */ "./src/app/shared/socials/socials.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SocialsComponent);
    return SocialsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDCNo-IS5nTZczE7URfeeD8LhSbbeeJMEg",
        authDomain: "portfolio-7b744.firebaseapp.com",
        databaseURL: "https://portfolio-7b744.firebaseio.com",
        projectId: "portfolio-7b744",
        storageBucket: "portfolio-7b744.appspot.com",
        messagingSenderId: "1057459215017"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Mydocuments\Websites\ANGULAR projects\MyWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map