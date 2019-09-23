import { Component, OnInit } from '@angular/core';

import * as fromSharedModels from '@shared/models';
import * as fromModels from '../../models';
import * as fromAnimations from '../../animations';

import * as fromStore from '../../store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [fromAnimations.textAnimation, fromAnimations.workAnimation]
})
export class WorksComponent implements OnInit {
  public works$: Observable<fromSharedModels.Work[]>;
  public index = 0;

  constructor(public store: Store<fromModels.WorksState>) {}

  ngOnInit() {
    this.store.dispatch(fromStore.LoadWorks());
    this.works$ = this.store.pipe(select(fromStore.getAllWorksList));
  }

  public isCurrentProject(projectIndex: number): boolean {
    return this.index === projectIndex ? true : false;
  }

  nextProject(workLength: number): void {
    this.index >= workLength - 1 ? (this.index = 0) : this.index++;
  }
  previousProject(workLength: number): void {
    this.index <= 0 ? (this.index = workLength - 1) : this.index--;
  }
}
