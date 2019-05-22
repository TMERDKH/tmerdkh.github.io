import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworksService } from '../_services/artworks.service';

@Component({
  selector: 'app-prints',
  templateUrl: './prints.component.html',
  styleUrls: ['./prints.component.css']
})
export class PrintsComponent implements OnInit {

  prints = this.service.prints;

  constructor(private router: Router, private service: ArtworksService) { }

  ngOnInit() {
  }

  expand(artwork) {
    console.log(artwork);
    this.router.navigate([artwork]);
  }

  transform(str) {

    var str_new = str.replace("-", " ");

    return str_new;
  }
}
