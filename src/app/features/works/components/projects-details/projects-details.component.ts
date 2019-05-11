import { Component, OnInit, Input } from '@angular/core';
import * as fromSharedModels from '@shared/models';

@Component({
  selector: 'projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  @Input() work: fromSharedModels.Work;

  constructor() {}

  ngOnInit() {}
}
