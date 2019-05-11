import { Injectable } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ServicesModuleModule } from './services-module.module';
import * as fromSharedModel from '@shared/models';

@Injectable({ providedIn: ServicesModuleModule })
export class WorksService {
  public data: any;

  constructor() {}

  public getPrograms() {
    return of({});
  }
}
