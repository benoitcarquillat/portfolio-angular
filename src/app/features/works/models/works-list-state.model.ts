import * as fromSharedModel from '@shared/models';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface WorksListState extends EntityState<fromSharedModel.Work> {
  loading: boolean;
  loaded: boolean;
  error: any;
}
