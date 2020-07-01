import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ArtworksService } from '../_services/artworks.service';
var AboutComponent = /** @class */ (function () {
    function AboutComponent(service) {
        this.service = service;
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ArtworksService])
    ], AboutComponent);
    return AboutComponent;
}());
export { AboutComponent };
//# sourceMappingURL=about.component.js.map