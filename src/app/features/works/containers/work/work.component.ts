import { Component, OnInit } from '@angular/core';

import * as fromSharedModels from '@shared/models';
import * as fromModels from '../../models';

import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public work$: Observable<fromSharedModels.Work>;

  constructor(public store: Store<fromModels.WorksState>) {}

  ngOnInit() {
    this.store.dispatch(fromStore.LoadWorks());
    this.work$ = this.store.pipe(select(fromStore.getWorkBySlug('gagliardi')));
    this.work$.subscribe(x => console.log(x));
  }
}
