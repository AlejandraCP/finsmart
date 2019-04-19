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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'finsmart-project';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/opportunities/opportunities.component */ "./src/app/pages/opportunities/opportunities.component.ts");
/* harmony import */ var _commons_base_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commons/base/base.component */ "./src/app/commons/base/base.component.ts");
/* harmony import */ var _commons_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commons/sidebar/sidebar.component */ "./src/app/commons/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_investments_investments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/investments/investments.component */ "./src/app/pages/investments/investments.component.ts");
/* harmony import */ var _pages_bank_accounts_bank_accounts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/bank-accounts/bank-accounts.component */ "./src/app/pages/bank-accounts/bank-accounts.component.ts");
/* harmony import */ var _pages_deposits_deposits_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/deposits/deposits.component */ "./src/app/pages/deposits/deposits.component.ts");
/* harmony import */ var _commons_navbar_mobile_navbar_mobile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./commons/navbar-mobile/navbar-mobile.component */ "./src/app/commons/navbar-mobile/navbar-mobile.component.ts");
/* harmony import */ var _pages_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/personal-info/personal-info.component */ "./src/app/pages/personal-info/personal-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    {
        path: '', component: _commons_base_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"], children: [
            { path: '', redirectTo: '/oportunidades', pathMatch: 'full' },
            { path: 'oportunidades', component: _pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_7__["OpportunitiesComponent"] },
            { path: 'inversiones', component: _pages_investments_investments_component__WEBPACK_IMPORTED_MODULE_10__["InvestmentsComponent"] },
            { path: 'cuentas-bancarias', component: _pages_bank_accounts_bank_accounts_component__WEBPACK_IMPORTED_MODULE_11__["BankAccountsComponent"] },
            { path: 'depositar-dinero', component: _pages_deposits_deposits_component__WEBPACK_IMPORTED_MODULE_12__["DepositsComponent"] },
            { path: 'datos-personales', component: _pages_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_14__["PersonalInfoComponent"] }
        ]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_7__["NgbdModal1Content"],
                _pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_7__["NgbdModal2Content"],
                _pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_7__["OpportunitiesComponent"],
                _commons_base_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"],
                _commons_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _pages_investments_investments_component__WEBPACK_IMPORTED_MODULE_10__["InvestmentsComponent"],
                _pages_bank_accounts_bank_accounts_component__WEBPACK_IMPORTED_MODULE_11__["BankAccountsComponent"],
                _pages_deposits_deposits_component__WEBPACK_IMPORTED_MODULE_12__["DepositsComponent"],
                _commons_navbar_mobile_navbar_mobile_component__WEBPACK_IMPORTED_MODULE_13__["NavbarMobileComponent"],
                _pages_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_14__["PersonalInfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_7__["NgbdModal1Content"], _pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_7__["NgbdModal2Content"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commons/base/base.component.css":
/*!*************************************************!*\
  !*** ./src/app/commons/base/base.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commons/base/base.component.html":
/*!**************************************************!*\
  !*** ./src/app/commons/base/base.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar ></app-sidebar>\r\n<app-navbar-mobile [(tabMobileChild)]='tabMobile' [(function)]=\"changeBoolMobile\"></app-navbar-mobile>\r\n<div id=\"content\" *ngIf=\"!tabMobile\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/commons/base/base.component.ts":
/*!************************************************!*\
  !*** ./src/app/commons/base/base.component.ts ***!
  \************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
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

var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.tabMobile = false;
        this.changeBoolMobile = function () {
            this.tabMobile = !this.tabMobile;
        };
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.tabMobile = false;
    };
    BaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base',
            template: __webpack_require__(/*! ./base.component.html */ "./src/app/commons/base/base.component.html"),
            styles: [__webpack_require__(/*! ./base.component.css */ "./src/app/commons/base/base.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/commons/navbar-mobile/navbar-mobile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/commons/navbar-mobile/navbar-mobile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-mobile\">\r\n  <span (click)=\"toggle()\" class=\"icon-menu\"></span>\r\n  <span>Bienvenido, {{name}}</span>\r\n  <img alt=\"logo\" class=\"img-fluid logo\" src=\"./assets/img/logo-clean.svg\" width=\"50\">\r\n</div>\r\n<ng-container *ngIf=\"tabMobileChild\">\r\n  <div class=\"tab-mobile\">\r\n    <nav class=\"\">\r\n      <span (click)=\"toggle()\" class=\"icon-cancel close-tab\"></span>\r\n      <ul class=\"\">\r\n        <li class=\"title-sidebar d-flex align-items-end\" (click)=\"toggle()\" routerLink=\"/oportunidades\" routerLinkActive='activated'>\r\n          <span class=\"icon-opot\"></span>\r\n          <p class=\"mb-0 ml-2\">Oportunidades</p>\r\n        </li>\r\n        <li class=\"title-sidebar d-flex align-items-end\" (click)=\"toggle()\" routerLink=\"/inversiones\" routerLinkActive='activated'>\r\n          <span class=\"icon-inver\"></span>\r\n          <p class=\"mb-0 ml-2\">Mis inversiones</p>\r\n        </li>\r\n        <li class=\"title-sidebar d-flex align-items-end\" (click)=\"toggle()\" routerLink=\"/cuentas-bancarias\" routerLinkActive='activated'>\r\n          <span class=\"icon-cuentas\"></span>\r\n          <p class=\"mb-0 ml-2\">Cuentas bancarias</p>\r\n        </li>\r\n        <li class=\"title-sidebar d-flex align-items-end\" (click)=\"toggle()\" routerLink=\"/depositar-dinero\" routerLinkActive='activated'>\r\n          <span class=\"icon-depositar\"></span>\r\n          <p class=\"mb-0 ml-2\">Depositar o retirar</p>\r\n        </li>\r\n        <hr />\r\n        <li class=\"title-sidebar d-flex align-items-end\" (click)=\"toggle()\" routerLink=\"/datos-personales\" routerLinkActive='activated'>\r\n          <span class=\"icon-Shape\"></span>\r\n          <p class=\"mb-0 ml-2\">Mis datos personales</p>\r\n        </li>\r\n        <li class=\"title-sidebar d-flex align-items-end\" routerLink=\"/login\" routerLinkActive='activated'>\r\n          <span class=\"icon-Shape1\"></span>\r\n          <p class=\"mb-0 ml-2\">Cerrar sesión</p>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/commons/navbar-mobile/navbar-mobile.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/commons/navbar-mobile/navbar-mobile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commons/navbar-mobile/navbar-mobile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/commons/navbar-mobile/navbar-mobile.component.ts ***!
  \******************************************************************/
/*! exports provided: NavbarMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarMobileComponent", function() { return NavbarMobileComponent; });
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

var NavbarMobileComponent = /** @class */ (function () {
    function NavbarMobileComponent() {
        this.name = 'Alexander';
        this.tabMobileChildChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavbarMobileComponent.prototype.ngOnInit = function () {
    };
    NavbarMobileComponent.prototype.toggle = function () {
        this.tabMobileChildChange.emit(!this.tabMobileChild);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarMobileComponent.prototype, "tabMobileChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarMobileComponent.prototype, "function", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarMobileComponent.prototype, "tabMobileChildChange", void 0);
    NavbarMobileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-mobile',
            template: __webpack_require__(/*! ./navbar-mobile.component.html */ "./src/app/commons/navbar-mobile/navbar-mobile.component.html"),
            styles: [__webpack_require__(/*! ./navbar-mobile.component.scss */ "./src/app/commons/navbar-mobile/navbar-mobile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarMobileComponent);
    return NavbarMobileComponent;
}());



/***/ }),

/***/ "./src/app/commons/sidebar/sidebar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/commons/sidebar/sidebar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commons/sidebar/sidebar.component.html":
/*!********************************************************!*\
  !*** ./src/app/commons/sidebar/sidebar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"bg-white main-sidebar\">\r\n  <a class=\"navbar-brand name-wrapper\">\r\n    <figure class=\"text-center mb-2\" style=\"width: 100px\">\r\n      <img src=\"./assets/img/logo-clean.svg\" alt=\"logo\" class=\"img-fluid logo\" width=\"250\">\r\n    </figure>\r\n    <p class=\"mb-0\">Bienvenido</p>\r\n    <p class=\"mb-0\">{{name}}</p>\r\n  </a>\r\n  <ul class=\"\">\r\n    <li class=\"title-sidebar d-flex align-items-end\" routerLink=\"/oportunidades\" routerLinkActive='activated'>\r\n      <span class=\"icon-opot\"></span>\r\n      <p class=\"mb-0 ml-2\">Oportunidades</p>\r\n    </li>\r\n    <li class=\"title-sidebar d-flex align-items-end\" routerLink=\"/inversiones\" routerLinkActive='activated'>\r\n      <span class=\"icon-inver\"></span>\r\n      <p class=\"mb-0 ml-2\">Mis inversiones</p>\r\n    </li>\r\n    <li class=\"title-sidebar d-flex align-items-end\" routerLink=\"/cuentas-bancarias\" routerLinkActive='activated'>\r\n      <span class=\"icon-cuentas\"></span>\r\n      <p class=\"mb-0 ml-2\">Cuentas bancarias</p>\r\n    </li>\r\n    <li class=\"title-sidebar d-flex align-items-end\" routerLink=\"/depositar-dinero\" routerLinkActive='activated'>\r\n      <span class=\"icon-depositar\"></span>\r\n      <p class=\"mb-0 ml-2\">Depositar o retirar</p>\r\n    </li>\r\n    <hr/>\r\n    <li class=\"title-sidebar d-flex align-items-end\" routerLink=\"/datos-personales\" routerLinkActive='activated'>\r\n      <span class=\"icon-Shape\"></span>\r\n      <p class=\"mb-0 ml-2\">Mis datos personales</p>\r\n    </li>\r\n    <li class=\"title-sidebar d-flex align-items-end\" routerLink=\"/login\" routerLinkActive='activated'>\r\n      <span class=\"icon-Shape1\"></span>\r\n      <p class=\"mb-0 ml-2\">Cerrar sesión</p>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/commons/sidebar/sidebar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/commons/sidebar/sidebar.component.ts ***!
  \******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_router) {
        this._router = _router;
        this.name = 'Alexander';
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/commons/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/commons/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/pages/bank-accounts/bank-accounts.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/bank-accounts/bank-accounts.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/bank-accounts/bank-accounts.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/bank-accounts/bank-accounts.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"main-table mt-5\">\r\n    <table mdbTable>\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Banco</th>\r\n          <th scope=\"col\">Cuenta</th>\r\n          <th scope=\"col\">CCI</th>\r\n          <th scope=\"col\">Moneda</th>\r\n          <th scope=\"col\">Fecha de Registro</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr mdbTableCol *ngFor=\"let el of bankAccounts\">\r\n          <td class=\"light\">{{el.bank}}</td>\r\n          <td class=\"light\">{{el.account}}</td>\r\n          <td class=\"light\">{{el.cci}}</td>\r\n          <td class=\"light\">{{el.currency}}</td>\r\n          <td class=\"light\">{{el.date}}</td>\r\n          <td class=\"light\"></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"mt-5\">\r\n    <figure class=\"text-center mb-4\" style=\"width: 30px\">\r\n      <img src=\"./assets/img/plus.svg\" alt=\"logo\" class=\"img-fluid logo\">\r\n    </figure>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"main-container-mobile bank-accounts-mobile\" >\r\n <div>\r\n  <div class='mt-3'> \r\n    <p class=\"title d-inline mb-0\">Cuentas bancarias</p>\r\n  </div>\r\n   <ngb-carousel [showNavigationArrows]=\"showNavigationArrows\" class=\"carousel-content carousel-bottom\"\r\n     [showNavigationIndicators]=\"showNavigationIndicators\" >\r\n     <ng-template ngbSlide *ngFor=\"let item of bankAccounts\">\r\n       <div class=\"carousel-caption\">\r\n         <div class=\"d-flex justify-content-around first-part\">\r\n            <p>Banco</p> <p>{{item.bank}}</p>\r\n         </div>\r\n         <hr class='mx-4 mt-0 mb-4'>\r\n         <div class=\"d-flex justify-content-around second-part\">\r\n            <div>\r\n              <p>Moneda</p>\r\n              <p>{{item.currency}}</p>\r\n            </div>\r\n            <div>\r\n              <p>Fecha de registro</p>\r\n              <p>{{item.date}}</p>\r\n            </div>\r\n         </div>\r\n         <hr class='mx-5 mt-0'>\r\n         <div class=\"d-flex justify-content-around second-part pt-2\">\r\n            <div>\r\n              <p>Cuenta</p>\r\n              <p>{{item.account}}</p>\r\n            </div>\r\n         </div>\r\n         <hr class='mx-5 mt-0'>\r\n         <div class=\"d-flex justify-content-around second-part pt-2\">\r\n            <div>\r\n              <p>CCI</p>\r\n              <p>{{item.cci}}</p>\r\n            </div>\r\n         </div>\r\n         <div class=\"d-flex justify-content-center second-part pt-2\">\r\n            <span class='icon-edit'></span>\r\n            <span class='icon-garbage'></span>\r\n         </div>\r\n       </div>\r\n     </ng-template>\r\n   </ngb-carousel>\r\n   <div _ngcontent-c4=\"\" class=\"mt-2 d-flex justify-content-center\">\r\n      <!-- <figure _ngcontent-c4=\"\" style=\"width: 26px\">\r\n        <img _ngcontent-c4=\"\" alt=\"logo\" class=\"img-fluid logo\" src=\"./assets/img/plus.svg\">\r\n      </figure> -->\r\n      <span class='icon-plus'></span>\r\n    </div>\r\n </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/bank-accounts/bank-accounts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/bank-accounts/bank-accounts.component.ts ***!
  \****************************************************************/
/*! exports provided: BankAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccountsComponent", function() { return BankAccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BankAccountsComponent = /** @class */ (function () {
    function BankAccountsComponent(config) {
        this.bankAccounts = [
            {
                bank: 'BBVA Continental',
                account: '43278972318',
                cci: '01135900020018600474',
                currency: 'PEN',
                date: '04/feb/2019',
            },
            {
                bank: 'BCP',
                account: '43278972318',
                cci: '01135900020018600474',
                currency: 'PEN',
                date: '04/feb/2019',
            },
            {
                bank: 'Scotiabank',
                account: '43278972318',
                cci: '01135900020018600474',
                currency: 'PEN',
                date: '04/feb/2019',
            }
        ];
        this.showNavigationArrows = true;
        this.showNavigationIndicators = false;
        config.showNavigationArrows = true;
        config.interval = 0;
        config.showNavigationIndicators = false;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = true;
    }
    BankAccountsComponent.prototype.ngOnInit = function () {
    };
    BankAccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank-accounts',
            template: __webpack_require__(/*! ./bank-accounts.component.html */ "./src/app/pages/bank-accounts/bank-accounts.component.html"),
            styles: [__webpack_require__(/*! ./bank-accounts.component.css */ "./src/app/pages/bank-accounts/bank-accounts.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], BankAccountsComponent);
    return BankAccountsComponent;
}());



/***/ }),

/***/ "./src/app/pages/deposits/deposits.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/deposits/deposits.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/deposits/deposits.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/deposits/deposits.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"responsive-container\">\r\n  <div class='deposit-container'>\r\n    <div class=\"d-flex w-90\">\r\n        <div class=\"deposit-box\">\r\n          <p class=\"fs-14\">Monto disponible</p>\r\n          <div class=\"single-box\">\r\n            <p class=\"mb-1\">s/ 5,000.00</p>\r\n            <p class=\"mb-0\">$ 4,452.87</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"row mt-5 d-flex justify-content-center\">\r\n          <div class=\"col-12 col-md-6 d-flex justify-content-center\">\r\n              <button class=\"deposit-button\">Depositar</button>\r\n          </div>\r\n          <div class=\"col-12 col-md-6 d-flex justify-content-center\" >\r\n              <button class=\"deposit-button-gray\">Retirar</button>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <form>\r\n        <div class=\"form-group row\">\r\n          <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Cuenta</label>\r\n          <div class=\"col-sm-10\">\r\n              <select id=\"inputState\" class=\"form-control\">\r\n                  <option selected>BBVA Dólares 001-5768414-12</option>\r\n                  <option>BCP Dólares 001-5768414-12</option>\r\n                  <option>IBK Dólares 001-5768414-12</option>\r\n                </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Monto</label>\r\n          <div class=\"col-sm-5\">\r\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"000.00\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class='d-flex justify-content-center'>\r\n        <button class=\"deposit-button-voucher\">Subir voucher</button>\r\n      </div>\r\n      <div class='d-flex justify-content-center'>\r\n        <button class=\"deposit-button-confirm\">Continuar</button>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/deposits/deposits.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/deposits/deposits.component.ts ***!
  \******************************************************/
/*! exports provided: DepositsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositsComponent", function() { return DepositsComponent; });
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

var DepositsComponent = /** @class */ (function () {
    function DepositsComponent() {
    }
    DepositsComponent.prototype.ngOnInit = function () {
    };
    DepositsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deposits',
            template: __webpack_require__(/*! ./deposits.component.html */ "./src/app/pages/deposits/deposits.component.html"),
            styles: [__webpack_require__(/*! ./deposits.component.css */ "./src/app/pages/deposits/deposits.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DepositsComponent);
    return DepositsComponent;
}());



/***/ }),

/***/ "./src/app/pages/investments/investments.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/investments/investments.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/investments/investments.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/investments/investments.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"d-flex w-90\">\r\n    <div class=\"investment-box\" *ngFor=\"let el of investmens\">\r\n      <p class=\"light fs-14\">{{el.text}}</p>\r\n      <div class=\"single-box\">\r\n        <p class=\"mb-1\">{{el.ammount}}</p>\r\n        <p class=\"mb-0\">{{el.secondAmmount}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex w-90 mt-5 justify-content-around\">\r\n    <ul class=\"nav nav-tabs\" id=\"button\" role=\"tablist\">\r\n      <li class=\"\" *ngFor=\"let b of buttons\">\r\n        <a class={{b.class}} id={{b.id}} data-toggle=\"tab\" href={{b.href}} role=\"tab\" attr.aria-controls={{b.name}} aria-selected=\"true\">{{b.text}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"main-table w-90 tab-content\" id=\"myTabContent\">\r\n    <div class=\"tab-pane fade show active\" id=\"actual\" role=\"tabpanel\" aria-labelledby=\"actual-tab\">\r\n        <table mdbTable>\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Pagador</th>\r\n                <th scope=\"col\">Monto Total</th>\r\n                <th scope=\"col-2\">Monto Disponible</th>\r\n                <th scope=\"col\">TEA</th>\r\n                <th scope=\"col\">ROI (monto)</th>\r\n                <th scope=\"col\">Fecha de cobro (días)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr class=\"box-wrapped\" mdbTableCol *ngFor=\"let el of oportunities\">\r\n                <td class=\"light\">{{el.name}}</td>\r\n                <td class=\"light\">{{el.ammount}}</td>\r\n                <td class=\"light\">{{el.availableAmmount}}</td>\r\n                <td class=\"light\">{{el.tea}}</td>\r\n                <td>\r\n                  <p class=\"light mb-0\">{{el.roi}}</p>\r\n                  <p class=\"light mb-0\">{{el.roiAmmount}}</p>\r\n                </td>\r\n                <td>\r\n                  <p class=\"light mb-0\">{{el.date}}</p>\r\n                  <p class=\"light mb-0\">en {{el.days}} dias</p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            \r\n          </table>\r\n    </div>\r\n    <div class=\"tab-pane fade show\" id=\"inver\" role=\"tabpanel\" aria-labelledby=\"inver-tab\">\r\n        <table mdbTable>\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Pagador</th>\r\n                <th scope=\"col\">Monto Total</th>\r\n                <th scope=\"col-2\">Monto Disponible</th>\r\n                <th scope=\"col\">TEA</th>\r\n                <th scope=\"col\">ROI (monto)</th>\r\n                <th scope=\"col\">Fecha de cobro (días)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr class=\"box-wrapped\" mdbTableCol *ngFor=\"let el of oportunities2\">\r\n                <td class=\"light\">{{el.name}}</td>\r\n                <td class=\"light\">{{el.ammount}}</td>\r\n                <td class=\"light\">{{el.availableAmmount}}</td>\r\n                <td class=\"light\">{{el.tea}}</td>\r\n                <td>\r\n                  <p class=\"light mb-0\">{{el.roi}}</p>\r\n                  <p class=\"light mb-0\">{{el.roiAmmount}}</p>\r\n                </td>\r\n                <td>\r\n                  <p class=\"light mb-0\">{{el.date}}</p>\r\n                  <p class=\"light mb-0\">en {{el.days}} dias</p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            \r\n          </table>\r\n    </div>\r\n    <div class=\"tab-pane fade show\" id=\"transf\" role=\"tabpanel\" aria-labelledby=\"transf-tab\">\r\n        <table mdbTable>\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Pagador</th>\r\n                <th scope=\"col\">Monto Total</th>\r\n                <th scope=\"col-2\">Monto Disponible</th>\r\n                <th scope=\"col\">TEA</th>\r\n                <th scope=\"col\">ROI (monto)</th>\r\n                <th scope=\"col\">Fecha de cobro (días)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr class=\"box-wrapped\" mdbTableCol *ngFor=\"let el of oportunities3\">\r\n                <td class=\"light\">{{el.name}}</td>\r\n                <td class=\"light\">{{el.ammount}}</td>\r\n                <td class=\"light\">{{el.availableAmmount}}</td>\r\n                <td class=\"light\">{{el.tea}}</td>\r\n                <td>\r\n                  <p class=\"light mb-0\">{{el.roi}}</p>\r\n                  <p class=\"light mb-0\">{{el.roiAmmount}}</p>\r\n                </td>\r\n                <td>\r\n                  <p class=\"light mb-0\">{{el.date}}</p>\r\n                  <p class=\"light mb-0\">en {{el.days}} dias</p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            \r\n          </table>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n<div class=\"main-container-mobile\" >\r\n <ngb-carousel [showNavigationArrows]=\"showNavigationArrows\" class=\"carousel-content carousel-top\"\r\n   [showNavigationIndicators]=\"showNavigationIndicators\" >\r\n   <ng-template ngbSlide *ngFor=\"let item of investmens\">\r\n     <div class=\"carousel-caption\">\r\n       <p>{{item.text}}</p>\r\n       <p>{{item.ammount}}</p>\r\n     </div>\r\n   </ng-template>\r\n </ngb-carousel>\r\n <div>\r\n  <div class='d-flex align-items-center justify-content-between'>\r\n    <p class=\"title d-inline mb-0\">Inversiones actuales</p> <span class='icon-down-arrow'></span>\r\n  </div>\r\n   <ngb-carousel [showNavigationArrows]=\"showNavigationArrows\" class=\"carousel-content carousel-bottom\"\r\n     [showNavigationIndicators]=\"showNavigationIndicators\" >\r\n     <ng-template ngbSlide *ngFor=\"let item of oportunities\">\r\n       <div class=\"carousel-caption\">\r\n         <div class=\"d-flex justify-content-around first-part\">\r\n            <p>Pagador</p> <p>{{item.name}}</p>\r\n         </div>\r\n         <hr class='mx-4 mt-0 mb-4'>\r\n         <div class=\"d-flex justify-content-around second-part pt-2\">\r\n            <div>\r\n              <p>Monto total</p>\r\n              <p>{{item.ammount}}</p>\r\n            </div>\r\n            <div>\r\n              <p>Monto disponible</p>\r\n              <p>{{item.availableAmmount}}</p>\r\n            </div>\r\n         </div>\r\n         <hr class='mx-5 mt-0'>\r\n         <div class=\"d-flex justify-content-around third-part mr-4 ml-3\">\r\n            <div>\r\n              <p>TEA</p>\r\n              <p>{{item.tea}}</p>\r\n            </div>\r\n            <hr class='mx-2'>\r\n            <div>\r\n              <p class='mx-2'>ROI (monto)</p>\r\n              <p class='mb-0'>{{item.roi}}</p>\r\n              <p>{{item.roiAmmount}}</p>\r\n            </div>\r\n            <hr class='mx-2'>\r\n            <div>\r\n                <p class='mx-2'>Fecha de cobro (días)</p>\r\n                <p class='mb-0'>{{item.date}}</p>\r\n                <p>({{item.days}}) días</p>\r\n            </div>\r\n         </div>\r\n         \r\n       </div>\r\n     </ng-template>\r\n   </ngb-carousel>\r\n </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/investments/investments.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/investments/investments.component.ts ***!
  \************************************************************/
/*! exports provided: InvestmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentsComponent", function() { return InvestmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvestmentsComponent = /** @class */ (function () {
    function InvestmentsComponent(config) {
        this.investmens = [
            {
                text: 'En validación',
                ammount: 'S/ 5,000.00',
                secondAmmount: '$ 0.00',
            },
            {
                text: 'Monto Disponible',
                ammount: 'S/ 45,452.32',
                secondAmmount: '$ 4,452.87',
            },
            {
                text: 'Por iniciar',
                ammount: 'S/ 5,000.00',
                secondAmmount: '$ 14,400.00',
            },
            {
                text: 'Invertido',
                ammount: 'S/ 5,000.00',
                secondAmmount: '$ 14,400.00',
            }
        ];
        this.buttons = [
            {
                text: 'Inversiones Actuales',
                id: 'actual-tab',
                href: '#actual',
                name: 'actual',
                class: 'investment-button active mx-2'
            },
            {
                text: 'Historial de Inversión',
                id: 'inver-tab',
                href: '#inver',
                name: 'inver',
                class: 'investment-button mx-2'
            },
            {
                text: 'Historial de Transferencias',
                id: 'transf-tab',
                href: '#transf',
                name: 'transf',
                class: 'investment-button mx-2'
            }
        ];
        this.oportunities = [
            {
                id: 1,
                name: 'PC TEXTIL EIRL',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
            },
            {
                id: 2,
                name: 'RS IMPORT EXPORT SAC',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
            },
            {
                id: 3,
                name: 'RS IMPORT EXPORT SC',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
            }
        ];
        this.oportunities2 = [
            {
                id: 1,
                name: 'PC TEXTIL2 EIRL',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
            },
            {
                id: 2,
                name: 'RS IMPORT EXPORT SAC',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
            },
            {
                id: 3,
                name: 'RS IMPORT EXPORT SC',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
            }
        ];
        this.oportunities3 = [
            {
                id: 1,
                name: 'PC TEXTIL3 EIRL',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
            },
            {
                id: 2,
                name: 'RS IMPORT EXPORT SAC',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
            },
            {
                id: 3,
                name: 'RS IMPORT EXPORT SC',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
            }
        ];
        this.showNavigationArrows = true;
        this.showNavigationIndicators = false;
        config.showNavigationArrows = true;
        config.interval = 0;
        config.showNavigationIndicators = false;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = true;
    }
    InvestmentsComponent.prototype.ngOnInit = function () {
    };
    InvestmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investments',
            template: __webpack_require__(/*! ./investments.component.html */ "./src/app/pages/investments/investments.component.html"),
            styles: [__webpack_require__(/*! ./investments.component.css */ "./src/app/pages/investments/investments.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], InvestmentsComponent);
    return InvestmentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\r\n  <div class=\"img-container\">\r\n    <figure class=\"display-desktop text-center mb-4\">\r\n      <img src=\"./assets/img/login.png\" alt=\"logo\" class=\"login-image\">\r\n    </figure>\r\n  </div>\r\n  <div class=\"\">\r\n    <figure class=\" text-center mb-4\">\r\n      <img src=\"./assets/img/logo-finsmart.svg\" alt=\"logo\" class=\"img-fluid logo\" width=\"250\">\r\n    </figure>\r\n    <form (ngSubmit)=\"loginUser($event)\" #userLogin=\"ngForm\">\r\n      <div class=\"text-center mb-4 d-flex login-buttons\">\r\n        <button type=\"button\" class=\"main-button-radius bg-true-blue\">Cliente</button>\r\n        <button type=\"button\" class=\"main-button-radius bg-gray-1\">Inversionista</button>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"RUC\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Contraseña\">\r\n        <small id=\"emailHelp\" class=\"form-text fs-12 mt-2\" style=\"color: #0076E1;\" >¿Olvidaste tu contraseña?</small>\r\n      </div>\r\n      <div class=\"text-center d-flex justify-content-center\">\r\n        <button type=\"submit\" class=\"bg-true-blue main-button-radius\" style=\"border-radius: 20px\">Ingresar</button>\r\n      </div>\r\n    </form>\r\n    <div class=\"text-center mt-5 d-flex justify-content-center\">\r\n      <button type=\"submit\" class=\"bg-electric-blue main-button-radius\">Crear una cuenta</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (e) {
        console.log("login");
        e.preventDefault();
        this.router.navigate(['oportunidades']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/opportunities/opportunities.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/opportunities/opportunities.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/opportunities/opportunities.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/opportunities/opportunities.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"d-flex oportunitie-box\">\r\n    <div class=\"single-box\">\r\n      <p>\r\n        Disponible para invertir\r\n      </p>\r\n      <p class=\"bold\">{{singleBenefits.ammount}}</p>\r\n    </div>\r\n    <div class=\"single-box\">\r\n      <p>TEA promedio</p>\r\n      <p class=\"bold\">{{singleBenefits.tea}}</p>\r\n    </div>\r\n    <div class=\"single-box\">\r\n      <p><span class=\"bold\">{{singleBenefits.days}} días </span>de duración promedio de retorno de la\r\n        inversión</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"main-table oportunitie-table w-90\">\r\n    <table mdbTable>\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Pagador</th>\r\n          <th scope=\"col\">Monto Total</th>\r\n          <th scope=\"col-2\">Monto Disponible</th>\r\n          <th scope=\"col\">TEA</th>\r\n          <th scope=\"col\">ROI (monto)</th>\r\n          <th scope=\"col\">Fecha de cobro (días)</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngFor=\"let el of oportunities\">\r\n        <tr class=\"box-wrapped\" mdbTableCol (click)=\"showRow(el)\"\r\n          [ngClass]=\"{'no-border': selectedRow && selectedRow.name === el.name}\">\r\n          <td class=\"light\">{{el.name}}</td>\r\n          <td class=\"light\">{{el.ammount}}</td>\r\n          <td class=\"light\">{{el.availableAmmount}}</td>\r\n          <td class=\"light\">{{el.tea}}</td>\r\n          <td>\r\n            <p class=\"light mb-0\">{{el.roi}}</p>\r\n            <p class=\"light\">{{el.roiAmmount}}</p>\r\n          </td>\r\n          <td>\r\n            <p class=\"light mb-0\">{{el.date}}</p>\r\n            <p class=\"light\">en {{el.days}} dias</p>\r\n          </td>\r\n        </tr>\r\n        <tr mdbTableCol class=\"expanded-row\" [ngClass]=\"{'hidden': !selectedRow || selectedRow.name !== el.name}\">\r\n          <td colspan=\"6\" class=\"pb-5\">\r\n            <div class=\"d-flex align-items-center flex-column\">\r\n              <div class=\"d-flex justify-content-between\">\r\n                <div class=\"d-flex w-50 flex-column\">\r\n                  <p class=\"light expanded-p\">{{el.child.text}}</p>\r\n                  <p>{{el.child.mainText}}</p>\r\n                </div>\r\n                <div class=\"invert-box\">\r\n                  <div class=\"d-flex\">\r\n                    <p class=\"light invert\">\r\n                      Quiero invertir:\r\n                      <span>(usar decimales)</span>\r\n                    </p>\r\n                    <input placeholder=\"Monto\" />\r\n                  </div>\r\n                  <p class=\"italic\">{{el.child.ammount}}</p>\r\n                  <h4 class=\"light text-right mt-1 mb-0\">ROI: <span class=\"regular\">{{el.child.roi}}</span></h4>\r\n                  <p class=\"text-right light fs-14\">en {{el.child.days}} dias</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"checkbox-wrapper my-3\">\r\n                <input type=\"checkbox\" />\r\n                <a href=\"\" class=\"ml-1 light fs-14\">Estoy de acuerdo con los términos y condiciones</a>\r\n              </div>\r\n              <button type=\"submit\" class=\"bg-electric-blue main-button-radius\"\r\n                (click)=\"open()\">Invertir</button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"main-container-mobile\" >\r\n <ngb-carousel [showNavigationArrows]=\"showNavigationArrows\" class=\"carousel-content carousel-top\"\r\n   [showNavigationIndicators]=\"showNavigationIndicators\" >\r\n   <ng-template ngbSlide>\r\n     <div class=\"carousel-caption\">\r\n       <p>Oportunidades para invertir</p>\r\n       <p>S/ 45,452.32</p>\r\n     </div>\r\n   </ng-template>\r\n   <ng-template ngbSlide>\r\n     <div class=\"carousel-caption\">\r\n       <p>TEA promedio</p>\r\n       <p>25.4 %</p>\r\n     </div>\r\n   </ng-template>\r\n   <ng-template ngbSlide>\r\n     <div class=\"carousel-caption\">\r\n       <p class=\"px-5\"><span>35 días</span> de duración promedio de retorno sobre la \r\n      inversión</p>\r\n     </div>\r\n   </ng-template>\r\n </ngb-carousel>\r\n <div>\r\n   <p class=\"title\">Oportunidades</p>\r\n   <ngb-carousel [showNavigationArrows]=\"showNavigationArrows\" class=\"carousel-content carousel-bottom\"\r\n     [showNavigationIndicators]=\"showNavigationIndicators\" >\r\n     <ng-template ngbSlide *ngFor=\"let item of oportunities\">\r\n       <div class=\"carousel-caption\">\r\n         <div class=\"d-flex justify-content-around first-part\">\r\n            <p>Pagador</p> <p>{{item.name}}</p>\r\n         </div>\r\n         <hr class='mx-4 mt-0 mb-4'>\r\n         <div class=\"d-flex justify-content-around second-part pt-2\">\r\n            <div>\r\n              <p>Monto total</p>\r\n              <p>{{item.ammount}}</p>\r\n            </div>\r\n            <div>\r\n              <p>Monto disponible</p>\r\n              <p>{{item.availableAmmount}}</p>\r\n            </div>\r\n         </div>\r\n         <hr class='mx-5 mt-0'>\r\n         <div class=\"d-flex justify-content-around third-part mr-4 ml-3\">\r\n            <div>\r\n              <p>TEA</p>\r\n              <p>{{item.tea}}</p>\r\n            </div>\r\n            <hr class='mx-2'>\r\n            <div>\r\n              <p class='mx-2'>ROI (monto)</p>\r\n              <p class='mb-0'>{{item.roi}}</p>\r\n              <p>{{item.roiAmmount}}</p>\r\n            </div>\r\n            <hr class='mx-2'>\r\n            <div>\r\n                <p class='mx-2'>Fecha de cobro (días)</p>\r\n                <p class='mb-0'>{{item.date}}</p>\r\n                <p>({{item.days}}) días</p>\r\n            </div>\r\n         </div>\r\n         \r\n       </div>\r\n     </ng-template>\r\n   </ngb-carousel>\r\n </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/opportunities/opportunities.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/opportunities/opportunities.component.ts ***!
  \****************************************************************/
/*! exports provided: NgbdModal1Content, NgbdModal2Content, OpportunitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModal1Content", function() { return NgbdModal1Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModal2Content", function() { return NgbdModal2Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesComponent", function() { return OpportunitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModal1Content = /** @class */ (function () {
    function NgbdModal1Content(modalService, activeModal) {
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    NgbdModal1Content.prototype.open = function () {
        this.modalService.open(NgbdModal2Content, { centered: true, backdropClass: 'light-backdrop2' });
    };
    NgbdModal1Content = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <div class=\"modal-header border-bottom-0\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p><b>Confirmaci\u00F3n</b></p>\n      <p>Est\u00E1s a punto de invertir en la factura <b>E001.55</b> de la empresa <b>DACVAL S.A.C</b> por un importe de <b>PEN XXXX.xx</b>\n      con una ganancia proyectada de <b>XX.X</b> para el <b>mi\u00E9rcoles, 3 de julio de 2019</b></p>\n      <p>Has aceptado los t\u00E9rminos y condiciones de cesi\u00F3n de uso de plataforma Web y el contrato de\n       condiciones especiales aplicables al inversionista, relacionado al mandato y sin representaci\u00F3n.</p>\n      <p><button class=\"d-inline bg-electric-blue main-button-radius\" (click)=\"open()\">Invertir</button></p>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModal1Content);
    return NgbdModal1Content;
}());

var NgbdModal2Content = /** @class */ (function () {
    function NgbdModal2Content(modalService, activeModal) {
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    NgbdModal2Content.prototype.close = function () {
        this.modalService.dismissAll();
    };
    NgbdModal2Content = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <div class=\"modal-header border-bottom-0\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body second-modal text-center\">\n      <p><b>\u00A1Inversi\u00F3n exitosa!</b></p>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModal2Content);
    return NgbdModal2Content;
}());

var OpportunitiesComponent = /** @class */ (function () {
    function OpportunitiesComponent(modalService, config) {
        this.modalService = modalService;
        this.selectedRow = undefined;
        this.singleBenefits = {
            ammount: 'S/ 45,452.32',
            tea: '25%',
            days: 35,
        };
        this.singleBenefitsArr = [
            {
                ammount: 'S/ 45,452.32',
                tea: '25%',
                days: 35,
            }, {
                ammount: 'S/ 55,452.32',
                tea: '25%',
                days: 35,
            }
        ];
        this.showNavigationArrows = true;
        this.showNavigationIndicators = false;
        this.oportunities = [
            {
                id: 1,
                name: 'PC TEXTIL EIRL',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
                child: {
                    text: 'PC TEXTIL EIRL (RUC 20131379944) es una empresa dedicada a la elaboración de prendas para empleados, colaboradores, técnicos y auxiliares. Tiene una facturación promedio de XX millones de soles.',
                    mainText: '5 (100%) de las facturas has sido cobradas exitosamente.',
                    ammount: '(cuentas con S/15,456.00 y $0.00 disponibles)',
                    roi: '+ S/318.75',
                    days: '45',
                }
            },
            {
                id: 2,
                name: 'RS IMPORT EXPORT SAC',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
                child: {
                    text: 'PC TEXTIL EIRL (RUC 20131379944) es una empresa dedicada a la elaboración de prendas para empleados, colaboradores, técnicos y auxiliares. Tiene una facturación promedio de XX millones de soles.',
                    mainText: '5 (100%) de las facturas has sido cobradas exitosamente.',
                    ammount: '(cuentas con S/15,456.00 y $0.00 disponibles)',
                    roi: '+ S/318.75',
                    days: '45',
                }
            },
            {
                id: 3,
                name: 'RS IMPORT EXPORT SC',
                ammount: 'S/ 14,889,95',
                availableAmmount: 'S/ 10,000,00',
                tea: '25.5%',
                roi: '3,19%',
                roiAmmount: '(+S/ 318,75)',
                date: '04/feb/2019',
                days: 45,
                child: {
                    text: 'PC TEXTIL EIRL (RUC 20131379944) es una empresa dedicada a la elaboración de prendas para empleados, colaboradores, técnicos y auxiliares. Tiene una facturación promedio de XX millones de soles.',
                    mainText: '5 (100%) de las facturas has sido cobradas exitosamente.',
                    ammount: '(cuentas con S/15,456.00 y $0.00 disponibles)',
                    roi: '+ S/318.75',
                    days: '45',
                }
            }
        ];
        config.showNavigationArrows = true;
        config.interval = 0;
        config.showNavigationIndicators = false;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = true;
    }
    OpportunitiesComponent.prototype.open = function () {
        this.modalService.open(NgbdModal1Content, { centered: true, backdropClass: 'light-backdrop1' });
    };
    OpportunitiesComponent.prototype.dismissAll = function () {
        this.modalService.dismissAll();
    };
    OpportunitiesComponent.prototype.ngOnInit = function () {
    };
    OpportunitiesComponent.prototype.showRow = function (el) {
        if (this.selectedRow && this.selectedRow.id === el.id) {
            this.selectedRow = undefined;
        }
        else {
            this.selectedRow = el;
        }
    };
    OpportunitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opportunities',
            template: __webpack_require__(/*! ./opportunities.component.html */ "./src/app/pages/opportunities/opportunities.component.html"),
            styles: [__webpack_require__(/*! ./opportunities.component.css */ "./src/app/pages/opportunities/opportunities.component.css")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], OpportunitiesComponent);
    return OpportunitiesComponent;
}());



/***/ }),

/***/ "./src/app/pages/personal-info/personal-info.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/personal-info/personal-info.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"responsive-container\">\r\n  <div class=\"personal-info-container\">\r\n    <div class='mx-3'>\r\n        <p>Mis datos personales</p>\r\n        <span>Si deseas modificar tu nombre o e-mail, por favor contacta con nosostros.</span>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <button class=\"personal-button-psw\">Modificar contraseña</button>\r\n    </div>\r\n    <div class=\"form-container container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-sm-12 col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Nombres</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Alexander\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"first-lastname\">Apellido Paterno</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"first-lastname\" placeholder=\"Chiu\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"second-lastname\">Apellido Materno</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"second-lastname\" placeholder=\"Werner\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Correo Electrónico</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alexanderchw@gmail.com\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12 col-md-6\">\r\n          <div class=\"form-group\">\r\n              <label for=\"address\">Dirección</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Urb El Cuadro C-39 Chaclacayo\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"postal-code\">Apellido Paterno</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"postal-code\" placeholder=\"15046\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"city\">Ciudad</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Lima\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"phone\">Teléfono móvil</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"phone\" placeholder=\"997545791\">\r\n            </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <button class=\"personal-button-changes\">Guardar cambios</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/personal-info/personal-info.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/personal-info/personal-info.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/personal-info/personal-info.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/personal-info/personal-info.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
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

var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent() {
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
    };
    PersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-info',
            template: __webpack_require__(/*! ./personal-info.component.html */ "./src/app/pages/personal-info/personal-info.component.html"),
            styles: [__webpack_require__(/*! ./personal-info.component.scss */ "./src/app/pages/personal-info/personal-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Alejandra Cabrera\Freelo\finsmart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map