import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworksService } from '../_services/artworks.service';
var PaintingsComponent = /** @class */ (function () {
    function PaintingsComponent(router, service) {
        this.router = router;
        this.service = service;
        this.paintings = this.service.paintings;
    }
    PaintingsComponent.prototype.ngOnInit = function () {
    };
    PaintingsComponent.prototype.expand = function (artwork) {
        console.log(artwork);
        this.router.navigate([artwork]);
    };
    PaintingsComponent.prototype.transform = function (str) {
        var str_new = str.replace("-", " ");
        return str_new;
    };
    PaintingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-paintings',
            templateUrl: './paintings.component.html',
            styleUrls: ['./paintings.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ArtworksService])
    ], PaintingsComponent);
    return PaintingsComponent;
}());
export { PaintingsComponent };
//# sourceMappingURL=paintings.component.js.map