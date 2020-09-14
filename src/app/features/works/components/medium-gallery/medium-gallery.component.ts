import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import mediumZoom from 'medium-zoom';

@Component({
  selector: 'medium-gallery',
  templateUrl: './medium-gallery.component.html',
  styleUrls: ['./medium-gallery.component.scss']
})
export class MediumGalleryComponent implements AfterViewInit {
  @Input() gallery: any;
  constructor() {}

  ngAfterViewInit() {
    mediumZoom('[data-zoomable]', {
      margin: 24,
      background: 'black'
    });
  }
}
