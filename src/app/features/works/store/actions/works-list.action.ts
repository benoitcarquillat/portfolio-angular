import { createAction, props } from '@ngrx/store';

import * as fromSharedModels from '@shared/models';

export const LoadWorks = createAction('[WORKS] Load work List');
export const LoadWorksSuccess = createAction(
  '[WORKS] Load work List Success',
  props<{
    worksList: fromSharedModels.Work[];
  }>()
);
export const LoadWorksFail = createAction(
  '[WORKS] Load work List Fail',
  props<{
    error: any;
  }>()
);
