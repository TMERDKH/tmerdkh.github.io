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

/***/ "./src/app/_models/artwork.model.ts":
/*!******************************************!*\
  !*** ./src/app/_models/artwork.model.ts ***!
  \******************************************/
/*! exports provided: Artwork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Artwork", function() { return Artwork; });
var Artwork = /** @class */ (function () {
    function Artwork(title, description, dimensions, year, price, category) {
        this.title = title;
        this.description = description;
        this.dimensions = dimensions;
        this.year = year;
        this.price = price;
        this.category = category;
    }
    return Artwork;
}());



/***/ }),

/***/ "./src/app/_services/artworks.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/artworks.service.ts ***!
  \***********************************************/
/*! exports provided: ArtworksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworksService", function() { return ArtworksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_artwork_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/artwork.model */ "./src/app/_models/artwork.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArtworksService = /** @class */ (function () {
    function ArtworksService(http) {
        var _this = this;
        this.http = http;
        this.file = "./assets/data.json";
        this.paintings = {};
        this.sketches = {};
        this.getJSON().subscribe(function (data) {
            _this.manipulate(data);
        });
    }
    ArtworksService.prototype.getArtwork = function (title) {
        if (this.paintings[title]) {
            return this.paintings[title];
        }
        else {
            return this.sketches[title];
        }
    };
    ArtworksService.prototype.getPaintings = function () {
        return this.paintings;
    };
    ArtworksService.prototype.getSketches = function () {
        return this.sketches;
    };
    ArtworksService.prototype.getJSON = function () {
        return this.http.get(this.file);
    };
    ArtworksService.prototype.manipulate = function (data) {
        var paintings = data.paintings;
        var sketches = data.sketches;
        var i;
        var painting;
        for (i = 0; i < paintings.length; i++) {
            painting = paintings[i];
            this.paintings[painting.title] = new _models_artwork_model__WEBPACK_IMPORTED_MODULE_2__["Artwork"](painting.title, painting.description, painting.dimensions, painting.year, painting.price, painting.category);
        }
        var x;
        var sketch;
        for (x = 0; x < sketches.length; x++) {
            sketch = sketches[x];
            this.sketches[sketch.title] = new _models_artwork_model__WEBPACK_IMPORTED_MODULE_2__["Artwork"](sketch.title, sketch.description, sketch.dimensions, sketch.year, sketch.price, sketch.category);
        }
    };
    ArtworksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArtworksService);
    return ArtworksService;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n    margin-right: 10%;\n    margin-left: 10%;\n    text-align: center;\n    margin-top: 5%;\n}\n\nimg {\n    width: 90%;\n    height: 90%;\n}\n\n.details div {\n    margin-top: 10%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xufVxuXG4uZGV0YWlscyBkaXYge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"content\">\n\n    <div class=\"mdc-layout-grid\" class = \"paintings\">\n\n            <div class=\"mdc-layout-grid__inner\">\n\n            <div class=\"mdc-layout-grid__cell--span-6\">\n\n                <div class = \"title\"> <p> about me </p> </div> \n            \n            <div class = \"details\">\n\n                    <div> Hello! My name is Tamar Merdkhanian and I'm a 21 year old Software Engineering student in Montreal, Canada.  </div>\n                    <div> I have a passion to create - with paintbrushes, pencils, 1s and 0s. Therefore, I developed this website from scratch using Angular 6 and NodeJS to showcase/sell some of my artwork. All photos on the site are taken by me.</div>\n                    <div> If you are interested in any of my pieces, please contact me at <strong> tamar.merdkhanian@gmail.com </strong> to purchase! </div>\n\n            </div>\n\n            </div>\n\n            <div class=\"mdc-layout-grid__cell--span-6\">\n\n                <div class = \"image\"> <img src =\"assets/images/about/about-me.jpg\" alt=\"about-me\"> </div> \n                \n        </div>\n \n          </div>\n    \n    </div>\n\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_artworks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/artworks.service */ "./src/app/_services/artworks.service.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(service) {
        this.service = service;
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_artworks_service__WEBPACK_IMPORTED_MODULE_2__["ArtworksService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _paintings_paintings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paintings/paintings.component */ "./src/app/paintings/paintings.component.ts");
/* harmony import */ var _sketches_sketches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sketches/sketches.component */ "./src/app/sketches/sketches.component.ts");
/* harmony import */ var _prints_prints_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prints/prints.component */ "./src/app/prints/prints.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _artwork_details_artwork_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./artwork-details/artwork-details.component */ "./src/app/artwork-details/artwork-details.component.ts");










var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'paintings', component: _paintings_paintings_component__WEBPACK_IMPORTED_MODULE_4__["PaintingsComponent"] },
    { path: 'paintings/:title', component: _artwork_details_artwork_details_component__WEBPACK_IMPORTED_MODULE_9__["ArtworkDetailsComponent"] },
    { path: 'sketches', component: _sketches_sketches_component__WEBPACK_IMPORTED_MODULE_5__["SketchesComponent"] },
    { path: 'sketches/:title', component: _artwork_details_artwork_details_component__WEBPACK_IMPORTED_MODULE_9__["ArtworkDetailsComponent"] },
    { path: 'prints', component: _prints_prints_component__WEBPACK_IMPORTED_MODULE_6__["PrintsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-footer {\n    width: 100%;\n}\n\n.sidenav {\n    padding: 20px;\n    width: auto;\n    background-color: #e8c0c8;\n    position: fixed;\n    left: 0;\n  }\n\n.sidenav button {\n    padding: 20px;\n    margin-left: 20px;\n  }\n\n.container {\n    height: auto;\n  }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n    visibility: visible;\n    background-color: black!important;\n    opacity: 0.5;\n}\n\n.mat-drawer-backdrop {\n  visibility: visible!important;\n  background-color: black!important;\n  opacity: 0.5;\n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsUUFBUTtHQUNUOztBQUVEO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtHQUNuQjs7QUFFRDtJQUNFLGFBQWE7R0FDZDs7QUFFRDtJQUNFLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsYUFBYTtDQUNoQjs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsYUFBYTs7Q0FFZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThjMGM4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIFxuICAuc2lkZW5hdiBidXR0b24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLm1hdC1kcmF3ZXItYmFja2Ryb3Age1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjU7XG5cbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"container\" hasBackdrop=true >\n\n        <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n            \n        <button mat-icon-button (click)=\"drawer.toggle()\"><mat-icon>menu</mat-icon> </button> </div>\n    \n        <mat-drawer #drawer class=\"sidenav\" mode=\"over\">\n    \n            <button mat-icon-button (click)=\"drawer.toggle(); redirect('')\"> Home </button> \n                <br>\n            <button mat-icon-button (click)=\"drawer.toggle(); redirect('paintings')\"> paintings </button> \n                <br>\n            <button (click)=\"drawer.toggle(); redirect('sketches')\"> sketches </button> \n                <br>\n            <button (click)=\"drawer.toggle(); redirect('about')\"> about </button> \n                <br>\n            <button (click)=\"drawer.toggle(); redirect('contact')\" class = \"contact\"> contact </button>\n    \n        </mat-drawer>\n    \n        \n        <app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n\n</mat-drawer-container>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'legend-of-tamar';
    }
    AppComponent.prototype.redirect = function (page) {
        this.router.navigate(['/' + page]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _paintings_paintings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paintings/paintings.component */ "./src/app/paintings/paintings.component.ts");
/* harmony import */ var _sketches_sketches_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sketches/sketches.component */ "./src/app/sketches/sketches.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _prints_prints_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./prints/prints.component */ "./src/app/prints/prints.component.ts");
/* harmony import */ var _artwork_details_artwork_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./artwork-details/artwork-details.component */ "./src/app/artwork-details/artwork-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                _paintings_paintings_component__WEBPACK_IMPORTED_MODULE_9__["PaintingsComponent"],
                _sketches_sketches_component__WEBPACK_IMPORTED_MODULE_10__["SketchesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _prints_prints_component__WEBPACK_IMPORTED_MODULE_15__["PrintsComponent"],
                _artwork_details_artwork_details_component__WEBPACK_IMPORTED_MODULE_16__["ArtworkDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artwork-details/artwork-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/artwork-details/artwork-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n    margin-right: 10%;\n    margin-left: 10%;\n    text-align: center;\n}\n\nimg {\n    width: 90%;\n    height: 90%;\n}\n\n.details {\n    margin-top: 20%;\n}\n\n.description {\n    margin-bottom: 60px;\n    font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0d29yay1kZXRhaWxzL2FydHdvcmstZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FydHdvcmstZGV0YWlscy9hcnR3b3JrLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xufVxuXG4uZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/artwork-details/artwork-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/artwork-details/artwork-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"artwork\" class = \"content\">\n\n        <div class = \"title\"> <p> {{this.transform(artwork.title)}} </p> </div> \n\n        <div class=\"mdc-layout-grid\" class = \"paintings\">\n\n                <div class=\"mdc-layout-grid__inner\">\n    \n                <div class=\"mdc-layout-grid__cell--span-8\">\n\n                        <div class = \"image\"> <img src =\"assets/images/{{artwork.category}}/{{artwork.title}}.jpeg\" alt=\"{{artwork.title}}\"> </div> \n                        \n                </div>\n\n                <div class=\"mdc-layout-grid__cell--span-4\">\n                \n                <div class = \"details\">\n\n                        <div class = \"description\"> {{artwork.description}} </div>\n                        <div> <strong> Dimensions : </strong> {{artwork.dimensions}} </div>\n                        <div> <strong> Year : </strong>  {{artwork.year}} </div>\n                        <div> <strong> Price : </strong>  {{artwork.price}} </div>\n\n                </div>\n\n                </div>\n     \n              </div>\n        \n        </div>\n\n</div>"

/***/ }),

/***/ "./src/app/artwork-details/artwork-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/artwork-details/artwork-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ArtworkDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworkDetailsComponent", function() { return ArtworkDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_artworks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/artworks.service */ "./src/app/_services/artworks.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ArtworkDetailsComponent = /** @class */ (function () {
    function ArtworkDetailsComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    ArtworkDetailsComponent.prototype.ngOnInit = function () {
        var title;
        this.route.paramMap.subscribe(function (param) { title = param.get('title'); });
        this.artwork = this.service.getArtwork(title);
    };
    ArtworkDetailsComponent.prototype.transform = function (str) {
        var str_new = str.replace("-", " ");
        return str_new;
    };
    ArtworkDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artwork-details',
            template: __webpack_require__(/*! ./artwork-details.component.html */ "./src/app/artwork-details/artwork-details.component.html"),
            styles: [__webpack_require__(/*! ./artwork-details.component.css */ "./src/app/artwork-details/artwork-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_artworks_service__WEBPACK_IMPORTED_MODULE_2__["ArtworksService"]])
    ], ArtworkDetailsComponent);
    return ArtworkDetailsComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n    margin-right: 10%;\n    margin-left: 10%;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.details div {\n    text-align: left;\n}\n\n.details {\n    margin-bottom: 30%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5kZXRhaWxzIGRpdiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRldGFpbHMge1xuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"content\"> \n  \n  <div class = \"title\"> <p> contact </p> </div> \n            \n      <div class = \"details\">\n\n          <div> Email me in case you're interested in any of the pieces on my website: </div>\n          <br>\n          <div> <strong> Email: </strong>tamar.merdkhanian@gmail.com </div>\n          <div> For now, purchasing is only available within Montreal, Canada. </div>\n\n      </div>\n\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_artworks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/artworks.service */ "./src/app/_services/artworks.service.ts");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(service) {
        this.service = service;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_artworks_service__WEBPACK_IMPORTED_MODULE_2__["ArtworksService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    margin-top: 40px;\n    margin-left: 5%;\n    padding: 25px;\n    bottom: 0;\n    left:0;\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtJQUNWLE9BQU87SUFDUCxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6MDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  Made by Tamar Merdkhanian.\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n    text-align: center;\n    margin-right: 5%;\n    margin-left: 5%;\n}\n\n.homepage-image {\n    position: relative;\n    margin-top: 10px;\n}\n\n.homepage-image img {\n    width: 85vw;\n}\n\n.title {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\n.homepage-image * {\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 4vw;\n    color: white;\n    font-weight: bold;\n    letter-spacing: 1vw;\n}\n\n.homepage-image p {\n    -webkit-animation: fadein 6s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\n            animation: fadein 6s;\n}\n\n.homepage-shop img {\n    margin-bottom: 10px;\n    width: 80%;\n    height: 80%;\n}\n\n.homepage-shop {\n    font-size: 20px;\n    font-weight: lighter;\n    margin-top: 10%;\n}\n\n.homepage-shop img:hover {\n    opacity: 0.5;\n}\n\n.mdc-layout-grid {\n text-align: center;\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n@-webkit-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksNkJBQTZCLENBQUMscUNBQXFDLENBQ3JDLGtCQUFrQixDQUNsQix1QkFBdUIsQ0FDdkIsa0JBQWtCO1lBQ3hDLHFCQUFxQjtDQUNoQzs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25COztBQUVEO0lBQ0ksT0FBTyxXQUFXLEVBQUU7SUFDcEIsT0FBTyxXQUFXLEVBQUU7Q0FDdkI7O0FBT0Q7SUFDSSxPQUFPLFdBQVcsRUFBRTtJQUNwQixPQUFPLFdBQVcsRUFBRTtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uaG9tZXBhZ2UtaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaG9tZXBhZ2UtaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogODV2dztcbn1cblxuLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uaG9tZXBhZ2UtaW1hZ2UgKiB7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAxdnc7XG59IFxuXG4uaG9tZXBhZ2UtaW1hZ2UgcCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiA2czsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xuICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gNnM7IC8qIEZpcmVmb3ggPCAxNiAqL1xuICAgICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gNnM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiA2czsgLyogT3BlcmEgPCAxMi4xICovXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiA2cztcbn1cblxuLmhvbWVwYWdlLXNob3AgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbi5ob21lcGFnZS1zaG9wIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uaG9tZXBhZ2Utc2hvcCBpbWc6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLm1kYy1sYXlvdXQtZ3JpZCB7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQC1tcy1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59Il19 */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"content\">\n\n<div>\n    <div>\n    <div class = \"homepage-image\"> \n        <img src =\"assets/images/homepage/cover-photo.jpg\" alt=\"cover-photo\" width = \"100%\">\n        <div class = \"title\"> <p> legend <i> of </i> tamar </p> </div> \n    </div> \n    </div>\n</div>\n\n<div class = \"homepage-shop\"> \n<p> shop by category </p>\n<br>\n\n    \n<div class=\"mdc-layout-grid\">\n        <div class=\"mdc-layout-grid__inner\">\n            <div class=\"mdc-layout-grid__cell\"> \n                    <div> <img (click)=\"redirect('paintings')\" src =\"assets/images/homepage/paintings.jpg\" alt=\"paintings\"> </div> \n                    <div> paintings </div>\n          </div>\n            <div class=\"mdc-layout-grid__cell\"> \n                <div> <img (click)=\"redirect('sketches')\" src =\"assets/images/homepage/sketches.jpg\" alt=\"sketches\"> </div> \n                <div> sketches </div>        \n            </div>\n            <div class=\"mdc-layout-grid__cell\"> \n                <div> <img (click)=\"redirect('prints')\" src =\"assets/images/homepage/prints.jpg\" alt=\"paintings\"> </div> \n                <div> prints </div>\n            </div>\n      </div>\n\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router) {
        this.router = router;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.redirect = function (page) {
        this.router.navigate(['/' + page]);
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\nfont-size: 3vw;\nfont-family: Snell Roundhand, cursive;\nmargin-left: 8vw;\nmargin-right: 4vw;\n}\n\n.logo-mobile {\n    text-align: center;\n    margin-bottom: -7%;\n}\n\n.logo-mobile button {\n  font-size: 30px;\n  font-family: Snell Roundhand, cursive;\n}\n\nbutton {\n    margin-left: 2vw;\n    font-size: 1.7vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZUFBZTtBQUNmLHNDQUFzQztBQUN0QyxpQkFBaUI7QUFDakIsa0JBQWtCO0NBQ2pCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0Qjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixzQ0FBc0M7Q0FDdkM7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuZm9udC1zaXplOiAzdnc7XG5mb250LWZhbWlseTogU25lbGwgUm91bmRoYW5kLCBjdXJzaXZlO1xubWFyZ2luLWxlZnQ6IDh2dztcbm1hcmdpbi1yaWdodDogNHZ3O1xufVxuXG4ubG9nby1tb2JpbGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAtNyU7XG59XG5cbi5sb2dvLW1vYmlsZSBidXR0b24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBTbmVsbCBSb3VuZGhhbmQsIGN1cnNpdmU7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgICBmb250LXNpemU6IDEuN3Z3O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n<div fxShow=\"true\" fxHide.gt-sm=\"true\">\n\n    <div class = \"logo-mobile\">\n        <button (click)=\"redirect('')\">  Tamar Merdkhanian </button>\n    </div>\n\n</div>\n    \n<div>\n    <mat-toolbar>\n\n      <div fxShow=\"true\" fxHide.lt-md=\"true\" class = \"navbar\">\n\n          <button class = \"logo\" (click)=\"redirect('')\">  Tamar Merdkhanian </button>\n          <button (click)=\"redirect('paintings')\">  paintings </button> \n          <button (click)=\"redirect('sketches')\"> sketches </button> \n          <button (click)=\"redirect('about')\"> about </button> \n          <button (click)=\"redirect('contact')\" class = \"contact\"> contact </button>\n  \n      </div>\n\n      \n  \n    </mat-toolbar>\n\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.redirect = function (page) {
        this.router.navigate(['/' + page]);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/paintings/paintings.component.css":
/*!***************************************************!*\
  !*** ./src/app/paintings/paintings.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n    text-align: center;\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.paintings-image {\n    position: relative;\n    margin-top: 10px;\n}\n\n.paintings-image img {\n    width: 85vw;\n}\n\n.title p {\n    position: absolute;\n    top: 55%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\n.paintings-image * {\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 4vw;\n    color: white;\n    font-weight: bold;\n    letter-spacing: 1vw;\n}\n\n.paintings img {\n    margin-bottom: 10px;\n    width: 90%;\n    height: 90%;\n}\n\n.paintings img:hover {\n    opacity: 0.5;\n}\n\n.paintings {\n    font-size: 20px;\n    font-weight: lighter;\n    margin-top: 5%;\n}\n\n.mdc-layout-grid {\n text-align: center;\n}\n\n.mdc-layout-grid {\n    margin: -16px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbnRpbmdzL3BhaW50aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQWlDO1lBQWpDLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7Q0FDbEI7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0dBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWludGluZ3MvcGFpbnRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4ucGFpbnRpbmdzLWltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBhaW50aW5ncy1pbWFnZSBpbWcge1xuICAgIHdpZHRoOiA4NXZ3O1xufVxuXG4udGl0bGUgcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnBhaW50aW5ncy1pbWFnZSAqIHtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDR2dztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDF2dztcbn0gXG5cbi5wYWludGluZ3MgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG59XG5cbi5wYWludGluZ3MgaW1nOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5wYWludGluZ3Mge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLm1kYy1sYXlvdXQtZ3JpZCB7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWRjLWxheW91dC1ncmlkIHtcbiAgICBtYXJnaW46IC0xNnB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/paintings/paintings.component.html":
/*!****************************************************!*\
  !*** ./src/app/paintings/paintings.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"content\">\n\n        <div>\n                <div>\n                <div class = \"paintings-image\"> \n                    <img src =\"assets/images/cover-photo-paintings.jpg\" alt=\"cover-photo\" width = \"100%\">\n                    <div class = \"title\"> <p> Paintings </p> </div> \n                </div> \n                </div>\n            </div>\n    \n        \n    <div class=\"mdc-layout-grid\" class = \"paintings\">\n            <div class=\"mdc-layout-grid__inner\">\n\n            <div *ngFor=\"let item of paintings | keyvalue\" class=\"mdc-layout-grid__cell\"> \n                    <div> <img  (click) = \"expand(item.key)\" src =\"assets/images/paintings/{{item.key}}.jpeg\" alt=\"{{item.key}}\"> </div> \n                    <div> {{this.transform(item.key)}} </div>\n            </div>\n \n          </div>\n    \n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/paintings/paintings.component.ts":
/*!**************************************************!*\
  !*** ./src/app/paintings/paintings.component.ts ***!
  \**************************************************/
/*! exports provided: PaintingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingsComponent", function() { return PaintingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_artworks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/artworks.service */ "./src/app/_services/artworks.service.ts");




var PaintingsComponent = /** @class */ (function () {
    function PaintingsComponent(router, service) {
        this.router = router;
        this.service = service;
        this.paintings = this.service.getPaintings();
    }
    PaintingsComponent.prototype.ngOnInit = function () {
    };
    PaintingsComponent.prototype.expand = function (artwork) {
        this.router.navigate(["/paintings", artwork]);
    };
    PaintingsComponent.prototype.transform = function (str) {
        var str_new = str.replace("-", " ");
        return str_new;
    };
    PaintingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paintings',
            template: __webpack_require__(/*! ./paintings.component.html */ "./src/app/paintings/paintings.component.html"),
            styles: [__webpack_require__(/*! ./paintings.component.css */ "./src/app/paintings/paintings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_artworks_service__WEBPACK_IMPORTED_MODULE_3__["ArtworksService"]])
    ], PaintingsComponent);
    return PaintingsComponent;
}());



/***/ }),

/***/ "./src/app/prints/prints.component.css":
/*!*********************************************!*\
  !*** ./src/app/prints/prints.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    font-style: italic;\n    margin: 10%;\n    margin-bottom: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnRzL3ByaW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9wcmludHMvcHJpbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luOiAxMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/prints/prints.component.html":
/*!**********************************************!*\
  !*** ./src/app/prints/prints.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\nPrints coming soon...\n</p>\n"

/***/ }),

/***/ "./src/app/prints/prints.component.ts":
/*!********************************************!*\
  !*** ./src/app/prints/prints.component.ts ***!
  \********************************************/
/*! exports provided: PrintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintsComponent", function() { return PrintsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrintsComponent = /** @class */ (function () {
    function PrintsComponent() {
    }
    PrintsComponent.prototype.ngOnInit = function () {
    };
    PrintsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prints',
            template: __webpack_require__(/*! ./prints.component.html */ "./src/app/prints/prints.component.html"),
            styles: [__webpack_require__(/*! ./prints.component.css */ "./src/app/prints/prints.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrintsComponent);
    return PrintsComponent;
}());



/***/ }),

/***/ "./src/app/sketches/sketches.component.css":
/*!*************************************************!*\
  !*** ./src/app/sketches/sketches.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n    text-align: center;\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n.sketches-image {\n    position: relative;\n    margin-top: 10px;\n}\n\n.sketches-image img {\n    width: 85vw;\n}\n\n.title p {\n    position: absolute;\n    top: 55%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\n.sketches-image * {\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 4vw;\n    color: white;\n    font-weight: bold;\n    letter-spacing: 1vw;\n}\n\n.sketches img {\n    margin-bottom: 10px;\n    width: 90%;\n    height: 90%;\n    padding: 2%;\n    border: solid black;\n}\n\n.sketches img:hover {\n    opacity: 0.5;\n}\n\n.sketches {\n    font-size: 20px;\n    font-weight: lighter;\n    margin-top: 5%;\n}\n\n.mdc-layout-grid {\n text-align: center;\n}\n\n.mdc-layout-grid {\n    margin: -16px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tldGNoZXMvc2tldGNoZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7Q0FDbEI7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0dBQ2YiLCJmaWxlIjoic3JjL2FwcC9za2V0Y2hlcy9za2V0Y2hlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLnNrZXRjaGVzLWltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNrZXRjaGVzLWltYWdlIGltZyB7XG4gICAgd2lkdGg6IDg1dnc7XG59XG5cbi50aXRsZSBwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uc2tldGNoZXMtaW1hZ2UgKiB7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAxdnc7XG59IFxuXG4uc2tldGNoZXMgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuLnNrZXRjaGVzIGltZzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uc2tldGNoZXMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLm1kYy1sYXlvdXQtZ3JpZCB7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWRjLWxheW91dC1ncmlkIHtcbiAgICBtYXJnaW46IC0xNnB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/sketches/sketches.component.html":
/*!**************************************************!*\
  !*** ./src/app/sketches/sketches.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"content\">\n\n    <div>\n            <div>\n            <div class = \"sketches-image\"> \n                <img src =\"assets/images/cover-photo-sketches.jpg\" alt=\"cover-photo\" width = \"100%\">\n                <div class = \"title\"> <p> Sketches </p> </div> \n            </div> \n            </div>\n        </div>\n\n    \n<div class=\"mdc-layout-grid\" class = \"sketches\">\n        <div class=\"mdc-layout-grid__inner\">\n\n        <div *ngFor=\"let item of sketches | keyvalue\" class=\"mdc-layout-grid__cell\"> \n                <div> <img  (click) = \"expand(item.key)\" src =\"assets/images/sketches/{{item.key}}.jpeg\" alt=\"{{item.key}}\"> </div> \n                <div> {{this.transform(item.key)}} </div>\n        </div>\n\n      </div>\n\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/sketches/sketches.component.ts":
/*!************************************************!*\
  !*** ./src/app/sketches/sketches.component.ts ***!
  \************************************************/
/*! exports provided: SketchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchesComponent", function() { return SketchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_artworks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/artworks.service */ "./src/app/_services/artworks.service.ts");




var SketchesComponent = /** @class */ (function () {
    function SketchesComponent(router, service) {
        this.router = router;
        this.service = service;
        this.sketches = this.service.getSketches();
    }
    SketchesComponent.prototype.ngOnInit = function () {
    };
    SketchesComponent.prototype.expand = function (artwork) {
        this.router.navigate(["/sketches", artwork]);
    };
    SketchesComponent.prototype.transform = function (str) {
        var str_new = str.replace("-", " ");
        return str_new;
    };
    SketchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sketches',
            template: __webpack_require__(/*! ./sketches.component.html */ "./src/app/sketches/sketches.component.html"),
            styles: [__webpack_require__(/*! ./sketches.component.css */ "./src/app/sketches/sketches.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_artworks_service__WEBPACK_IMPORTED_MODULE_3__["ArtworksService"]])
    ], SketchesComponent);
    return SketchesComponent;
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

module.exports = __webpack_require__(/*! /Users/tamar/legendoftamar/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map