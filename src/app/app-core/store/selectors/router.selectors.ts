import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromModel from '../../models';

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<fromModel.RouterStateCustom>
>('router');

export const getRouterStateContent = createSelector(
  getRouterState,
  (routerstate: fromRouter.RouterReducerState<fromModel.RouterStateCustom>) =>
    routerstate && routerstate.state
);

export const getRouterStateUrl = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) => routerstate && routerstate.url
);

export const getRouterStateParams = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) =>
    routerstate && routerstate.params
);

export const getRouterStateQueryParams = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) =>
    routerstate && routerstate.queryParams
);

export const getRouterStateDatas = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) => routerstate && routerstate.data
);