import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworksService } from './_services/artworks.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(router, service) {
        this.router = router;
        this.service = service;
        this.title = 'legend-of-tamar';
    }
    AppComponent.prototype.redirect = function (page) {
        this.router.navigate(['/' + page]);
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ArtworksService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map