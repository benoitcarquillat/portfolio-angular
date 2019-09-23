import { ActionReducerMap } from '@ngrx/store';

import * as worksList from './works-list.reducer';
// import * as ui from './ui.reducer';

import * as fromModel from '../../models';

export const reducers: ActionReducerMap<fromModel.WorksState> = {
  worksList: worksList.reducer
  // ui: ui.reducer
};
