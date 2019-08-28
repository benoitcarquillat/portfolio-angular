import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { environment } from "./../../environments/environment";

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../features/works/works.module').then(m => m.WorksModule)
  },
  {
    path: 'error/404',
    loadChildren: () => import('../features/error-pages/error-pages.module').then(m => m.ErrorPagesModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
