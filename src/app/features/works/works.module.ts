import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksRoutingModule } from './works.routes';

import * as fromContainers from './containers';
import * as fromComponents from './components';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [CommonModule, WorksRoutingModule, SharedModule]
})
export class WorksModule {}
