import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ArtworksService } from '../_services/artworks.service';
import { ActivatedRoute } from '@angular/router';
var ArtworkDetailsComponent = /** @class */ (function () {
    function ArtworkDetailsComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    ArtworkDetailsComponent.prototype.ngOnInit = function () {
        console.log("lol");
        var title;
        this.route.paramMap.subscribe(function (param) { title = param.get('title'); });
        this.artwork = this.service.getArtwork(title);
    };
    ArtworkDetailsComponent.prototype.transform = function (str) {
        var str_new = str.replace("-", " ");
        return str_new;
    };
    ArtworkDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-artwork-details',
            templateUrl: './artwork-details.component.html',
            styleUrls: ['./artwork-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, ArtworksService])
    ], ArtworkDetailsComponent);
    return ArtworkDetailsComponent;
}());
export { ArtworkDetailsComponent };
//# sourceMappingURL=artwork-details.component.js.map