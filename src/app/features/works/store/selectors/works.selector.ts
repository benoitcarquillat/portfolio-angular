import { createSelector } from '@ngrx/store';

import { getWorksState } from './works-state.selector';

import * as fromModel from '../../models';
import * as fromStore from '../reducers/works-list.reducer';

const { selectAll, selectEntities } = fromStore.adapter.getSelectors();

export const getWorksList = createSelector(
  getWorksState,
  (state: fromModel.WorksState) => state && state.worksList
);

export const getAllWorksList = createSelector(getWorksList, selectAll);

export const getProgramsListLoading = createSelector(
  getWorksList,
  (state: fromModel.WorksListState): boolean => state && state.loading
);

export const getProgramsListLoaded = createSelector(
  getWorksList,
  (state: fromModel.WorksListState): boolean => state && state.loaded
);

export const getWorkBySlug = (slug: string) =>
  createSelector(getAllWorksList, works => {
    let result = works.find(work => work.slug === slug);
    return result;
  });

export const getNextProjectSlug = (slug: string) =>
  createSelector(getAllWorksList, works => {
    let currentWork = works.find(work => work.slug === slug);
    let result = works.find(work => {
      return work.id === currentWork.id + 1;
    });
    console.log(result);
    return result && result.id ? result : works[0];
  });
