import { Injectable } from '@angular/core';
import { Artwork } from '../_models/artwork.model';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArtworksService {

file = "./assets/data.json";

paintings : {[key: string]: Artwork} = {};

sketches : {[key: string]: Artwork} = {}

constructor(private http: HttpClient) {
  this.getJSON().subscribe(data => {
      this.manipulate(data);
  });
}

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

public getJSON(): Observable<any> {
  return this.http.get(this.file);
}

public manipulate(data) {

   var paintings =  data.paintings;
   var sketches =  data.sketches;

   var i;
   var painting;
   for(i = 0; i < paintings.length; i++) {
    painting = paintings[i];
    this.paintings[painting.title] = new Artwork(painting.title, painting.description, painting.dimensions, painting.year, painting.price, painting.category);
 }

  var x;
  var sketch;
  for(x = 0; x < sketches.length; x++) {
    sketch = sketches[x];
    this.sketches[sketch.title] = new Artwork(sketch.title, sketch.description, sketch.dimensions, sketch.year, sketch.price, sketch.category);
  }

}

}
