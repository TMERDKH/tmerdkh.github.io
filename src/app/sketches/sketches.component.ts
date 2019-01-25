import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworksService } from '../_services/artworks.service';

@Component({
  selector: 'app-sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.css']
})
export class SketchesComponent implements OnInit {

  sketches = this.service.getSketches();

  constructor(private router: Router, private service: ArtworksService) { }

  ngOnInit() {
  }

  expand(artwork) {
    this.router.navigate([artwork]);
  }

  transform(str) {

    var str_new = str.replace("-", " ");

    return str_new;
  }

}
