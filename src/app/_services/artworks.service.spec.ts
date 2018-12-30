import { TestBed } from '@angular/core/testing';

import { ArtworksService } from './artworks.service';

describe('ArtworksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtworksService = TestBed.get(ArtworksService);
    expect(service).toBeTruthy();
  });
});
