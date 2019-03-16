import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksRoutingModule } from './works.routes';

import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [CommonModule, WorksRoutingModule]
})
export class WorksModule {}
