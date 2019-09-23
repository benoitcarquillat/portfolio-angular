import { createFeatureSelector } from '@ngrx/store';

import * as fromModel from '../../models';

export const getWorksState = createFeatureSelector<fromModel.WorksState>(
  'works'
);
