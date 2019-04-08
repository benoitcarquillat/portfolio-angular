import { Component, OnInit, Input } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  @Input() work: fromModels.Program;

  constructor() {}

  ngOnInit() {}
}
