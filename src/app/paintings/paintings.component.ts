import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit {

  //INSERT PAINTING NAMES TO APPEAR ON PAINTINGS PAGE
  paintings = [{ title : "reach", dimensions : "dimensions", year : "2018", price : "100$"},
                { title : "porto-lisbon", dimensions : "dimensions", year : "2018", price : "100$"}


];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  expand(item) {
    this.router.navigate(["/paintings", item]);
  }

}
