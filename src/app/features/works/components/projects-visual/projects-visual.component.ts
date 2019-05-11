import { Component, OnInit, Input } from '@angular/core';

import * as fromSharedModels from '@shared/models';

@Component({
  selector: 'projects-visual',
  templateUrl: './projects-visual.component.html',
  styleUrls: ['./projects-visual.component.scss']
})
export class ProjectsVisualComponent implements OnInit {
  @Input() work: fromSharedModels.Work;

  constructor() {}

  ngOnInit() {}
}
