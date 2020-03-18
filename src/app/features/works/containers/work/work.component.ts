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
    this.work$ = this.store.pipe(select(fromStore.getWorkBySlug('gagliardi')));
  }
}
