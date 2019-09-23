import { Component, OnInit, Input } from '@angular/core';

import * as fromSharedModels from '@shared/models';
import * as fromAnimations from '../../animations';

@Component({
  selector: 'projects-visual',
  templateUrl: './projects-visual.component.html',
  styleUrls: ['./projects-visual.component.scss'],
  animations: [fromAnimations.workAnimation]
})
export class ProjectsVisualComponent implements OnInit {
  @Input() work: fromSharedModels.Work;
  @Input() index: number;
  @Input() workIndex: number;
  @Input() numberOfWork: number;

  constructor() {}

  ngOnInit() {}
}
