import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ServicesModuleModule } from './services-module.module';
import * as fromSharedModel from '@shared/models';
import { environment } from '@environments/environment';

import { Observable } from 'rxjs';

@Injectable({ providedIn: ServicesModuleModule })
export class WorksService {
  public works$: Observable<fromSharedModel.Work[]>;

  constructor(private http: HttpClient) {}

  public getWorks() {
    const endpoint = `${environment.dockerApi}`;

    return this.http.get<fromSharedModel.Work[]>(endpoint).pipe(
      map((datas: fromSharedModel.Work[]) => {
        return datas;
      }),
      catchError((error: any) => throwError(error))
    );
  }
}
