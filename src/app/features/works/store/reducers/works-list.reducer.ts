import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import * as fromActions from '../actions';
import * as fromModels from '../../models';
import * as fromSharedModel from '@shared/models';

export const adapter: EntityAdapter<fromSharedModel.Work> = createEntityAdapter<
  fromSharedModel.Work
>({});

export const initialState: fromModels.WorksListState = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  loaded: false,
  error: null
});

export function reducer(
  state = initialState,
  action: fromActions.FullListActions
): fromModels.WorksListState {
  switch (action.type) {
    case fromActions.FullListActionTypes.LOAD_FULLLIST:
      return {
        ...state,
        loading: true
      };

    case fromActions.FullListActionTypes.LOAD_FULLLIST_SUCCESS:
      const programs = action.payload;
      return adapter.addAll(programs, {
        ...state,
        loading: false,
        loaded: true
      });

    case fromActions.FullListActionTypes.LOAD_FULLLIST_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };

    default:
      return state;
  }
}
