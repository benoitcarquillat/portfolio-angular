import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cta-button',
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.scss']
})
export class CtaButtonComponent implements OnInit {
  @Input() textToDisplay: string;
  @Input() url: string;
  @Input() direction: 'left' | 'right';

  constructor() {}

  ngOnInit() {}
}
