import { Component, OnInit } from '@angular/core';

import * as fromSharedModels from '@shared/models';
import * as fromModels from '../../models';
import { environment } from '@environments/environment';

import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public work$: Observable<fromSharedModels.Work>;
  public api = environment.dockerApi;

  constructor(
    public store: Store<fromModels.WorksState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let currentProject: string = this.route.snapshot.params.slug;
    this.work$ = this.store.pipe(
      select(fromStore.getWorkBySlug(currentProject))
    );
  }
}
