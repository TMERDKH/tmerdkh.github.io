import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworksService } from './_services/artworks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private service: ArtworksService) { }

  title = 'legend-of-tamar';

  redirect(page) {
    this.router.navigate(['/'+page]);
  }

}
