import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import * as fromServices from './services';
import * as fromComponents from './components';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
