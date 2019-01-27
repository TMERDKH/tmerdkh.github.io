import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworksService } from '../_services/artworks.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private service: ArtworksService) { }

  ngOnInit() {
  }

  redirect(page) {
    this.router.navigate(['/'+page])
  }

}
