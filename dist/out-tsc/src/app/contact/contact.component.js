import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ArtworksService } from '../_services/artworks.service';
var ContactComponent = /** @class */ (function () {
    function ContactComponent(service) {
        this.service = service;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ArtworksService])
    ], ContactComponent);
    return ContactComponent;
}());
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map