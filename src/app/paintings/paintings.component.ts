import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Artwork } from '../_models/artwork.model';
import { ArtworksService } from '../_services/artworks.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit {

  //INSERT PAINTING NAMES TO APPEAR ON PAINTINGS PAGE
  paintings = this.service.getPaintings();

  constructor(private router: Router, private service: ArtworksService) { }

  ngOnInit() {
  }

  expand(artwork) {
    this.router.navigate(["/paintings", artwork]);
  }

}
