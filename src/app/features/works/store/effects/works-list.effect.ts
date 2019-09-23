import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, switchMap, mergeMap, tap } from 'rxjs/operators';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import * as fromActions from '../actions';
import * as fromServices from '../../services';
import * as fromSharedModel from '@shared/models';

@Injectable()
export class WorksListEffect {
  constructor(
    private action$: Actions,
    private worksService: fromServices.WorksService
  ) {}

  loadWork$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromActions.LoadWorks),
      switchMap(() => {
        return this.worksService.getWorks().pipe(
          mergeMap((worksList: fromSharedModel.Work[]) => [
            fromActions.LoadWorksSuccess({
              worksList
            })
          ]),
          catchError(error => of(fromActions.LoadWorksFail({ error })))
        );
      })
    )
  );
}
