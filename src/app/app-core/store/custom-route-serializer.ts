import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Data
} from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import * as fromModels from '../models';

export class CustomSerializer
  implements RouterStateSerializer<fromModels.RouterStateCustom> {
  serialize(routerState: RouterStateSnapshot): fromModels.RouterStateCustom {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    let data: Data = {};
    while (state.firstChild) {
      state = state.firstChild;
      data = {
        ...data,
        ...state.data
      };
    }
    const { params } = state;

    return { url, queryParams, params, data };
  }
}
