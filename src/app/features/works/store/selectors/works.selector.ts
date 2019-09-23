import { createSelector } from '@ngrx/store';

import { getWorksState } from './works-state.selector';

import * as fromModel from '../../models';
import * as fromStore from '../reducers/works-list.reducer';

const { selectAll, selectEntities } = fromStore.adapter.getSelectors();

export const getWorksList = createSelector(
  getWorksState,
  (state: fromModel.WorksState) => state && state.worksList
);

export const getAllWorksList = createSelector(
  getWorksList,
  selectAll
);

export const getProgramsListLoading = createSelector(
  getWorksList,
  (state: fromModel.WorksListState): boolean => state && state.loading
);

export const getProgramsListLoaded = createSelector(
  getWorksList,
  (state: fromModel.WorksListState): boolean => state && state.loaded
);
