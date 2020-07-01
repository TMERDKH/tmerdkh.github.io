import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { SketchesComponent } from './sketches/sketches.component';
import { PrintsComponent } from './prints/prints.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component';
var routes = [
    { path: '', component: HomepageComponent },
    { path: 'paintings', component: PaintingsComponent },
    { path: 'sketches', component: SketchesComponent },
    { path: 'prints', component: PrintsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: ':title', component: ArtworkDetailsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map