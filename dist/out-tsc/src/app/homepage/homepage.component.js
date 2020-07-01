import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworksService } from '../_services/artworks.service';
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.redirect = function (page) {
        this.router.navigate(['/' + page]);
    };
    HomepageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ArtworksService])
    ], HomepageComponent);
    return HomepageComponent;
}());
export { HomepageComponent };
//# sourceMappingURL=homepage.component.js.map