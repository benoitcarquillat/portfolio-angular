import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-pages.routes';
import * as fromContainer from './containers';

@NgModule({
  imports: [CommonModule, ErrorRoutingModule],
  declarations: [...fromContainer.containers]
})
export class ErrorPagesModule { }
