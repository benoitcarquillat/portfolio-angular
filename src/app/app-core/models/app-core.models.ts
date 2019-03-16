import * as fromModel from '.';
import * as fromRouter from '@ngrx/router-store';

export interface AppcoreState {
  router: fromRouter.RouterReducerState<fromModel.RouterStateCustom>;
}
