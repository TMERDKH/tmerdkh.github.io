import { Injectable } from '@angular/core';
import { Artwork } from '../_models/artwork.model';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class ArtworksService {

  paintings : {[key: string]: Artwork} = 
  
{ "reach": new Artwork("reach", "abstract work.", "20x20", "2018", "100$", "paintings"),
"porto-lisbon": new Artwork("porto-lisbon", "abstract work.", "20x20", "2018", "100$", "paintings") ,
"moving-on": new Artwork("moving-on", "abstract work.", "20x20", "2018", "100$", "paintings") 


};

sketches : {[key: string]: Artwork} =  
{ 
 "journey" : new Artwork("journey", "descriptionnnn", "30x30", "2018", "price", "sketches")

};

  constructor() { }

getArtwork(title) {

  if (this.paintings[title] ) {
    return this.paintings[title];
  }
  else {
    return this.sketches[title];
  }
}

getPaintings() {
  return this.paintings;
}

getSketches() {
  return this.sketches;
}

}
