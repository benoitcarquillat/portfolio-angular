import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

export const routes: Routes = [
  {
    path: '',
    component: fromContainers.HomeComponent
  }
];

// export routes for current Module
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
