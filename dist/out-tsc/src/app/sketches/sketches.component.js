import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworksService } from '../_services/artworks.service';
var SketchesComponent = /** @class */ (function () {
    function SketchesComponent(router, service) {
        this.router = router;
        this.service = service;
        this.sketches = this.service.sketches;
    }
    SketchesComponent.prototype.ngOnInit = function () {
    };
    SketchesComponent.prototype.expand = function (artwork) {
        this.router.navigate([artwork]);
    };
    SketchesComponent.prototype.transform = function (str) {
        var str_new = str.replace("-", " ");
        return str_new;
    };
    SketchesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sketches',
            templateUrl: './sketches.component.html',
            styleUrls: ['./sketches.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ArtworksService])
    ], SketchesComponent);
    return SketchesComponent;
}());
export { SketchesComponent };
//# sourceMappingURL=sketches.component.js.map