import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworksService } from '../_services/artworks.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit {

  paintings = this.service.getPaintings();

  constructor(private router: Router, private service: ArtworksService) { }

  ngOnInit() {
  }

  expand(artwork) {
    this.router.navigate(["/paintings", artwork]);
  }

  transform(str) {

    var str_new = str.replace("-", " ");

    return str_new;
  }

}
