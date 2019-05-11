import { Action } from '@ngrx/store';
import * as fromSharedModel from '@shared/models';

export const enum FullListActionTypes {
  LOAD_FULLLIST = '[Programs] Load FullList',
  LOAD_FULLLIST_SUCCESS = '[Programs] Load FullList Success',
  LOAD_FULLLIST_FAIL = '[Programs] Load FullList Fail'
}

export class LoadFullList implements Action {
  readonly type = FullListActionTypes.LOAD_FULLLIST;
}

export class LoadFullListSuccess implements Action {
  readonly type = FullListActionTypes.LOAD_FULLLIST_SUCCESS;
  constructor(public payload: fromSharedModel.Work[]) {}
}

export class LoadFullListFail implements Action {
  readonly type = FullListActionTypes.LOAD_FULLLIST_FAIL;
  constructor(public payload: any) {}
}

// Action types
export type FullListActions =
  | LoadFullList
  | LoadFullListSuccess
  | LoadFullListFail;
