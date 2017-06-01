webpackJsonp([1,4],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_http_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, http) {
        this.router = router;
        this.http = http;
        this.user = { id: 0, userName: 'Local', password: 'pass', email: 'email@local' };
        this.onWindowResize(null);
    }
    AppComponent.prototype.onWindowResize = function (event) {
        var width = event ? event.target.innerWidth : window.innerWidth;
        this.sidenavMode = width >= 600 ? 'side' : 'over';
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if (event.urlAfterRedirects == '/login' || event.urlAfterRedirects == '/') {
                    _this.toolbarDisabled = true;
                }
                else {
                    _this.toolbarDisabled = false;
                    _this.onWindowResize(null);
                }
            }
        });
    };
    AppComponent.prototype.navigateHome = function (sideNav) {
        this.router.navigate(['login']);
    };
    AppComponent.prototype.navigateContacts = function (sideNav) {
        this.router.navigate(['contacts']);
    };
    AppComponent.prototype.toggleSideNav = function () {
        this.sidenav.toggle();
    };
    AppComponent.prototype.signOut = function () {
        this.http.signOut();
        this.router.navigate(['login']);
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ViewChild */])('sidenav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSidenav */]) === "function" && _a || Object)
], AppComponent.prototype, "sidenav", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onWindowResize", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(285),
        styles: [__webpack_require__(277)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDialogComponent = (function () {
    function ContactDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.title = 'New Contact';
        this.btnSaveText = 'Add';
        this.contact = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]();
    }
    ContactDialogComponent.prototype.ngOnInit = function () {
        console.log('dialog read contact');
        if (this.contactInn) {
            this.title = 'Edit Contact';
            this.btnSaveText = 'Save';
            this.contact = this.contactInn;
            this.id = this.contactInn.id;
            this.firstName = this.contactInn.firstName;
            this.lastName = this.contactInn.lastName;
            this.phone = this.contactInn.phone;
            this.address = this.contactInn.address;
            this.city = this.contactInn.city;
        }
    };
    ContactDialogComponent.prototype.onSave = function () {
        this.contact.firstName = this.firstName;
        this.contact.lastName = this.lastName;
        this.contact.phone = this.phone;
        this.contact.address = this.address;
        this.contact.city = this.city;
        this.dialogRef.close(this.contact);
    };
    return ContactDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]) === "function" && _a || Object)
], ContactDialogComponent.prototype, "contactInn", void 0);
ContactDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-contact-dialog',
        template: __webpack_require__(286),
        styles: [__webpack_require__(278)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialogRef */]) === "function" && _b || Object])
], ContactDialogComponent);

var _a, _b;
//# sourceMappingURL=contact-dialog.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_http_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactApiStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactApiStorageService = (function () {
    function ContactApiStorageService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].storageUrl + "/contacts";
    }
    ContactApiStorageService.prototype.findContacts = function () {
        return this.http.get(this.url).map(function (response) { return response.json(); });
    };
    ContactApiStorageService.prototype.addNewContact = function (contact) {
        return this.http.post(this.url, contact);
    };
    ContactApiStorageService.prototype.editContact = function (contact) {
        return this.http.put(this.url, contact);
    };
    ContactApiStorageService.prototype.deleteContact = function (contact) {
        return this.http.delete(this.url + '/' + contact.id);
    };
    return ContactApiStorageService;
}());
ContactApiStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */]) === "function" && _a || Object])
], ContactApiStorageService);

var _a;
//# sourceMappingURL=contact-api-storage.service.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactLocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactLocalStorageService = (function () {
    function ContactLocalStorageService() {
        this.contactLocalStorageKey = 'ca-storageKey';
        if (!localStorage.getItem(this.contactLocalStorageKey)) {
            localStorage.setItem(this.contactLocalStorageKey, JSON.stringify([]));
        }
    }
    ContactLocalStorageService.prototype.loadAllContacts = function () {
        var data = localStorage.getItem(this.contactLocalStorageKey);
        var contacts = JSON.parse(data);
        return contacts;
    };
    ContactLocalStorageService.prototype.findContacts = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.loadAllContacts());
    };
    ContactLocalStorageService.prototype.addNewContact = function (contact) {
        var nextId = 100;
        var contacts = this.loadAllContacts();
        if (contacts.length > 0) {
            nextId = __WEBPACK_IMPORTED_MODULE_2_lodash__["maxBy"](contacts, 'id').id;
            nextId++;
        }
        contact.id = nextId;
        contacts.push(contact);
        this.saveContactsToLocalStorage(contacts);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(contacts);
    };
    ContactLocalStorageService.prototype.editContact = function (contact) {
        var contacts = this.loadAllContacts();
        var index = contacts.findIndex(function (c) { return c.id == contact.id; });
        contacts[index] = contact;
        this.saveContactsToLocalStorage(contacts);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(contacts);
    };
    ContactLocalStorageService.prototype.deleteContact = function (contact) {
        var contacts = this.loadAllContacts();
        var editList = [];
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].id != contact.id) {
                editList.push(contacts[i]);
            }
        }
        contacts = editList;
        this.saveContactsToLocalStorage(contacts);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(contacts);
    };
    ContactLocalStorageService.prototype.saveContactsToLocalStorage = function (contacts) {
        localStorage.setItem(this.contactLocalStorageKey, JSON.stringify(contacts));
    };
    return ContactLocalStorageService;
}());
ContactLocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ContactLocalStorageService);

//# sourceMappingURL=contact-local-storage.service.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_local_storage_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_api_storage_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = (function () {
    function ContactService(localStorage, apiService) {
        this.localStorage = localStorage;
        this.apiService = apiService;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].envName == 'api') {
            this.storageInterface = apiService;
        }
        else {
            this.storageInterface = localStorage;
        }
    }
    ContactService.prototype.findAllContacts = function () {
        return this.storageInterface.findContacts();
    };
    ContactService.prototype.addNewContact = function (contact) {
        return this.storageInterface.addNewContact(contact);
    };
    ContactService.prototype.editContact = function (contact) {
        return this.storageInterface.editContact(contact);
    };
    ContactService.prototype.deleteContact = function (contact) {
        return this.storageInterface.deleteContact(contact);
    };
    return ContactService;
}());
ContactService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_local_storage_service__["a" /* ContactLocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_local_storage_service__["a" /* ContactLocalStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contact_api_storage_service__["a" /* ContactApiStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contact_api_storage_service__["a" /* ContactApiStorageService */]) === "function" && _b || Object])
], ContactService);

var _a, _b;
//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceService = (function () {
    function DeviceService() {
        var _this = this;
        document.addEventListener('deviceready', function () {
            // console.log('cordova ready');
            _this.cordova = true;
        }, false);
    }
    DeviceService.prototype.vibrate = function (time) {
        console.log('vibrating...');
        if (this.cordova) {
            navigator.vibrate(time || 200);
        }
    };
    return DeviceService;
}());
DeviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DeviceService);

//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dialogs_contact_dialog_contact_dialog_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map_dialog_map_dialog_component__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.contactDialog = function (contact) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__Dialogs_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */]);
        dialogRef.componentInstance.contactInn = contact;
        return dialogRef.afterClosed();
    };
    DialogService.prototype.openMap = function (contact) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__map_map_dialog_map_dialog_component__["a" /* MapDialogComponent */]);
        dialogRef.componentInstance.contact = contact;
        return dialogRef.afterClosed();
    };
    return DialogService;
}());
DialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object])
], DialogService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapDialogComponent = (function () {
    function MapDialogComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MapDialogComponent.prototype.ngOnInit = function () {
        this.url = 'https://maps.google.com/maps?output=embed&q=' + this.contact.address + ',+' + this.contact.city;
        console.log('mapUrl: ' + this.url);
    };
    MapDialogComponent.prototype.trustedUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    };
    return MapDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* Contact */]) === "function" && _a || Object)
], MapDialogComponent.prototype, "contact", void 0);
MapDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-map-dialog',
        template: __webpack_require__(290),
        styles: [__webpack_require__(282)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _b || Object])
], MapDialogComponent);

var _a, _b;
//# sourceMappingURL=map-dialog.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_http_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].storageUrl + "/auth";
    }
    AuthenticationService.prototype.signIn = function (userName, password) {
        var _this = this;
        return this.http.post(this.url, {
            UserName: userName,
            Password: password
        }).map(function (response) {
            var data = response.json();
            _this.http.saveToken(data.token);
            return data.id;
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__utils_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_http_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].storageUrl + "/user";
    }
    UserService.prototype.signUserIn = function (userName, password) {
        var _this = this;
        return this.authService.signIn(userName, password).flatMap(function () {
            return _this.http.put(_this.url, null);
        }).catch(function (error) {
            console.log('AuthService error: ' + error.status + ' ' + error.statusText);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 190;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(31);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_services_vibration_directive__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_list_contact_list_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_list_item_contact_list_item_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_Dialogs_contact_dialog_contact_dialog_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_map_dialog_map_dialog_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contacts_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_login_login_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_services_contact_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contact_services_dialog_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_services_device_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_http_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contact_services_contact_api_storage_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contact_services_contact_local_storage_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__contact_pipes_contact_name_pipe__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__contact_pipes_contact_address_pipe__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_servises_authentication_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_servises_user_service__ = __webpack_require__(128);
/* unused harmony export getHttp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular modules








// other modules

// components







// services






// pipes




var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_15__user_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_14__contact_contacts_component__["a" /* ContactsComponent */]
    }
];
function getHttp(backend, options) {
    return new __WEBPACK_IMPORTED_MODULE_19__utils_http_service__["a" /* HttpService */](backend, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contact_contact_list_contact_list_component__["a" /* ContactListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__contact_contact_list_item_contact_list_item_component__["a" /* ContactListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_12__contact_Dialogs_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__map_map_dialog_map_dialog_component__["a" /* MapDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_23__contact_pipes_contact_address_pipe__["a" /* ContactAddressPipe */],
            __WEBPACK_IMPORTED_MODULE_14__contact_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_22__contact_pipes_contact_name_pipe__["a" /* ContactNamePipe */],
            __WEBPACK_IMPORTED_MODULE_8__contact_services_vibration_directive__["a" /* VibrationDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_19__utils_http_service__["a" /* HttpService */],
                useFactory: getHttp,
                deps: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* RequestOptions */]]
            },
            __WEBPACK_IMPORTED_MODULE_16__contact_services_contact_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_17__contact_services_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_20__contact_services_contact_api_storage_service__["a" /* ContactApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_21__contact_services_contact_local_storage_service__["a" /* ContactLocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_18__contact_services_device_service__["a" /* DeviceService */],
            __WEBPACK_IMPORTED_MODULE_24__user_servises_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_25__user_servises_user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__contact_Dialogs_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__map_map_dialog_map_dialog_component__["a" /* MapDialogComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListItemComponent = (function () {
    function ContactListItemComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.showOnMap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    ContactListItemComponent.prototype.ngOnInit = function () {
    };
    ContactListItemComponent.prototype.deleteContactItem = function () {
        console.log('this is delete button: ' + this.contact.id);
        this.remove.emit(this.contact);
    };
    ContactListItemComponent.prototype.editContactItem = function () {
        this.edit.emit(this.contact);
    };
    ContactListItemComponent.prototype.showMapItem = function () {
        this.showOnMap.emit(this.contact);
    };
    return ContactListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]) === "function" && _a || Object)
], ContactListItemComponent.prototype, "contact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _b || Object)
], ContactListItemComponent.prototype, "edit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _c || Object)
], ContactListItemComponent.prototype, "remove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _d || Object)
], ContactListItemComponent.prototype, "showOnMap", void 0);
ContactListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-contact-list-item',
        template: __webpack_require__(287),
        styles: [__webpack_require__(279)]
    }),
    __metadata("design:paramtypes", [])
], ContactListItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact-list-item.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactListComponent = (function () {
    function ContactListComponent() {
        this.removeContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.editContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.showContactOnMap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    ContactListComponent.prototype.ngOnInit = function () {
    };
    ContactListComponent.prototype.deleteContactListItem = function (contact) {
        console.log('This is list, and id:' + contact.id);
        this.removeContact.emit(contact);
    };
    ContactListComponent.prototype.editContactListItem = function (contact) {
        this.editContact.emit(contact);
    };
    ContactListComponent.prototype.showMapListItem = function (contact) {
        this.showContactOnMap.emit(contact);
    };
    return ContactListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Array)
], ContactListComponent.prototype, "contacts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _a || Object)
], ContactListComponent.prototype, "editContact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _b || Object)
], ContactListComponent.prototype, "removeContact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _c || Object)
], ContactListComponent.prototype, "showContactOnMap", void 0);
ContactListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-contact-list',
        template: __webpack_require__(288),
        styles: [__webpack_require__(280)]
    }),
    __metadata("design:paramtypes", [])
], ContactListComponent);

var _a, _b, _c;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_http_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactsComponent = (function () {
    function ContactsComponent(contactService, dialogService, router, http) {
        this.contactService = contactService;
        this.dialogService = dialogService;
        this.router = router;
        this.http = http;
        this.reloadContacts();
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.prototype.reloadContacts = function () {
        var _this = this;
        this.isAutorized();
        this.contactService.findAllContacts().subscribe(function (data) {
            _this.contactsList = data;
        });
    };
    ContactsComponent.prototype.addNewContact = function (contact) {
        var _this = this;
        if (this.isAutorized()) {
            this.contactService.addNewContact(contact).subscribe(function (data) {
                _this.reloadContacts();
            });
        }
    };
    ContactsComponent.prototype.editContact = function (contact) {
        var _this = this;
        this.isAutorized();
        this.contactService.editContact(contact).subscribe(function (data) {
            _this.reloadContacts();
        });
    };
    ContactsComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.isAutorized();
        // navigator.vibrate(1000);
        var question = confirm('Do you really want to delete this contact: '
            + contact.firstName + ' ' + contact.lastName);
        if (question) {
            this.contactService.deleteContact(contact).subscribe(function (data) {
                _this.reloadContacts();
            });
        }
    };
    ContactsComponent.prototype.openDialog = function (contact) {
        var _this = this;
        if (this.isAutorized()) {
            //  navigator.vibrate([400,300,400,300]);
            var returnValue = this.dialogService.contactDialog(contact);
            returnValue.subscribe(function (returnContact) {
                if (!returnContact) {
                    return;
                }
                if (returnContact.id) {
                    _this.editContact(returnContact);
                }
                else {
                    _this.addNewContact(returnContact);
                }
            });
        }
    };
    ContactsComponent.prototype.showMap = function (contact) {
        if (this.isAutorized()) {
            this.dialogService.openMap(contact);
        }
    };
    ContactsComponent.prototype.isAutorized = function () {
        if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].envName == 'api') {
            if (!this.http.isLoggedIn()) {
                this.router.navigate(['login']);
                return false;
            }
        }
        return true;
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-contacts',
        template: __webpack_require__(289),
        styles: [__webpack_require__(281)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__utils_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_http_service__["a" /* HttpService */]) === "function" && _d || Object])
], ContactsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAddressPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactAddressPipe = (function () {
    function ContactAddressPipe() {
    }
    ContactAddressPipe.prototype.transform = function (contact, args) {
        if (!contact)
            return '';
        function parseAddress(address, city) {
            var addressParts = [address || null, city || null];
            addressParts = __WEBPACK_IMPORTED_MODULE_1_lodash__["reject"](addressParts, __WEBPACK_IMPORTED_MODULE_1_lodash__["isNull"]);
            return addressParts.join(', ');
        }
        return parseAddress(contact.address, contact.city);
    };
    return ContactAddressPipe;
}());
ContactAddressPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Pipe */])({
        name: 'contactAddress'
    })
], ContactAddressPipe);

//# sourceMappingURL=contact-address.pipe.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactNamePipe = (function () {
    function ContactNamePipe() {
    }
    ContactNamePipe.prototype.transform = function (contact, args) {
        var addressParts = [contact.firstName || null, contact.lastName || null];
        addressParts = __WEBPACK_IMPORTED_MODULE_1_lodash__["reject"](addressParts, __WEBPACK_IMPORTED_MODULE_1_lodash__["isNull"]);
        return addressParts.join(' ');
    };
    return ContactNamePipe;
}());
ContactNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Pipe */])({
        name: 'contactName'
    })
], ContactNamePipe);

//# sourceMappingURL=contact-name.pipe.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VibrationDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VibrationDirective = (function () {
    function VibrationDirective(device) {
        this.device = device;
    }
    VibrationDirective.prototype.onClick = function () {
        this.device.vibrate();
    };
    return VibrationDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VibrationDirective.prototype, "onClick", null);
VibrationDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Directive */])({
        selector: '[caVibration]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */]) === "function" && _a || Object])
], VibrationDirective);

var _a;
//# sourceMappingURL=vibration.directive.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servises_user_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, userService, app) {
        this.router = router;
        this.userService = userService;
        this.app = app;
        this.errorText = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.openContactsPage = function () {
        var _this = this;
        var useApiStorage = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].envName == 'api';
        if (this.account && this.password) {
            if (useApiStorage) {
                this.userService.signUserIn(this.account, this.password).subscribe(function (data) {
                    _this.app.user = data.json();
                    _this.router.navigate(['contacts']);
                }, function (error) {
                    if (error.status == 401 || error.status == 403) {
                        _this.errorText = 'Wrong Username or Password';
                    }
                    else {
                        _this.errorText = 'Oops, something went wrong';
                    }
                    console.log('error login: ' + error.status + ' ' + error.statusText);
                });
            }
            else {
                console.log('local use only');
                this.router.navigate(['contacts']);
            }
        }
        this.account = '';
        this.password = '';
        this.errorText = '';
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(291),
        styles: [__webpack_require__(283)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__servises_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servises_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".toolbar-and-content {\r\n  position: relative;\r\n  height: 100vh;\r\n}\r\n\r\n.toolbar {\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, .3);\r\n  z-index: 3;\r\n}\r\n\r\n.router-body {\r\n  overflow-y: auto;\r\n}\r\n\r\n.sidenav-container {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.contactSidenav {\r\n  background-image: url(" + __webpack_require__(541) + ");\r\n  background-size: 190px;\r\n  background-repeat: no-repeat;\r\n  width: 190px;\r\n}\r\n\r\n.sidenav-items {\r\n  height: 140px;\r\n  color: white;\r\n}\r\n\r\n.login-icon {\r\n  padding-top: 3px;\r\n  font-size: 64px;\r\n}\r\n\r\n.login-name {\r\n  padding-top: 8px;\r\n  padding-left: 10px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.login-mail {\r\n  padding-left: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".contact-Dialog-Body{\r\n  width: 260px;\r\n  height: 400px;\r\n}\r\n\r\n.dialog-inputs input{\r\n  width: 260px;\r\n}\r\n\r\n.contact-title{\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 28px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.btnSave{\r\n  float: left;\r\n}\r\n\r\n.btnClose{\r\n  float: right;\r\n}\r\n\r\n.contact-dialog-action{\r\nmargin-top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".card {\r\n  max-width: 400px;\r\n  min-width: 250px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.contact-item-header {\r\n  padding-top: 10px;\r\n  color: white;\r\n  background-color: #7986cb;\r\n}\r\n\r\n.mat-card-image {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.contact-item-icon {\r\n  font-size: 42px;\r\n  width: 42px;\r\n  height: 42px;\r\n  padding: 10px;\r\n}\r\n\r\n.contact-item-name {\r\n  font-size: 16px;\r\n  margin-bottom: 6px;\r\n  font-weight: bold;\r\n}\r\n\r\n.contact-item-content {\r\n  font-size: 14px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n#btnMap {\r\n  float: right;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".contacts-items{\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".contacts-list {\r\n  margin-bottom: 80px;\r\n}\r\n\r\n.no-contacts-div {\r\n  width: 100%;\r\n  text-align: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: lightgray;\r\n}\r\n\r\n.no-contacts-icon {\r\n  font-size: 250px;\r\n  height: 250px;\r\n  width: 250px;\r\n}\r\n\r\n.no-contacts-text {\r\n  font-size: 26px;\r\n}\r\n\r\n#btnAdd {\r\n  bottom: 30px;\r\n  left: calc(50% + 100px);\r\n  position: absolute;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".map-dialog-body{\r\n  width: 455px;/*370*/\r\n  height: 420px;/*560*/\r\n}\r\n\r\niframe{\r\n  width: 450px;\r\n  height: 300px;\r\n}\r\n\r\n#map-title{\r\n\r\n}\r\n\r\n.btnClose{\r\nfloat: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "\r\n.loginCard {\r\n  width: 300px;\r\n  text-align: center;\r\n}\r\n\r\n#loginTitle {\r\n  float: left;\r\n  position: absolute;\r\n  top: 160px;\r\n  font-size: 36px;\r\n  color: white;\r\n}\r\n\r\n.cardIcon {\r\n  font-size: 36px;\r\n  padding-right: 28px;\r\n  color: navy;\r\n}\r\n\r\n.btnSignIn {\r\n  margin-top: 18px;\r\n}\r\n\r\n.router-body {\r\n  overflow-y: hidden !important;\r\n}\r\n\r\n.error-text {\r\n  color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"sidenav-container\">\n  <md-sidenav *ngIf=\"!toolbarDisabled\" #sidenav class=\"contactSidenav\"\n              [mode]=\"sidenavMode\"\n              [opened]=\"sidenavMode == 'side'\">\n    <div class=\"sidenav-items\">\n      <md-icon class=\"md-48, login-icon\">account_circle</md-icon>\n      <div class=\"login-name\">{{user.userName}}</div>\n      <div class=\"login-mail\">{{user.email}}</div>\n    </div>\n    <button md-icon-button (click)=\"signOut()\">\n      <md-icon>keyboard_return</md-icon>\n      <span>Sign out</span>\n    </button>\n    <br>\n    <button md-icon-button (click)=\"navigateHome(sidenav)\">\n      <md-icon>home</md-icon>\n      <span>Home</span>\n    </button>\n    <br>\n    <button md-icon-button (click)=\"navigateContacts(sidenav)\">\n      <md-icon>mood</md-icon>\n      <span>Contacts</span>\n    </button>\n  </md-sidenav>\n\n  <div class=\"toolbar-and-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n    <md-toolbar *ngIf=\"!toolbarDisabled\" class=\"toolbar \">\n      <button md-icon-button (click)=\"toggleSideNav()\">\n        <md-icon>menu</md-icon>\n      </button>\n      <span>Contacts app</span>\n    </md-toolbar>\n\n    <div class=\"router-body\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n</md-sidenav-container>\n\n"

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-Dialog-Body\">\n\n  <div class=\"contact-title\">{{title}}</div>\n\n  <div md-dialog-content class=\"dialog-inputs\">\n    <md-input-container floatPlaceholder=\"auto\">\n      <input mdInput [(ngModel)]=\"firstName\" type=\"text\" required\n             placeholder=\"Firstname\">\n    </md-input-container>\n    <md-input-container floatPlaceholder=\"auto\">\n      <input mdInput [(ngModel)]=\"lastName\" type=\"text\" required\n             placeholder=\"Lastname\">\n    </md-input-container>\n    <md-input-container floatPlaceholder=\"auto\">\n      <input mdInput [(ngModel)]=\"phone\" type=\"text\" required\n             placeholder=\"Phone\">\n    </md-input-container>\n    <md-input-container floatPlaceholder=\"auto\">\n      <input mdInput [(ngModel)]=\"address\" type=\"text\" required\n             placeholder=\"Street Address\">\n    </md-input-container>\n    <md-input-container floatPlaceholder=\"auto\">\n      <input mdInput [(ngModel)]=\"city\" type=\"text\" required\n             placeholder=\"City\">\n    </md-input-container>\n  </div>\n\n  <div class=\"contact-dialog-action\">\n    <button class=\"btnSave\" md-raised-button (click)=\"onSave()\" >{{btnSaveText}}</button>\n    <button class=\"btnClose\" md-raised-button (click)=\"dialogRef.close()\">Close</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"card\">\n\n  <div md-card-image class=\"contact-item-header\" fxLayout=\"row\">\n    <md-icon class=\"contact-item-icon\">person</md-icon>\n\n    <md-card-content>\n      <div class=\"contact-item-name\">{{contact | contactName}}</div>\n      <div class=\"contact-item-content\">\n        <div>{{contact.phone}}</div>\n        <div>{{contact | contactAddress}}</div>\n      </div>\n    </md-card-content>\n  </div>\n\n  <md-card-actions>\n    <button caVibration md-icon-button (click)=\"deleteContactItem()\">\n      <md-icon>delete</md-icon>\n    </button>\n    <button appVibration md-icon-button (click)=\"editContactItem()\">\n      <md-icon>edit</md-icon>\n    </button>\n\n    <button appVibration id=\"btnMap\" md-icon-button (click)=\"showMapItem()\">\n      <md-icon>room</md-icon>\n    </button>\n\n  </md-card-actions>\n</md-card>\n\n"

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts-items\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\" *ngFor=\"let contact of contacts\">\n\n  <app-contact-list-item [contact]=\"contact\"\n                         (remove)=\"deleteContactListItem($event)\"\n                         (edit)=\"editContactListItem($event)\"\n                         (showOnMap)=\"showMapListItem($event)\">\n  </app-contact-list-item>\n\n</div>\n\n"

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts-list\">\n<app-contact-list [contacts]=\"contactsList\"\n                  (removeContact)=\"deleteContact($event)\"\n                  (editContact)=\"openDialog($event)\"\n                  (showContactOnMap)=\"showMap($event)\">\n</app-contact-list>\n</div>\n\n<div *ngIf=\"!contactsList || !contactsList.length\" class=\"no-contacts-div\" fxLayout=\"column\" fxFlexAlign=\"center center\" fxFlexFill>\n  <md-icon class=\"no-contacts-icon\">account_circle</md-icon>\n  <p class=\"no-contacts-text\">  No contacts </p>\n</div>\n\n<button appVibration id=\"btnAdd\" md-fab (click)=\"openDialog()\" color=\"primary\">\n  <md-icon>add</md-icon>\n</button>\n"

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = "<div md-dialog-content class=\"map-dialog-body\">\n  <div md-dialog-title id=\"map-title\">\n    {{contact.firstName}} {{contact.lastName}}\n  </div>\n  <div md-dialog-content>\n    <iframe [src]=\"trustedUrl()\" allowfullscreen></iframe>\n\n  </div>\n  <br>\n  <div class=\"map-dialog-action\">\n    <button class=\"btnClose\" md-raised-button md-dialog-close>Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <md-card class=\"loginCard\">\n\n    <img md-card-image src=\"assets/images/google-material-design-wallpaper-2.jpg\">\n\n    <md-card-title id=\"loginTitle\">Contacts app</md-card-title>\n\n    <br>\n    <div class=\"error-text\">{{errorText}}</div>\n\n    <div md-dialog-content fxLayout=\"column\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n        <md-icon class=\"material-icons\" class=\"cardIcon\">account_circle</md-icon>\n\n        <md-input-container floatPlaceholder=\"auto\">\n          <input mdInput [(ngModel)]=\"account\"\n                 type=\"text\"\n                 placeholder=\"Username\"\n                 (keyup.enter)=\"openContactsPage()\">\n        </md-input-container>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <md-icon class=\"md-36\" class=\"cardIcon\">lock</md-icon>\n\n        <md-input-container floatPlaceholder=\"auto\">\n          <input mdInput [(ngModel)]=\"password\"\n                 type=\"password\"\n                 placeholder=\"Password\"\n                 (keyup.enter)=\"openContactsPage()\">\n        </md-input-container>\n      </div>\n\n      <div class=\"contact-dialog-action\">\n        <button (click)=\"openContactsPage()\" class=\"btnSignIn\" [disabled]=\"!account || !password\" md-raised-button\n                caVibration>Login\n        </button>\n      </div>\n\n    </div>\n  </md-card>\n</div>\n\n"

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    envName: 'api',
    storageUrl: 'http://webapicontactekoodi17.azurewebsites.net/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, options) {
        var _this = _super.call(this, backend, options) || this;
        _this.backend = backend;
        _this.authHeader = 'Authorization';
        _this.authBearer = 'Bearer ';
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]() };
            }
            options.headers.set(this.authHeader, this.authBearer + this.authToken);
        }
        else {
            url.headers.set(this.authHeader, this.authBearer + this.authToken);
        }
        return this.intercept(_super.prototype.request.call(this, url, options));
    };
    HttpService.prototype.get = function (url, options, skipInterceptor) {
        if (skipInterceptor) {
            return _super.prototype.get.call(this, url, options);
        }
        return this.intercept(_super.prototype.get.call(this, url, options));
    };
    HttpService.prototype.post = function (url, body, options, skipInterceptor) {
        if (skipInterceptor) {
            return _super.prototype.post.call(this, url, body, options);
        }
        else {
            return this.intercept(_super.prototype.post.call(this, url, body, options));
        }
    };
    HttpService.prototype.saveToken = function (token) {
        this.loggedIn = true;
        this.authToken = token;
    };
    HttpService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    HttpService.prototype.signOut = function () {
        this.loggedIn = false;
        this.authToken = '';
    };
    HttpService.prototype.intercept = function (observable) {
        var _this = this;
        return observable.catch(function (error) {
            if (error.status == 401 || error.status == 403) {
                _this.loggedIn = false;
                console.log('Authentication error: ' + error.status + ' ' + error.statusText);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]));
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "google-material-design-wallpaper-2.cc7f3ac1dfb751135e33.jpg";

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(id, firstName, lastName, phone, address, city) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.city = city;
    }
    return Contact;
}());

//# sourceMappingURL=contact.js.map

/***/ })

},[544]);
//# sourceMappingURL=main.bundle.js.map