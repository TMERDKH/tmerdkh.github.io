import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Artwork } from '../_models/artwork.model';
var ArtworksService = /** @class */ (function () {
    function ArtworksService() {
        this.file = "./assets/data.json";
        this.paintings = {};
        this.sketches = {};
        this.prints = {};
        var data = {
            "paintings": [
                { "title": "reach", "description": "Arcylic. \"finger painted\".", "dimensions": "18\" x 24\"", "year": "2018", "price": "400$", "category": "paintings" },
                { "title": "the-portuguese-lovers", "dimensions": "18\" x 24\"", "description": "Acrylic. Lisbon was beautiful at first sight. The pastel colours that painted her cast light even on the darkest of souls. Her lover, on the other hand, had this gothic beauty to him - my favourite kind. It was raining when I met him. Painted in colours, but always cloudy and dark. As if he looks out for happiness but has accepted that the weather is just a little colder where he lives. Although Lisbon offered a sweeter kiss to my cheek, Porto stole my heart. He was distant. He had a story and all I wanted was to be part of it - to be part of him and to dance in his rain.", "year": "2017", "price": "500$", "category": "paintings" },
                { "title": "moving-on", "description": "Acrylic. Train downtown.", "dimensions": "20\" x 20\"", "year": "2017", "price": "325$", "category": "paintings" },
            ],
            "sketches": [
                { "title": "journey", "description": "Sketch demonstrating the journey that is time.", "dimensions": "9\" x 12\"", "year": "2012", "price": "100$", "category": "sketches" },
                { "title": "emmenez-moi", "description": "Sketch motivated by my dream of visiting Paris.", "dimensions": "9\" x 12\"", "year": "2014", "price": "150$", "category": "sketches" }
            ],
            "prints": [
                { "title": "daffodils", "description": "Inspired by the poem 'I Wandered Lonely as a Cloud' by William Wordsworth.", "dimensions": "", "year": "2019", "price": "", "category": "prints" },
                { "title": "faces", "description": "", "dimensions": "", "year": "2019", "price": "", "category": "prints" },
                { "title": "fineline", "description": "", "dimensions": "", "year": "2019", "price": "", "category": "prints" },
                { "title": "the-daisy", "description": "", "dimensions": "", "year": "2019", "price": "", "category": "prints" },
                { "title": "Rosemary", "description": "", "dimensions": "", "year": "2019", "price": "", "category": "prints" },
                { "title": "aquarius", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "beach", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "breathe", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "bug", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "dracena-fragrans", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "dracena-trifasciata", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "fox", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "gone-naturing", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "green-thumb", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "house-plants", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "kitchen-herbs", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "lady-sun", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "lunar-mushrooms", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "monstera-deliciosa", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "moon-child", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "moon-hug", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "my-fox", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "sun", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "tall-grass", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" },
                { "title": "wheat", "description": "", "dimensions": "", "year": "2020", "price": "", "category": "prints" }
            ]
        };
        this.manipulate(data);
    }
    ArtworksService.prototype.getArtwork = function (title) {
        if (this.paintings[title]) {
            return this.paintings[title];
        }
        if (this.sketches[title]) {
            return this.sketches[title];
        }
        else {
            return this.prints[title];
        }
    };
    ArtworksService.prototype.getPaintings = function () {
        return this.paintings;
    };
    ArtworksService.prototype.getSketches = function () {
        return this.sketches;
    };
    ArtworksService.prototype.getPrint = function () {
        return this.prints;
    };
    ArtworksService.prototype.manipulate = function (data) {
        var paintings = data.paintings;
        var sketches = data.sketches;
        var prints = data.prints;
        var i;
        var painting;
        for (i = 0; i < paintings.length; i++) {
            painting = paintings[i];
            this.paintings[painting.title] = new Artwork(painting.title, painting.description, painting.dimensions, painting.year, painting.price, painting.category);
        }
        var x;
        var sketch;
        for (x = 0; x < sketches.length; x++) {
            sketch = sketches[x];
            this.sketches[sketch.title] = new Artwork(sketch.title, sketch.description, sketch.dimensions, sketch.year, sketch.price, sketch.category);
        }
        var y;
        var print;
        for (x = 0; x < prints.length; x++) {
            print = prints[x];
            this.prints[print.title] = new Artwork(print.title, print.description, print.dimensions, print.year, print.price, print.category);
        }
    };
    ArtworksService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ArtworksService);
    return ArtworksService;
}());
export { ArtworksService };
//# sourceMappingURL=artworks.service.js.map