import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { environment } from "./../../environments/environment";

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../features/works/works.module').then(m => m.WorksModule),
    data: {
      animation: 'HomePage'
    }
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../features/about/about.module').then(m => m.AboutModule),
    data: {
      animation: 'about'
    }
  },
  {
    path: 'error/404',
    loadChildren: () =>
      import('../features/error-pages/error-pages.module').then(
        m => m.ErrorPagesModule
      ),
    data: {
      animation: 'error'
    }
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
