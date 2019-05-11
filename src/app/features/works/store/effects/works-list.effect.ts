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
    private programsService: fromServices.WorksService
  ) {}

  @Effect()
  fulllist$ = this.action$.pipe(
    ofType<fromActions.FullListActions>(
      fromActions.FullListActionTypes.LOAD_FULLLIST
    ),
    switchMap(() => {
      return this.programsService.getPrograms().pipe(
        mergeMap((entities: fromSharedModel.Work[]) => [
          new fromActions.LoadFullListSuccess(entities)
        ]),
        catchError(error => of(new fromActions.LoadFullListFail(error)))
      );
    })
  );
}
