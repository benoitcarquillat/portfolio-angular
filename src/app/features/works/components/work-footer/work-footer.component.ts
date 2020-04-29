import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as fromSharedModels from '@shared/models';

@Component({
  selector: 'work-footer',
  templateUrl: './work-footer.component.html',
  styleUrls: ['./work-footer.component.scss']
})
export class WorkFooterComponent implements OnInit {
  @Input() nextProject: fromSharedModels.Work;
  @Output() clicked = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  handleUrlClick(e: Event) {
    this.clicked.emit(e);
  }
}
