import { Component, OnInit } from '@angular/core';
import mediumZoom from 'medium-zoom';

@Component({
  selector: 'medium-gallery',
  templateUrl: './medium-gallery.component.html',
  styleUrls: ['./medium-gallery.component.scss']
})
export class MediumGalleryComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    mediumZoom('[data-zoomable]', {
      margin: 24,
      background: 'black'
    });
  }
}
