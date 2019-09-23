import { Component, OnInit, Input } from '@angular/core';

import * as fromAnimations from '../../animations';

@Component({
  selector: 'project-counter',
  templateUrl: './project-counter.component.html',
  styleUrls: ['./project-counter.component.scss'],
  animations: [fromAnimations.counterAnimation]
})
export class ProjectCounterComponent implements OnInit {
  @Input() index: number;
  @Input() numberOfWork: number;

  constructor() {}

  ngOnInit() {}
}
