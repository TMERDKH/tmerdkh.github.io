import { Component, OnInit } from '@angular/core';
import { ArtworksService } from '../_services/artworks.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service: ArtworksService) { }

  ngOnInit() {
  }

}
