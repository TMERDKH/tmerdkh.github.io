import { TestBed } from '@angular/core/testing';
import { ArtworksService } from './artworks.service';
describe('ArtworksService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ArtworksService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=artworks.service.spec.js.map