import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { isWorksLoaded } from './guards/isWorksLoaded.guard';

import * as fromContainers from './containers';

export const routes: Routes = [
  {
    path: '',
    component: fromContainers.WorksComponent
  },
  {
    path: 'work/:slug',
    component: fromContainers.WorkComponent,
    canActivate: [isWorksLoaded],
    data: {
      animation: 'SingleWork'
    }
  }
];

// export routes for current Module
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule {}
