import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AppRoutingModule } from './app-routes';

import { StoreModule, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import * as fromModels from './models';
import { reducers, effects, CustomSerializer } from './store';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

import * as fromContainers from './containers';

export const metaReducers: MetaReducer<
  fromModels.AppcoreState
>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [
    ...fromContainers.containers
    // ...fromComponents.components
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 50 })
      : []
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [fromContainers.AppCoreComponent]
})
export class AppModule {}
