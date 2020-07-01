import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworksService } from '../_services/artworks.service';
var PrintsComponent = /** @class */ (function () {
    function PrintsComponent(router, service) {
        this.router = router;
        this.service = service;
        this.prints = this.service.prints;
    }
    PrintsComponent.prototype.ngOnInit = function () {
    };
    PrintsComponent.prototype.expand = function (artwork) {
        console.log(artwork);
        this.router.navigate([artwork]);
    };
    PrintsComponent.prototype.transform = function (str) {
        var str_new = str.replace("-", " ");
        return str_new;
    };
    PrintsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-prints',
            templateUrl: './prints.component.html',
            styleUrls: ['./prints.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ArtworksService])
    ], PrintsComponent);
    return PrintsComponent;
}());
export { PrintsComponent };
//# sourceMappingURL=prints.component.js.map