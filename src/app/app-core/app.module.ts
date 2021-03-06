import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './app-routes';

import { StoreModule, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import * as fromModels from './models';
import { reducers, effects, CustomSerializer } from './store';
import { NgxCursorModule } from 'ngx-cursor';


import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';

import * as fromContainers from './containers';

export const metaReducers: MetaReducer<{}>[] = [];

@NgModule({
  declarations: [
    ...fromContainers.containers
    // ...fromComponents.components
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers, { metaReducers }),
    NgxCursorModule,
    EffectsModule.forRoot([]),
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
