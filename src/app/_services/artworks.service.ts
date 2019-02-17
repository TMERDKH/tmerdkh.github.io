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
  var data = {
    "paintings" : [
        
        {"title": "reach", "description" : "Arcylic. \"finger painted\".", "dimensions": "18\" x 24\"", "year" : "2018", "price" : "400$", "category" : "paintings"},
        {"title": "the-portuguese-lovers", "dimensions": "18\" x 24\"", "description" : "Acrylic. Lisbon was beautiful at first sight. The pastel colours that painted her cast light even on the darkest of souls. Her lover, on the other hand, had this gothic beauty to him - my favourite kind. It was raining when I met him. Painted in colours, but always cloudy and dark. As if he looks out for happiness but has accepted that the weather is just a little colder where he lives. Although Lisbon offered a sweeter kiss to my cheek, Porto stole my heart. He was distant. He had a story and all I wanted was to be part of it - to be part of him and to dance in his rain.", "year" : "2017", "price" : "500$", "category" : "paintings"},
        {"title": "moving-on", "description" : "Acrylic. Train downtown.", "dimensions": "20\" x 20\"", "year" : "2017", "price" : "325$", "category" : "paintings"},
        {"title": "three-complementary", "description" : "Acrylic.", "dimensions": "22\" x 27\"", "year" : "2018", "price" : "200$", "category" : "paintings"},
        {"title": "temptation", "description" : "Acrylic. When innocence turns into poison.", "dimensions": "16\" x 20\"", "year" : "2014", "price" : "250$ (350$ with frame)", "category" : "paintings"},
        {"title": "the-composer", "description" : "Acrylic. Inspired by the Armenian legend of the princess Tamar.", "dimensions": "30\" x 30\"", "year" : "2016", "price" : "400$", "category" : "paintings"},
        {"title": "vinyl", "description" : "Acrylic & stickers. Painting representing a significant change in how I view the world through music.", "dimensions": "24\" x 24\"", "year" : "2018", "price" : "350$", "category" : "paintings"},
        {"title": "winter", "description" : "Aquarelle.", "dimensions": "16\" x 16\"", "year" : "2012", "price" : "150$", "category" : "paintings"},
        {"title": "the-expressionist", "description" : "Acrylic. ", "dimensions": "18\" x 24\"", "year" : "2014", "price" : "150$", "category" : "paintings"},
        {"title": "summer-lake", "description" : "Acrylic. ", "dimensions": "12\" x 16\"", "year" : "2016", "price" : "175$ (250$ with frame)", "category" : "paintings"}
    ],

    "sketches" : [
        
        {"title": "journey", "description" : "Sketch demonstrating the journey that is time.", "dimensions": "9\" x 12\"", "year" : "2012", "price" : "100$", "category" : "sketches"},
        {"title": "alex-turner", "description" : "Portrait of Alex Turner from the Arctic Monkeys.", "dimensions": "9\" x 12\"", "year" : "2018", "price" : "100$", "category" : "sketches"},
        {"title": "rapunzel", "description" : "Portrait of Rapunzel from Tangled.", "dimensions": "9\" x 12\"", "year" : "2012", "price" : "100$", "category" : "sketches"},
        {"title": "emmenez-moi", "description" : "Sketch motivated by my dream of visiting Paris.", "dimensions": "9\" x 12\"", "year" : "2014", "price" : "150$", "category" : "sketches"}
]
}

this.manipulate(data);
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
