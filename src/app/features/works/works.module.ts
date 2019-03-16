import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksRoutingModule } from './works.routes';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { ProjectsVisualComponent } from './components/projects-visual/projects-visual.component';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components, ProjectsVisualComponent],
  imports: [CommonModule, WorksRoutingModule]
})
export class WorksModule {}
