import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, switchMap, mergeMap } from 'rxjs/operators';

import { Effect, Actions, ofType } from '@ngrx/effects';

import * as fromActions from '../actions';
import * as fromServices from '../../services';
import * as fromSharedModel from '@shared/models';

@Injectable()
export class WorksListEffect {
  constructor(
    private action$: Actions,
    private worksService: fromServices.WorksService
  ) {}

  @Effect()
  Works$ = this.action$.pipe(
    ofType<fromActions.LoadWorks>(fromActions.WorksActionTypes.LOAD_WORKS),
    switchMap(() => {
      return this.worksService.getWorks().pipe(
        mergeMap((entities: fromSharedModel.Work[]) => [
          new fromActions.LoadWorksSuccess(entities)
        ]),
        catchError(error => of(new fromActions.LoadWorksFail(error)))
      );
    })
  );
}
