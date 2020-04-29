import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cta-button',
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.scss']
})
export class CtaButtonComponent implements OnInit {
  @Input() textToDisplay: string;
  @Input() url: string;
  @Input() disableLink: boolean; // Use router go for using route animation
  @Input() direction: 'left' | 'right';
  @Output() changeUrl = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  public handleClick(e: Event) {
    this.changeUrl.emit(e);
  }
}
