import { Component, OnInit, Input } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'single-project-details',
  templateUrl: './single-project-details.component.html',
  styleUrls: ['./single-project-details.component.scss']
})
export class SingleProjectDetailsComponent implements OnInit {
  @Input() data: fromModels.singleWork;
  @Input() content: string;

  constructor() {}

  ngOnInit() {}
}
