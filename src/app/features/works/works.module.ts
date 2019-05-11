import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksRoutingModule } from './works.routes';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

import { ServicesModuleModule } from './services/services-module.module';

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    WorksRoutingModule,
    SharedModule,
    StoreModule.forFeature('works', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services]
})
export class WorksModule {}
