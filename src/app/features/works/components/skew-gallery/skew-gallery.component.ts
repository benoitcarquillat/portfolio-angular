import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skew-gallery',
  templateUrl: './skew-gallery.component.html',
  styleUrls: ['./skew-gallery.component.scss']
})
export class SkewGalleryComponent implements OnInit {
  @Input() gallery: any;
  constructor() {}

  ngOnInit() {}
}
