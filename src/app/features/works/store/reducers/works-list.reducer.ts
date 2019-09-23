import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import * as fromActions from '../actions';
import * as fromSharedModels from '@shared/models';
import * as fromModel from '../../models';

export const adapter: EntityAdapter<
  fromSharedModels.Work
> = createEntityAdapter<fromSharedModels.Work>({});

export const initialState: fromModel.WorksListState = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  loaded: false,
  error: null
});

export const featureReducer = createReducer(
  initialState,
  on(fromActions.LoadWorks, (state, {}) => ({
    ...initialState
  })),
  on(fromActions.LoadWorksSuccess, (state, { worksList }) => {
    return adapter.addAll(worksList, {
      ...state,
      loaded: true,
      loading: false
    });
  }),
  on(fromActions.LoadWorksFail, (state, { error }) => ({
    ...state,
    loaded: true,
    loading: false,
    error
  }))
);

export function reducer(
  state: fromModel.WorksListState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}
