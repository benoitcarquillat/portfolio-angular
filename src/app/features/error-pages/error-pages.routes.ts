import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainer from './containers';

export const routes: Routes = [
  {
    path: '404',
    component: fromContainer.NotFoundComponent
  }
];

// export routes for current Module
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {}
