(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class='navbar navbar-expand navbar-light bg-light'>\n    <a class='navbar-brand'>{{pageTitle}}</a>\n    <ul class='nav nav-pills'>\n    <li><a class='nav-link' routerLinkActive='active' [routerLink]=\"['/welcome']\">Home</a></li>\n    <li><a class='nav-link' routerLinkActive='active' [routerLink]=\"['/products']\">Product List</a></li>\n    <li><a class='nav-link' routerLinkActive='active' [routerLink]=\"['/employees']\">Employees</a></li>\n    </ul>\n</nav>\n\n<div class='container'>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employeedetail/employeedetail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employeedetail/employeedetail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Here is your Employees Details!!</p>\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hover\" *ngIf=\"employee\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Gender</th>\n        <th>Job</th>\n        <th>Salary</th>\n        <th>starRating</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>{{employee.empid}}</td>\n        <td>{{ employee.name | myemployees:employee.gender }}</td>\n        <td>{{employee.gender}}</td>\n        <td>{{employee.job}}</td>\n        <td>{{employee.salary | currency:'INR':true:'1.2-2'}}</td>\n        <!--<td><app-star [rating]='employee.starRating' (ratingClicked)='onRatingClicked($event)'></app-star></td>-->\n        <td><app-star [rating]=\"employee.starRating\"></app-star> </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div>\n  <button (click)=\"backtoemployees()\">Back to Employees</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employees.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{pageTitle}}{{errorMsg}}\n<div class=\"form-group\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search by Name\"\n  style=\"width:300px\" [(ngModel)]=\"searchTerm\">\n</div>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Job</th>\n        <th>Employee Profile</th>\n        <!--<th>Gender</th>\n        <th>Salary</th>\n        <th>starRating</th>-->\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let employee of employees | employeefilter:searchTerm\">\n        <td>{{employee._id}}</td>\n        <td>{{employee.name}}</td>\n        <td>{{employee.userEmail}}</td>\n        <!--<td>{{employee.empid}}</td>-->\n        <!--<td>{{employee.name | myemployees:employee.gender}}</td>-->\n        <td><a [routerLink]=\"['/employees', employee.empid]\">{{ employee.name | myemployees:employee.gender }}</a></td>\n        <td>{{employee.job}}</td>\n        <td><a [routerLink]=\"['/employees', employee._id]\">View</a></td>\n        <!--<td><a [routerLink]=\"['/employees', employee.empid]\">View</a></td>-->\n       <!-- <td>{{employee.gender}}</td>\n        \n        <td>{{employee.salary | currency:'INR':true:'1.2-2'}}</td>\n        <td><app-star [rating]='employee.starRating' (ratingClicked)='onRatingClicked($event)'></app-star></td>-->\n        <!--<td><app-star [rating]=\"employee.starRating\"></app-star> </td>-->\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pagenotfound/pagenotfound.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pagenotfound/pagenotfound.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Angular Material - Product List!\n</p>\n<div class=\"mat-elevation-z8\">\n  <mat-form-field>\n    Search: <input (keyup)=\"applyFilter($event.target.value)\" matInput placeholder=\"Filter\">\n  </mat-form-field>\n\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n  \n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- productId Column -->\n    <ng-container matColumnDef=\"productId\">\n      <th mat-header-cell *matHeaderCellDef> ID. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.productId}} </td>\n    </ng-container>\n  \n    <!-- productName Column -->\n    <ng-container matColumnDef=\"productName\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.productName}} </td>\n    </ng-container>\n  \n    <!-- productCode Column -->\n    <ng-container matColumnDef=\"productCode\">\n      <th mat-header-cell *matHeaderCellDef> Code </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.productCode  | removeSpace}} </td>\n    </ng-container>\n  \n    <!-- releaseDate Column -->\n    <ng-container matColumnDef=\"releaseDate\">\n      <th mat-header-cell *matHeaderCellDef> Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.releaseDate}} </td>\n    </ng-container>\n  \n      <!-- description Column -->\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef> Description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n      </ng-container>\n  \n    <!-- price Column -->\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Price </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.price  | currency:'INR':true:'1.2-2'}} </td>\n    </ng-container>\n\n    <!-- imageUrl Column -->\n    <ng-container matColumnDef=\"imageUrl\">\n      <th mat-header-cell *matHeaderCellDef> imageUrl </th>\n      <td mat-cell *matCellDef=\"let element\"> <img [src]='element.imageUrl' style=\"width:50px; height:50px\"> </td>\n    </ng-container>\n\n    <!-- starRating Column -->\n    <ng-container matColumnDef=\"starRating\">\n      <th mat-header-cell *matHeaderCellDef> starRating </th>\n      <td mat-cell *matCellDef=\"let element\"><app-star [rating]=\"element.starRating\"></app-star></td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n  <mat-paginator \n  [pageSizeOptions]=\"[2,5,10]\" showFirstLastButtons>\n  </mat-paginator>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/star/star.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/star/star.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\"\n     [style.width.px]=\"starWidth\"\n     [title]=\"rating\"\n     (click)=\"onClick()\">\n  <div style=\"width: 75px\">\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-tab-group>\n    <mat-tab label=\"Second\">\n    <h1>{{pageTitle}}</h1> <!-- data binding -->\n\n    <!--Two way Binding without Event button-->\n    <input [(ngModel)]='listFilter'>\n    {{listFilter}}\n    <!--Two way Binding without Event button-->\n  \n    <!--Two-way binding with button event binding-->\n    <div><h2>Two-way Binding with Event-binding button</h2>\n    <textarea rows=\"3\" [(ngModel)]='enterValue'></textarea>\n    <br>\n    <button (click)=\"onAddPost()\">Save</button>\n    <br><br>\n    <p>{{newPost}}</p>\n    </div>\n    <!--Two-way Binding end-->\n    \n    \n    \n    Toggle POP-UP: <button (click)='toggleImage()'>Submit</button> </mat-tab>\n    <mat-tab label=\"Third\"> \n         \n        <mat-progress-bar mode=\"determinate\" value=\"90\"></mat-progress-bar>\n        <mat-checkbox>Check me!</mat-checkbox> \n        <br><hr><br>\n        <mat-slide-toggle>Slide me!</mat-slide-toggle>\n        <br><hr><br>\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"myDatepicker\">\n            <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #myDatepicker></mat-datepicker>\n          </mat-form-field></mat-tab>\n</mat-tab-group>"

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
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employeedetail_employeedetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employeedetail/employeedetail.component */ "./src/app/employeedetail/employeedetail.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _employeedetails_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employeedetails.guard */ "./src/app/employeedetails.guard.ts");









var routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], data: { title: 'Welcome Page' } },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_5__["EmployeesComponent"] },
    { path: 'employeesdetailsguard', component: _employeedetails_guard__WEBPACK_IMPORTED_MODULE_8__["EmployeedetailsGuard"] },
    { path: 'employees/:id', component: _employeedetail_employeedetail_component__WEBPACK_IMPORTED_MODULE_6__["EmployeedetailComponent"], canActivate: [_employeedetails_guard__WEBPACK_IMPORTED_MODULE_8__["EmployeedetailsGuard"]] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _remove_space_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./remove-space.pipe */ "./src/app/remove-space.pipe.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employees_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees.pipe */ "./src/app/employees.pipe.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _employeefilter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./employeefilter.pipe */ "./src/app/employeefilter.pipe.ts");
/* harmony import */ var _star_star_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./star/star.component */ "./src/app/star/star.component.ts");
/* harmony import */ var _starrating_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./starrating.pipe */ "./src/app/starrating.pipe.ts");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./employees.service */ "./src/app/employees.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employeedetail_employeedetail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./employeedetail/employeedetail.component */ "./src/app/employeedetail/employeedetail.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _employeesgaurd_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./employeesgaurd.service */ "./src/app/employeesgaurd.service.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"], _remove_space_pipe__WEBPACK_IMPORTED_MODULE_7__["RemoveSpacePipe"], _employees_employees_component__WEBPACK_IMPORTED_MODULE_8__["EmployeesComponent"], _employees_pipe__WEBPACK_IMPORTED_MODULE_9__["EmployeesPipe"], _employeefilter_pipe__WEBPACK_IMPORTED_MODULE_20__["EmployeefilterPipe"], _star_star_component__WEBPACK_IMPORTED_MODULE_21__["StarComponent"], _starrating_pipe__WEBPACK_IMPORTED_MODULE_22__["StarratingPipe"],
                _employeedetail_employeedetail_component__WEBPACK_IMPORTED_MODULE_25__["EmployeedetailComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_26__["PagenotfoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"]
            ],
            providers: [_employees_service__WEBPACK_IMPORTED_MODULE_23__["EmployeesService"], _employeesgaurd_service__WEBPACK_IMPORTED_MODULE_27__["EmployeesgaurdService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employeedetail/employeedetail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/employeedetail/employeedetail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlZGV0YWlsL2VtcGxveWVlZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employeedetail/employeedetail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/employeedetail/employeedetail.component.ts ***!
  \************************************************************/
/*! exports provided: EmployeedetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeedetailComponent", function() { return EmployeedetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../employees.service */ "./src/app/employees.service.ts");




//import { EmployeesComponent } from './../employees/employees.component';
var EmployeedetailComponent = /** @class */ (function () {
    function EmployeedetailComponent(route, employeeService, _router) {
        this.route = route;
        this.employeeService = employeeService;
        this._router = _router;
        this.errorMessage = "";
    }
    EmployeedetailComponent.prototype.ngOnInit = function () {
        var param = this.route.snapshot.paramMap.get('id'); // taking id from URL ( we are getting in string format)
        if (param) {
            var id = +param; // converting in number
            this.getEmployee(id);
        }
    };
    EmployeedetailComponent.prototype.getEmployee = function (id) {
        var _this = this;
        this.employeeService.getEmployee(id).subscribe(function (employee) { return _this.employee = employee; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeedetailComponent.prototype.backtoemployees = function () {
        this._router.navigate(['/employees']);
    };
    EmployeedetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeedetail',
            template: __webpack_require__(/*! raw-loader!./employeedetail.component.html */ "./node_modules/raw-loader/index.js!./src/app/employeedetail/employeedetail.component.html"),
            styles: [__webpack_require__(/*! ./employeedetail.component.css */ "./src/app/employeedetail/employeedetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _employees_service__WEBPACK_IMPORTED_MODULE_3__["EmployeesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeedetailComponent);
    return EmployeedetailComponent;
}());



/***/ }),

/***/ "./src/app/employeedetails.guard.ts":
/*!******************************************!*\
  !*** ./src/app/employeedetails.guard.ts ***!
  \******************************************/
/*! exports provided: EmployeedetailsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeedetailsGuard", function() { return EmployeedetailsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EmployeedetailsGuard = /** @class */ (function () {
    function EmployeedetailsGuard(router) {
        this.router = router;
    }
    EmployeedetailsGuard.prototype.canActivate = function (next, state) {
        var id = +next.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            this.router.navigate(['/employees']);
            return false;
        }
        return true;
    };
    EmployeedetailsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeedetailsGuard);
    return EmployeedetailsGuard;
}());



/***/ }),

/***/ "./src/app/employeefilter.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/employeefilter.pipe.ts ***!
  \****************************************/
/*! exports provided: EmployeefilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeefilterPipe", function() { return EmployeefilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeefilterPipe = /** @class */ (function () {
    function EmployeefilterPipe() {
    }
    EmployeefilterPipe.prototype.transform = function (value, searchTerm) {
        if (!value || !searchTerm) {
            return value;
        }
        return value.filter(function (employee) {
            return employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });
    };
    EmployeefilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'employeefilter',
            pure: false
        })
    ], EmployeefilterPipe);
    return EmployeefilterPipe;
}());



/***/ }),

/***/ "./src/app/employees.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/employees.pipe.ts ***!
  \***********************************/
/*! exports provided: EmployeesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesPipe", function() { return EmployeesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeesPipe = /** @class */ (function () {
    function EmployeesPipe() {
    }
    EmployeesPipe.prototype.transform = function (value, gender) {
        if (gender.toLowerCase() == "male")
            return "Mr. " + value;
        else
            return "Miss. " + value;
    };
    EmployeesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'myemployees'
        })
    ], EmployeesPipe);
    return EmployeesPipe;
}());



/***/ }),

/***/ "./src/app/employees.service.ts":
/*!**************************************!*\
  !*** ./src/app/employees.service.ts ***!
  \**************************************/
/*! exports provided: EmployeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return EmployeesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




 // This is where I import map operator
var EmployeesService = /** @class */ (function () {
    function EmployeesService(_http) {
        this._http = _http;
        //private _employeeUrl = './assets/data.json';
        //private _employeeUrl = 'http://localhost:3000/api/posts';
        this._employeeUrl = 'http://localhost:3000/users';
    }
    EmployeesService.prototype.getEmpData = function () {
        return this._http.get(this._employeeUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    EmployeesService.prototype.getEmployee = function (id) {
        return this.getEmpData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (employees) { return employees.find(function (e) { return e.empid === id; }); }));
    };
    EmployeesService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    EmployeesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeesService);
    return EmployeesService;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employees.service */ "./src/app/employees.service.ts");



var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(empData) {
        var _this = this;
        this.empData = empData;
        this.errorMsg = '';
        empData.getEmpData().subscribe(function (data) {
            _this.employees = data;
        }, function (error) { return _this.errorMsg = error; });
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
        alert(this.pageTitle);
    };
    EmployeesComponent.prototype.toggleImage = function () {
        console.log("Show");
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employees_service__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employeesgaurd.service.ts":
/*!*******************************************!*\
  !*** ./src/app/employeesgaurd.service.ts ***!
  \*******************************************/
/*! exports provided: EmployeesgaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesgaurdService", function() { return EmployeesgaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeesgaurdService = /** @class */ (function () {
    function EmployeesgaurdService() {
    }
    EmployeesgaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeesgaurdService);
    return EmployeesgaurdService;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ELEMENT_DATA = [
    {
        productId: 1,
        productName: "Leaf Rake",
        productCode: "GDN-0011",
        releaseDate: "March 19, 2016",
        description: "Leaf rake with 48-inch wooden handle.",
        price: 19.95,
        imageUrl: "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
        starRating: 3.2
    },
    {
        productId: 2,
        productName: "Garden Cart",
        productCode: "GDN-0023",
        releaseDate: "March 18, 2016",
        description: "15 gallon capacity rolling garden cart",
        price: 32.99,
        imageUrl: "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
        starRating: 4.2
    },
    {
        productId: 5,
        productName: "Hammer",
        productCode: "TBX-0048",
        releaseDate: "May 21, 2016",
        description: "Curved claw steel hammer",
        price: 8.9,
        imageUrl: "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
        starRating: 5.0
    },
    {
        productId: 8,
        productName: "Saw",
        productCode: "TBX-0022",
        releaseDate: "May 15, 2016",
        description: "15-inch steel blade hand saw",
        price: 11.55,
        imageUrl: "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
        starRating: 2.3
    },
    {
        productId: 10,
        productName: "Video Game Controller",
        productCode: "GMG-0042",
        releaseDate: "October 15, 2015",
        description: "Standard two-button video game controller",
        price: 35.95,
        imageUrl: "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
        starRating: 2.2
    },
    {
        productId: 1,
        productName: "Leaf Rake",
        productCode: "GDN-0011",
        releaseDate: "March 19, 2016",
        description: "Leaf rake with 48-inch wooden handle.",
        price: 19.95,
        imageUrl: "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
        starRating: 3.2
    },
    {
        productId: 2,
        productName: "Garden Cart",
        productCode: "GDN-0023",
        releaseDate: "March 18, 2016",
        description: "15 gallon capacity rolling garden cart",
        price: 32.99,
        imageUrl: "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
        starRating: 4.2
    },
    {
        productId: 5,
        productName: "Hammer",
        productCode: "TBX-0048",
        releaseDate: "May 21, 2016",
        description: "Curved claw steel hammer",
        price: 8.9,
        imageUrl: "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
        starRating: 3.5
    },
    {
        productId: 8,
        productName: "Saw",
        productCode: "TBX-0022",
        releaseDate: "May 15, 2016",
        description: "15-inch steel blade hand saw",
        price: 11.55,
        imageUrl: "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
        starRating: 2.7
    },
    {
        productId: 10,
        productName: "Video Game Controller",
        productCode: "GMG-0042",
        releaseDate: "October 15, 2015",
        description: "Standard two-button video game controller",
        price: 35.95,
        imageUrl: "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
        starRating: 1.2
    }
];
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.displayedColumns = ['productId', 'productName', 'productCode', 'releaseDate', 'description', 'price', 'imageUrl', 'starRating'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    ProductsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProductsComponent.prototype.logData = function (row) {
        console.log(row);
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ProductsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ProductsComponent.prototype, "paginator", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/remove-space.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/remove-space.pipe.ts ***!
  \**************************************/
/*! exports provided: RemoveSpacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSpacePipe", function() { return RemoveSpacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RemoveSpacePipe = /** @class */ (function () {
    function RemoveSpacePipe() {
    }
    RemoveSpacePipe.prototype.transform = function (value, args) {
        return value.replace('-', ' ');
    };
    RemoveSpacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'removeSpace'
        })
    ], RemoveSpacePipe);
    return RemoveSpacePipe;
}());



/***/ }),

/***/ "./src/app/star/star.component.css":
/*!*****************************************!*\
  !*** ./src/app/star/star.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n    overflow: hidden;\r\n  }\r\n  div {\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rhci9zdGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9zdGFyL3N0YXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcm9wIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIGRpdiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/star/star.component.ts":
/*!****************************************!*\
  !*** ./src/app/star/star.component.ts ***!
  \****************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.starWidth = 0;
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StarComponent.prototype.ngOnInit = function () {
    };
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked!");
    };
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 15;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StarComponent.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-star',
            template: __webpack_require__(/*! raw-loader!./star.component.html */ "./node_modules/raw-loader/index.js!./src/app/star/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/star/star.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StarComponent);
    return StarComponent;
}());



/***/ }),

/***/ "./src/app/starrating.pipe.ts":
/*!************************************!*\
  !*** ./src/app/starrating.pipe.ts ***!
  \************************************/
/*! exports provided: StarratingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarratingPipe", function() { return StarratingPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarratingPipe = /** @class */ (function () {
    function StarratingPipe() {
    }
    StarratingPipe.prototype.transform = function (value, args) {
        return ("<span class=\"fa fa-star\">" + value + "</span>");
    };
    StarratingPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'starRating'
        })
    ], StarratingPipe);
    return StarratingPipe;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        /*--Two way Binding without Event button--*/
        this.listFilter = ' ';
        /*--Two way Binding without Event button End...--*/
        /*--Two way Binding with button--*/
        this.enterValue = '';
        this.newPost = "Enter content here...";
    }
    WelcomeComponent.prototype.onAddPost = function () {
        this.newPost = this.enterValue;
    };
    WelcomeComponent.prototype.toggleImage = function () {
        alert("Hi there!!");
    };
    WelcomeComponent.prototype.ngOnInit = function () {
        this.pageTitle = "Welcome Mahesh";
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map