import { Action } from '@ngrx/store';
import * as fromSharedModel from '@shared/models';

export const enum WorksActionTypes {
  LOAD_WORKS = '[Works] Load Works',
  LOAD_WORKS_SUCCESS = '[Works] Load Works Success',
  LOAD_WORKS_FAIL = '[Works] Load Works Fail'
}

export class LoadWorks implements Action {
  readonly type = WorksActionTypes.LOAD_WORKS;
}

export class LoadWorksSuccess implements Action {
  readonly type = WorksActionTypes.LOAD_WORKS_SUCCESS;
  constructor(public payload: fromSharedModel.Work[]) {}
}

export class LoadWorksFail implements Action {
  readonly type = WorksActionTypes.LOAD_WORKS_FAIL;
  constructor(public payload: any) {}
}

// Action types
export type WorksActions = LoadWorks | LoadWorksSuccess | LoadWorksFail;
