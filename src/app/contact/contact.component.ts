import { Component, OnInit } from '@angular/core';
import { ArtworksService } from '../_services/artworks.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = this.service.contact;

  constructor(private service: ArtworksService) { }

  ngOnInit() {
  }

}
