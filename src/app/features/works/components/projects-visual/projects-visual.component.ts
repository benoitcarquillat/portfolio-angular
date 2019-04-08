import { Component, OnInit, Input } from '@angular/core';

import * as fromModels from '../../models';

@Component({
  selector: 'projects-visual',
  templateUrl: './projects-visual.component.html',
  styleUrls: ['./projects-visual.component.scss']
})
export class ProjectsVisualComponent implements OnInit {
  @Input() work: fromModels.Program;

  constructor() {}

  ngOnInit() {}
}
