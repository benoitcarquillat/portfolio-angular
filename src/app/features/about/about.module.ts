import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about.routes';

import * as fromContainers from './containers';
import * as fromComponents from './components';

import { ServicesModuleModule } from './services/services-module.module';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    ServicesModuleModule
  ]
})
export class AboutModule {}
